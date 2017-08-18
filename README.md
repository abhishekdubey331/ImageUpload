# Image-Upload
Upload Images to S3 storage using node js and save the Urls to mongodb database using Mongoose.


#Get your Access Key from AWS s3 , that you can get from your aws account and they are used to identify the bucket to upload images.
 

Change the bucket url in the main_controller.js.


# How Code Works 

There is a folder named uploads. 

1. Put all your images in the uploads folder and they would be uploaded to server from the same.

/upload_small    is the route where we make a post request and all images are uploaded.

Time is taken as per image size.

/get_images   gives all the results from the mongo db database and you can make a get request on that route.


Thanks 

Good Luck 



