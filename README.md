# Chrome Extension for Phishing Mail Detection (work on Google Mail)

An extension integrating BERT model to detect suspicious content in Google Mail.

## Requirements
- Ubuntu 20.04 or later (64-bit)
- WSL2 with Ubuntu 20.04 or later (64-bit)
- Python 3.8

How to use:

1. The data for training the URL detection model can be found [here](https://drive.google.com/drive/folders/1fb2mrGawaVd_NkcYfVv9875cFLSN9-Lp?usp=sharing), along with its original [paper work](https://arxiv.org/abs/1802.03162) and [GitHub repository](https://github.com/Antimalweb/URLNet?tab=readme-ov-file)
2. Download the email detection model folder from [here](https://drive.google.com/drive/folders/1DiAjM2khgWMKamvy643ZqPLIPBTxgTd-) and put it in the `model` folder in the root directory (GitHub doesn't allow files larger than 100MB)
3. Clone the repository
4. Install the python3.8-venv package and create a virtual environment in python 3.8 by running `python3.8 -m venv myenv`, ensuring that the version of pip is 20.3 or later
5. Install all requirements for model hosting by running `pip install -r requirements.txt`
6. Extract the downloaded folder, and move it to the repo directory, at the root level
7. Host the model by running `py model_api.py`
8. Open chrome and go to `chrome://extensions/`
9. Turn on developer mode
10. Click on `Load unpacked` and select the `extension` folder
11. The extension should be loaded and ready to use
12. Open Google Mail, choose an email and click on the extension icon to see the result
