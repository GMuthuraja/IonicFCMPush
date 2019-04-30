var FCM = require('fcm-node');
//staging
//var apiKey = "AAAAJau7u5I:APA91bEQpTDyxDtrRxdBxGVwDoRWUBD55U1COiHTPGV0UtrWI3vdwy139TXIV_4z92Xt02pOKJMUBokF7m60wMtAkGk2F8FunauboZt35FW5njv1sxgemy2gR8OP9PsP4tW7UfPFFXa7";
//innosync
var apiKey = "AAAAymD4Tuo:APA91bH_KddR1lHdHcQEeAF39x__h2leflyD1BBz3grzXyeccK0KLhBZOkrUV-aTwVytk75SBGdBFl0--SB8sw9Cs-Pdc01Ge9ReaXrYj5wo_4JTJM8ZvUxS59OMvOHmKtf120Rujzqq";
var deviceID = "dqBgYkVYAsA:APA91bH-xptqouo-TxG7Eb7pkbb2mKALjLjybb6viYSRi0uF7N6Bk1pNKtsuwNqdMhB59VAKBjnX9J-2fmFlLLty7vp0B55ZWsN0OSuSO-fJzS3BSsB4gZiRh_dTdYGEeQ3A8S5WR0Xp";
//ios 12
// var deviceID = "fia7oCTYh_U:APA91bEpYypEr9A-E91yPKOgjnazPE03LrKUXH2R4wbnfnVvzDgNIxRpxp8zc7OyA4fDPyHMuF1VtFrCC6Z6BG0UGadL2hyxicbFYdP9gR4B0wr2LaNFNUk2BLpZyT48XZsr9c5po2p_";
var fcm = new FCM(apiKey);

var message = {
    to: deviceID,
    "notification":{
        "body" : "8) Not - This week's edition is now available.",
        "title" : "NewsMagazine.com",
        "sound": "default",
        "content-available":1,
        "click_action" : "needs_confirmation"
      }
    //   "data": {
    //     "title": 'Urgent notifications will be stacked - Urgent please tap to acknowledge',
    //     "message": 'Scrum: Daily touchbase @ 10am Please be on time so we can cover everything on the agenda.',
    //     "android_channel_id":"mutedChannel",
    //     "soundname":"",
    //     "notId":1,
    //     "actions": [
    //         {
    //             icon: 'emailGuests',
    //             title: 'EMAIL GUESTS',
    //             callback: 'emailGuests',
    //             foreground: true
    //         },
    //         { icon: 'snooze', title: 'SNOOZE', callback: 'snooze', foreground: false }
    //     ]
    //   },
    //"priority": "normal"
};

fcm.send(message, function (err, response) {
    if (err) {
        console.log(err);
        console.log("Something has gone wrong!");
    } else {
        console.log("Successfully sent with response: ", response);
    }
})