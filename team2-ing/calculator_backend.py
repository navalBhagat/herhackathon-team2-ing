import sys
import pandas as pd
import numpy as np

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
        self.household_hours = params[19]
        self.groceries = params[20]
        self.travel = params[21]
        self.transportation = params[22]
        self.bills = params[23]
        self.leisure = params[24]
        self.mental_load = params[25]
        self.preferences_work = params[26]
        self.preferences_pension = params[27]
        self.preferences_care = params[28]
        
        
    def pension(self):
        self.pension = self.earning_points*self.access_factor*self.pension_value*self.pension_factor
    
    def diff_pension(self, other_instance):
        return(self.pension-other_instance.pension)

    def comp_pension(self):
        min_pension = 11000


    def my_function(self):
        print("Param1:", self.param1)
        print("Param2:", self.param2)
    
    def compare_params(self, other_instance):
        self_sum = self.param1 + self.param2
        other_sum = other_instance.param1 + other_instance.param2
        
        if self_sum > other_sum:
            print("This instance has a larger sum of parameters.")
        elif self_sum < other_sum:
            print("The other instance has a larger sum of parameters.")
        else:
            print("Both instances have the same sum of parameters.")

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

# Call the function on the instances
partner1.my_function()
partner2.my_function()




#gotta think about this section::
class TreeNode:
    def __init__(self, decision_condition=None, true_branch=None, false_branch=None, leaf_value=None, probability=1.0):
        self.decision_condition = decision_condition
        self.true_branch = true_branch
        self.false_branch = false_branch
        self.leaf_value = leaf_value
        self.probability = probability

class DecisionTree:
    def __init__(self):
        self.root = None
    
    def fit(self):
        # Create the decision tree structure
        # Manually specify the decision conditions, leaf values, and probabilities
        
        # Root node
        self.root = TreeNode(decision_condition=('feature1', 'value1'), probability=0.8)
        
        # Level 1 nodes
        node2 = TreeNode(decision_condition=('feature2', 'value2'), probability=0.6)
        node3 = TreeNode(decision_condition=('feature3', 'value3'), probability=0.4)
        
        # Level 2 nodes
        leaf1 = TreeNode(leaf_value='Outcome 1', probability=0.3)
        leaf2 = TreeNode(leaf_value='Outcome 2', probability=0.2)
        leaf3 = TreeNode(leaf_value='Outcome 3', probability=0.15)
        leaf4 = TreeNode(leaf_value='Outcome 4', probability=0.1)
        
        # Assign the nodes as per the desired tree structure
        self.root.true_branch = node2
        self.root.false_branch = node3
        node2.true_branch = leaf1
        node2.false_branch = leaf2
        node3.true_branch = leaf3
        node3.false_branch = leaf4
    
    def predict(self, X):
        predictions = []
        for sample in X:
            ranked_outcomes = self._traverse_tree(sample, self.root)
            predictions.append(ranked_outcomes)
        return predictions
    
    def _traverse_tree(self, sample, node):
        if node.leaf_value is not None:
            return [(node.leaf_value, node.probability)]
        
        feature, value = node.decision_condition
        if sample[feature] == value:
            return self._traverse_tree(sample, node.true_branch)
        else:
            return self._traverse_tree(sample, node.false_branch)

        ranked_outcomes = sorted(ranked_outcomes, key=lambda x: x[1], reverse=True)
        return ranked_outcomes
