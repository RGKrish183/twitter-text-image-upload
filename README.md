# Twitter text and image uploading
Use Node JS to upload Image with status in Twitter

Hi, Most of the blogs and articals posting there codes only for posting text(status) in twitter using this url,

```https://twitter.com/share?text=Hello Krizz&url=some url      //this just showing text with link```

But Here have to Use Node JS to built top on twitter (with api) status and image sharing script.

### How o Start ? 

First of all we need to create new project on Twitter App management on below mention this URL. 

``` https://apps.twitter.com/ ```

Sample Images below:

![Screenshot](https://raw.githubusercontent.com/RGKrish183/twitter-text-image-upload/master/Twitter-app-management.png)

You can pass your API_Key as well like below:

``` 
var oauth = { 
	consumer_key: "cGmxQROE8QQhVcU23pXY4gvX2", 
	consumer_secret: "5b6f0d0af968e249c0a8fe1e4dc0ee65d63ee77a760ee90aa4f2d56a26b9b614", 
	token: "987654321-28432af476099659a12747e6ccd458d491f4ac3f7bce630d1831228e", 
	token_secret: "28432af476099659a12747e6ccd458d491f4ac3f7bce630d1831228e"
}

```

Media with status updation url getting from offical twitter developer console

``` var url = "https://api.twitter.com/1.1/statuses/update_with_media.json"; ```

Sample Return Json Output below:

```
"media_url":"http:\/\/pbs.twimg.com\/media\/DIilcUVUIAAarkM.jpg",
"media_url_https":"https:\/\/pbs.twimg.com\/media\/DIilcUVUIAAarkM.jpg",
```
