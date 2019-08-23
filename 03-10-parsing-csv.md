### Parsing csv

This morning challenge will be over a couple of days.

Part one of the challenge (today) will involve parsing some CSV data and turning it into more developer friendly JSON.

This is the CSV file we'll need you to download.

https://www.dropbox.com/s/zu2y06wdr5zsvem/tan_all_time.csv?dl=0

Firstly, create a new directory and `npm init` to initialize the `package.json`. Add the csv file to the same directory. Create two empty files called `index.js` and `tan_all_time.json`

Secondly, you need to require the file system module. This module is built into node so you don't need to install anything. At the top of your file have:

```js
const fs = require('fs');
```

Thirdly, you'll need to use the node file system module to read the `tan_all_time.csv` file into our javascript file as a string.

You need to use the `readFile` method https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

Fourth, you need to npm install and require in the csv parsing package.

```bash
npm install csv
```

```js
const parse = require('csv-parse');
```

Use the `parse` method to convert the string we just received from `readFile` into an array of arrays.

Use this code as reference:

https://csv.js.org/parse/api/#callback-api

Now we have an array of arrays we can create a javascript object that will match what we'd like our JSON to look like.

The javascript object will look like this:

```js
{
  rankings: [
    {
      name: 'Mcsweyn, S',
      gender: 'Male',
      time: '10.29',
      year: '2018'
    },
    {
      // data for athlete 2
    },
        {
      // data for athlete 3
    },
    // ... all other athletes
  ]
}
```

One you have you have this data structure store the object in a variable.

Lastly, use the `writeFile` method to write this javascript object to the tan_all_time.json file. Use this code for reference:

https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback

Opening the JSON file in a web browser should look like this.

![](https://dl.dropboxusercontent.com/s/7c7drm95klyi9r7/tan_json.png)

Great work 🌈! Tomorrow we'll host this JSON on AWS S3 and create an express app to interact with it. 