# Raqmee Skills Test - Abdullah Ayman

## Project Overview

I created a the app and set up all the necessary assets including:

- **Tailwind CSS** for styling
- **FontAwesome** for icons
- **Google Fonts** to use the Lexend Deca font, which was specified in the Figma design

## Features Implemented

### 1. **Product Component**

I began by creating a `Product` component that displays the following product information:

- **Image** of the product
- **Name** of the product
- **Price**
- **Owner**

I mapped all the products and checked if data saved at localstorge or not if not some data will be stored

### 2. **Responsive Layout**

The product mapping depends on the **screen width** to determine how many products are displayed per line. 


### 3. **Search Functionality**

I implemented a **search bar** that allows users to search for products by **name** or **category**.

### 4. **Filter and Sort Dropdowns**

- **Filter Dropdown**: I created a dropdown to filter products by category.
- **Sort Dropdown**: A dropdown was created to allow sorting by:
  - **Price**: Sorting products from **high to low** or **low to high**.
  - **Alphabetical Order**: Sorting products alphabetically.
  
  I hadn’t previously implemented an alphabetical sort, so I researched and learned about the `localeCompare()` function in JavaScript, which helped me achieve this.

### 5. **Pagination**

I implemented **pagination** to display products across multiple pages, with **4 products per page** by default.

- If the screen width is between **768px and 1024px**, only **3 products per page** are shown.


### 6. **Add Product Form with Validation**

I created a form for adding new products, which includes **validation** and **error messages** for each field.

### 7. **Handling Local Storage and Image Files**

I developed the functionality to **add products** and store them in `localStorage`. 

 I didn't work on function t0 save files to `localStorage`. Since `localStorage` only supports text data, I researched and learned how to convert files to Base64 text. 

- I used the `FileReader` API and the `readAsDataURL()` method to convert the file to a Base64 string before saving it.
- The Base64 string was then saved to `localStorage`, and I used the converted data to display the image back in the application.
