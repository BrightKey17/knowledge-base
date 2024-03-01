power(exp(sum(ln(ColumnX))),1/count(*))
[basic information](https://alexkritchevsky.com/2018/06/15/geometric-mean.html)
## Geometric Mean
```
SELECT exp(avg(ln(<<column_name>>)))
  FROM <<table_name>>
```

## Harmonic Mean
```
SELECT 1/(avg(1/<<column_name>>))
  FROM <<table name>>
```