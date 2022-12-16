chrome.tabs.onUpdated.addListener((tab) => {
    chrome.tabs.query({active: true, currentWindow: true, lastFocusedWindow: true}, function(tabs) {
        console.log('tabsss', tabs[0].status)
        let activeTabUrl = tabs[0].url;
        let activeTabId = tabs[0].id;
        console.log('tab', activeTabUrl)
        if(activeTabUrl === 'file:///D:/dummy/dummy.html' && tabs[0].status == 'complete'){
            console.log('activated');
            chrome.scripting.executeScript(
                {
                    target: { tabId: activeTabId },
                    function: identifyElementIdAndPopModal,
                },
            );
        }
    });
});

function identifyElementIdAndPopModal(){
    console.log('we here!')
    try{
        const clickButton = document.querySelector('#btn-click-me');
        if(clickButton){
            clickButton.addEventListener('click', async () => {
                console.log('btn-click-me is clicked');
                const modal = document.createElement("div");
                modal.setAttribute(
                    "style",`
                position:absolute;
                top: 0px;
                width: 100%;`
                );
                modal.innerHTML = `<div style="width:600px; margin:0 auto; box-shadow:0 0 6px -2px #000">
                <div style="background:#18264C; padding:10px 18px; display:flex; justify-content:space-between;">
                    <div style="display: flex;align-items: center;">
                        <p style="margin: 0; color:#fff">Greetr</p>
                        <img src="`+chrome.runtime.getURL('images/logo.png')+`" style="width: 13px;object-fit: contain;margin-left: 5px;" />
                    </div>
                    <p style="margin: 0; color:#fff">x</p>
                </div>
                <div style="padding:10px 18px; margin-top:10px">
                    <p style="margin: 0; font-size:16px">Hi <span style="font-weight: 500; font-size: 18px">Rachel</span></p>
                    <p style="margin: 0; font-size:16px">We will send emma following details and will ask her for the availability</p>
                    <p style="margin-bottom:10px; font-weight:600; margin-top:20px; font-size:14px">Choose your scheduling technique</p>
                    <div style="display: flex;justify-content: space-between;">
                        <div style="display: flex;align-items: center; justify-content: space-between; border: 1px solid #00000040;border-radius: 10px;padding: 16px 12px; width: 44%;">
                            <div style="display: flex;align-items: center;">
                                <img src="`+chrome.runtime.getURL('images/through-url.png')+`" style="width: 24px;object-fit: contain;margin-right: 10px;" />
                                <label for="through-url" style="margin: 0; font-size:14px">Through URl</label>
                            </div>
                            <input type="radio" id="html" name="fav_language" value="through-url" style="margin: 0;"/>
                        </div>
                        <div style="display: flex;align-items: center; justify-content: space-between; border: 1px solid #00000040;border-radius: 10px;padding: 16px 12px; width: 44%;">
                            <div style="display: flex;align-items: center;">
                                <img src="`+chrome.runtime.getURL('images/schedule.png')+`" style="width: 22px;object-fit: contain;margin-right: 10px;" />
                                <label for="through-url" style="margin: 0; font-size:14px">Check Availability</label>
                            </div>
                            <input type="radio" id="html" name="fav_language" value="through-url" style="margin: 0;"/>
                        </div>
                    </div>
                    <!-- copy section -->
                    <div style="background: #FAFAFA;padding: 10px;border-radius: 8px; margin-top: 16px;display: flex;justify-content: space-between; align-items: center;">
                        <div>
                            <p style="font-size:13px; margin:0 ;color:#000000ad">ncmzsbhefwlahjevdsahewyvrfyew33q4e872qags827487qads</p>
                        </div>
                        <div style="display: flex;">
                            <div style="width: 1px;background: #000;margin-right: 8px;"></div>
                            <img src="`+chrome.runtime.getURL('images/edit.png')+`" style="width: 23px;object-fit: contain;margin-right: 10px;" />
                            <img src="`+chrome.runtime.getURL('images/copy.png')+`" style="width: 23px;object-fit: contain;margin-right: 10px;" />
                            <img src="`+chrome.runtime.getURL('images/delete.png')+`" style="width: 18px;object-fit: contain;margin-right: 10px;" />
                        </div>
                    </div>
                    <!-- copy section 2 -->
                    <p style="margin-bottom:10px; font-weight:600; margin-top:20px; font-size:14px">Send SMS / Email Message</p>
    
                    <div style="background: #FAFAFA;padding: 10px;border-radius: 8px; margin-top: 16px;display: flex;justify-content: space-between; align-items: center;">
                        <div>
                          <p style="font-size:13px; margin:0; color:#000000ad">ncmzsbhefwlahjevdsahewyvrfyew33q4e872qags827487qads</p>
                        </div>
                        <div style="display: flex;">
                            <div style="width: 1px;background: #000;margin-right: 8px;"></div>
                            <img src="`+chrome.runtime.getURL('images/edit.png')+`" style="width: 23px;object-fit: contain;margin-right: 10px;" />
                            <img src="`+chrome.runtime.getURL('images/copy.png')+`" style="width: 23px;object-fit: contain;margin-right: 10px;" />
                            <img src="`+chrome.runtime.getURL('images/delete.png')+`" style="width: 18px;object-fit: contain;margin-right: 10px;" />
                        </div>
                    </div>
                    <!-- content section -->
                    <p style="margin-bottom:10px; font-weight:600; margin-top:20px; font-size:14px">Content Displayed on Emma's Screen</p>
                    <div style="background: #FAFAFA;padding: 10px;border-radius: 8px; margin-top: 16px; padding-bottom: 10px;">
                        <p style="margin-bottom:10px; font-weight:700; margin-top:20px; font-size:14px; margin-bottom:20px;">Engineering at Demco!</p>
                        <div style="display: flex; align-items: center; flex-wrap: wrap;">
                        <!-- card -->
                        <div style="width: 150px; min-height: 215px; margin-right: 20px; margin-bottom: 20px;">
                            <img src="`+chrome.runtime.getURL('images/how-to-interview.png')+`" style="object-fit: contain;margin-right: 10px; width: 150px; margin-bottom: 10px;" />
                            <p style="font-size:13px; margin:0; font-weight: 600; color: #000000ad;">How to interview</p>
                            <div style="display: flex;align-items: center; margin-top: 6px;">
                                <img src="`+chrome.runtime.getURL('images/schedule.png')+`" style="width: 14px;object-fit: contain;margin-right: 7px;" />
                                <p for="through-url" style="margin: 0; font-size:13px; color:#00000087;">1 minute</p>
                            </div>
                        </div>
                        <!-- card -->
                        <div style="width: 150px;min-height: 215px; margin-right: 20px; margin-bottom: 20px;">
                            <img src="`+chrome.runtime.getURL('images/meet-our-cto.png')+`" style="object-fit: contain;margin-right: 10px; width: 150px; margin-bottom: 10px;" />
                            <p style="font-size:13px; margin:0; font-weight: 600; color: #000000ad;">Meet our CTO</p>
                            <div style="display: flex;align-items: center; margin-top: 6px;">
                                <img src="`+chrome.runtime.getURL('images/schedule.png')+`" style="width: 14px;object-fit: contain;margin-right: 7px;" />
                                <p for="through-url" style="margin: 0; font-size:13px; color:#00000087;">5 minutes</p>
                            </div>
                        </div>
                        <!-- card -->
                        <div style="width: 150px; min-height: 215px; margin-right: 20px; margin-bottom: 20px;">
                            <img src="`+chrome.runtime.getURL('images/how-to-interview-2.png')+`" style="object-fit: contain;margin-right: 10px; width: 150px; margin-bottom: 10px;" />
                            <p style="font-size:13px; margin:0; font-weight: 600; color: #000000ad;">How to interview</p>
                            <div style="display: flex;align-items: center; margin-top: 6px;">
                                <img src="`+chrome.runtime.getURL('images/schedule.png')+`" style="width: 14px;object-fit: contain;margin-right: 7px;" />
                                <p for="through-url" style="margin: 0; font-size:13px; color:#00000087;">1 minute</p>
                            </div>
                        </div>
                        <div style="width: 150px; min-height: 215px; margin-right: 20px; margin-bottom: 20px;">
                            <div style="justify-content: center;align-items: center;display: flex;height: 154px;flex-direction: column;border: 2px dotted #0000c829;width: 100%;border-radius: 20px;">
                            <img src="`+chrome.runtime.getURL('images/add-content.png')+`" style="width: 35px;object-fit: contain; margin-bottom: 10px;" />
                            <p for="through-url" style="margin: 0; font-size:16px; color:#000;">Add Content</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- send button --> 
                <div style="display: flex; justify-content: center; align-items: center;">
                    <div style="display: flex;align-items: center;justify-content: center;background: #008000b0;padding: 10px 23px;border-radius: 18px;margin-top: 18px;">
                        <img src="`+chrome.runtime.getURL('images/send.png')+`" style="width: 18px;object-fit: contain;margin-right: 10px;" />
                        <p style="margin:0; font-weight:600; font-size:14px; color: #fff;">Send</p>
                    </div>
                </div>
            </div>
        </div>`;
                document.body.appendChild(modal);
            });
        }
    }catch (e) {
        console.log('error', e)
    }
}