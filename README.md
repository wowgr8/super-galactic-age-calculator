# Super Galactic Age Calculator #
_By Cesar Lopez_

## Description ##

This project will return your age in Mercury, Venus, Mars, and Jupiter years. Additionally, this project will determine how many years you'll have left to live on each planet. If your current age surpasses the average life expectancy, you will be returned the number of years you have lived past the average life expectancy.

## Technologies Used ##

* JavaScript
* HTML
* Github
* Webpack
* Jest

## Setup Instructions ##

1. In your terminal, navigate to the directory you desire to download thse files into.

2. Copy and enter this command:

```
git clone https://github.com/wowgr8/super-galactic-age-calculator
```
3. Enter the following commands:

```
npm install
```
```
npm run start
```

## Known Bugs ##

* None

## License ##

[MIT](https://opensource.org/license/MIT)

## Specs ##

<details>
<summary> Click to see!</summary>

| # | Spec | Input | Output |
| :-------------     | :-------------     | :------------- | :------------- |
| 1 | Should return users inputted age.  | 28 | 28 |
| 2 | Should return users age in Mercury years.  | 28 | 116.66666666666667 |
| 3 | should return users age in Venus years.  | 28 | 45.16129032258065 |
| 4 | should return users age in Mars ♂ years | 28 | 14.893617021276597 |
| 5 | should return users age in Jupiter ♃ years | 28 | 2.3608768971332212 |
| 6 | should determine how many years user has left to live in Earth years | 28, 88 expected | 60 |
| 7 | should convert how many years user has left to live in other planets (Mercury) years | 28, 88 Expected| 250 |
| 8 | should return number of years on other planets user has left once they've passed their life expectancy Mercury | 88 Expected, 98 User | 41.66666666666667 |

</details>

## Contact Info ##

* Cesar Lopez <Lopez.cesar.aug@gmail.com>
* Github: https://github.com/wowgr8