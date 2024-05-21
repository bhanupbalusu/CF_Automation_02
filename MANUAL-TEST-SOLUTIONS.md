# Manual Tests

### Q-1) Using the database and the GUI, how would you test the functionality of this form?

<em>Positive Tests on UI:</em><br>

1. Verify all the UI elements are working as expected. (Drop-downs are working, input fields are taking input, checkbox can be checked and un-checked, menu buttons are working, close button is working as expected).<br>
2. Verify Base Currency and Target Currency populate all the list of expected options.<br>
3. Verify Convert functionality without ticking ‘Include commission in calculation’.<br>
4. Verify Convert functionality with ticking ‘Include commission in calculation’ is working for different exchange & commission rate.<br>
5. Verify for various conversion amounts within different commission ranges.<br> 6) Verify minimum commission value is applied correctly where-ever applicable.<br><br>

<em>Negative Tests on UI:</em><br>

1. Verify convert functionality with different combination of empty fields.<br>
2. Verify with 0 and negative values for Amount to convert field.<br>
3. Verify with large conversion amounts.<br>
4. Verify input fields with non-integers/alpha numeric characters.<br><br>

<em>DB Tests:</em><br>

1. Verify the list of currencies match with the UI list.<br>
2. Verify the commission rates and minimum commission are correctly defined.<br>
3. Verify the application is connected to the shared database.<br>
4. Verify any updates on shared database are reflected on UI.<br><br><br>

### Q-2) What tests would you perform to test the operations supported by the “Maintain currencies” form?

<em>Positive Tests:</em><br>

1. Verify all UI elements are working as expected.<br>
2. Verify CRUD operations are working as expected on UI.<br>
3. Verify Main Form is getting updated based on the CRUD operations performed on Maintain currencies.<br>
4. Verify the database is updating based on the CRUD operations performed on Maintain currencies and vice-versa.<br><br>

<em>Negative Tests:</em><br>

1. Verify CRUD operations without filling required fields.<br>
2. Verify CRUD operations with invalid data.<br>
3. Verify creating duplicate currency code.<br>
4. Verify providing currency names and codes greater than maximum allowed length.<br>
5. Verify performing simultaneous CRUD operations.<br><br><br>

### Q-3) What tests would you perform to test the operations supported by the “Maintain commission rates” form?

<em>Positive Tests:</em><br>

1. Verify all UI elements are working as expected.<br>
2. Verify the list of commission rates match with that in the database.<br>
3. Verify minimum commission rate is displayed.<br>
4. Verify CRUD operations on commission rates and minimum commission value are working as expected on UI.<br>
5. Verify Main Form is getting updated based on the CRUD operations performed on Maintain commission rates.<br>
6. Verify the database is updating based on the CRUD operations performed on Maintain commission rates and vice-versa.<br><br>

<em>Negative Tests:</em><br>

1. Verify CRUD operations on commission rates and minimum commission value without filling required fields.<br>
2. Verify CRUD operations on commission rates and minimum commission value with invalid data.<br>
3. Verify with smallest and largest commission rates and ranges.<br>
4. Verify performing simultaneous CRUD operations.<br><br><br>

### Q-4) What tests would you perform on the form above in order to test accessibility?

<em>Positive Tests:</em><br>

1. Verify the user can interact the UI elements using keyboard.<br>
2. Verify all the fields in the form are in the logical order.<br>
3. Verify the fonts and colours of the form are readable and make it easier for user to navigate.<br>
4. Verify the messages and instructions are clearly presented.<br> 5) Verify the elements on the form are interactive and can understand visually when there is change in state.<br> 6) Verify the form can take input values in different ways.<br><br><br>

### Q-5) If you were automating the testing of this form for regression test purposes, what would you hope the developer had done that would make the automation easier?

<em>Best practices:</em><br>

1. Having consistent and unique identifiers.<br>
2. Having proper html elements.<br>
3. Maintaining consistent layout across various versions.<br>
4. Providing custom data attributes for testing that are unlikely to change.<br>
5. Providing meaningful logs and messages.<br><br><br>

### Q-6) If this application were used internationally, what further tests would you perform?

<em>Positive Tests:</em><br>

1. Verify by changing the country and see if all text elements, currency names and symbols are correctly translated and displayed.<br>
2. Verify the ‘Amount to convert’ field by entering amount and see if it is displayed as per the selected locale.<br>
3. Verify dates are displayed correctly based on the selected region.<br>
4. Verify the commission calculation is correct based on localised values.<br>
5. Verify the application complies with regional privacy and data protection laws.<br><br><br>

### Q-7) Looking at the screenshot of the form above, what user interface issues are immediately apparent (you may have mentioned some of these in previous answers)?

<em>Apparent Issues:</em><br>

1. ‘Maintenance’ menu dropdown is covering some part and is too close to Currency conversion label.<br>
2. There is no placeholders in any of the select and input fields.<br>
3. The select fields and input filed are not aligned.<br>
4. Font sizes are different which makes it less readable.<br>
5. The spacing is not appropriate between the elements.<br>
6. There is not much colour contrast which makes it less readable.<br>
