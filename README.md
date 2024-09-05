# Chrome Extension for Phishing Mail Detection (work on Google Mail)

An extension integrating BERT model to detect suspicious content in Google Mail.

How to use:

1. Download the model from [here](https://drive.google.com/drive/folders/1DiAjM2khgWMKamvy643ZqPLIPBTxgTd-) and put it in the `model` folder in the root directory (github doesn't allow files larger than 100MB)
2. Host the model by running `py model_api.py`
3. Open chrome and go to `chrome://extensions/`
4. Turn on developer mode
5. Click on `Load unpacked` and select the `extension` folder
6. The extension should be loaded and ready to use
7. Open Google Mail, choose an email and click on the extension icon to see the result
