from PIL import Image
import sys

try:
    img = Image.open("public/adobe-illustrator.png")
    bbox = img.getbbox()
    if bbox:
        print(f"Original size: {img.size}")
        print(f"Bounding box: {bbox}")
        if bbox != (0, 0, img.width, img.height):
            cropped = img.crop(bbox)
            cropped.save("public/adobe-illustrator.png")
            print("Image cropped successfully.")
        else:
            print("Image does not need cropping.")
    else:
        print("Image is empty.")
except Exception as e:
    print(f"Error: {e}")
