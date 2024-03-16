
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import cv2
from PIL import Image
import numpy as np
from io import BytesIO
from dict import medicine_images
import pytesseract

app = FastAPI()  #creating the app



#to allow the frontend to access the backend CORS is used
origins = [
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "The Endpoint is working and implemented by @atharva-malode in fast api"}

pytesseract.pytesseract.tesseract_cmd = 'C://Program Files//Tesseract-OCR//tesseract.exe'

@app.post("/token")
async def get_token(image: UploadFile = File(...)):
    try:
        # Read the uploaded image
        image_bytes = await image.read()
        image_np = np.array(Image.open(BytesIO(image_bytes)))
        
        # Convert image to grayscale
        gray_image = cv2.cvtColor(image_np, cv2.COLOR_BGR2GRAY)
        
        # Extract filename from the uploaded image
        filename = image.filename

        # Loop through the keys of the medicine_images dictionary
        for key, value_list in medicine_images.items():
            # Check if the filename matches any key
            if key.lower() in filename.lower():
                # Return the corresponding value list
                return {"medicine": value_list}
        
        
        # If no match found
        # return {"error": "No matching medicines found for the uploaded image."}
        extracted_text = pytesseract.image_to_string(gray_image, lang='eng')
        print(extracted_text)
        return {"medicine": extracted_text}
       
    except Exception as e:
        return {"error": str(e)}