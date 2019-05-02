# Nimiq Web Miner

Webminer-addon is a Nimiq Web Miner with a pretty UI and easy to install and use.

## Installation

Import the addon:

```html
```


Add the following `div` at the end of your html:

```html
<div id="webminer-addon"></div>
```


## Usage

Add and edit this variables:

```html
<script>
    let NIMIQ_ADDRESS = 'NQ87 UY1R XQHF E3A2 YP14 TPE6 XAGV 7373 HCJ6';
    let NIMIQ_POOL_HOST = 'pool.nimiq.watch';
    let NIMIQ_POOL_PORT = 8443;
    let ADDON_INFO = '<a href="http://shortnim.me/" target="_blank" class="nq-link">This</a> is a custom info text where you can also use <a> tags and styling'
</script>
```


## Example

```html
<!DOCTYPE html>
<html>

<head>
  <script>
    let NIMIQ_ADDRESS = 'NQ87 UY1R XQHF E3A2 YP14 TPE6 XAGV 7373 HCJ6';
    let NIMIQ_POOL_HOST = 'pool.nimiq.watch';
    let NIMIQ_POOL_PORT = 8443;
    let ADDON_INFO = '<a href="http://shortnim.me/" target="_blank" class="nq-link">This</a> is a custom info text where you can also use <a> tags and styling'
  </script>
</head>

<body>
  <noscript>
    <strong>We're sorry but webminer-addon doesn't work properly without JavaScript enabled. Please enable it to
      continue.</strong>
  </noscript>

  <div id="webminer-addon"></div>
</body>

</html>

```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[AGPLv3](https://choosealicense.com/licenses/agpl-3.0/)
