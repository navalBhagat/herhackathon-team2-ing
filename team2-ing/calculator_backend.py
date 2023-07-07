class User:
    def __init__(self, param1, param2):
        self.param1 = param1
        self.param2 = param2
    
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


# Read input from a file    - we can do this differently
with open('user_X_p1.txt', 'r') as file:
    lines = file.readlines()
    param1_input = lines[0].strip()
    param2_input = lines[1].strip()

# Create an instance of MyClass with the input values
partner1 = User(param1_input, param2_input)

# Read different input from a file
with open('user_X_p2.txt', 'r') as file:
    lines = file.readlines()
    param1_input = lines[0].strip()
    param2_input = lines[1].strip()

# Create another instance of MyClass with different input values
partner2 = MyClass(param1_input, param2_input)

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
