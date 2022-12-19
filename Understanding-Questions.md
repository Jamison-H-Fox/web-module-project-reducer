# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
    The dispatch function is called, with addOne() passed in as the cb

    The dispatch function is the reducer function, which utilizes the switch to determine which action to take upon execution.

    The object returned from addOne() indicates to the switch to execute the ADD_ONE case.

    state is spread in, and total is set as total + 1

* TotalDisplay shows the total plus 1.
