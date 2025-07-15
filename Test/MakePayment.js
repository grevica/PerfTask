/**
 * @param {import('browsertime').BrowsertimeContext} context
 * @param {import('browsertime').BrowsertimeCommands} commands
 */
export default async function(context, commands) {
  
  commands.meta.setTitle('Test Task PERF');
  commands.meta.setDescription(
    'Test Completing a Payment using Credit Card on Generic Modal V2 Test Panel'
  );
  
  
  // Landing Page
  await commands.measure.start(
    'https://testportalone.processonepayments.com/GenericModalV2/test',
    'GenericModalTestPage'
  );

  // try/catch that if the HTML on the page changes in the feature
  // sitespeed.io will automatically log the error in a user friendly way and error will be thrown
 
  try {
    // Adding the authenticationKey provided in the task
    // Set Portal Authetication Key
    await commands.addText.byId('0054f222-2c3e-42e3-b363-1e23feadf8a1', 'portalOneAuthenticationKey');


    // Click on Make Payment Tab    
    await commands.click.byXpathAndWait('/html/body/div[4]/div[2]/div[2]/div[1]/div/div/div[4]/div/ul/li[2]/a');
    await commands.wait.byTime(21000);

    //Click on Apply Demo Data
    await commands.click.byXpath('/html/body/div[4]/div[2]/div[2]/div[1]/div/div/div[4]/div/div/div[1]/form/div[2]/div[1]/a[2]');
    await commands.wait.byTime(21000);

  
    //Click on OPEN DIALOG
    await commands.click.byXpath('/html/body/div[4]/div[2]/div[2]/div[1]/div/div/div[4]/div/div/div[2]/form/div[2]/div[2]/button');

    //Verify you are a human
    await commands.click.byXpath('/html/body//div/div[1]/div[1]/div/label/input');
    
    await commands.wait.byTime(21000);

    // Click on CONTINUE
    //await commands.measure.start('MakeaPayment');
    await commands.click.byXpath('/html/body/div/div[4]/div/mat-dialog-container/div/div/gm2-general-popup/div/div/div/div[1]/ng-component/p1c-selected-policy-context/lib-base-page/p1c-remote-screenflow-page/dpc-component-stack-placeholder/gp2-bill-presentment-notification-widget/div/gm2-action-buttons-control/div/div[1]/button');

    //Verify you are a human - 2
    await commands.click.byXpath('/html/body//div/div[1]/div[1]/div/label/input');

    //await commands.measure.stop();

    //Click on USE ANOTHER PAYMENT METHOD
    //await commands.measure.start('AnotherPaymentMethod');
    await commands.click.byXpath('/html/body/div[1]/div[2]/div/mat-dialog-container/div/div/gm2-general-popup/div/div/div/div[1]/ng-component/p1c-selected-policy-context/p1c-multi-policy-context/lib-base-page/p1c-remote-screenflow-page/p1c-generic-wizard-context/div/mat-stepper/div/div[2]/div[1]/div/p1c-generic-wizard-step-widget/div/div/div/div/portal-button-widget[3]/portal-button-control/div/div/button');

    //await commands.measure.stop();
    // Type Credit Card Number
    await commands.addText.bySelector('4111111111111111', 'cardNumber');

    // Type CVC
    await commands.addText.bySelector('123', 'cvc');

    // Type Expiuration Date
    await commands.addText.bySelector('0630', 'expirationDate');

    // Click on REVIEW
    //await commands.measure.start('ReviewPaymentMethod');
    await commands.click.byXpath('/html/body/div[1]/div[2]/div/mat-dialog-container/div/div/gm2-general-popup/div/div/div/div[1]/ng-component/p1c-selected-policy-context/p1c-multi-policy-context/lib-base-page/p1c-remote-screenflow-page/p1c-generic-wizard-context/div/mat-stepper/div/div[2]/div[2]/div/p1c-generic-wizard-step-widget/div/div/div/div/p1c-data-path-switch-widget/div/div/gm2-instant-payment-info-widget/div/gm2-payment-method-create-control/div/gm2-action-buttons-control/div/div[1]/button');

    //await commands.measure.stop();

    // Click on PAY
    //await commands.measure.start('ClickOnPay');
    await commands.click.byXpath('/html/body/div[1]/div[2]/div/mat-dialog-container/div/div/gm2-general-popup/div/div/div/div[1]/ng-component/p1c-selected-policy-context/p1c-multi-policy-context/lib-base-page/p1c-remote-screenflow-page/p1c-generic-wizard-context/div/mat-stepper/div/div[2]/div[3]/div/p1c-generic-wizard-step-widget/div/div/div/div/gm2-perform-uow-wizard-button-widget/div/gm2-action-buttons-control/div/div[1]/button');

    //Verify you are a human - 3
    await commands.click.byXpath('/html/body//div/div[1]/div[1]/div/label/input');

    //Click on CLOSE
    await commands.click.byXpath('/html/body/div[1]/div[2]/div/mat-dialog-container/div/div/gm2-general-popup/div/div/div/div[1]/ng-component/p1c-selected-policy-context/p1c-multi-policy-context/lib-base-page/p1c-remote-screenflow-page/p1c-generic-wizard-context/div/mat-stepper/div/div[2]/div[5]/div/p1c-generic-wizard-step-widget/div/div/div/div/portal-button-widget/portal-button-control/div/div/button');

    //Click on CLOSE
    await commands.click.byXpath('/html/body/div[1]/div[2]/div/mat-dialog-container/div/div/gm2-general-popup/div/div/div/div[1]/ng-component/p1c-selected-policy-context/p1c-multi-policy-context/lib-base-page/p1c-remote-screenflow-page/p1c-generic-wizard-context/div/mat-stepper/div/div[2]/div[8]/div/p1c-generic-wizard-step-widget/div/div/div/div/dpc-grid-layout-component/div/div[2]/div/div/div/portal-button-widget/portal-button-control/div/div/button');

    //return commands.measure.stop();

  } catch (e) {
    context.log.error(e);
    // We try/catch so we will catch if the the input fields can't be found
    // The error is automatically logged in Browsertime and re-thrown here
  }


}
