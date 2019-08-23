Today we start learning about databases in MERN!

As some found out with PostgreSQL installing anything database related can be a bit of a pain.

That's why first thing today I want you to install [MongoDB](https://www.mongodb.com/what-is-mongodb).

There are many guides out there on how to do this. [This is a good one](https://treehouse.github.io/installation-guides/mac/mongo-mac.html) for those with MacOS. Install with Homebrew.

The commands are as follows.

```bash
brew install mongodb
sudo mkdir -p /data/db
sudo chown -R `id -un` /data/db
```

Once this is done run this command.

```
mongod
```

If you see lots of text (like server logs) and no error messages everything is 🌈.

This should work for Linux and WSL; but don't quote me on it.

```bash
sudo apt-get install mongodb
```

Once this is done continue working on outstanding challenges or have a [crack at this challenge](https://gist.github.com/scottdixon/1c03c5f4439b482667b772964cef3229) (again it has mocha tests).