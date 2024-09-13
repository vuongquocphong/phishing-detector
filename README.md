# Chrome Extension for Phishing Mail Detection (work on Google Mail)

An extension integrating BERT model to detect suspicious content in Google Mail.

## Requirements
- Ubuntu 20.04 or later (64-bit)
- WSL2 with Ubuntu 20.04 or later (64-bit)

How to use:

1. Download the model folder from [here](https://drive.google.com/drive/folders/1DiAjM2khgWMKamvy643ZqPLIPBTxgTd-) and put it in the `model` folder in the root directory (GitHub doesn't allow files larger than 100MB)
2. Clone the repository
3. Create a virtual environment in python 3.8 by running `python3.8 -m venv myenv` and ensure that the version of pip is 20.3 or later
4. Install all requirements for model hosting by running `pip install -r requirements.txt`
5. Extract the downloaded folder, and move it to the repo directory, at the root level
6. Host the model by running `py model_api.py`
7. Open chrome and go to `chrome://extensions/`
8. Turn on developer mode
9. Click on `Load unpacked` and select the `extension` folder
10. The extension should be loaded and ready to use
11. Open Google Mail, choose an email and click on the extension icon to see the result
