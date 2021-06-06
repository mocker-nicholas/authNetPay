### authNetPay ###

1. The desired end result is a simple but functional hosted payments page. The page can be connected to an authorize.net gateway and added to any business website, or sent out with as a link on an invoice.

2. Front end validation should be intuitive enough to guide an end user through making a payment. 

3. An end user who is unfamiliar with online payments should be able to tell if their payment was accepted, and if it wasnt, why it wasnt accepted.

4. The owner of the payment gateway should be able to track who made a payment, and what the payment was for, by using the information submited with the payment.

# Notable consession #
a. The page currently features fields for the keys needed to authenticate with the payment gateway. In reality, these would be environment variables on the backend. I intend to update this project in the future to contain that functionality, but may create that project as a separate repository entirely. 