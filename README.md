### Coding Challenge

Using the Mural Pay API Sandbox Environment, create a single-page application that allows a user to create an account and execute a payment. More specifically, the application should allow for (1) customer & account creation, (2) transfer request creation, and (3) transfer request execution.

See below for Sandbox, API, platform, and other relevant resources.

While Typescript and React are ideal, feel free to use the languages, libraries, and frameworks you are most familiar with.

For Sandbox access, please reach out to [boyce@muralpay.com](mailto:boyce@muralpay.com) with the email address that you would like access for.

Once finished, please submit your challenge [here](https://docs.google.com/forms/d/e/1FAIpQLSfzDopDRb-HoMtTNUZCcydzjR4q_HeH9D7d4ffwEFoJiSAPIg/viewform).

### Part 1: Customer & Account Creation

- Allow a user (”Customer”) to create an account
- For the created account, show its:
    - (1) current balance
    - (2) wallet address

### Part 2: Transfer Request Creation

- Allow a user to create transfer requests from the above account to a Colombian bank account (receiving Colombian Peso - "COP")
- Allow the user to specify:
    - Amount
    - Recipient (COP) bank details
- Show the pending transfer requests in the UI

### Part 3: Transfer Request Execution

- Allow the user to execute the pending transfer request
- Show executed transfer requests in the UI

### Resources:

- API docs (password - 'powerfulpayments'): https://developers.muralpay.com/docs/getting-started
  - NOTE: See Sandbox-specific info [here](https://developers.muralpay.com/docs/sandbox-environment). Please be sure to use the Sandbox environment (https://api-staging.muralpay.com) and not the Production environment (https://api.muralpay.com).
- Platform docs: https://docs.muralpay.com/en/
- For Polygon Amoy testnet funds: https://faucet.circle.com/
