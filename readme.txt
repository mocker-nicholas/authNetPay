### authNetPay ###

Test Credentials for an approved transaction:

Visa
Card Number - Approval: 4111 1111 1111 1111
Exp: (any valid exp date will work);
Cvv: (any three numbers will work);

A complete set of test credentials can be found here: https://developer.authorize.net/hello_world/testing_guide.html

1. The desired end result is a simple but functional hosted payments page. The page can be connected to an authorize.net gateway and added to any business website, or sent out with as a link on an invoice.

2. Front end validation should be intuitive enough to guide an end user through making a payment. 

3. An end user who is unfamiliar with online payments should be able to tell if their payment was accepted, and if it wasnt, why it wasnt accepted.

4. The owner of the payment gateway should be able to track who made a payment, and what the payment was for, by using the information submited with the payment. I used invoice number for this identification. This feild will appear as "poNumber" in authorize.net's reporting. An 'invoiceNumber" parameter was not immediately available when runing a simple transaction through auth.net's API.

5. As of 7/1/2021 I am considering this "Version 1.0". I am completing a few online courses right now, and will likely revist this project as I continue my education. 

# Notable consession #
a. The front end application currently includes hardcoded keys needed to authenticate with the payment gateway. In reality, these would be environment variables on the backend. I intend to update this project in the future to contain that functionality, but may create that project as a separate repository entirely. 