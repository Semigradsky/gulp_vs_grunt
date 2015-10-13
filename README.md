# Gulp vs Grunt

## Round 1: one task

Minify five big js files to one.

Gulp (`time gulp --gulpfile round1/gulpfile.js`):
```
real    0m45.318s
user    0m0.138s
sys     0m0.169s
```

Grunt (`time grunt --gruntfile round1/Gruntfile.js -b ./`):
```
real    0m24.385s
user    0m0.046s
sys     0m0.215s
```

Winner: **Grunt**

## Round 2: two task concurrently

Compile `scss` to `css` and `es2015` to `es5`.

Gulp (`time gulp --gulpfile round2/gulpfile.js`):
```
real    0m15.901s
user    0m0.045s
sys     0m0.215s
```

Grunt (`time grunt --gruntfile round2/Gruntfile.js -b ./`):
```
real    0m13.791s
user    0m0.060s
sys     0m0.214s
```

Winner: **Friendship**