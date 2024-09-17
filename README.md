# 🌲🔥👀 pyronear.github.io

Pyronear's official website.

Preserving forests from wildfires one commit at a time

## Serving with docker

Make sure you have docker and the compose plugin installed.
Get into the root folder using your favorite shell and:

```shell
docker compose up
```

That's it! Now head to http://{your-server}:4000

You can stop (ctrl+C) and relaunch the command to refresh the website after changing the _config.yml file.

## Prerequisite

Be sure to set [Jekyll](https://jekyllrb.com/) up and running, and then install the plugins as follows:
```shell
bundle install
```

## Usage

Finally, you can run the website using:
```shell
bundle exec jekyll serve
```

To edit/add/remove text, go to `_config.yaml`.

## Emails

This website uses a Google spreadsheet with a Google script in order to sends and receive emails without the need to setup a server.

The file is stored in Pyronear's Google Drive.

More details [here](https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server#how)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


### Adding a language

- Add its digram to the list of supported languages in `_config.yml` called `languages`.
- Copy the `en` folder and rename it to your new language digram
- Edit the `index.html` in it, to modify the digram of the target layout
- Copy `_layouts/front-en.html` and rename it by replacing the digram.
- Edit the file `lang` attribute
- Finally, write all the translations at the bottom of `_config.yml` by adding a new entry to `t` (don't change any key name!)

Congrats, you've added a new language!
