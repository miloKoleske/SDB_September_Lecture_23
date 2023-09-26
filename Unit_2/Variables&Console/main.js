//  Vanilla JS = JS with no plugins, additions single line comment: ctrl + or cmd+/

/* 
Multi-line comment: 
alt + shift + a or shift + option + a
*/

// *Variables

/* 
Variable are named containers for storing data values.

We name the variables so that we can refer to them and the values they hold at a later time.  Consider that we are naming these variables to help us be directed to a value type.

    We can create a variable through 3 different keywords:
        1. var 
        2. let
        3. const
        4. (none/no keyword/blank) - not recommended
*/

let a = 2;

//      (1)     (2)     (3)     (4)
        let     b       =       1;

        /* 
            1. Use JS keyword to denote creation of a variable
            2. The name of the variable, what the developer refers to/calls on to get the stored value. Variable names should be to the point/pertain to data
                - should be camelCase 
            3. Assignment operator: equals sign, = 
            4. The initial variable value, its starting data value.  
        */

            //  *Variable Declaration vs Initialization

            //  Declaration: declaring the variable but not assigning it.
                let x;
                console.log("Declaration of x: ", x); // Declaration of x: undefined

                let apple;

            //  Initialization: variable is given/set a value.

                let y = 4;
                let life = 42;

            //  Reassign a variable value, reassign declared/initialized variables ( not const keyword variables)
                x = 20;
                console.log("Initialization 1: ", x);
                x = 100;
                console.log("Initialization 2: ", x);

                apple = 12;

            // Assigning to Other Variables/create variables from variables
                let firstName = "Milo"; // string datatype
                let lastName = "Koleske";
                let fullName = firstName + " " + lastName;
                let fullN = firstName + lastName;

//  * CONSOLE
    /*
    - A place to see text output/code results.
    - Console object is attached to the browser (web).
    - Console in VSC to view results/what is logged.  

    .log(), this is the log method of the console, log will print what it is passed
    */

    console.log(fullName); // Milo Koleske
    console.log(2+2); // 4

    //  Use multiple items/variable in a console.log()

    let today = "Great!";
    const javaScript = "So much fun!"
    console.log(today, javaScript);
    today = "Super!";
    // javaScript = "Meh." // TypeError: Assignment to constant variable.
    console.log(today, javaScript);

    console.log("hello" + firstName + " .");
    console.log("Life, the universe, and everything:" + " " + life);



