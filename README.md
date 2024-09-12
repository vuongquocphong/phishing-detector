# Chrome Extension for Phishing Mail Detection (work on Google Mail)

An extension integrating BERT model to detect suspicious content in Google Mail.

How to use:

1. Download the model folder from [here](https://drive.google.com/drive/folders/1DiAjM2khgWMKamvy643ZqPLIPBTxgTd-) and put it in the `model` folder in the root directory (GitHub doesn't allow files larger than 100MB)
2. Clone the repository
3. Extract the downloaded folder, and move it to the repo directory, at the root level
4. Host the model by running `py model_api.py`
5. Open chrome and go to `chrome://extensions/`
6. Turn on developer mode
7. Click on `Load unpacked` and select the `extension` folder
8. The extension should be loaded and ready to use
9. Open Google Mail, choose an email and click on the extension icon to see the result
