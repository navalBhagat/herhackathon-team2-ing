import sys
import pandas as pd
import numpy as np
from datetime import datetime
import matplotlib.pyplot as plt
import matplotlib
#living_wage = 
minimum_wage = 12
class User:
    def __init__(self, params):
        self.timestep = str(params[0])
        self.rel_status = str(params[1])
        self.rent = np.float(params[2])
        self.salary = np.float(params[3])
        self.working_hours = np.int(params[4])
        self.tax_class = np.int(params[5])
        self.earning_points = np.int(params[6])
        self.access_factor = np.float(params[7])
        self.pension_value = np.float(params[8])
        self.pension_factor = np.float(params[9])
        self.caring_hours_child = np.int(params[10])
        self.external_caring_hours_child = np.int(params[11])
        self.spending_external_care_child = np.float(params[12])
        self.parental_leave_duration = np.float(params[13])
        self.parental_leave_start = str(params[14])
        self.child_benefits = np.float(params[15])
        self.caring_hours_other = np.int(params[16])
        self.external_caring_hours_other = np.int(params[17])
        self.spending_external_care_other = np.float(params[18])
        self.other_benefits = np.float(params[19])
        self.household_hours = np.int(params[20])
        self.groceries = np.float(params[21])
        self.travel = np.float(params[22])
        self.transportation = np.float(params[23])
        self.bills = np.float(params[24])
        self.leisure = np.float(params[25])
        self.mental_load = np.float(params[26])
        self.preferences_work = np.bool8(params[27])
        self.preferences_pension = np.bool8(params[28])
        self.preferences_care = np.bool8(params[29])
        self.name = str(params[30])
        self.household_wage = self.household_hours*minimum_wage     #per week 
        self.spending_money = self.salary+self.child_benefits+self.other_benefits - self.rent - self.spending_external_care_child*4 -self.spending_external_care_other*4-self.groceries*4-self.travel*4-self.transportation*4-self.bills*4-self.leisure*4
        #per month
        self.pension = self.earning_points*self.access_factor*self.pension_value*self.pension_factor
        #per month
        self.hourly_wage = self.salary/(self.working_hours*4)
    #def pension(self):
    #    self.pension = self.earning_points*self.access_factor*self.pension_value*self.pension_factor
    
    def diff_pension(self, other_instance):
        return(self.pension-other_instance.pension)

    def comp_pension(self):
        min_pension = 11000
        if self.pension < min_pension:
            self.pension_enough = False
        else:
            self.pension_enough = True


    def care(self):
        #per month
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
        
        self.total_care_wage = self.child_care_wage+self.other_care_wage+self.household_wage*4
        self.adapted_total_care_wage = self.adapted_child_care_wage+self.adapted_other_care_wage+self.household_wage*4

    def tax_class_rec(self,other_instance):
        if self.rel_status == 'married':
            if self.tax_class == 4 and other_instance.tax_class ==4:
                self.tax_class_op = 'op1'
            if self.tax_class == 5 or self.tax_class ==3:
                if self.salary == 0 or other_instance.salary == 0:
                    self.tax_class_op = 'op3'
                else:
                    self.tax_class_op = 'op4'
        else:
            self.tax_class_op ='op2'
    
    def mental_load_burden(self,other_instance):
        if self.mental_load > other_instance.mental_load:
            self.mental_burden = True
        elif self.mental_load <= other_instance.mental_load:
            self.mental_burden = False
        if self.mental_load == other_instance.mental_load:
            self.shared_burden = True
        else:
            self.shared_burden = False

    def additional_care(self,other_instance):
        #monthly calculations
        if self.additional_care == True:
            if self.spending_money > 20*10*4 and other_instance.spending_money > 20*10*4 :
                self.added_care = 'op1'
            elif self.spending_money <= 20*10*4 or other_instance.spending_money <= 20*10*4:
                self.added_care = 'op2'
        else:
            self.added_care = 'op3'
            
    

    def income_stats(self):
        
        #monthly calculations
        if self.parental_leave_duration == 0:
            self.income_overview = self.salary
            self.income_overview_plus_care = self.salary + self.total_care_wage
            self.income_overview_plus_care_household = self.salary + self.total_care_wage +self.household_wage*4
        else:
            date2 = datetime.strptime(self.timestep, '%Y-%m-%d')
            date1 = datetime.strptime(self.parental_leave_start, '%Y-%m-%d')
            time_passed = (date2.year - date1.year) * 12 + (date2.month - date1.month)
            print(time_passed)
            print(self.parental_leave_duration)
            if self.parental_leave_duration <= 12:
                self.parental_wage = 0.65*self.salary*self.parental_leave_duration
            else:
                self.parental_wage = 0.65*self.salary*self.parental_leave_duration

            time_no_parental_leave = time_passed-self.parental_leave_duration
            self.income_overview = (self.salary*time_no_parental_leave + self.parental_wage)/time_passed
            self.income_overview_plus_care = (self.salary*time_no_parental_leave+self.parental_wage)/time_passed + self.total_care_wage
            self.income_overview_plus_care_household = (self.salary*time_no_parental_leave+self.parental_wage)/time_passed + self.total_care_wage +self.household_hours*minimum_wage
        print(self.salary,self.income_overview)
    

    def half_half_model(self,other_instance):
        total_work = self.working_hours + other_instance.working_hours
        total_care = self.caring_hours_child+self.caring_hours_other+self.household_hours +other_instance.caring_hours_child+other_instance.caring_hours_other+other_instance.household_hours
        new_salary_p1 = total_work/2 *self.hourly_wage *4
        new_salary_p2 = total_work/2 * other_instance.hourly_wage *4
        barlist = plt.bar([self.name,other_instance.name], [new_salary_p1,new_salary_p2])
        barlist[0].set_color('#ff6600')
        barlist[1].set_color('#091c5a')
        #plt.xlabel('Monthly salary')
        plt.ylabel('New Monthly Salary in Euros')
        plt.savefig(str(user_ID)+'half-half-salary.png')
        plt.clf()
        value_label = ['Work', 'Childcare','Other care', 'Household', 'Total hours']
        value_p1 = [total_work/2,(self.caring_hours_child+other_instance.caring_hours_child)/2,(self.caring_hours_other+other_instance.caring_hours_other)/2,(self.household_hours+other_instance.household_hours)/2,(total_care+total_work)/2]
        x_lab = np.arange(len(value_label)) *2
        width = 0.5
        plt.bar(x_lab,value_p1, width,color='#ff6600')
        plt.xticks(x_lab, value_label)
        plt.ylabel('Hourly distribution equally spread per person')
        plt.legend()
        plt.savefig(str(user_ID)+'hours-half-half.png')
        plt.clf()
        

    def create_grids(self,other_instance):
        hourly_p1 = self.hourly_wage
        hourly_p2 = other_instance.hourly_wage
        percentages = [0,0.2,0.4,0.6,0.8,1]
        salary_p1 = np.multiply(hourly_p1*160,percentages)
        salary_p2 = np.multiply(hourly_p2*160,percentages)

        def create_grid(column_headers, row_headers):
            # Create an empty 2D grid
            grid = []
            
            # Iterate over the row headers
            for row_header in row_headers:
                # Create a new row for each row header
                row = []
                
                # Iterate over the column headers
                for column_header in column_headers:
                    # Compute the value as the sum of the column and row headers
                    value = column_header + row_header
                    
                    # Append the value to the row
                    row.append(value)
                
                # Append the row to the grid
                grid.append(row)
            
            return grid

        #print(salary_p1,salary_p2)
        salary_grid = create_grid(salary_p1,salary_p2)
        data = salary_grid
        fig, ax = plt.subplots(figsize=(10,10))
        # Using matshow here just because it sets the ticks up nicely. imshow is faster.
        cmap = matplotlib.colors.LinearSegmentedColormap.from_list("", ["#ff6600","#ffffff","#091c5a"])

        ax.matshow(data, cmap=cmap)
        ax.set_xticklabels([0,0,20,40,60,80,100])
        ax.set_yticklabels([0,0,20,40,60,80,100])
        ax.set_xlabel('Percentage that '+str(self.name)+' is working')
        ax.xaxis.set_label_position('top') 
        ax.set_ylabel('Percentage that '+str(other_instance.name)+' is working')
        for (i, j), z in np.ndenumerate(data):
            ax.text(j, i, '{:0.1f}'.format(z), ha='center', va='center',
                    bbox=dict(boxstyle='round', facecolor='white', edgecolor='0.3'))

        fig.savefig(str(user_ID)+'grid_salary.png')



    def create_care_grid(self,other_instance):
        hourly_p1 = self.hourly_wage
        hourly_p2 = other_instance.hourly_wage

        percentages = [0,0.2,0.4,0.6,0.8,1]
        salary_p1 = np.multiply(hourly_p1*160,percentages)
        salary_p2 = np.multiply(hourly_p2*160,percentages)
        

        carer = [20*30,20*50,20*80]

        split = [self.spending_money/4 +(hourly_p1*(40*1-self.working_hours)) +other_instance.spending_money/4 +(hourly_p2*(40*1-other_instance.working_hours)),
                 self.spending_money/4 +(hourly_p1*(40*0.7-self.working_hours)) +other_instance.spending_money/4 +(hourly_p2*(40*0.3-other_instance.working_hours)),
                 self.spending_money/4 +(hourly_p1*(40*0.3-self.working_hours)) +other_instance.spending_money/4 +(hourly_p2*(40*0.7-other_instance.working_hours)),
                 self.spending_money/4 +(hourly_p1*(40*0.5-self.working_hours)) +other_instance.spending_money/4 +(hourly_p2*(40*0.5-other_instance.working_hours))]
        
        def create_grid(column_headers, row_headers):
            # Create an empty 2D grid
            grid = []
            
            # Iterate over the row headers
            for row_header in row_headers:
                # Create a new row for each row header
                row = []
                
                # Iterate over the column headers
                for column_header in column_headers:
                    # Compute the value as the sum of the column and row headers
                    value = column_header + row_header
                    
                    # Append the value to the row
                    row.append(value)
                
                # Append the row to the grid
                grid.append(row)
            
            return grid

        #print(salary_p1,salary_p2)
        salary_grid = create_grid(carer,split)
        data = salary_grid
        fig, ax = plt.subplots(figsize=(10,10))
        # Using matshow here just because it sets the ticks up nicely. imshow is faster.
        cmap = matplotlib.colors.LinearSegmentedColormap.from_list("", ["#ff6600","#ffffff","#091c5a"])

        ax.matshow(data, cmap=cmap)
        ax.set_xticklabels([0,'80','50','30'])
        ax.set_yticklabels([0,'100/100','70/30','30/70','50/50'])
        ax.set_xlabel('Amount of external caring hours')
        ax.xaxis.set_label_position('top') 
        ax.set_ylabel('Working split between '+str(self.name)+'/'+str(other_instance.name))
        for (i, j), z in np.ndenumerate(data):
            ax.text(j, i, '{:0.1f}'.format(z), ha='center', va='center',
                    bbox=dict(boxstyle='round', facecolor='white', edgecolor='0.3'))

        fig.savefig(str(user_ID)+'grid_carer.png')

    def make_plots(self,other_instance):
        offset = 0.5

        barlist = plt.bar([self.name,other_instance.name], [self.income_overview,other_instance.income_overview])
        barlist[0].set_color('#ff6600')
        barlist[1].set_color('#091c5a')
        #plt.xlabel('Monthly salary')
        plt.ylabel('Salary in Euros since the last parental leave')
        plt.savefig(str(user_ID)+'income_only.png')
        plt.clf()

        barlist = plt.bar([self.name,other_instance.name], [self.pension,other_instance.pension])
        barlist[0].set_color('#ff6600')
        barlist[1].set_color('#091c5a')
        plt.ylabel('Pension in Euros')
        plt.savefig(str(user_ID)+'pension_only.png')
        plt.clf()


        hours_label = ['Work', 'Childcare','Other care', 'Household', 'Total hours']
        hours_p1 = [self.working_hours,self.caring_hours_child,self.caring_hours_other,self.household_hours,(self.working_hours+self.caring_hours_child+self.external_caring_hours_other+self.household_hours)]
        hours_p2 = [other_instance.working_hours,other_instance.caring_hours_child,other_instance.caring_hours_other,other_instance.household_hours,(other_instance.working_hours+other_instance.caring_hours_child+other_instance.external_caring_hours_other+other_instance.household_hours)]
        x_lab = np.arange(len(hours_label)) *2
        width = offset
        plt.bar(x_lab-0.2,hours_p1, width,label=str(self.name),color='#ff6600')
        plt.bar(x_lab+0.2, hours_p2, width,label= str(other_instance.name),color='#091c5a')
        plt.xticks(x_lab, hours_label)
        plt.ylabel('Hours per week')
        plt.legend()
        plt.savefig(str(user_ID)+'hours_overview.png')
        plt.clf()

        
        value_label = ['Work', 'Childcare','Other care', 'Household', 'Total hours']
        value_p1 = [self.salary,self.child_care_wage,self.other_care_wage,self.household_wage,(self.salary+self.child_care_wage+self.other_care_wage+self.household_wage)]
        value_p2 = [other_instance.salary,other_instance.child_care_wage,other_instance.other_care_wage,other_instance.household_wage,(other_instance.salary+other_instance.child_care_wage+other_instance.other_care_wage+other_instance.household_wage)]
        x_lab = np.arange(len(value_label)) *2
        width = offset
        plt.bar(x_lab-0.2,value_p1, width,label=str(self.name),color='#ff6600')
        plt.bar(x_lab+0.2, value_p2, width,label= str(other_instance.name),color='#091c5a')
        plt.xticks(x_lab, value_label)
        plt.ylabel('Value of work per month')
        plt.legend()
        plt.savefig(str(user_ID)+'value_overview.png')
        plt.clf()
        
        width = offset
        barlist = plt.bar([self.name,other_instance.name], [self.salary,other_instance.salary],label='Paid now')
        barlist[0].set_color('#ff6600')
        barlist[1].set_color('#091c5a')

        barlist = plt.bar([self.name,other_instance.name], [self.salary+self.total_care_wage,other_instance.salary+other_instance.total_care_wage],alpha = 0.7, label='Paid Minimum wage')
        barlist[0].set_color('#ff6600')
        barlist[1].set_color('#091c5a')

        barlist = plt.bar([self.name,other_instance.name], [self.salary+self.adapted_total_care_wage,other_instance.salary+other_instance.adapted_total_care_wage],alpha=0.3,label='Paid Living wage')
        barlist[0].set_color('#ff6600')
        barlist[1].set_color('#091c5a')
        plt.ylabel('Value of work per month')
        plt.legend(frameon=False)
        plt.savefig(str(user_ID)+'care_salaries.png')
        plt.clf()

        partner_list = [str(self.name),str(other_instance.name)]
        groceries = [self.groceries,other_instance.groceries]
        travel = [self.travel,other_instance.travel]
        transportation = [self.transportation,other_instance.transportation]
        bills = [self.bills,other_instance.bills]
        leisure = [self.leisure,other_instance.leisure]
        x_lab = np.arange(len(partner_list)) *4
        width = offset
        barlist = plt.bar(x_lab-1,groceries, width,label='Groceries',alpha=0.2)
        barlist[0].set_color('#ff6600')
        barlist[1].set_color('#091c5a')
        barlist = plt.bar(x_lab-0.5, travel, width,label='Travel',alpha=0.4)
        barlist[0].set_color('#ff6600')
        barlist[1].set_color('#091c5a')
        barlist = plt.bar(x_lab-0.0, transportation, width,label='Transportation',alpha=0.6)
        barlist[0].set_color('#ff6600')
        barlist[1].set_color('#091c5a')
        barlist = plt.bar(x_lab+0.5, bills, width,label='Bills',alpha=0.8)
        barlist[0].set_color('#ff6600')
        barlist[1].set_color('#091c5a')
        barlist = plt.bar(x_lab+1, leisure, width,label='Leisure',alpha=1)
        barlist[0].set_color('#ff6600')
        barlist[1].set_color('#091c5a')
        plt.xticks(x_lab, partner_list)
        plt.ylabel('Value of work per month')
        plt.legend(frameon=False)
        plt.savefig(str(user_ID)+'spendings.png')
        plt.clf()




#user_ID = sys.argv[1]
user_ID = 115
user_ID =200


# Read input from a file    - we can do this differently
User_input = pd.read_csv('Input_'+str(user_ID)+'.csv', header=None,skiprows=1,dtype=object)
User_input = User_input.T
info_p1 = User_input[0].to_numpy()
info_p2 = User_input[1].to_numpy()
# Create an instance of MyClass with the input values
partner1 = User(info_p1)
partner2 = User(info_p2)
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
partner1.make_plots(partner2)
partner1.half_half_model(partner2)
partner1.create_grids(partner2)
partner1.create_care_grid(partner2)
