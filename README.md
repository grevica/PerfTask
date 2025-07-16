# PerfTask - Automated Payment Flow Performance Test

## Overview

This repository contains automated browser performance tests for the payment flow on the Generic Modal V2 Test Panel. The main test script, `MakePayment.js`, uses [Browsertime](https://www.sitespeed.io/documentation/browsertime/) commands to simulate a user completing a payment using a credit card. The script is designed to measure and validate the performance and reliability of the payment process.

## Main Test Steps

The `MakePayment.js` script performs the following actions:

1. **Sets Metadata**: Defines the test title and description for reporting.
2. **Navigates to Landing Page**: Opens the Generic Modal V2 test page.
3. **Authentication**: Inputs the provided authentication key.
4. **Navigates Payment Flow**:
    - Clicks the "Make Payment" tab.
    - Applies demo data.
    - Opens the payment dialog.
    - Passes human verification steps.
    - Continues through the payment wizard.
    - Selects "Use Another Payment Method".
    - Inputs credit card details (number, CVC, expiration).
    - Reviews and confirms payment.
    - Completes payment and closes dialogs.
5. **Error Handling**: Catches and logs errors if any UI elements are not found.

## Usage

This script is intended to be run with Browsertime as part of a performance testing suite. It automates the entire payment process, including form filling and button clicks, and is robust against minor UI changes.

## How to Run the Test

To execute the test using Browsertime (via [sitespeed.io](https://www.sitespeed.io/)), follow these steps:

1. **Install sitespeed.io** (if not already installed):

    ```powershell
    npm install -g sitespeed.io
    ```

2. **Run the test script** from the repository root:

    ```powershell
    sitespeed.io --browsertime.scripts Test/MakePayment.js
    ```

   - This will launch Browsertime, execute the steps in `MakePayment.js`, and generate a performance report.

3. **View Results**: After completion, results will be available in the `sitespeed-result` folder.

## File Structure

- `Test/MakePayment.js`: Main test script automating the payment flow.

## Notes

- All selectors (IDs, XPaths) are specific to the current test panel implementation.
- The script includes waits to accommodate asynchronous UI updates.
- Error handling is built-in to log issues for easier debugging.

## License

This repository is intended for internal use and testing purposes only.
