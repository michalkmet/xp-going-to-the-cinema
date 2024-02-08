# Awesome repo


System A : he buys a ticket (15 dollars) every time
System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 
then for each additional ticket he pays 0.90 times the price paid for the previous ticket.

System A : 15 * 3 = 45
System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)

John wants to know how many times he must go to the cinema so that the final result of System B, when rounded up to the next dollar, will be cheaper than System A.

ceil(price of System B) < price of System A.

test 1 - it should return 43 for movie(500, 15, 0.9)



## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Examples

card:  0
ticket:  10
perc:  0.95
result:  1

card:  194970
ticket:  48
perc:  0.02
result:  4063
expected 4063 to equal 4062

card:  75078
ticket:  33
perc:  0.2
result:  2277
expected 2277 to equal 2276

card:  161557
ticket:  44
perc:  0.02
result:  3673
expected 3673 to equal 3672

card:  30880
ticket:  15
perc:  0.42
result:  2061
expected 2061 to equal 2060

card:  61609
ticket:  31
perc:  0.48
result:  1990
expected 1990 to equal 1989

card:  73027
ticket:  22
perc:  0.33
result:  3322
expected 3322 to equal 3320
----------------------------------

sumSystemA:  61659
    systemBPriceForTicket:  4.1126401475274256e-308
    sumSystemB:  61666.23076923078
    result:  1989
    Math.ceil(sumSystemB):  61667


61690 < 1.974 61666.23  = 61667
 sumSystemA:  61690
    systemBPriceForTicket:  1.974067270813164e-308
    sumSystemB:  61666.23076923078
    result:  1990
    Math.ceil(sumSystemB):  61667

card:  16964
ticket:  28
perc:  0.08
result:  607
expected 607 to equal 606

card:  908021
ticket:  8
perc:  0.45
result:  113603
expected 113603 to equal 113504

card:  129092
ticket:  21
perc:  0.4
result:  6153
expected 6153 to equal 6148

card:  38342
ticket:  29
perc:  0.49
result:  1325
expected 1325 to equal 1324

card:  58566
ticket:  40
perc:  0.27
result:  1466
expected 1466 to equal 1465

card:  48818
ticket:  29
perc:  0.19
result:  1685
expected 1685 to equal 1684

card:  109640
ticket:  36
perc:  0.17
result:  3048
expected 3048 to equal 3046

card:  57642
ticket:  37
perc:  0.39
result:  1560
expected 1560 to equal 1559

card:  79328
ticket:  42
perc:  0.1
result:  1890
expected 1890 to equal 1889

card:  73598
ticket:  28
perc:  0.21
result:  2631
expected 2631 to equal 2629

card:  86685
ticket:  42
perc:  0.23
result:  2066
expected 2066 to equal 2065