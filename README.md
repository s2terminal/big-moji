以下のような適当なコマンドで起動

```
$ docker run --interactive --tty --rm --volume $(pwd):/app --workdir /app --publish 8000:8000 python:alpine python -m http.server 8000
```

open http://localhost:8000?text=textパラメータに設定した文字列を大きく表示します
