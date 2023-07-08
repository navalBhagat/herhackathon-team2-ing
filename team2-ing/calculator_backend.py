import sys
import pandas as pd
import numpy as np
from datetime import datetime
#living_wage = 
minimum_wage = 12
class User:
    def __init__(self, params):
        self.timestep = params[0]
        self.rel_status = params[1]
        self.rent = params[2]
        self.salary = params[3]
        self.working_hours = params[4]
        self.tax_class = params[5]
        self.earning_points = params[6]
        self.access_factor = params[7]
        self.pension_value = params[8]
        self.pension_factor = params[9]
        self.caring_hours_child = params[10]
        self.external_caring_hours_child = params[11]
        self.spending_external_care_child = params[12]
        self.parental_leave_duration = params[13]
        self.parental_leave_start = params[14]
        self.child_benefits = params[15]
        self.caring_hours_other = params[16]
        self.external_caring_hours_other = params[17]
        self.spending_external_care_other = params[18]
        self.other_benefits = params[19]
        self.household_hours = params[20]
        self.groceries = params[21]
        self.travel = params[22]
        self.transportation = params[23]
        self.bills = params[24]
        self.leisure = params[25]
        self.mental_load = params[26]
        self.preferences_work = params[27]
        self.preferences_pension = params[28]
        self.preferences_care = params[29]
        self.name = params[30]
        
    def pension(self):
        self.pension = self.earning_points*self.access_factor*self.pension_value*self.pension_factor
    
    def diff_pension(self, other_instance):
        return(self.pension-other_instance.pension)

    def comp_pension(self):
        min_pension = 11000
        if self.pension < min_pension:
            self.pension_enough = False
        else:
            self.pension_enough = True


    def care(self):
        self.child_care_wage = self.caring_hours_child*4 *minimum_wage - self.child_benefits
        if self.external_caring_hours_child != 0:
            self.adapted_child_care_wage = self.spending_external_care_child/self.external_caring_hours_child *self.caring_hours_child*4
        else:
            self.adapted_child_care_wage = 0
        self.other_care_wage = self.caring_hours_other*4 *minimum_wage - self.other_benefits
        if self.external_caring_hours_other != 0:
            self.adapted_other_care_wage = self.spending_external_care_other/self.external_caring_hours_other *self.caring_hours_other*4
        else:
            self.adapted_other_care_wage = 0
        
        self.total_care_wage = self.child_care_wage+self.other_care_wage

    def tax_class_rec(self,other_instance):
        if self.rel_status == 'married':
            if self.tax_class == 4 and other_instance.tax_class ==4:
                self.tax_class_rec = 'op1'
            if self.tax_class == 5 or self.tax_class ==3:
                if self.income == 0 or other_instance.income == 0:
                    self.tax_class_rec == 'op3'
                else:
                    self.tax_class_rec == 'op4'
        else:
            self.tax_class_rec ='op2'
    
    def mental_load_burden(self,other_instance):
        if self.mental_load > other_instance.mental_load:
            self.mental_burden = True
        elif self.mental_load <= other_instance.mental_load:
            self.mental_burden = False
        if self.mental_load == other_instance.mental_load:
            self.shared_burden = True
        else:
            self.shared_burden = False
    

    def income_stats(self):
        
        date2 = datetime.strptime(self.timestep, '%Y-%m-%d')
        date1 = datetime.strptime(self.parental_leave_start, '%Y-%m-%d')
        time_passed = (date2.year - date1.year) * 12 + (date2.month - date1.month)

        if self.parental_leave_duration == 0:
            self.income_overview = self.salary
            self.income_overview_plus_care = self.salary + self.total_care_wage
            self.income_overview_plus_care_household = self.salary + self.total_care_wage +self.household_hours*minimum_wage
        else:
            if self.parental_leave_duration =< 12:
                self.parental_wage = 0.65*self.salary*self.parental_leave_duration
            else:
                self.parental_wage = 0.65*self.salary*self.parental_leave_duration

            time_no_parental_leave = time_passed-self.parental_leave_duration
            self.income_overview = (self.salary*time_no_parental_leave + self.parental_wage)/time_passed
            self.income_overview_plus_care = (self.salary*time_no_parental_leave+self.parental_wage)/time_passed + self.total_care_wage
            self.income_overview_plus_care_household = (self.salary*time_no_parental_leave+self.parental_wage)/time_passed + self.total_care_wage +self.household_hours*minimum_wage
    

                
user_ID = sys.argv[1]
user_ID = 1


# Read input from a file    - we can do this differently
User_input = pd.read_csv(str(user_ID)+'.csv', header=None,skiprows=1,dtype=object)

User_input = User_input.T
info_p1 = User_input[0].to_numpy()
info_p2 = User_input[1].to_numpy()
# Create an instance of MyClass with the input values
partner1 = User(info_p1)
partner2 = User(info_p2)
partner1.pension()
partner2.pension()
partner1.comp_pension()
partner2.comp_pension()
partner1.diff_pension(partner2)
partner1.care()
partner2.care()
partner1.tax_class_rec(partner2)
partner1.mental_load_burden(partner2)
partner2.mental_load_burden(partner1)
partner1.income_stats()
partner2.income_stats()
