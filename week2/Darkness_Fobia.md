exercise Darkness Fobia:

ssible solution
GetThroughTheTunnel
            Initialize maxTime as 12;
            Initialize time1 as 1, time2 as 2, time3 as 4, time4 as 5;
            Initialize maxPeople as 2;
            Initialize totalTime as 0;
            Initialize peopleAtStart as 4;
            Initialize ListOfPeople;
        
            Compare times with each other to sort them by speed 
            => output is ordered list
        
            Select the 2FastestPeople (times)
            Select the 2SlowestPeople (times)
        
            Step 1: 2 fastest going
                IF 2FastestPeople <= maxPeople
                    totalTime = totalTime + (slowest of the 2 fastest);
                    peopleAtStart = peopleAtStart-2
                END IF
            Step 2: The fastest is going back
                totalTime = totalTime + (fastest of the 2 fastest);
                peopleAtStart = peopleAtStart+1
            Step3: 2 slowest going
                totalTime = totalTime + (slowest of the 2 slowest);
                peopleAtStart = peopleAtStart-2
            Step 4: The fastest is going back
                totalTime = totalTime + (slowest of the 2 fastest);
                peopleAtStart = peopleAtStart+1
            Step 5: the remaining pair going
                totalTime = totalTime + (slowest of the 2 fastest);
                peopleAtStart = peopleAtStart-2
        
            IF totalTime <= maxTime AND peopleAtStart == 0
                Print "Success. You rule!"
            ELSE
                Print "Failure. Try again."
            END IF
        END GetThroughTheTunnel


    
 