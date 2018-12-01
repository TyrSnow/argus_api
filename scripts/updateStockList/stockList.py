# -*- coding: utf-8 -*-
import tushare as ts

sList = ts.get_stock_basics()

sList.to_csv('./stocks.csv')