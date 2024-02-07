/*
All of the code within the ZingChart software is developed and copyrighted by PINT, Inc., and may not be copied,
replicated, or used in any other software or application without prior permission from PINT. All usage must coincide with the
ZingChart End User License Agreement which can be requested by email at support@zingchart.com.

Build 0.120315
*/
ZC = {
    AH: function(a, c) {
        for (var b = 0, e = a.length; b < e; b++)
            if (a[b] == c) return b;
        return -1
    },
    OBJCOUNT: 0,
    VERSION: "0.120315",
    CHARTS: ["null", "line", "line3d", "area", "area3d", "bar", "bar3d", "vbar", "vbar3d", "hbar", "hbar3d", "scatter", "bubble", "pie", "pie3d", "nestedpie", "mixed", "radar", "bullet", "vbullet", "hbullet", "funnel", "vfunnel", "hfunnel", "piano", "stock", "range", "gauge", "venn"],
    EQUIV: {
        floatbar: ["vfloatbar", "hfloatbar"]
    },
    cache: {},
    DEBUG: 0,
    SEQ: 0,
    BLANK: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    LOGO_ABOUT: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAAA1CAYAAABBVQnbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABu1JREFUeNrsXLFy4zYQBW9UR7wfSHh1iqMn6S3NxLXlLp3lL5D1ARlLkw+Q/QWiu3TW1Sqk65M5ukh9vPzAUV+gLMilDUMgAYigZUm7MzAliiDBxcPu2+XS3nq9ZiQkdaTF/3iet/UJ/vjr5wKFyz9//7dLKj0u4UboHamBpK54HEm2lgisTwgbH78ucBtDG+LnFKxSTOo9DkvU2rLvBFpH2hcKgFpCI9d2JELujMQNsd5CRFdVWKRU2G/syv7+hQWw6ePX6Nd/WELTcgScyGV0BiDqCG6wCyBa0rRQdEZC7sxaxri1ckNggRYKcr6A/ZlVA4tExPxYQAQubERqJBDtSu6hfYb2k0isoX2ztWoke06s6woRayLWJCQ5kkhIyBKR7FQIRCQEIpJjCPFn/xWR15D1fqTyEALRVtLBrU/qJhDZWB8OmFDaG8J+vk3JIhGITEQsUCtkgtslo4K1wwMRxPoBbAIXJ/Q8b3mQmpqvevD3VGFhuVV95PaXnbXTkr6h5M7j0mP3UDxMNo6g3TgCkSe5tiKb2QU3ttxD8PRRN7pFxkFxB+AYKc4hVyx04biDWGx1aqwPX+Yrbjmm0HqGPfwMbPPVOYIkPRA9yAZmYwG8Boi6gtnfJ1koXBeXhD1XGagDCN53vuoeksvabYi/ny5sogAHv4/xhhvK+c5UOj7E1Ts8BhC5zljv/8qbrzh3uZb2RgAeNY85a8dobWVLe40u8TgsEXDhEZJrHYnq46rTuS4XhK0nrW7uQmYw1lTTL5R4jFE/QQYK91VtUbjbmq8u4NNX2Q6zvNCuind1hPtMMot31k4MwB5iv0CylvaRXz6O3tO5VMGBLjozKUrDyVmw8szzFZwnEo5X1VA/RW9rdQ3KGBUxLYmGuHKG4nWk8aleqiz6XSFA5N/HuIgKZX6X7wuUGhlOxoME4FvoO1RGZ88uT6XPKAOuCgxm0aK6/8txLDPrukmci/EtDO54vP7th1HL0CpYAaiGnGtSDVnEBONJ4Xozi/Hx/Q9MX3bb2wCfKYByGWZhvt69T0pIeyF9/P1EAsGUPZcSM03/Hhx/UmnVcu533TixhgnyNRM0dgQgplGsPAkzYXwPzOzZnC7X81FBps0ln7DE4j7FFz7lhGSYWZ0CxLkF6pdEiin27WykHHILXKaLTuPRmQGAoidX8LoScOsD145xJQUVRD+2UJYM4scG7+Gly8ldqZxWOBc41UBB9q8UPEmcr54GRIXwBXn/ZDnzAMIzyhNVVTYKAAorAHTVgHL5pHOS+gEVkGqUcFnmWmB876F18Vzb5KmaijbjDAAiZ8k/jxVuWAXwZANAz5HirKR/mfBxXECbZeDYIpPe0riMsGKim8qBXMDEFy4hQv6tighD+C0usUJLOMetQOYTOFYVPe0KRHcl7nAGK98k8k0dUIKCXNemIq0SK1RF4LK8iEXIbCMzAUCi37flOJ8UUWGCoLNRctAQiBLrHioLkbvAIswP0CoHtcFcF0Sg6FEFgNIGAeSSg8RbWhZ5ctuW+ZZAmsQUXYwbyUHTR67kghQvnYMIk4k3OwKQS/Edgdh2omT9RRXE1hZAfaQYvmbx+MbWyNGzvXcSgKYaAL21h6hpRb5JFSiEliszxIjHVE6l798cAShQAChBIt7N8klnbQ/aCdvBK+hFUVqR7S1l8G8QQJznxCUvX/Zg/5005onWQnHXM18l0kq+wWjRZKI7TbgLtHD+i5CcR1RvRAp3VpUL4qt9AJMyMDznvcPkoxEZZ5uZ5iw9AWPm41ihhTB1TWPJIvdeJP3KZbrBr9wVnn20IMTBrkDka/iFDTf4/Mr3cMfUhWN83PYpfQ6W+epSuudpRmrP2rclZFf1zG7cIMfzS6zh9SuAyLfJE+2F8JpusDi3zMEzINF9Q/siKWwCkzRAy/coWIi+QrFO8i/SwpRBHeB1YixfuVRG1TmnSxwWyN0IJS7c9S8PojwWgDREblQFpIiZPi/iz8B4ZeKmmw8MwBobcSg7iaSoz3/isOXJyUK+sHpv2CQbwcaz686qLg7mNWoOJJY/9b5FpaWogBlGlnahdp7f+WBJjiPWRH11/mDXZPwp3r/La0dM88io1YD/LpR+r+FHY4MQWwxllcdiZClai09I7uPapDMHQ1dwFx3FORIcy11FYlHWRWKol0Tiavz8A+SAvgCcGK8xwwI50SqLlQK6OSmTLrrKU+m6yyJ/stcWCMb/sFaLLx3XKTmuZ31RzkdyTnL0khU17vrf7Tm4iT5TJ0kTXHlc2iUEmBe3vSco1APRIVgiH9rX9XbSJxgQiIob4WUh3y0BNCEIEIhUFmlqACbOoTo0/cSJtJZJwX8O959NvAUQkZDUkf8FGADBt38P1SQKxwAAAABJRU5ErkJggg==",
    IMAGES: {
        "zc.wm": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAAAuCAYAAADEHVzQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADIZJREFUeNrsW1loVUsWPefem5vJzDcaE4c8+6lpFHkQoziA0PqhHwoOCKI4fYmI5sMPQcTpww9/jIof/jigiOKE4oDoh7QKjYZGUFp9r+32paOJiZkHM9x7eq/bu/Iqlapzzo3X95ROQXFyzq1zqmqvvVftvasStL682FxHylcowWGCIWpAuR8B7A8ESAdOQPPc0lxHylcGSBV+wAUgW3lvpPyOAMnABD0sCdXRUJ89QoPJByhgACmNainVdKqdHhRnu4A0ApahhHxaj47aUCdVVVVNfvv2bZSuuH/PbR3p6kj3cnEkC4tfHSrfu0BtO7m6ZvtsY0u0FmCLGUd1Isl09LNnz3orKire0X0dgwRBxxSAbBfw4nUEoOFZkI6iSslipogfiouLQ3RfTJY0hq4WgxSQgFLXHPFcvrcNlvZ/XRKxoKBU/wLLURtKlvR3Db2VUS2hWkv1FQMUU63te7eiZFtQIMH2QuC1y5Yta0HFwzdv3vTh78rKyk4GwFLWrfylS5f+AFBxxb3G+xspX0hxskW8vnnzZgNdf8IPbW1tDt//QrVDsc7JAKW8vDzuMfJ1NrX/F13/MQJBcp0EW3IUUKeS8Eubmpqcx48fP6f7j5p3F+jokKgAbe8zvUUFzY1QXGIWZBssSSzwsCQIup8tx9HENu+J/sKwnL1792bt37+/vbq6OipRofMVhRUfw/cMesgFENtHgInSYnhHlJ+Z/ipwA3Do/m/0Z1OywLEHq63t8buqbIMffGNg6iJ99e+AJpswnJTNZHjkyfTiJMHrlMnSuPa6q/bv4QLlg+J8K4vlAoi67gQs74y13EEu1c9UuzVCiSngDFAmySSWIDi2h/KYhOC4ZDscyZicJAFkJwiQY6K4gJLSMSVELQM4uE4ix2Eiud79r1+/BpV1GTIHQ7QGQleFYqAn2+DA6MbpmcEw1AFhD9OabA+WcgNnIGg37fEElMBU3V7Q0QdqAQCC13b06NHOHTt2fOCsQr1CZaoFWS45Ozc6tg05QjcriilXx8Wyvcbk1wM20a+3khgmGeJgMt/npPGxXgJk8rp169JmzpwZfv/+fYxqf0VFxa/023MXIZjWBRMd6KhNVqqwNHbBED0I16g2KOAUUk1lKv5goF41l+gVK/pxsGyDcgzpV+fFYaJ5RFMVixYtSvGrKvfv3+9z0aKQlJML+ATI9qmRsmJNjEQiJWvXrk2l8afm5OTE29bU1MQePnzYW1VVBZAaGYwCUqiySZMmBaVsfJ3GymM+rNrxyF2q63gOr9MWO03d/DwmycnRTVJQ2o804D9v37490y9ATGmwlgKJ4uo5eP2koTi/ANkeExfBc+n69evHHT9+PDsrK0ur7bDq1atXt1JQDaFkPn36tATWzjnEGs5sRBVwYpr+HRcvUR27ykA5pDw/CeUnGSH78jP3G1X7Dw0zu+CW20OOLgwngbUD3lyKwq0xAziOx4Jq4vQSgHPmzJkcGYx79+71wIpmz54dLi4uDqDeuXMnd8mSJRaB1KoZewqDHVMzHMPMGQY0TkwewBHKTwCNpctbw7pnh6zklrh2USAqnIIcMSip0w7OPBQw/6O0MvVEJWGk8hqRLrVp47VFCKoZ7YnWimA5YhDIVuzbt0+0D9Lv+SdPnsxavnx5GqyLfs8gIbVpxo5seyaPr53XrF6FqiNUM3h8UW7XwopoMcgitdXO8xnN7T9Z+l3sUqr/YaqTt2ccW7OdEOIB4KUx6pfmzZuXAi2UaQTZbHre0tjY2EbUWCSeM7fXY69IXqtgXYcOHRo1fvz4eBB869atHhLwZ3r/Awu9cOrUqaN37dqVOX369KBoc+HChZ6tW7cKwKwTJ050kyvfQN+fIDTy9OnT3Zs2bXonLfoo6QQSdn4jYtzIBRLF5QqKI6tq3bNnT8bcuXNTWltbnUePHvXymH5l5SmGImzbti1txowZKRi7aIdx0TjquM8SGs9E3VyPHTvWXV5eHkIf6FcsDWxJ/4QoqfaxgsStV13EQlxTGHG55tEAc58/f14AqhBCam9vd2hyLUQZ0LZcOTHK3N4iPwOYU6ZMGeJ84DmBAsvrIrALVSUQfcnPsMVB1tpBwhkjvllWVtZI969Zo+X1YywJYQKcAgHuuXPnsoXHie+q/fGYIPgWGtM43ZjEuAi4trNnz8IKCsV8Hzx40DNr1qyweAdgmNZ1Th7/VQKoXwVItqCwBAwOhhQQOAUEQq4sXAmcZqagEi+A3MqGDRtab9++3StrulthgHrF9yWB/qK4rhbPTdAqvp1BFlQkNBlzuXLlyue2trbYqlWr0oUSVlZWghXaa2trx4pn165d+0yeYTQ7OzuwcuXKOG0C5JKSElhQijpfEXJ4WNBbtqB+CSSjkyBbFSglSwUHhcFpYa71XaBZoIY1a9akyd/E4PPy8myVPnfu3NmJ524emtiXkjhcV1okRczQzCXubV66dClC48O6acHiCPRUAQ5TaB1TUID6HAOr4N+HMAPAXLFixSdu30pWFibAxwmACJhO67ezHLYpm22KzDGJ3KtXrxao4ECzaEJt0jaDrwKB0wKNTHZPdXV17o0bN3Ll3xcsWBCW7zdv3tzB/dgA6ciRI9lfkHbBfLJUQWBM1EcXr3/w8HLk34kxW4mCBF3CacgkRrHnzJmTsnjx4rCpU1gOg1PHlGuzk6OWD2w1vrYbZMrLJ3CK4f2o4JAWNLOXFEsEoLt37/byJLuJnjLU34XjIAoJS5g7AkrXZCpRjm0N3cYXYIyi+GOKiD+wBmksz2R98BTtw4cPj4LTIrTfq8DNt/53XrDbI53luO0HGWMLclWLVHBg4hpwEs1XOaYIHZ6RfE/0EiANhlADsCDNK/3C8UCl9unUPixprCgRopP0hQsXxl37gwcPdhnGNKQPAidHXhfRH7ITL1++7J82bVpIfFNDuWosZVnuZwQdXSBlaVInhTSZEuyAqnxK/NvO6xJc8LG8xzOOYxa/JcZWMaRg0vI9XFQ4KiT4tN27d2doXukmN1fEIBZcc3YG5Og9Qu/nCEGCesh97tUISUTygwpcawEO2IO+1UCW+JFk9FEdr0H4/bJnZpCHFqSAIYMQQdJT/QqsCR6KrpJHNCZBgLScK1OP3OerV68iOvccloJ4BV4YbjZu3JhOlg+l+ZGVZzzyc7TWDawrly9f7tb0LwtyUCHLHZDT+fPne5iyAHAqPDKfyqgFCNSJMbLnPASkRI9dJav0c4Z5SCF66hSupy7e0DyOkjU0Iw4RD2D55BYXnzp1qpTW0AmgJwEu6InpzdEA1KdTnObm5gGhIg5EMI5KfRTJ6xE908U4UTeAKLbKoXGK3WZXinPc1oYkl6iUQhkCHlFHA2IixFEyvcogKN/6SO5rHeIiASLcXliTSO+IuIwzHjWJAAQLBbDiu3CrhWsNuhTtDEFoTAk+62SWAMAYJy8XQyguZAConqLswidPnvT5lTjSOnRpIu3PdHvG2xItbEGN6m9YK0Q6B/0fOHCgC8EoqIyAG+SS47gXfwe/16AdxS192G6Auy48Qizo169f7yEQP3F+DW5+H80xgj54nPUsSIBZL8aFMQFQAja+Fs2fPz+MBOyLFy+iZJ091GcnWU4uqA7P5DnxXJsU2sROc21ZWZklp604sTzE6TJtN4TY5NJdNutUr0RsisnOQg9nGCJKsCgsAfRQJPXRRQD9CeuNHEvwmmGRg5IhrAGWQm414osXiqckkrNZnAUR42i2fjtJJGoht/nMsYooqTx/i8fawUFoIX83yFv5rfwuno9il7qOnRSH+2xWM9QiP8hzFzKskdJTA1kQr+3ukGG72+3whW4rXH4npgw2qPT5A2nmRNW9VwvHYu94YlFNake3dWI6F+Eo5wFszfZ+QLMbqm7axVy20E1b97ptmIHvBD22sWPK3oiuxpSrn3YxaWtBHVzfxYsX+/Pz89OJokJqagfryJYtW9qJrkAJ/1b4XbfZZppDTNPeMeyo6r6TiFxiHsqhrv+DziSYdinlTSbLY8PK65+0LJedR531CvOPMA3KpYPXiwYNKKol+A0ITWchTAc+LA85+DkMY1ouBv3tdXDR67+2HR8D9mobcFkLA5pQQNVcdWva75i82rnt5vr9tuNxZsFLVo7t8tJw/lt7uOfHdFYbVCzYMvD7cI9JJQqQH1k4SZKJk6jgh3tOwa8QTKdfApqF2LL0h0+cBKzjS7f1k62kxhK0vq3iGBZO06KdyMHH77IEv9Fx6UAyHSi0fgerGQHIJXZy/gAa+2bKfwUYAAo3QiQ93kweAAAAAElFTkSuQmCC",
        "zc.logo": "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAAA8CAYAAABbyDl1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACGZJREFUeNrsXF9oFEccno2XRE1SI9ZQLcY0oIW21miQKoi5UPtiK7m+1GKhuWDrg7Z4+lILihGF6oueUH2w2pwFxT71gtonWy9SUJDEmKK0CvGikGtjg4mJ5p9xOt8mt5ndm93bTfaS3DkfLGxu525nZ779/b7vN6MKpZRISDhBlhwCCafwTLcO/XchRDsvhtTzeR/5yasb/YqcJkkaSwzGoqS3sUE9Lyj3yhmS6Uki4yNN7PFftH+oRz1/o2iVTBMSKhQr9/Tj7zU0+uiGel5TWZcS4vAaRk1P7VGWotrU85wFi0nOwhLtmtQ4UtMkaJjEa20agaTGkZpGIlPS0/2OGzTacUP7++b9MOl61q6el5VUkbl5r2vXKt/Z5lqa6GmMaJ3ovBAinRfPjKajajJvo5+PNDI1Tbf0BMJcuX1C2LA5Wq/7m5HGtU7wZOAJBD0jiSLTk0SmRZqSolWkkmyzlZ4kpKaZMsttpXFkapKWe1waR0JqGolMT09yGUHCMWkkJGR6kpCkkZCkkZCkkZCkkZCQpJGQpJGQpJF4yUnj/aOD4pDDnRmYlAXLhs4BOdIy0ki8zEjZ2hPSkVmEqZiXSyJri+QCaCakp9pTZyfMoNovPssYMjT3DNPI4+ck/Oh5wrVCj0J88z3EvzDH9HlrWwe08awtzc2YcdEiTaSphVZu/3bCP3jl+HfEu/Jd3QAp9Q/Vm9CqRWkzcP7bffRMbChpuznstfMvyCHBN2fqno2RjVY2Phsbl/LZxDvXM+2fH/3WsoVJfz1EIiG6+G49I2399oJuNwtCxx4OksJshWZCNDEQnYqIMymkgYZJFxgJs5gFkEBxDikrmKF91jVE1ZTFR6L9rQOkZKZCrdKVtNxOQl6aiF5GGMoTpnpBNgm9PUvYd19RNtMz2WpU6h6VPIG7/dA4L48Qhg5heiRpTG6+20p2HvtBeK16w/sJeiZdgFxezwleaBUzwvA5n6UkuvPugJaqoIWSfS+jIo2dCfd9c1BIrIoVy0ho7y7t+6FLlyk7dG3KlpaSYGCr2sa7bTe1e02977rVJPCpz7R/4YZrNHz1GonGOsYcTkEe8W9YT3wVaxSr+wHBB4N651NqL6UGinMV9l0tQsFtOXVkcGK4H0uBwucLPhigzT0vSLT/hdDFeefOUPthvBZqH6TR0X6hDUge7hiiIZZWu5jebXg8rAr0aB9+O3FaQ+1D7HmGKf99x+mp7POvaHfv04TPly95g0ROHNJ1Ohr7lzTc/NP0t0TXQLRA8CQR3QPta0+fo5HjhzDhip7IB2j91evC++DzfVs2U6u+qO24SRzRMfZFbXj5bHUSrAAdVHa9l97qfWF6/5vv5VEjcQJ/91MI7WR9j/ZRanRwIAeIoYKRkpGDIoV2G3ita8dB5x7Z9xlp1NMsJ4S5de++kDDNP30/4XAMkpkRRnMq7BojiP4tPB82JYwmUk+fs20zVRLOz3bUd0w03sL4IbTwd/qIGWF4EW6s8yQjTBxox9eFBBGO1NxJJEzKhLAZYebk57lCGKDtnw7b7ZCKkHLUgU1CCHt6ZtigVWa4rgMwWSJhzUcfpDikDyayldG0pLWrmu9BRFOs6klob5ZW45EUUZQX6yB5pHyMBsrlJzRZbSkpafwHjpgSBqnCTeA3Q3t2qlpEDfssghz7uT7xrbnXCp2CyJSQLhe/VkTCh/dqKYwJd+o/eISInsEMhdnu61hMlkggN6/OV/iJamYE8hWNRD8+KogIo6YW9puMNDROzGSFyOjaAiWlkQaEOfPrb6aEMWqLiSKwqYrEI8ioMAdpTENupKklsc8frtf1C+dM8LpS7Z4I7AprPgKguBYXu2aA2LX7m8GlM1Nbp8FbLCKMyvrDe1wnjDqwgnUruDIzESuKHqLfGHWFU7qfp2SW8w0FVssOiETQKUzH2IviWO5wqfAoJA1cjCgtAHUsfaRrLcZ0QvWmQ9U4cadgB7DRvHtyc40JGgf2PG63RS7HplhPTZ0mTpiag0dNCcPCf8YVrowDijfYCZgY1Tkjuv4VdyIvc0P7TSIJNBKIDTKNl0jjRZaxQGZGmH1bNk87wkD0iop8dj4zWuY5HnHNxg54wlS45LyQfnjCwD3BzTBCKjggaCGCnURE10kz4jLEhMHywHTcJ4OqbsLbefqsrc8SNFyxXqh6G5/a0kBGIVqW7w5p+Ap13G5Pl60VY2tP23ebFtYgiNlhaxARkSaLYL51a4ixsAdxXPjBJ7RsSalmz60Khpy7UVCuj9tWhHxUY41VVkEK0U92kvZ2oddI5kTsGqJTF2nsDOx0A9KlKEXhWeC4cDh5LqMtRpUVxDFLH4WRJ7pV8R2LUrPCjXUn00gXG0zZ+JoRMu03lkd/qVNQN7LC0R1f2qsTFecq+wTEATmQruIHqrjYrMQX05bnZ7kWZUYd2Fikjw2p6RJOCmTFgUow+mUs6KHNRO7LazssfcSfmU/DGfGvEVBorFq3Wnhtx6Yqy9VxUZqqe0tfBMPEIF3FD+MaEpYHUNl1tWbF+sFPIO77cUufurMOB4iEfoGsPNDGag0qacrn1t345+ZXwTNiuycKjVg6UAnU1DK2x3Wc9SQUwZijotArVk4Kk4qU5mRF3NHLUJ5HzPoAy417o6+IBG7ZbjiyQo9iuVCa1v99GggSadJXi70rlyWQBc5wRfXX4xbsoje3ZGThb9LcDL8Sj2UF4xYKOxvCXXdPaalnYh0J2x5Cl4qgc/RaJXhS6LycpIqpftZkRJhMO572/1Ej7LVT54f1LOOmMYlxWO50RTCw1Zk7YE7L6XckMizSxLVN7alzJNmWTuwyDO3ZlZIVekmadI4858O0S5CuoGEkWSRpJKSmkUgX/C/AAC1LYqunMJ6bAAAAAElFTkSuQmCC",
        "zc.menu-item": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAcCAIAAAAvP0KbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjbQg61aAAAANklEQVQYV2NgAAK/wCAGc2t7KLYD0kBsBcFmKNgWyAdiSwQ2BbIh2AaCLRDYBMg2sbBGYHNrAPhFEmI4BJ+zAAAAAElFTkSuQmCC",
        "zc.menu-item-hover": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAcCAIAAAAvP0KbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjbQg61aAAAAZElEQVQYVwXBUQbCAAAA0PddnavbTEnJSJJIMisz01oiIhERMZHEkm7QbfaeRrOlXf7Z/dh+yT9sKrI36YvkyfpBXBLdWd5YXJlfmJ2ZnpgcGR8Y7QkLhjmDjH5KL6G7ohMTRDV0SCDzyIdIlgAAAABJRU5ErkJggg==",
        "zc.menu-top": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAARCAMAAADub6yxAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAMAUExURQAAAAECAgMDAw8PDxARETo+Qjs/Q0FFSUJGSUJGSlFUV1FUWFVXWWlrbWlrbmpsbw" + Array(960).join("A") + "MXKSHsAAAEAdFJOU" + Array(341).join("/") + "wBT9wclAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGXRFWHRTb2Z0d2FyZQBQYWludC5ORVQgdjMuNS420IOtWgAAAF9JREFUKFOtzcsWgCAIBFCi0DKr//9aEyygx1KW9wwzUH4POjOOVmjdmI9JXRnzuuzqN1cNwfxiUeeNMYmaC6uqM2NKpDdvvFv5oUSRHcrgs/zEDh8Vh3e25cGt2W48AaJPyYvmdVJ/AAAAAElFTkSuQmCC"
    },
    hosted: false,
    adapter: "",
    orientation: "",
    flash: null,
    canvas: null,
    svg: null,
    vml: null,
    move: false,
    compat: function() {
        ZC.flash = ZC.canvas = ZC.svg = ZC.vml = 0;
        var a = !!document.createElement("canvas").getContext,
            c = 0;
        if (a) c = typeof document.createElement("canvas").getContext("2d").fillText == "function";
        ZC.canvas = a && c;
        ZC.svg = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1");
        a = document.body.appendChild(document.createElement("div"));
        a.innerHTML = '<zcv:shape id="vml_flag1" adj="1"/>';
        c = a.firstChild;
        c.style.behavior = "url(#default#VML)";
        ZC.vml = c ? typeof c.adj == "object" : true;
        a.parentNode.removeChild(a);
        a = 0;
        if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) a = navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin;
        else if (document.all && navigator.appVersion.indexOf("Mac") == -1) a = (new Function('try {var xObj=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(xObj){xObj=null; return true;}} catch (e){return false;}'))();
        ZC.flash = a ? 1 : 0
    },
    quirks: function() {
        return !(document.compatMode &&
            document.compatMode == "CSS1Compat")
    }(),
    ie67: function() {
        return /MSIE (\d+\.\d+);/.test(navigator.userAgent) ? parseFloat(RegExp.$1) < 8 : false
    }(),
    ie678: function() {
        return /MSIE (\d+\.\d+);/.test(navigator.userAgent) ? parseFloat(RegExp.$1) < 9 : false
    }(),
    mobile: function() {
        return /Mobile|BlackBerry|Opera Mini|PPC|Windows CE|Android/.test(navigator.userAgent)
    }(),
    ipad: function() {
        return /iPad/.test(navigator.userAgent)
    }(),
    iphone: function() {
        return /iPhone/.test(navigator.userAgent)
    }(),
    OQ: [],
    S9: [],
    FG: [0, 0],
    LG: null,
    ET: function(a,
        c, b, e, f) {
        if (b == null) b = 1;
        if (e == null) e = 1;
        if (f == null) f = 0;
        for (var g in a)
            if (a[g] instanceof Array) {
                if (e) {
                    if (c[g] == null || g != "override" && !f) c[g] = [];
                    for (var h = 0, k = a[g].length; h < k; h++) c[g].push(a[g][h])
                }
            } else if (a[g] instanceof Object && !(a[g] instanceof Function)) {
            if (e) {
                if (c[g] == null) c[g] = {};
                ZC.ET(a[g], c[g], b)
            }
        } else if (c[g] == null || b) c[g] = a[g]
    },
    _cpa_: function(a, c) {
        c || (c = []);
        for (var b = 0, e = a.length; b < e; b++) c.push(a[b])
    },
    QB: function(a) {
        for (var c in a)
            if (a.hasOwnProperty(c))
                if (ZC.AH([".", "#"], c.substring(0, 1)) ==
                    -1)
                    if (a[c] instanceof Array) {
                        if (ZC.NX(c) != c) {
                            a[ZC.NX(c)] = [];
                            for (var b = 0, e = a[c].length; b < e; b++) a[ZC.NX(c)].push(a[c][b]);
                            delete a[c]
                        }
                    } else if (a[c] instanceof Object && !(a[c] instanceof Function)) {
            if (ZC.NX(c) != c) {
                a[ZC.NX(c)] = {};
                ZC.ET(a[c], a[ZC.NX(c)]);
                delete a[c]
            }
            ZC.QB(a[ZC.NX(c)])
        } else if (ZC.NX(c) != c) {
            a[ZC.NX(c)] = a[c];
            delete a[c]
        }
    },
    PP: function(a, c) {
        for (var b in a)
            if (a.hasOwnProperty(b)) {
                var e;
                if ((e = b.replace(c + "-", "")) != b) {
                    a[e] = a[b];
                    if (a[b] instanceof Array) {
                        e = 0;
                        for (var f = a[b].length; e < f; e++) ZC.PP(a[b][e],
                            c)
                    } else a[b] instanceof Object && !(a[b] instanceof Function) && ZC.PP(a[b], c)
                }
            }
    },
    XZ: function(a) {
        for (var c = "", b = 0, e = a.length; b < e; b++) {
            var f = b % 2 == 0 ? b : a.length - b;
            f = a.substring(f, f + 1);
            c += f
        }
        return c = c.replace(/\./g, "d")
    },
    A0R: function(a) {
        a = a;
        a = a.replace("*", "&");
        a = a.replace("9", "3");
        return a = a.replace("l", "1")
    },
    R3: function(a) {
        return a.replace(/[a-zA-Z]/g, function(c) {
            return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26)
        })
    },
    A03: function(a, c) {
        var b = ZC.O8(ZC.ZI(a)),
            e = ZC.O8(ZC.RT(c)),
            f = b.length;
        if (f == 0) return "";
        for (var g = b[f - 1], h = b[0], k, l = Math.floor(6 + 52 / f) * 2654435769; l != 0;) {
            k = l >>> 2 & 3;
            for (var m = f - 1; m > 0; m--) {
                g = b[m - 1];
                g = (g >>> 5 ^ h << 2) + (h >>> 3 ^ g << 4) ^ (l ^ h) + (e[m & 3 ^ k] ^ g);
                h = b[m] -= g
            }
            g = b[f - 1];
            g = (g >>> 5 ^ h << 2) + (h >>> 3 ^ g << 4) ^ (l ^ h) + (e[m & 3 ^ k] ^ g);
            h = b[0] -= g;
            l -= 2654435769
        }
        return unescape(ZC.ZN(ZC.U1(b)))
    },
    A2B: function(a, c) {
        a = escape(a);
        var b = ZC.O8(ZC.RT(a)),
            e = ZC.O8(ZC.RT(c)),
            f = b.length;
        if (f == 0) return "";
        if (f == 1) b[f++] = 0;
        for (var g = b[f - 1], h = b[0], k, l = Math.floor(6 + 52 / f), m = 0; l-- > 0;) {
            m += 2654435769;
            k = m >>> 2 & 3;
            for (var o =
                0; o < f - 1; o++) {
                h = b[o + 1];
                g = (g >>> 5 ^ h << 2) + (h >>> 3 ^ g << 4) ^ (m ^ h) + (e[o & 3 ^ k] ^ g);
                g = b[o] += g
            }
            h = b[0];
            g = (g >>> 5 ^ h << 2) + (h >>> 3 ^ g << 4) ^ (m ^ h) + (e[o & 3 ^ k] ^ g);
            g = b[f - 1] += g
        }
        return ZC.ZS(ZC.U1(b))
    },
    O8: function(a) {
        for (var c = Array(Math.ceil(a.length / 4)), b = 0; b < c.length; b++) c[b] = a[b * 4] + (a[b * 4 + 1] << 8) + (a[b * 4 + 2] << 16) + (a[b * 4 + 3] << 24);
        return c
    },
    U1: function(a) {
        for (var c = [], b = 0; b < a.length; b++) c.push(a[b] & 255, a[b] >>> 8 & 255, a[b] >>> 16 & 255, a[b] >>> 24 & 255);
        return c
    },
    ZS: function(a) {
        for (var c = "", b = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b",
            "c", "d", "e", "f"
        ], e = 0; e < a.length; e++) c += b[a[e] >> 4] + b[a[e] & 15];
        return c
    },
    ZI: function(a) {
        for (var c = [], b = a.substr(0, 2) == "0x" ? 2 : 0; b < a.length; b += 2) c.push(parseInt(a.substr(b, 2), 16));
        return c
    },
    ZN: function(a) {
        for (var c = "", b = 0; b < a.length; b++)
            if (a[b] != 0) c += String.fromCharCode(a[b]);
        return c
    },
    RT: function(a) {
        for (var c = [], b = 0; b < a.length; b++) c.push(a.charCodeAt(b));
        return c
    },
    _i_: function(a) {
        if (String(a).indexOf("e-") != -1) return 0;
        a = String(a).replace(/[^0-9\.\-]/gi, "");
        if (a == "") return 0;
        return Math.round(a)
    },
    _f_: function(a) {
        return parseFloat(a)
    },
    _a_: function(a) {
        return Math.abs(a)
    },
    _b_: function(a) {
        if (a == "false" || a == "0") return false;
        if (a == "true" || a == "1") return true;
        return a && true
    },
    _p_: function(a) {
        a = String(a).replace(/[^0-9\.\%]/gi, "");
        var c = a.indexOf("%");
        if (c != -1) {
            a = a.substring(0, c);
            a = ZC._f_(a) / 100
        }
        return a
    },
    M7: function(a) {
        if (ZC._f_(a) + "" == a + "") return ZC._a_(a);
        else {
            a += "";
            return a.indexOf("%") != -1 ? ZC._f_(a.replace("%", "")) / 100 : a.indexOf("px") != -1 ? ZC._f_(a.replace("px", "")) : ZC._f_(a)
        }
    },
    JS: function(a) {
        return parseInt(a, 16)
    },
    IZ: function(a) {
        return ZC._i_(a).toString(16)
    },
    _r_: function(a, c) {
        return parseInt(a + (c - a) * Math.random(), 10)
    },
    _l_: function(a, c, b) {
        a = a < c ? c : a;
        return a = a > b ? b : a
    },
    DK: function(a, c, b) {
        var e = ZC.CO(c, b);
        c = ZC.BN(c, b);
        return e <= a && a <= c
    },
    BN: function(a, c) {
        return Math.max(a, c)
    },
    CO: function(a, c) {
        return Math.min(a, c)
    },
    A13: function(a) {
        for (var c = -Number.MAX_VALUE, b = 0; b < a.length; b++) c = ZC.BN(c, a[b]);
        return c
    },
    A14: function(a) {
        for (var c = Number.MAX_VALUE, b = 0; b < a.length; b++) c = ZC.CO(c, a[b]);
        return c
    },
    A2W: function(a) {
        a = a.split(".");
        return a[a.length - 1] || ""
    },
    GS: function(a) {
        return a.replace(/^\s\s*/,
            "").replace(/\s\s*$/, "")
    },
    NR: function(a) {
        return ZC._a_(a) > 0 ? Math.log(ZC._a_(a)) : 0
    },
    V4: function(a) {
        return a * 360 / (2 * Math.PI)
    },
    OJ: function(a) {
        return a * 2 * Math.PI / 360
    },
    CT: function(a) {
        return Math.cos(ZC.OJ(a))
    },
    CJ: function(a) {
        return Math.sin(ZC.OJ(a))
    },
    OE: function(a) {
        return !isNaN(parseFloat(a)) && isFinite(a)
    },
    CE: function(a) {
        if (a.indexOf("-") != -1) return a.replace(/(\-[a-z0-9])/g, function(c) {
            return c.toUpperCase().replace("-", "")
        });
        return a
    },
    NX: function(a) {
        if (a.indexOf("-") == -1) return a.replace(/([A-Z0-9])/g,
            function(c) {
                return "-" + c.toLowerCase()
            }).replace("-3d", "3d");
        return a
    },
    A2R: function(a) {
        return ZC.Q1.md5(a)
    },
    AJ: function(a) {
        return document.getElementById(a)
    },
    RA: function(a, c) {
        return a[0].length < c[0].length ? 1 : a[0].length > c[0].length ? -1 : 0
    },
    SL: function(a) {
        window.setTimeout(a, zingchart.TIMEOUT)
    }
};
ZC.MAPTX = ZC.ie67 ? 40 : 0;
var JSON = window.JSON || {};
JSON.stringify = JSON.stringify || function(a) {
    var c = typeof a;
    if (c != "object" || a === null) {
        if (c == "string") a = '"' + a.replace("\\", "\\\\").replace('"', '"') + '"';
        return String(a)
    } else {
        var b, e, f = [],
            g = a && a.constructor == Array;
        for (b in a)
            if (typeof a[b] != "function") {
                e = a[b];
                c = typeof e;
                if (c == "string") e = '"' + e.replace("\\", "\\\\").replace('"', '\\"') + '"';
                else if (c == "object" && e !== null) e = JSON.stringify(e);
                f.push((g ? "" : '"' + b + '":') + String(e))
            }
        return (g ? "[" : "{") + String(f) + (g ? "]" : "}")
    }
};
JSON.parse = JSON.parse || function(a) {
    if (a === "") a = '""';
    return eval("(" + a + ")")
};
ZC._ = ["background-color", "angle-start", "angle-end", "graphid", "line-width", "values", "-node-area zc-node-area", "-scales-fl-0-c", "-scales-bl-1-c", "placement", "slice", "value", "labels", "series", "decimals", "thousands-separator", "decimals-separator", "-print-c", "graphset", "value-box", "outer", "width", "height", "size", "-hover-c", "enable-guide", "zc-abs zc-layer", "exponent-decimals", "3d-aspect", "x-angle", "y-angle", "z-angle", '" coords="', "undefined", "rgba(255,255,255,0)", "rgb(255,255,255)", "-node-area ", "-plotset-plot-",
    "http://www.w3.org/2000/svg", "http://www.w3.org/1999/xlink", "skip_context_menu", "skip_segment_tracking", "skip_marker_tracking", "skip_interactivity", "use_fast_mode", "use_fast_markers", "use_single_canvas", "If-Modified-Since", "Thu, 1 Jan 1970 00:00:00 GMT", "mousedown", "mousemove", "mouseup", "scale-x", "scale-y", "scale-v", "preservezoom", "toggle-action", "enable-animation", "enable-preview", "margin-top", "margin-right", "margin-bottom", "margin-left", "Network error", "URL Data loader", "loader.gui.context-menu",
    "-menu-item-exitfullscreen", "transform-date-format", "transform-date", "bg-image-width", "bg-image-height"
];
(function() {
    var a = 0,
        c = /xyz/.test(function() {}) ? /\bb\b/ : /.*/;
    ZC.BT = function() {};
    ZC.BT.B2 = function(b) {
        function e() {
            !a && this.$i && this.$i.apply(this, arguments)
        }
        var f = this.prototype;
        a = 1;
        var g = new this;
        a = 0;
        for (var h in b) g[h] = typeof g[h] == "function" && typeof f[h] == "function" && c.test(b[h]) ? function(k, l) {
            return function() {
                var m = this.b;
                this.b = f[k];
                var o = l.apply(this, arguments);
                this.b = m;
                return o
            }
        }(h, b[h]) : b[h];
        e.prototype = g;
        e.constructor = e;
        e.B2 = arguments.callee;
        return e
    }
})();
ZC.YI = function() {
    this.A0G = function(a, c) {
        var b = this.AQ.palette;
        if (c != null && b[c] != null) b = b[c];
        if (b[a] != null) {
            b = b[a];
            if (b[2] == null) b[2] = ZC.BV.L0(b[1], 5);
            if (b[3] == null) b[3] = ZC.BV.L0(b[1], 5);
            return b
        } else {
            b = ["#B4A500", "#421E52", "#4C5A7F", "#741740", "#B89F33", "#E56000", "#95001F", "#43A200", "#CA0000", "#4A6744", "#9A78C5", "#A9DB00", "#FFCE0A", "#B4C0CB"];
            b = b[a - this.AQ.palette.length] != null ? b[a - this.AQ.palette.length] : "#" + ZC.IZ(ZC._r_(40, 120)) + ZC.IZ(ZC._r_(40, 120)) + ZC.IZ(ZC._r_(40, 120));
            var e = ZC.BV.L0(b, 10),
                f =
                ZC.BV.L0(b, 20),
                g = "#FFF";
            if (this.AQ.palette && this.AQ.palette[0] && this.AQ.palette[0][0]) g = this.AQ.palette[0][0];
            return [g, b, e, f]
        }
    };
    this.WZ = function(a) {
        ZC.ET(a, this.AQ, true)
    };
    this.V7 = function(a) {
        this.PZ[a] != null && ZC.ET(this.PZ[a], this.AQ)
    };
    this.PZ = zingchart.THEMES;
    this.PZ.zingchart = {
        palette: [
            ["#fff", "#6a921f", "#a7da47", "#89b92e"],
            ["#fff", "#007fa3", "#00b0e1", "#0392bb"],
            ["#fff", "#a62b02", "#ef4810", "#cc3300"],
            ["#fff", "#b79007", "#f9c332", "#da9b04"],
            ["#fff", "#563d02", "#84680a", "#6e4503"],
            ["#fff", "#0b32a0",
                "#4d62b1", "#1540a0"
            ]
        ],
        graph: {
            refresh: {
                curtain: {
                    alpha: 0.5,
                    "background-color": "#999",
                    color: "#000",
                    "font-size": 15,
                    bold: 1,
                    text: "Loading..."
                }
            },
            "background-color": "#e1eaec #edf3f5",
            title: {
                "font-size": 14,
                bold: 1,
                color: "#fff",
                "background-color": "#00bbf1 #05a0cd",
                padding: 6
            },
            subtitle: {
                "font-size": 11,
                bold: 1,
                color: "#333",
                "margin-top": 30,
                padding: 6
            },
            source: {
                "font-size": 10,
                color: "#333",
                width: 0.9,
                bold: 1,
                "text-align": "right",
                height: 20,
                margin: "auto 0 0 auto",
                padding: 5
            },
            SCALE: {
                "font-size": 11,
                "line-width": 2,
                "line-color": "#3e6c7b",
                "ref-line": {
                    "line-width": 0,
                    "line-color": "#3e6c7b"
                },
                guide: {
                    visible: 1,
                    "line-width": 1,
                    "line-style": "dashed",
                    "line-color": "#2c4a59",
                    alpha: 0.2
                },
                "minor-guide": {
                    visible: 1,
                    "line-width": 1,
                    "line-style": "dotted",
                    "line-color": "#aaa",
                    alpha: 0.1
                },
                tick: {
                    visible: 1,
                    size: 6,
                    placement: ZC._[20],
                    "line-width": 2,
                    "line-color": "#3e6c7b"
                },
                "minor-tick": {
                    visible: 1,
                    size: 4,
                    "line-width": 1,
                    "line-color": "#3e6c7b"
                },
                label: {
                    color: "#2c4a59"
                }
            },
            legend: {
                "background-color": "#fff",
                "border-width": 1,
                alpha: 0.75,
                "border-color": "#666",
                "shadow-distance": 3,
                header: {
                    padding: "4 0",
                    color: "#fff",
                    "border-width": 1,
                    "border-color": "#3e6c7b",
                    "background-color": "#3e6c7b"
                },
                footer: {
                    "background-color": "#ccc",
                    "border-width": 1,
                    "border-color": "#666"
                },
                marker: {
                    "border-color": "#333",
                    "border-width": 1
                }
            },
            plot: {
                marker: {
                    shadow: 1,
                    "line-width": 1,
                    "border-width": 1
                },
                "hover-marker": {
                    "line-width": 1,
                    "border-width": 1
                }
            },
            guide: {
                "line-width": 1,
                "line-color": "#333",
                alpha: 0.5,
                "scale-label": {
                    text: "%l",
                    padding: "3 6"
                },
                "plot-label": {
                    padding: "3 6"
                }
            }
        },
        line: {
            plot: {
                "shadow-alpha": 0.5,
                marker: {
                    size: 4
                },
                "hover-marker": {
                    size: 5
                }
            }
        },
        area: {
            plot: {
                "shadow-alpha": 0.5,
                marker: {
                    size: 4
                },
                "hover-marker": {
                    size: 5
                }
            }
        },
        vbar: {
            plot: {
                "fill-angle": 90,
                shadow: 0
            }
        },
        hbar: {
            plot: {
                "fill-angle": 180,
                shadow: 0
            }
        },
        stock: {
            plot: {
                shadow: 0
            }
        },
        vbullet: {
            plot: {
                shadow: 0
            }
        },
        hbullet: {
            plot: {
                "fill-angle": 0,
                shadow: 0
            }
        },
        scatter: {
            plot: {
                marker: {
                    size: 4
                },
                "hover-marker": {
                    size: 5
                }
            }
        },
        bubble: {
            plot: {
                marker: {
                    "border-width": 0
                },
                "hover-marker": {
                    "border-width": 0
                }
            }
        },
        pie: {
            plot: {
                "border-width": 1
            }
        },
        nestedpie: {
            plot: {
                "border-width": 1
            }
        },
        radar: {
            plot: {
                marker: {
                    size: 3
                },
                "hover-marker": {
                    size: 4
                }
            },
            "scale-k": {
                guide: {
                    items: [{
                        "background-color": "#eee",
                        alpha: 0.5
                    }, {
                        "background-color": "#ddd",
                        alpha: 0.5
                    }]
                }
            }
        },
        gauge: {
            "scale-r": {
                "background-color": -1,
                guide: {
                    items: [{
                        "background-color": "#eee",
                        alpha: 0.5
                    }, {
                        "background-color": "#ddd",
                        alpha: 0.5
                    }]
                },
                ring: {
                    items: [{
                        "background-color": "#e9e9e9",
                        alpha: 1
                    }, {
                        "background-color": "#c3c3c3",
                        alpha: 1
                    }]
                }
            }
        },
        vfunnel: {
            plotarea: {
                margin: "50 100"
            },
            SCALE: {
                "line-width": 0,
                tick: {
                    "line-width": 0
                },
                "minor-tick": {
                    "line-width": 0
                },
                guide: {
                    "line-width": 0
                },
                "minor-guide": {
                    "line-width": 0
                }
            },
            "scale-y": {
                guide: {
                    items: [{
                        "background-color": -1,
                        alpha: 0.25
                    }, {
                        "background-color": "#b6c8cf",
                        alpha: 0.25
                    }]
                }
            },
            "scale-y-n": {
                guide: {
                    items: [{
                        "background-color": -1,
                        alpha: 0.25
                    }, {
                        "background-color": "#b6c8cf",
                        alpha: 0.25
                    }]
                }
            },
            plot: {
                "border-width": 1
            }
        },
        hfunnel: {
            plotarea: {
                margin: "50 100"
            },
            "scale-x": {
                label: {
                    "font-angle": 270
                }
            },
            "scale-x-n": {
                label: {
                    "font-angle": 90
                }
            },
            SCALE: {
                "line-width": 0,
                tick: {
                    "line-width": 0
                },
                "minor-tick": {
                    "line-width": 0
                },
                guide: {
                    "line-width": 0
                },
                "minor-guide": {
                    "line-width": 0
                }
            },
            "scale-y": {
                label: {
                    "font-angle": 0
                },
                item: {
                    "text-align": "center"
                },
                guide: {
                    items: [{
                        "background-color": "#b6c8cf",
                        alpha: 0.25
                    }, {
                        "background-color": -1,
                        alpha: 0.25
                    }]
                }
            },
            "scale-y-n": {
                label: {
                    "font-angle": 0
                },
                item: {
                    "text-align": "center"
                },
                guide: {
                    items: [{
                        "background-color": "#b6c8cf",
                        alpha: 0.25
                    }, {
                        "background-color": -1,
                        alpha: 0.25
                    }]
                }
            },
            plot: {
                "border-width": 1
            }
        },
        range: {
            plot: {
                marker: {
                    size: 4
                },
                "hover-marker": {
                    size: 5
                }
            }
        },
        line3d: {
            SCALE: {
                "line-color": "#ddd"
            },
            plot: {
                "line-width": 1
            }
        },
        area3d: {
            SCALE: {
                "line-color": "#ddd"
            },
            plot: {
                "line-width": 1
            }
        },
        mixed3d: {
            SCALE: {
                "line-color": "#ddd"
            },
            plot: {
                "border-width": 1
            }
        },
        vbar3d: {
            SCALE: {
                "line-color": "#ddd"
            },
            plot: {
                "border-width": 1
            }
        },
        hbar3d: {
            SCALE: {
                "line-color": "#ddd"
            },
            plot: {
                "border-width": 1
            }
        },
        pie3d: {
            plot: {
                "border-width": 1
            }
        },
        "-": ""
    };
    this.PZ.mini = {
        graph: {
            title: {
                width: "100%",
                padding: "1 2 2",
                "font-size": 10
            },
            subtitle: {
                width: "100%",
                padding: "1 2 2",
                "margin-top": 14,
                "font-size": 9
            },
            plotarea: {
                width: "100%",
                height: "100%",
                margin: "12 5 5 5"
            },
            SCALE: {
                visible: 0
            },
            tooltip: {
                visible: 0
            },
            legend: {
                visible: 0
            },
            plot: {
                shadow: 0,
                "value-box": {
                    visible: 0
                }
            }
        },
        line: {
            plot: {
                "line-width": 1
            }
        },
        area: {
            plot: {
                "line-width": 1
            }
        },
        scatter: {
            SCALE: {
                "offset-start": 5,
                "offset-end": 5
            }
        },
        bubble: {
            SCALE: {
                "offset-start": 5,
                "offset-end": 5
            }
        },
        pie: {
            plotarea: {
                margin: "15 5 5 5"
            },
            plot: {
                "value-box": {
                    visible: 0
                }
            },
            scale: {
                "size-factor": 0.9
            }
        },
        pie3d: {
            plotarea: {
                margin: "15 5 5 5"
            },
            plot: {
                "value-box": {
                    visible: 0
                }
            },
            scale: {
                "size-factor": 0.9
            }
        },
        nestedpie: {
            plotarea: {
                margin: "15 5 5 5"
            },
            plot: {
                "value-box": {
                    visible: 0
                }
            },
            scale: {
                "size-factor": 0.9
            }
        },
        venn: {
            plotarea: {
                margin: "15 5 5 5"
            },
            scale: {
                "size-factor": 0.9
            }
        },
        range: {
            plot: {
                "line-width": 1
            }
        },
        "-": ""
    };
    this.PZ.negative = {
        loader: {},
        palette: [
            ["#000", "#909090",
                "#969696", "#9c9c9c"
            ],
            ["#000", "#a0a0a0", "#a6a6a6", "#acacac"],
            ["#000", "#b0b0b0", "#b6b6b6", "#bcbcbc"],
            ["#000", "#c0c0c0", "#c6c6c6", "#cccccc"],
            ["#000", "#d0d0d0", "#d6d6d6", "#dcdcdc"],
            ["#000", "#e0e0e0", "#e6e6e6", "#ececec"],
            ["#000", "#f0f0f0", "#f6f6f6", "#fcfcfc"]
        ],
        graph: {
            "background-color": "#111",
            title: {
                color: "#fff"
            },
            subtitle: {
                color: "#333"
            },
            SCALE: {
                "font-size": 11,
                "line-width": 2,
                "line-color": "#ccc",
                guide: {
                    visible: 1,
                    "line-width": 1,
                    "line-style": "dashed",
                    "line-color": "#ccc",
                    alpha: 0.2
                },
                "minor-guide": {
                    visible: 1,
                    "line-width": 1,
                    "line-style": "dotted",
                    "line-color": "#ccc",
                    alpha: 0.2
                },
                tick: {
                    visible: 1,
                    size: 6,
                    placement: ZC._[20],
                    "line-width": 2,
                    "line-color": "#ccc"
                },
                "minor-tick": {
                    visible: 1,
                    size: 4,
                    "line-width": 1,
                    "line-color": "#ccc"
                },
                label: {
                    color: "#fff"
                },
                item: {
                    color: "#fff"
                }
            }
        },
        radar: {
            "scale-k": {
                guide: {
                    items: [{
                        "background-color": "#222",
                        alpha: 0.5
                    }, {
                        "background-color": "#333",
                        alpha: 0.5
                    }]
                }
            }
        },
        "-": ""
    };
    this.PZ.spark = this.PZ.mini;
    this.AQ = {
        loader: {
            gui: {
                progress: {
                    "background-color": "#fff",
                    color: "#000"
                },
                "context-menu": {
                    padding: "10 0 0 0",
                    "border-width": 1,
                    "border-color": "#000",
                    "background-image": ZC.ie67 ? "" : "zc.menu-top",
                    "background-repeat": "no-repeat",
                    button: {
                        margin: "5 auto auto 5",
                        alpha: 0.8,
                        "background-color": "#333 #999",
                        "border-radius": 8,
                        width: 40,
                        height: 40
                    },
                    gear: {
                        "background-color": "#fff #f6f6f6",
                        type: "gear6",
                        alpha: 0.8
                    },
                    item: {
                        "background-color": "#36393D",
                        padding: "4 20 4 8",
                        "border-width": 1,
                        "border-color": "#000",
                        color: "#fff",
                        "background-image": ZC.ie67 ? "" : "zc.menu-item",
                        "hover-state": {
                            "background-color": "#0084AA",
                            "background-image": ZC.ie67 ?
                                "" : "zc.menu-item-hover"
                        }
                    }
                },
                "context-menu[mobile]": {
                    item: {
                        padding: "6 10 6 6"
                    }
                }
            }
        },
        palette: [],
        graph: {
            title: {
                width: "100%",
                bold: 1,
                "font-size": 13
            },
            subtitle: {
                width: "100%",
                bold: 1,
                "font-size": 11
            },
            preview: {
                width: "100%",
                height: 50,
                margin: "auto 50 15 50",
                "border-width": 1,
                shadow: 0,
                "background-color": "#f0f0f0",
                "border-color": "#999",
                mask: {
                    alpha: 0.5,
                    "background-color": "#333"
                },
                active: {
                    alpha: 0.1,
                    "background-color": "#999"
                },
                handler: {
                    width: 9,
                    height: 16,
                    "border-width": 1,
                    "line-width": 1,
                    "line-color": "#111",
                    "border-color": "#444",
                    "border-radius": 2,
                    "background-color": "#e6e6e6"
                }
            },
            plotarea: {
                width: "100%",
                height: "100%",
                margin: "60 50 65 50"
            },
            "plotarea[preview]": {
                margin: "60 50 105 50"
            },
            SCALE: {
                "line-width": 1,
                guide: {
                    "line-width": 1,
                    "line-color": "#ddd"
                },
                tick: {
                    size: 6,
                    "line-width": 2
                },
                "minor-guide": {
                    "line-width": 1,
                    "line-color": "#ddd"
                },
                "minor-tick": {
                    size: 4,
                    "line-width": 1
                },
                label: {
                    bold: 1
                },
                marker: {
                    "line-width": 1,
                    "line-color": "#000",
                    "background-color": "#ccc"
                }
            },
            "scale-y": {
                label: {
                    "font-angle": 270
                },
                item: {
                    "text-align": "right"
                }
            },
            "scale-y-n": {
                label: {
                    "font-angle": 90
                },
                item: {
                    "text-align": "left"
                }
            },
            plot: {
                error: {
                    "line-width": 1,
                    "line-color": "#333",
                    size: 4
                },
                "value-box": {
                    "fit-to-text": 1,
                    text: "%v",
                    bold: 1,
                    placement: "auto"
                },
                "tooltip-text": "%v",
                shadow: 1,
                "line-width": 4,
                marker: {
                    type: "square",
                    shadow: 1
                }
            },
            tooltip: {
                shadow: 1,
                padding: "3 6",
                "shadow-distance": 3,
                "offset-y": ZC.mobile ? -40 : -20
            },
            guide: {
                marker: {
                    type: "circle"
                }
            },
            zoom: {
                "border-width": 0,
                "background-color": "#369",
                alpha: 0.25
            },
            arrow: {
                "border-width": 1,
                "border-color": "#000",
                "background-color": "#666",
                size: 4
            },
            legend: {
                "background-color": "#eee",
                alpha: 1,
                shadow: 1,
                margin: "10 10 auto auto",
                item: {
                    "text-align": "left",
                    margin: "3 6 3 4",
                    padding: 2
                },
                "item-off": {
                    alpha: 0.25
                },
                marker: {
                    shadow: 0,
                    size: 6,
                    "border-color": "#999",
                    "border-width": 1
                },
                header: {
                    "text-align": "left",
                    bold: 1
                },
                footer: {
                    "text-align": "left"
                }
            }
        },
        vbar: {
            plot: {
                "value-box": {
                    placement: "top-out"
                }
            }
        },
        vbar3d: {
            plot: {
                "value-box": {
                    placement: "top-out"
                }
            },
            "3d-aspect": {
                depth: 40,
                angle: 45,
                "x-angle": -20,
                "y-angle": 10,
                "z-angle": 0
            }
        },
        mixed3d: {
            "3d-aspect": {
                depth: 40,
                angle: 45,
                "x-angle": -20,
                "y-angle": 0,
                "z-angle": 0
            }
        },
        hbar: {
            "scale-y": {
                label: {
                    "font-angle": 0
                },
                item: {
                    "text-align": "center"
                }
            },
            "scale-x": {
                label: {
                    "font-angle": 270
                }
            },
            "scale-y-n": {
                label: {
                    "font-angle": 0
                },
                item: {
                    "text-align": "center"
                }
            },
            "scale-x-n": {
                label: {
                    "font-angle": 90
                }
            },
            plot: {
                "value-box": {
                    placement: "top-out"
                }
            }
        },
        hbar3d: {
            "scale-y": {
                label: {
                    "font-angle": 0
                }
            },
            "scale-x": {
                label: {
                    "font-angle": 270
                }
            },
            "scale-y-n": {
                label: {
                    "font-angle": 0
                }
            },
            "scale-x-n": {
                label: {
                    "font-angle": 90
                }
            },
            "3d-aspect": {
                depth: 40,
                angle: 45,
                "x-angle": -10,
                "y-angle": -10,
                "z-angle": 0
            },
            plot: {
                "value-box": {
                    placement: "top-out"
                }
            }
        },
        hbullet: {
            "scale-y": {
                label: {
                    "font-angle": 0
                },
                item: {
                    "text-align": "center"
                }
            },
            "scale-x": {
                label: {
                    "font-angle": 270
                }
            },
            "scale-y-n": {
                label: {
                    "font-angle": 0
                },
                item: {
                    "text-align": "center"
                }
            },
            "scale-x-n": {
                label: {
                    "font-angle": 90
                }
            }
        },
        line: {
            plot: {
                marker: {
                    type: "circle",
                    size: 4
                }
            }
        },
        area: {
            plot: {
                marker: {
                    type: "circle",
                    size: 4
                },
                "value-box": {
                    placement: "top"
                }
            }
        },
        line3d: {
            "3d-aspect": {
                depth: 40,
                angle: 45,
                "x-angle": -20,
                "y-angle": 0,
                "z-angle": 0
            },
            plot: {
                marker: {
                    type: "circle",
                    size: 4,
                    alpha: 0
                }
            }
        },
        area3d: {
            "3d-aspect": {
                depth: 40,
                angle: 45,
                "x-angle": -20,
                "y-angle": 0,
                "z-angle": 0
            },
            plot: {
                marker: {
                    type: "circle",
                    size: 4,
                    alpha: 0
                },
                "value-box": {
                    placement: "top"
                }
            }
        },
        scatter: {
            SCALE: {
                "offset-start": 10,
                "offset-end": 10
            },
            plot: {
                marker: {
                    type: "circle",
                    size: 4
                },
                "value-box": {
                    placement: "top"
                }
            }
        },
        bubble: {
            SCALE: {
                "offset-start": 40,
                "offset-end": 40
            },
            plot: {
                marker: {
                    type: "circle",
                    "fill-type": "radial",
                    "fill-offset-x": -5,
                    "fill-offset-y": -5
                },
                "hover-marker": {
                    "fill-type": "radial",
                    "fill-offset-x": -5,
                    "fill-offset-y": -5
                },
                "value-box": {
                    placement: "middle"
                }
            }
        },
        pie: {
            plotarea: {
                margin: 0
            },
            scale: {
                "size-factor": 0.65,
                "line-width": 0,
                guide: {
                    "line-width": 0
                },
                "minor-guide": {
                    "line-width": 0
                }
            },
            plot: {
                "fill-type": "radial",
                "value-box": {
                    connector: {
                        "line-width": 1
                    },
                    placement: "out",
                    text: "%t",
                    visible: 1
                }
            }
        },
        pie3d: {
            "3d-aspect": {
                "x-angle": 38,
                "y-angle": 0,
                "z-angle": 0
            },
            plotarea: {
                margin: "40 5 5 5"
            },
            scale: {
                "size-factor": 0.75,
                "line-width": 0,
                guide: {
                    "line-width": 0
                },
                "minor-guide": {
                    "line-width": 0
                }
            },
            plot: {
                "fill-type": "linear",
                "value-box": {
                    connector: {
                        "line-width": 1
                    },
                    placement: "out",
                    text: "%t",
                    visible: 1
                }
            }
        },
        nestedpie: {
            plotarea: {
                margin: "40 5 15 5"
            },
            scale: {
                "size-factor": 0.8,
                "line-width": 0,
                guide: {
                    "line-width": 0
                },
                "minor-guide": {
                    "line-width": 0
                }
            },
            plot: {
                "fill-type": "radial",
                "value-box": {
                    connector: {
                        "line-width": 1
                    },
                    text: "%v",
                    visible: 1
                }
            }
        },
        venn: {
            plotarea: {
                margin: "50 40 40 40"
            },
            plot: {
                alpha: 0.5,
                "border-width": 4
            },
            scale: {
                "size-factor": 0.65,
                "line-width": 0,
                guide: {
                    "line-width": 0
                },
                "minor-guide": {
                    "line-width": 0
                }
            }
        },
        radar: {
            SCALE: {
                guide: {
                    "border-width": 1,
                    "border-color": "#999",
                    "background-color": "-1"
                }
            },
            scale: {
                visible: 0,
                "size-factor": 0.7
            },
            "scale-k": {
                "ref-angle": 270
            },
            plotarea: {
                margin: "40 5 5 5"
            },
            plot: {
                aspect: "line",
                marker: {
                    type: "circle"
                }
            }
        },
        gauge: {
            SCALE: {
                guide: {
                    "border-width": 1,
                    "border-color": "#999",
                    "background-color": "-1"
                }
            },
            scale: {
                "line-width": 0,
                guide: {
                    "line-width": 0
                },
                "minor-guide": {
                    "line-width": 0
                },
                "size-factor": 0.7
            },
            "scale-r": {
                "ref-angle": 270,
                "background-color": "#fff",
                guide: {
                    "line-width": 0
                },
                tick: {
                    placement: "inner"
                }
            },
            plotarea: {
                margin: "40 5 5 5"
            }
        },
        stock: {
            plot: {
                "line-width": 1,
                "border-width": 1
            }
        },
        range: {
            plot: {
                "value-box": {
                    text: "%node-min-value-%node-max-value"
                },
                "tooltip-text": "%node-min-value-%node-max-value"
            }
        },
        "-": ""
    };
    this.hasFeature = function(a, c) {
        var b, e = 0;
        if ((b = this.AQ.graph[a]) != null)
            if (b.enabled != null) e = e || ZC._b_(b.enabled);
        if (this.AQ[c] != null && (b = this.AQ[c][a]) != null)
            if (b.enabled != null) e = e || ZC._b_(b.enabled);
        return e
    };
    this.load = function(a, c, b, e) {
        b = b == null ? true : ZC._b_(b);
        e = e == null ? false : ZC._b_(e);
        c instanceof Array || (c = Array(c));
        for (var f = [], g = "", h = 0, k = c.length; h < k; h++)
            if (/(\(\w+\))(.*)/.test(c[h])) {
                var l = RegExp.$1;
                g = c[h].replace(l, "graph");
                ZC.AH(f, g) == -1 && f.push(g);
                g = c[h].replace(l, l.substring(1, l.length -
                    1));
                ZC.AH(f, g) == -1 && f.push(g)
            } else {
                ZC.AH(f, c[h]) == -1 && f.push(c[h]);
                /root(.*)/.test(c[h]) && ZC.AH(f, c[h].replace("root", "loader")) == -1 && f.push(c[h].replace("root", "loader"));
                /loader(.*)/.test(c[h]) && ZC.AH(f, c[h].replace("loader", "root")) == -1 && f.push(c[h].replace("loader", "root"))
            }
        g = {};
        h = 0;
        for (k = f.length; h < k; h++) {
            l = f[h].split(".");
            for (var m = this.AQ, o = 0, n = l.length; o < n; o++)
                if ((c = m[l[o]]) != null) m = c;
                else if ((c = m[ZC.NX(l[o])]) != null) m = c;
            else if ((c = m[ZC.CE(l[o])]) != null) m = c;
            else {
                m = null;
                break
            } if (m)
                for (var p in m)
                    if (e ||
                        typeof m[p] != "object" || m[p].length)
                        if (b || a[p] == null) g[p] = m[p];
                        else if (b && typeof m[p] == "object") g[p] = m[p]
        }
        ZC.ET(g, a)
    }
};
ZC.BV = {
    ZU: function(a, c, b) {
        var e = document.getElementsByTagName("head")[0],
            f = document.createElement("script");
        f.type = "text/javascript";
        f.src = c;
        var g = 0;
        f.onload = f.onreadystatechange = function() {
            if (!g && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                g = 1;
                f.onload = f.onreadystatechange = null;
                e && f.parentNode && e.removeChild(f);
                var h = RegExp("zingchart-html5-(.+?)-min.js", "g").exec(c);
                h && ZC.S9.push(h[1]);
                b && b(c)
            }
        };
        f.onerror = function() {
            if (!a && zingchart.GK[0]) a = zingchart.GK[0];
            a ? a.IC({
                name: ZC._[63],
                message: "Resource not found (" + f.src + ")"
            }, "Module loader") : alert("Resource not found (" + f.src + ")")
        };
        e.insertBefore(f, e.firstChild)
    },
    VZ: function() {},
    F1: function(a, c, b) {
        zingchart[a] && zingchart[a](b);
        c.OY[a] && c.OY[a](b)
    },
    MZ: function(a) {
        var c = (a.indexOf('shape="rect"') != -1 ? 1E4 : 0) + (a.indexOf('shape="circle"') != -1 ? 100 : 0) + (a.indexOf('shape="poly"') != -1 ? 1 : 0);
        if (a.indexOf('shape="rect"') != -1) {
            var b = /coords=\"(\-*\d+),(\-*\d+),(\-*\d+),(\-*\d+)\"/.exec(a);
            if (b.length == 5) c += (ZC._i_(b[3]) - ZC._i_(b[1])) * (ZC._i_(b[4]) -
                ZC._i_(b[2]))
        }
        if (a.indexOf('shape="circle"') != -1) {
            b = /coords=\"(\-*\d+),(\-*\d+),(\-*\d+)\"/.exec(a);
            if (b[3] != null) c += b[3] / 10
        }
        return c
    },
    PA: function(a) {
        var c, b = {};
        if ((c = a["short"]) != null) b["short"] = ZC._b_(c);
        if ((c = a.exponent) != null) b.exponent = ZC._b_(c);
        if ((c = a[ZC._[27]]) != null) b[ZC._[27]] = ZC._i_(c);
        if ((c = a[ZC._[16]]) != null) b[ZC._[16]] = c;
        else if ((c = ZC.EV[ZC._[16]]) != null) b[ZC._[16]] = c;
        if ((c = a[ZC._[15]]) != null) b[ZC._[15]] = c;
        else if ((c = ZC.EV[ZC._[15]]) != null) b[ZC._[15]] = c;
        if ((c = a[ZC._[14]]) != null) b[ZC._[14]] =
            ZC._i_(c);
        if ((c = a.transform) != null)
            if (c.type != null) switch (c.type) {
                case "date":
                    b[ZC._[68]] = 1;
                    if (c.all != null) b[ZC._[67]] = c.all
            }
            return b
    },
    MK: function(a, c, b, e) {
        b = a + "";
        var f = 0;
        if (e)
            if (c[ZC._[68]] != null && c[ZC._[68]]) {
                b = ZC.BV.WC(Number(b), c[ZC._[67]]);
                f = 1
            }
        if (c[ZC._[16]] == null && (a = ZC.EV[ZC._[16]]) != null) c[ZC._[16]] = a;
        if (c[ZC._[15]] == null && (a = ZC.EV[ZC._[15]]) != null) c[ZC._[15]] = a;
        if (!f)
            if (c.exponent != null && c.exponent) {
                b = Number(b).toExponential(c[ZC._[27]]);
                if (c[ZC._[16]] != null) b = b.replace(/\./g, c[ZC._[16]])
            } else {
                if (c["short"] !=
                    null && c["short"]) {
                    var g = "";
                    a = c["short-unit"] || "";
                    e = Math.ceil(ZC.NR(Number(b)) / Math.LN10);
                    if (e >= 3 && e < 6 || a.toUpperCase() == "K") {
                        b = new String(Number(b) / 1E3);
                        g = "K"
                    } else if (e >= 6 && e < 6 || a.toUpperCase() == "M") {
                        b = new String(Number(b) / 1E6);
                        g = "M"
                    } else if (e >= 9 || a.toUpperCase() == "B") {
                        b = new String(Number(b) / 1E9);
                        g = "B"
                    }
                    if (c[ZC._[14]] != null)
                        if (ZC.OE(b)) b = Number(b).toFixed(ZC.BN(0, ZC._i_(c[ZC._[14]])));
                    if (c[ZC._[16]] != null) b = b.replace(/\./g, c[ZC._[16]])
                }
                if (c[ZC._[14]] != null)
                    if (ZC.OE(b)) b = Number(b).toFixed(ZC.BN(0, ZC._i_(c[ZC._[14]])));
                if (c[ZC._[15]] != null || c[ZC._[16]] != null) {
                    b = b.split(".");
                    a = "";
                    e = 0;
                    for (f = b[0].length; e < f; e++) {
                        var h = b[0].substring(e, e + 1);
                        a += h;
                        if (ZC.AH(["-", "+"], h) == -1)
                            if ((b[0].length - e - 1) % 3 == 0 && b[0].length - e - 1 != 0) a += c[ZC._[15]]
                    }
                    b = a + (b[1] != null ? c[ZC._[16]] + b[1] : "")
                }
                if (c["short"] != null && c["short"]) b += g
            }
        return b
    },
    S6: function(a) {
        var c = a.indexOf("("),
            b = "",
            e = "";
        if (c != -1) {
            b = ZC.GS(a.substring(0, c));
            e = ZC.GS(a.substring(c + 1, a.length - 1))
        } else b = ZC.GS(a);
        a = [];
        if (e != "")
            for (var f = c = 0, g = 0, h = "", k = 0, l = e.length; k < l; k++) {
                var m = e.substring(k,
                    k + 1);
                switch (m) {
                    case "\\":
                        if (g) {
                            h += "\\";
                            g = 0
                        } else g = 1;
                        break;
                    case '"':
                        if (g) {
                            h += '"';
                            g = 0
                        } else if (f) {
                            a.push(h);
                            h = "";
                            f = 0
                        } else if (c) h += m;
                        else f = 1;
                        break;
                    case "'":
                        if (g) {
                            h += "'";
                            g = 0
                        } else if (c) {
                            a.push(h);
                            h = "";
                            c = 0
                        } else if (f) h += m;
                        else c = 1;
                        break;
                    case " ":
                        if (c || f) h += m;
                        break;
                    case ",":
                        if (c || f) h += m;
                        else {
                            h != "" && a.push(h);
                            h = ""
                        }
                        break;
                    default:
                        h += m
                }
            }
        h != "" && a.push(h);
        return [b, a]
    },
    TI: function(a) {
        return a.toString().replace(/^([0-9])$/, "0$1")
    },
    WC: function(a, c) {
        var b = new Date;
        b.setTime(a);
        var e = b.getHours(),
            f = b.getMinutes(),
            g = b.getSeconds(),
            h = b.getMilliseconds(),
            k = b.getDay(),
            l = b.getDate(),
            m = b.getMonth();
        b = b.getFullYear();
        e = {
            Y: b,
            y: b.toString().substr(2, 2),
            F: ZC.EV["months-long"][m],
            m: ZC.BV.TI(m + 1),
            M: ZC.EV["months-short"][m],
            n: m,
            d: ZC.BV.TI(l),
            D: ZC.EV["days-short"][k],
            j: l,
            l: ZC.EV["days-long"][k],
            N: k + 1,
            w: k,
            S: function() {
                return l % 10 == 1 ? "st" : l % 10 == 2 ? "nd" : l % 10 == 2 ? "rd" : "th"
            },
            a: e < 12 ? "am" : "pm",
            A: e < 12 ? "AM" : "PM",
            g: e % 12 || 12,
            G: e,
            h: ZC.BV.TI(e % 12 || 12),
            H: ZC.BV.TI(e),
            i: ZC.BV.TI(f),
            s: ZC.BV.TI(g),
            q: h
        };
        for (var o in e) c = c.replace("%" + o, e[o]);
        return c
    },
    QK: {},
    LF: function(a) {
        if (ZC.BV.QK[a] != null) return ZC.BV.QK[a];
        else {
            var c = String(a);
            if (c.length == 0) return "";
            c = c.replace("0x", "#");
            if (c.substring(0, 4) == "rgb(") {
                if (ED = RegExp("rgb\\((\\d{1,3}),\\s*(\\d{1,3}),\\s*(\\d{1,3})\\)", "gi").exec(c)) {
                    c = ZC.IZ(ED[1]);
                    if (c.length == 1) c = "0" + c;
                    var b = ZC.IZ(ED[2]);
                    if (b.length == 1) b = "0" + b;
                    var e = ZC.IZ(ED[3]);
                    if (e.length == 1) e = "0" + e;
                    c = "#" + c + b + e
                }
            } else if (c.substring(0, 1) == "#")
                if (c.length == 4) c = "#" + c.substring(1, 2) + c.substring(1, 2) + c.substring(2, 3) + c.substring(2, 3) +
                    c.substring(3, 4) + c.substring(3, 4);
                else {
                    if (c.length != 7) c = ""
                } else if (ZC.K.XL[c.toUpperCase()] != null) c = "#" + ZC.K.XL[c.toUpperCase()];
            if (c == "none" || c == "transparent") c = -1;
            return ZC.BV.QK[a] = c
        }
    },
    RD: {},
    R0: function(a, c) {
        if (ZC.BV.RD[a + "," + c] != null) return ZC.BV.RD[a + "," + c];
        else {
            if (a.length == 4) a = a.substring(0, 1) + a.substring(1, 2) + a.substring(1, 2) + a.substring(2, 3) + a.substring(2, 3) + a.substring(3, 4) + a.substring(3, 4);
            var b = "rgba(" + [ZC.JS(a.substring(1, 3)), ZC.JS(a.substring(3, 5)), ZC.JS(a.substring(5, 7)), c].join(",") +
                ")";
            return ZC.BV.RD[a + "," + c] = b
        }
    },
    A0V: function(a, c, b) {
        a /= 255;
        c /= 255;
        b /= 255;
        var e = Math.max(a, c, b),
            f = Math.min(a, c, b),
            g, h, k = e - f;
        h = e == 0 ? 0 : k / e;
        if (e == f) g = 0;
        else {
            switch (e) {
                case a:
                    g = (c - b) / k + (c < b ? 6 : 0);
                    break;
                case c:
                    g = (b - a) / k + 2;
                    break;
                case b:
                    g = (a - c) / k + 4
            }
            g /= 6
        }
        return [g, h, e]
    },
    A0X: function(a, c, b) {
        var e, f, g, h = Math.floor(a * 6),
            k = a * 6 - h;
        a = b * (1 - c);
        var l = b * (1 - k * c);
        c = b * (1 - (1 - k) * c);
        switch (h % 6) {
            case 0:
                e = b;
                f = c;
                g = a;
                break;
            case 1:
                e = l;
                f = b;
                g = a;
                break;
            case 2:
                e = a;
                f = b;
                g = c;
                break;
            case 3:
                e = a;
                f = l;
                g = b;
                break;
            case 4:
                e = c;
                f = a;
                g = b;
                break;
            case 5:
                e =
                    b;
                f = a;
                g = l
        }
        return [e * 255, f * 255, g * 255]
    },
    L0: function(a, c) {
        c = c || 10;
        var b = ZC.JS(a.substring(1, 3)),
            e = ZC.JS(a.substring(3, 5)),
            f = ZC.JS(a.substring(5, 7));
        b = ZC.BV.A0V(b, e, f);
        b[2] = c > 0 ? Math.max(0, b[2] - b[2] * c / 100) : Math.min(1, b[2] - b[2] * c / 100);
        b = ZC.BV.A0X(b[0], b[1], b[2]);
        b[0] = ZC._i_(b[0]) < 16 ? "0" + ZC.IZ(b[0]) : ZC.IZ(b[0]);
        b[1] = ZC._i_(b[1]) < 16 ? "0" + ZC.IZ(b[1]) : ZC.IZ(b[1]);
        b[2] = ZC._i_(b[2]) < 16 ? "0" + ZC.IZ(b[2]) : ZC.IZ(b[2]);
        return a = "#" + b[0] + b[1] + b[2]
    },
    _lighten_: function(a, c) {
        var b = parseInt(a.substr(1, 2), 16),
            e = parseInt(a.substr(3,
                2), 16),
            f = parseInt(a.substr(5, 2), 16);
        return "#" + (0 | 256 + b + (256 - b) * c / 100).toString(16).substr(1) + (0 | 256 + e + (256 - e) * c / 100).toString(16).substr(1) + (0 | 256 + f + (256 - f) * c / 100).toString(16).substr(1)
    },
    SN: function() {},
    ZD: function() {}
};
ZC.K = {
    XL: {
        BLACK: "000000",
        BLUE: "0000FF",
        BROWN: "A52A2A",
        CYAN: "00FFFF",
        FUCHSIA: "FF00FF",
        GOLD: "FFD700",
        GRAY: "808080",
        GREEN: "008000",
        INDIGO: "4B0082",
        LIME: "00FF00",
        MAGENTA: "FF00FF",
        MAROON: "800000",
        NAVY: "000080",
        ORANGE: "FFA500",
        PINK: "FFC0CB",
        PURPLE: "800080",
        RED: "FF0000",
        SILVER: "C0C0C0",
        TURQUOISE: "40E0D0",
        VIOLET: "EE82EE",
        WHITE: "FFFFFF",
        YELLOW: "FFFF00"
    },
    DM: function(a) {
        return '<area href="javascript:;" shape="' + a + '" '
    },
    YZ: function(a) {
        var c;
        if (ZC.A3.browser.msie) try {
            c = document.createElement("<iframe/>")
        } catch (b) {
            c =
                document.createElement("iframe")
        } else c = document.createElement("iframe");
        c.style.visibility = "hidden";
        a.appendChild(c);
        a = null;
        a = c.contentWindow || c.contentDocument;
        a = a.document ? a.document : a;
        if (!a.body) {
            c = a.createElement("HTML");
            a.appendChild(c);
            var e = a.createElement("HEAD");
            c.appendChild(e);
            e = a.createElement("BODY");
            c.appendChild(e)
        }
        return a
    },
    BL: function(a) {
        if (typeof ZC.TOUCHEVENTS == ZC._[33]) {
            var c = 1;
            try {
                document.createEvent("TouchEvent")
            } catch (b) {
                c = 0
            }
            if (c && navigator.userAgent.indexOf("Chrome/") != -1) c =
                typeof window.ontouchstart != ZC._[33];
            ZC.TOUCHEVENTS = c
        } else c = ZC.TOUCHEVENTS; if (c) switch (a) {
            case "mouseover":
            case "mousedown":
                a = "touchstart";
                break;
            case "mousemove":
                a = "touchmove";
                break;
            case "mouseout":
            case "mouseup":
                a = "touchend"
        }
        return a
    },
    _sh_: function(a, c) {
        var b = [],
            e = c.L7,
            f = c.J5,
            g = c.G4 - f / 2;
        if (a.length > 0) {
            var h = g * ZC.CT(e) + f;
            e = g * ZC.CJ(e) + f;
            f = 0;
            for (g = a.length; f < g; f++)
                if (a[f] != null) {
                    for (var k = [], l = 0; l < a[f].length; l++) k[l] = a[f][l];
                    k[0] = a[f][0] + h;
                    k[1] = a[f][1] + e;
                    b.push(k)
                } else b.push(null)
        }
        return b
    },
    _txp_: function(a,
        c, b, e) {
        var f = [a[0], a[1]];
        if (a.length >= 4) {
            f[2] = a[2];
            f[3] = a[3]
        }
        if (a.length >= 6) {
            f[4] = a[4];
            f[5] = a[5]
        }
        switch (c) {
            case "canvas":
            case "svg":
                if (b.CV) {
                    var g;
                    a = g = b.AI % 2 == 1 ? 0.5 : 0;
                    if (ZC.A3.browser.msie && ZC.quirks && c == "svg") {
                        a = b.AI % 2 == 1 ? 0.5 : 0;
                        g = b.AI % 2 == 1 ? 0 : 0.5
                    }
                    f[0] = ZC._i_(f[0]) - a;
                    f[1] = ZC._i_(f[1]) - g;
                    if (f.length == 4) {
                        f[2] = ZC._i_(f[2]) - a;
                        f[3] = ZC._i_(f[3]) - g
                    }
                }
                if (c == "svg") {
                    f[0] = f[0].toFixed(1);
                    f[1] = f[1].toFixed(1);
                    if (f.length == 4) {
                        f[2] = f[2].toFixed(1);
                        f[3] = f[3].toFixed(1)
                    }
                }
                if (c == "canvas" && !e)
                    if (typeof b.C0 != ZC._[33] &&
                        typeof b.C4 != ZC._[33]) {
                        f[0] += b.C0;
                        f[1] += b.C4;
                        if (f.length == 4) {
                            f[2] += b.C0;
                            f[3] += b.C4
                        }
                    }
                break;
            case "vml":
                if (b.A7 % 360 == 0) {
                    c = 10;
                    e = b.AI % 2 == 1 ? 0 : c / 2
                } else {
                    c = 1;
                    e = 0
                } if (b.CV) {
                    f[0] = c * ZC._i_(ZC._i_(c * f[0]) / c) - e;
                    f[1] = c * ZC._i_(ZC._i_(c * f[1]) / c) - e;
                    if (f.length == 4) {
                        f[2] = c * ZC._i_(ZC._i_(c * f[2]) / c) - e;
                        f[3] = c * ZC._i_(ZC._i_(c * f[3]) / c) - e
                    }
                } else {
                    f[0] = ZC._i_(c * f[0]);
                    f[1] = ZC._i_(c * f[1]);
                    if (f.length == 4) {
                        f[2] = ZC._i_(c * f[2]);
                        f[3] = ZC._i_(c * f[3])
                    }
                }
        }
        return f
    },
    SK: function(a, c, b, e, f) {
        for (var g = [], h = 0, k = 0, l = a.length; k < l; k++)
            if (a[k] == null) h =
                1;
            else {
                var m = ZC.K._txp_(a[k], c, b, e, f);
                if (!(m == null || isNaN(m[0]) || isNaN(m[1]) || !isFinite(m[0]) || !isFinite(m[1])))
                    if (k == 0) g.push((c == "svg" ? "M " : "m ") + m[0] + " " + m[1]);
                    else {
                        if (h) {
                            g.push((c == "svg" ? "M " : "m ") + m[0] + " " + m[1]);
                            h = 0
                        }
                        if (m.length == 2) g.push((c == "svg" ? "L " : "l ") + m[0] + " " + m[1]);
                        else if (m.length == 4) g.push((c == "svg" ? "Q " : "qb ") + m[0] + " " + m[1] + " " + m[2] + " " + m[3]);
                        else if (m.length == 6)
                            if (c == "svg") {
                                var o = ZC.AP.BA(m[0], m[1], m[2], m[3]),
                                    n = ZC.AP.BA(m[0], m[1], m[2], m[4]),
                                    p = "0,0";
                                p = m[5] == 0 ? m[4] - m[3] <= 180 ? "0,1" :
                                    "1,1" : m[3] - m[4] <= 180 ? "0,0" : "1,0";
                                g.push("a " + m[2] + "," + m[2] + " 0 " + p + " " + (n[0] - o[0]) + "," + (n[1] - o[1]))
                            } else if (c == "vml") {
                            m[2] *= 10;
                            o = ZC.AP.BA(m[0], m[1], m[2], m[3]);
                            n = ZC.AP.BA(m[0], m[1], m[2], m[4]);
                            p = m[5] == 1 ? "at" : "wa";
                            g.push(p + " " + ZC._i_(m[0] - m[2]) + "," + ZC._i_(m[1] - m[2]) + "," + ZC._i_(m[0] + m[2]) + "," + ZC._i_(m[1] + m[2]) + " " + ZC._i_(o[0]) + "," + ZC._i_(o[1]) + " " + ZC._i_(n[0]) + "," + ZC._i_(n[1]))
                        }
                    }
            }
        return g
    },
    L3: function(a) {
        var c, b;
        if (a.originalEvent && a.originalEvent.touches) {
            if (a.originalEvent.touches.length > 0) {
                c = a.originalEvent.touches[0].pageX;
                b = a.originalEvent.touches[0].pageY
            }
            if (a.originalEvent.changedTouches.length > 0) {
                c = a.originalEvent.changedTouches[0].pageX;
                b = a.originalEvent.changedTouches[0].pageY
            }
        } else {
            c = a.pageX;
            b = a.pageY
        }
        return [c, b]
    },
    DJ: function(a, c, b) {
        b = b || document;
        if (c != null)
            if (b.createElementNS) b = b.createElementNS(c, a);
            else {
                b = b.createElement(a);
                b.setAttribute("xmlns", c)
            } else b = b.createElement(a); if (a.substring(0, 4) == "zcv:") b.className = "zcvml";
        return b
    },
    F6: function(a) {
        var c;
        a instanceof Array || (a = [a]);
        for (var b = 0, e = a.length; b <
            e; b++) {
            c = a[b];
            if (typeof c != "object") c = ZC.AJ(a[b]);
            if (c)
                if (typeof c.parentElement != ZC._[33]) c.parentElement.removeChild(c);
                else typeof c.parentNode != ZC._[33] && c.parentNode.removeChild(c)
        }
    },
    EG: function(a, c) {
        for (var b in c)
            if (typeof b == "string" && typeof c[b] != "object" && typeof c[b] != "function") try {
                a.setAttribute(b, c[b])
            } catch (e) {}
    },
    M2: function(a, c) {
        for (var b in c)
            if (typeof b == "string" && typeof c[b] != "object" && typeof c[b] != "function") a.style[b] = c[b]
    },
    Z3: function(a) {
        a = a.className || ZC.A3(a).attr("class");
        if (a != null && typeof a == "object") a = typeof a.baseVal != ZC._[33] ? a.baseVal : "";
        return a || ""
    },
    IW: function(a, c, b, e, f, g, h) {
        if (a) {
            h = h || "";
            switch (c) {
                case "canvas":
                    a.getContext("2d").clearRect(b, e, f, g);
                    break;
                case "vml":
                case "svg":
                    c = a.childNodes.length;
                    if (c > 0)
                        for (c = c - 1; c >= 0; c--)
                            if (h == "") a.removeChild(a.childNodes[c]);
                            else a.childNodes[c].id.indexOf(h + "-") == 0 && a.removeChild(a.childNodes[c])
            }
        }
    },
    CN: function(a, c) {
        if ((typeof a).toLowerCase() == "string") a = ZC.AJ(a);
        switch (c) {
            case "canvas":
                return a.getContext("2d");
            case "svg":
            case "vml":
                return a
        }
    },
    IG: function(a, c) {
        switch (c) {
            case "svg":
                return ZC.K.ZE(a);
            case "vml":
            case "canvas":
                return ZC.K.I2(a)
        }
    },
    H9: function(a, c) {
        switch (c) {
            case "svg":
                return ZC.K.ZE(a);
            case "vml":
                return ZC.K.I2(a);
            case "canvas":
                return ZC.K.A0Z(a)
        }
    },
    ZE: function(a) {
        var c;
        if (ZC.AJ(a.id) == null) {
            var b = ZC.K.DJ("g", ZC._[38]);
            if ((c = a.id) != null) b.setAttribute("id", c);
            if ((c = a.cls) != null) b.setAttribute("class", c);
            if ((c = a.zidx) != null) b.setAttribute("z-index", c);
            if ((c = a["clip-path"]) != null) b.setAttribute("clip-path", c);
            a.p.appendChild(b);
            return b
        } else return ZC.AJ(a.id)
    },
    UA: function(a) {
        ZC.K.F6(a.id);
        var c = ZC.K.DJ("clipPath", ZC._[38]);
        c.id = a.id;
        var b = ZC.K.DJ("polygon", ZC._[38]);
        b.id = a.id + "-shape";
        ZC.K.EG(b, {
            points: a.path
        });
        c.appendChild(b);
        return c
    },
    A0Z: function(a) {
        var c;
        if (ZC.AJ(a.id) == null) {
            var b = document.createElement("canvas"),
                e = b.style;
            if ((c = a.id) != null) b.id = c;
            if ((c = a.cls) != null) b.className = c;
            if ((c = a.wh) != null) {
                c = (new String(c)).split("/");
                a[ZC._[21]] = c[0];
                a[ZC._[22]] = c[1]
            }
            if ((c = a.tl) != null) {
                c = (new String(c)).split("/");
                a.top =
                    c[0];
                a.left = c[1]
            }
            b.width = a[ZC._[21]];
            b.height = a[ZC._[22]];
            if ((c = a.left) != null) e.left = c + "px";
            if ((c = a.top) != null) e.top = c + "px";
            if ((c = a.display) != null) e.display = c;
            if ((c = a.position) != null) e.position = c;
            if ((c = a.zidx) != null) e.zIndex = c;
            a.p.appendChild(b);
            return b
        } else return ZC.AJ(a.id)
    },
    I2: function(a) {
        var c, b;
        if (ZC.AJ(a.id) == null) {
            var e = document.createElement("div"),
                f = e.style;
            f.whiteSpace = "nowrap";
            if ((c = a.wh) != null) {
                c = (new String(c)).split("/");
                a[ZC._[21]] = c[0];
                a[ZC._[22]] = c[1]
            }
            if ((c = a.tl) != null) {
                c = (new String(c)).split("/");
                a.top = c[0];
                a.left = c[1]
            }
            if ((c = a.id) != null) e.id = c;
            if ((c = a.cls) != null)
                if (c != "") e.className = c;
            for (var g = [
                ["top", "", "px"],
                ["left", "", "px"],
                [ZC._[21], "", "px"],
                [ZC._[22], "", "px"], "position", "overflow", ["float", "cssFloat|styleFloat"],
                ["zidx", "zIndex"], "clip", "display", ["font-size", "", "px"], "font-family", "font-weight", "font-style", "text-decoration", "text-align", "vertical-align", "color", "border", "border-top", "border-right", "border-bottom", "border-left", "background", ["margin", "marginTop|marginRight|marginBottom|marginLeft",
                    "px"
                ],
                [ZC._[59], "", "px"],
                [ZC._[60], "", "px"],
                [ZC._[61], "", "px"],
                [ZC._[62], "", "px"],
                ["padding", "paddingTop|paddingRight|paddingBottom|paddingLeft", "px"],
                ["padding-top", "", "px"],
                ["padding-right", "", "px"],
                ["padding-bottom", "", "px"],
                ["padding-left", "", "px"], "line-height", "filter"
            ], h = null, k = null, l = null, m = 0, o = g.length; m < o; m++) {
                if (typeof g[m] == "string") g[m] = [g[m]];
                c = null;
                if ((b = a[g[m][0]]) != null) c = b;
                if ((b = a[ZC.CE(g[m][0])]) != null) c = b;
                if (c != null) {
                    if (g[m][1] == null || g[m][1] == "") g[m][1] = ZC.CE(g[m][0]);
                    b = g[m][1].split("|");
                    for (var n = 0, p = b.length; n < p; n++) {
                        var s = c + (g[m][2] == null ? "" : g[m][2]);
                        f[b[n]] = s;
                        if (b[n] == "fontFamily") h = s;
                        if (b[n] == "fontSize") k = ZC._i_(s);
                        if (b[n] == "fontWeight" && s == "bold") l = 1
                    }
                }
            }
            if ((c = a.opacity) != null) {
                f.opacity = c;
                if (ZC._f_(c) != 1) f.filter = "alpha(opacity=" + ZC._i_(ZC._f_(c) * 100) + ")"
            }
            if ((c = a.p) != null) c.appendChild(e);
            if ((c = a.html) != null) {
                e.innerHTML = c;
                c.indexOf("<") != -1 && c.indexOf(">") != -1 && ZC.A3(e).children().each(function() {
                    if (h != null)
                        if (this.style.fontFamily == null || this.style.fontFamily == "") this.style.fontFamily =
                            h;
                    if (k != null)
                        if (this.style.fontSize == null || this.style.fontSize == "") this.style.fontSize = k + "px";
                    if (l != null)
                        if (this.style.fontWeight == null || this.style.fontWeight == "") this.style.fontWeight = "bold"
                })
            }
            return e
        } else return ZC.AJ(a.id)
    },
    NG: null,
    A04: function(a, c, b, e, f) {
        var g;
        if ((g = ZC.AJ(a + "-text-ruler")) != null) {
            if (ZC.K.NG == null || ZC.K.NG != a + b + e + (f ? 1 : 0)) {
                g.style.fontFamily = b;
                g.style.fontSize = e + "px";
                g.style.fontWeight = f ? "bold" : "normal";
                ZC.K.NG = a + b + e + (f ? 1 : 0)
            }
            g.innerHTML = c
        } else g = ZC.K.I2({
            id: a + "-text-ruler",
            p: document.body,
            tl: "-9999/-9999",
            html: c,
            position: "absolute",
            fontFamily: b,
            fontSize: e,
            fontWeight: f ? "bold" : "normal"
        });
        c.indexOf("<") != -1 && c.indexOf(">") != -1 && ZC.A3(g).children().each(function() {
            if (this.style.fontFamily == null || this.style.fontFamily == "") this.style.fontFamily = b;
            if (this.style.fontSize == null || this.style.fontSize == "") this.style.fontSize = e + "px";
            if (this.style.fontWeight == null || this.style.fontWeight == "") this.style.fontWeight = "bold"
        });
        return ZC.mobile && ZC.A3.browser.webkit ? g.offsetWidth : ZC.A3(g).width()
    }
};
ZC.A3 = function(a, c, b) {
    var e = this;
    if (typeof b == ZC._[33]) b = 1;
    if (b) return new ZC.A3(a, c, false);
    else {
        e.JR = [];
        e.GZ = a;
        e.P8 = c;
        e.length = 0;
        e.P8 = e.P8 || document.getElementsByTagName("body")[0];
        if (typeof e.GZ == "object") e.JR = [e.GZ];
        else if (typeof e.GZ == "string") {
            a = 0;
            var f = e.GZ.split(">");
            if (f.length == 2) {
                a = 1;
                ZC.A3(f[0]).each(function() {
                    var k = this;
                    ZC.A3(f[1], this).each(function() {
                        this.parentNode == k && e.JR.push(this)
                    })
                })
            }
            f = e.GZ.split(" ");
            if (f.length == 2) {
                a = 1;
                ZC.A3(f[0]).each(function() {
                    ZC.A3(f[1], this).each(function() {
                        e.JR.push(this)
                    })
                })
            }
            if (!a)
                if (e.GZ.substring(0,
                    1) == "#") {
                    if (ZC.AJ(e.GZ.substring(1))) e.JR = [ZC.AJ(e.GZ.substring(1))]
                } else if (e.GZ.substring(0, 1) == ".")
                if (document.getElementsByClassName) {
                    if (e.P8.getElementsByClassName) b = e.P8.getElementsByClassName(e.GZ.substring(1));
                    else {
                        b = document.getElementsByClassName(e.GZ.substring(1));
                        if (e.P8 != document) {
                            var g = [];
                            a = 0;
                            for (c = b.length; a < c; a++) ZC.A3.childof(b[a], e.P8) && g.push(b[a]);
                            b = g
                        }
                    }
                    a = 0;
                    for (c = b.length; a < c; a++) e.JR.push(b[a])
                } else {
                    b = RegExp("(^|\\s)" + e.GZ.substring(1) + "(\\s|$)", "i");
                    g = e.P8.getElementsByTagName("*");
                    var h = "";
                    a = 0;
                    for (c = g.length; a < c; a++) {
                        h = g[a].className;
                        if (typeof h == "object") h = typeof h.baseVal != ZC._[33] ? h.baseVal : "";
                        h != "" && b.test(h) && e.JR.push(g[a])
                    }
                } else {
                b = e.P8.getElementsByTagName(e.GZ);
                a = 0;
                for (c = b.length; a < c; a++) e.JR.push(b[a])
            }
        }
    }
    e.length = e.JR.length;
    return this
};
ZC.A3.prototype = {
    eachfn: function() {
        for (var a = [], c, b = 0, e = this.JR.length; b < e; b++) {
            var f = [this.JR[b]];
            if ((c = arguments.length) > 1)
                for (var g = 1; g < c; g++) f.push(arguments[g]);
            a.push(arguments[0].apply(this, f))
        }
        return a
    },
    each: function() {
        for (var a, c = 0, b = this.JR.length; c < b; c++) {
            var e = [this.JR[c]];
            if ((a = arguments.length) > 1)
                for (var f = 1; f < a; f++) e.push(arguments[f]);
            arguments[0].apply(this.JR[c], e)
        }
        return this
    },
    children: function() {
        var a = [];
        this.each(function() {
            for (var c = 0, b = this.childNodes.length; c < b; c++) this.childNodes[c].nodeType ==
                1 && a.push(this.childNodes[c])
        });
        this.JR = a;
        return this
    },
    remove: function() {
        this.eachfn.call(this, function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        })
    },
    empty: function() {
        this.eachfn.call(this, function(a) {
            if (a)
                for (; a.childNodes.length;) a.removeChild(a.childNodes[a.childNodes.length - 1])
        })
    },
    W4: function(a) {
        if (typeof a == ZC._[33]) a = 1;
        var c = this.eachfn.call(this, function(b) {
            if (!b) return null;
            if (b == window) {
                var e, f, g = document.body;
                if (b.innerWidth) {
                    e = b.innerWidth;
                    f = b.innerHeight
                } else if (g && g.parentElement &&
                    g.parentElement.clientWidth) {
                    e = g.parentElement.clientWidth;
                    f = g.parentElement.clientHeight
                } else if (g && g.clientWidth) {
                    e = g.clientWidth;
                    f = g.clientHeight
                }
                return {
                    width: e,
                    height: f
                }
            } else {
                e = a ? "block" : ZC.A3(b).getstyle("display");
                if (e == "none" || e == "" || typeof e == ZC._[33]) {
                    g = b.style;
                    var h = g.visibility,
                        k = g.position,
                        l = g.display;
                    g.visibility = "hidden";
                    g.position = "absolute";
                    g.display = "block";
                    e = b.offsetWidth;
                    f = b.offsetHeight;
                    g.display = l;
                    g.position = k;
                    g.visibility = h
                } else {
                    e = b.offsetWidth || 0;
                    f = b.offsetHeight || 0
                }
            }
            return {
                width: e,
                height: f
            }
        });
        return c.length == 1 ? c[0] : c
    },
    getstyle: function(a) {
        a = this.eachfn.call(this, function(c, b) {
            if (b == "display") return c.style.display;
            var e, f = document;
            b = ZC.CE(b);
            if (!(!c || c == f)) {
                if (b == "opacity" && typeof c.filters != ZC._[33]) {
                    if ((e = (ZC.A3(c).getstyle("filter") || "").match(/alpha\(opacity=(.*)\)/)) && e[1]) return parseFloat(e[1]) / 100;
                    return 1
                }
                if (ZC.AH(["float", "cssFloat", "styleFloat"], b) != -1) return (e = c.style["float"]) ? e : (e = c.style.cssFloat) ? e : (e = c.style.styleFloat) ? e : "none";
                e = c.style ? c.style[b] : null;
                if (!e)
                    if (f.defaultView && f.defaultView.getComputedStyle) {
                        e = f.defaultView.getComputedStyle(c, null);
                        b = b.replace(/([A-Z])/g, "-$1").toLowerCase();
                        e = e ? e.getPropertyValue(b) : null
                    } else if (c.currentStyle) {
                    e = c.currentStyle[b];
                    if (/^\d/.test(e) && !/px$/.test(e) && b != "fontWeight") {
                        f = c.style.left;
                        var g = c.runtimeStyle.left;
                        c.runtimeStyle.left = c.currentStyle.left;
                        c.style.left = e || 0;
                        e = c.style.pixelLeft + "px";
                        c.style.left = f;
                        c.runtimeStyle.left = g
                    }
                }
                if (b == "opacity") e = parseFloat(e);
                if (/Opera/.test(navigator.userAgent) && ZC.AH(["left",
                    "top", "right", "bottom"
                ], b) != -1)
                    if (ZC.A3(c).getstyle("position") == "static") e = "auto";
                return e == "auto" ? null : e
            }
        }, a);
        return a.length == 1 ? a[0] : a
    },
    width: function(a) {
        var c;
        if (typeof a == ZC._[33]) {
            a = this.eachfn.call(this, function(b) {
                return (c = ZC.A3(b).W4()) != null ? ZC._i_(c[ZC._[21]]) : 0
            });
            return a.length == 1 ? a[0] : a
        } else {
            this.eachfn.call(this, function(b, e) {
                b.style.width = e + "px"
            }, a);
            return this
        }
    },
    height: function(a) {
        var c;
        if (typeof a == ZC._[33]) {
            a = this.eachfn.call(this, function(b) {
                return (c = ZC.A3(b).W4()) != null ? ZC._i_(c[ZC._[22]]) :
                    0
            });
            return a.length == 1 ? a[0] : a
        } else {
            this.eachfn.call(this, function(b, e) {
                b.style.height = e + "px"
            }, a);
            return this
        }
    },
    scrollLeft: function() {
        return ZC.A3.scroll().left
    },
    scrollTop: function() {
        return ZC.A3.scroll().top
    },
    css: function(a, c) {
        if (typeof c == ZC._[33]) {
            var b = this.eachfn.call(this, function(e) {
                e = ZC.A3(e).getstyle(a);
                return (new String(e)).indexOf("px") != -1 ? ZC._i_(e) : e
            });
            return b.length == 1 ? b[0] : b
        } else {
            this.eachfn.call(this, function(e, f, g) {
                e.style[f] = g
            }, a, c);
            return this
        }
    },
    attr: function(a, c) {
        if (typeof c ==
            ZC._[33]) {
            var b = this.eachfn.call(this, function(e) {
                return e.getAttribute(a)
            });
            return b.length == 1 ? b[0] : b
        } else {
            this.eachfn.call(this, function(e, f, g) {
                e.setAttribute(f, g)
            }, a, c);
            return this
        }
    },
    val: function(a) {
        if (typeof a == ZC._[33]) {
            a = this.eachfn.call(this, function(c) {
                return c.value
            });
            return a.length == 1 ? a[0] : a
        } else {
            this.eachfn.call(this, function(c, b) {
                c.value = b
            }, a);
            return this
        }
    },
    show: function() {
        this.eachfn.call(this, function(a) {
            a.style.display = "block"
        });
        return this
    },
    hide: function() {
        this.eachfn.call(this, function(a) {
            a.style.display =
                "none"
        });
        return this
    },
    offset: function() {
        var a = this.eachfn.call(this, function(c) {
            if (!(!c || !(c.x && c.y) && (!c.parentNode === null || ZC.A3(c).getstyle("display") == "none"))) {
                var b = {
                        top: 0,
                        left: 0
                    },
                    e = null,
                    f = null,
                    g = document;
                f = g.documentElement;
                g = g.body;
                if (!c.parentNode && c.x && c.y) {
                    b.left += c.x || 0;
                    b.top += c.y || 0
                } else if (c.getBoundingClientRect) {
                    e = c.getBoundingClientRect();
                    b.left += e.left + (f.scrollLeft || g.scrollLeft) - (f.clientLeft || 0);
                    b.top += e.top + (f.scrollTop || g.scrollTop) - (f.clientTop || 0)
                } else if (c.offsetParent) {
                    b.left +=
                        c.offsetLeft;
                    b.top += c.offsetTop;
                    f = c.offsetParent;
                    if (f != c)
                        for (; f;) {
                            b.left += ZC._i_(f.style.borderLeftWidth);
                            b.top += ZC._i_(f.style.borderTopWidth);
                            b.left += ZC._i_(parent.offsetLeft);
                            b.top += ZC._i_(parent.offsetTop);
                            f = f.offsetParent
                        }
                    f = navigator.userAgent.toLowerCase();
                    if (typeof opera != ZC._[33] && parseFloat(opera.version()) < 9 || f.indexOf("AppleWebKit") != -1 && ZC.A3(c).getstyle("position") == "absolute") {
                        b.left -= ZC._i_(g.offsetLeft);
                        b.top -= ZC._i_(g.offsetTop)
                    }
                    for (f = c.parentNode ? c.parentNode : null; f;) {
                        c = f.tagName.toUpperCase();
                        if (c === "BODY" || c === "HTML") break;
                        if (ZC.A3(f).getstyle("display").search(/^inline|table-row.*$/i)) {
                            b.left -= ZC._i_(f.scrollLeft);
                            b.top -= ZC._i_(f.scrollTop)
                        }
                        f = f.parentNode ? f.parentNode : null
                    }
                }
                return b
            }
        });
        return a.length == 1 ? a[0] : a
    },
    bind: function(a, c) {
        this.eachfn.call(this, function(b, e, f) {
                function g(h) {
                    h = h || window.event;
                    var k = h.target || h.srcElement;
                    h = ZC.A3.BL(h);
                    h != null && f.call(k, h)
                }
                if (!ZC.A3.KZ) ZC.A3.KZ = [];
                ZC.A3.KZ.push([b, e, f, g]);
                b.addEventListener ? b.addEventListener(e, g, true) : b.attachEvent("on" + e, g)
            },
            a, c);
        return this
    },
    unbind: function(a, c) {
        this.eachfn.call(this, function(b, e, f) {
            if (typeof ZC.A3.KZ != ZC._[33])
                for (var g = 0, h = ZC.A3.KZ.length; g < h; g++)
                    if (ZC.A3.KZ[g][0] == b && ZC.A3.KZ[g][1] == e && ZC.A3.KZ[g][2] == f) {
                        b.removeEventListener ? b.removeEventListener(e, ZC.A3.KZ[g][3], true) : b.detachEvent("on" + e, ZC.A3.KZ[g][3]);
                        ZC.A3.KZ.splice(g, 1);
                        break
                    }
        }, a, c);
        return this
    },
    live: function(a, c) {
        var b = this.GZ;
        if (!ZC.A3.EVENTS) ZC.A3.EVENTS = {};
        if (!ZC.A3.EVENTS[a]) {
            ZC.A3.EVENTS[a] = [];
            var e = function(f) {
                f = f || window.event;
                var g =
                    f.target || f.srcElement,
                    h = g.className || "";
                if (typeof h == "object") h = typeof h.baseVal != ZC._[33] ? h.baseVal : "";
                for (var k = ZC.A3.EVENTS[a], l = null, m = null, o = 0, n = k.length; o < n; o++)
                    if (typeof k[o][0] == "object" && g == k[o][0] || typeof k[o][0] == "string" && (k[o][0].substring(0, 1) == "." && ZC.AH(h.split(" "), k[o][0].replace(".", "")) != -1 || k[o][0].substring(0, 1) == "#" && g.id == k[o][0].substring(1))) {
                        l = k[o][1];
                        m = ZC.A3.BL(f)
                    }
                l != null && m != null && l.call(g, m)
            };
            document.addEventListener ? document.addEventListener(a, e, true) : document.attachEvent("on" +
                a, e)
        }
        ZC.A3.EVENTS[a].push([b, c]);
        return this
    },
    die: function(a, c) {
        var b = this.GZ;
        if (!ZC.A3.EVENTS) ZC.A3.EVENTS = {};
        var e;
        if (e = ZC.A3.EVENTS[a])
            for (var f = 0, g = e.length; f < g; f++)
                if (e[f][0] == b && (!c || e[f][1] == c)) {
                    e.splice(f, 1);
                    break
                }
        return this
    }
};
ZC.A3.cache = {};
ZC.A3.browser = {};
(function() {
    var a = /(webkit)[ \/]([\w.]+)/,
        c = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        b = /(msie) ([\w.]+)/,
        e = /(mozilla)(?:.*? rv:([\w.]+))?/,
        f = function(g) {
            g = g.toLowerCase();
            g = a.exec(g) || c.exec(g) || b.exec(g) || g.indexOf("compatible") < 0 && e.exec(g) || [];
            return [g[1] || "", g[2] || "0"]
        }(navigator.userAgent);
    if (f[0]) {
        ZC.A3.browser[f[0]] = 1;
        ZC.A3.browser.version = f[1]
    }
})();
ZC.A3.scroll = function() {
    var a = {
            top: 0,
            left: 0
        },
        c = document,
        b = c.documentElement;
    c = c.body;
    if (b && (b.scrollTop || b.scrollLeft)) {
        a.left = b.scrollLeft;
        a.top = b.scrollTop
    } else if (c) {
        a.left = c.scrollLeft;
        a.top = c.scrollTop
    }
    return a
};
ZC.A3.BL = function(a) {
    a.originalEvent = a;
    if (!a.target) a.target = a.srcElement || document;
    if (a.target.nodeType === 3 || a.target.nodeType === 8) a.target = a.target.parentNode;
    if (a.pageX == null && a.clientX != null) {
        var c = a.target.ownerDocument || document,
            b = c.documentElement;
        c = c.body;
        a.pageX = a.clientX + (b && b.scrollLeft || c && c.scrollLeft || 0) - (b && b.clientLeft || c && c.clientLeft || 0);
        a.pageY = a.clientY + (b && b.scrollTop || c && c.scrollTop || 0) - (b && b.clientTop || c && c.clientTop || 0)
    }
    if (!a.which && a.button !== undefined) a.which = a.button & 1 ?
        1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0;
    if (!a.preventDefault) a.preventDefault = function() {
        this.returnValue = 0
    };
    if (!a.stopPropagation) a.stopPropagation = function() {
        this.cancelBubble = 1
    };
    return a
};
ZC.A3.childof = function(a, c) {
    if (a == c) return true;
    for (; a != c && a.parentNode;) {
        a = a.parentNode;
        if (a == c) return true
    }
    return false
};
ZC.A3.ajax = function(a) {
    var c = a.url || "",
        b = a.type || "GET",
        e = a.data || null,
        f = a.beforeSend || null,
        g = a.error || null,
        h = a.success || null,
        k = null;
    try {
        if (window.ActiveXObject) k = new ActiveXObject("Microsoft.XMLHTTP");
        else if (window.XMLHttpRequest) k = new XMLHttpRequest
    } catch (l) {}
    var m = window.location.protocol == "file:";
    if (k) {
        k.onreadystatechange = function() {
            if (k.readyState == 4) {
                if (m || k.status >= 200 && k.status < 300) h && h(k.responseText, k.status, k, c);
                k.status >= 400 && g && g(k, k.status, k.statusText, c);
                k.onreadystatechange = new window.Function;
                k = null
            }
        };
        if (!window.ActiveXObject) k.onerror = function() {
            g && g(k, 0, "", c)
        };
        if (b.toUpperCase() == "POST") {
            k.open("POST", c, true);
            k.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            k.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        } else k.open("GET", c, true);
        f && f(k);
        try {
            k.send(e)
        } catch (o) {
            if (m)
                if (g) {
                    g(k, k.status, k.statusText, c);
                    k.onreadystatechange = new window.Function;
                    k = null
                }
        }
    }
};
ZC.AP = {
    _boxoverlap_: function(a, c) {
        if (a.x > c.x + c.width) return false;
        if (c.x > a.x + a.width) return false;
        if (a.y > c.y + c.height) return false;
        if (c.y > a.y + a.height) return false;
        return true
    },
    UE: function(a, c, b) {
        a = Math.sqrt(a / Math.PI);
        var e = Math.sqrt(c / Math.PI);
        c = Math.min(a, e);
        a = Math.max(a, e);
        e = Number.MAX_VALUE;
        for (var f = 0, g = c + a; g > a - c; g -= c / 50) {
            var h = c * c * Math.acos((g * g + c * c - a * a) / (2 * g * c)) + a * a * Math.acos((g * g + a * a - c * c) / (2 * g * a)) - 0.5 * Math.sqrt((-g + c + a) * (g + c - a) * (g - c + a) * (g + c + a));
            if (Math.abs(h - b) < e) {
                e = Math.abs(h - b);
                f = g
            }
        }
        return f
    },
    BA: function(a, c, b, e) {
        return [ZC._f_(a) + ZC._f_(b) * ZC.CT(ZC._f_(e)), ZC._f_(c) + ZC._f_(b) * ZC.CJ(ZC._f_(e))]
    },
    I4: function(a, c, b, e, f, g) {
        f = f == null ? 0 : f;
        g = g == null ? true : g;
        if (b - a != 0) {
            var h = 0,
                k = 0,
                l = Math.atan((e - c) / (b - a));
            if (f < 1 || g) {
                h = f / 2.5 * Math.cos(l);
                k = f / 2.5 * Math.sin(l)
            }
            f = 1;
            if (a > b) f = 0;
            return [(a + b) / 2 + (f ? h : -h), (c + e) / 2 + k]
        } else return [a, c]
    },
    YF: function(a, c) {
        var b = (a[1] - c[1]) / (a[0] - c[0]);
        return [b, a[1] - b * a[0]]
    },
    _ipoint_: function(a, c, b, e) {
        if (c[0] == e[0] && c[1] == e[1]) return c;
        if (a[0] == b[0] && a[1] == b[1]) return a;
        c = ZC.AP.YF(a,
            c);
        a = c[0];
        c = c[1];
        b = ZC.AP.YF(b, e);
        b = (b[1] - c) / (a - b[0]);
        return [b, a * b + c]
    },
    M0: function(a, c) {
        if (c == null) c = 5;
        for (var b = "", e, f, g, h, k = ZC.ie67 ? ZC.MAPTX : 0, l = 0, m = a.length; l < m; l++)
            if (a[l])
                if (l == 0) {
                    f = a[l][0] + k;
                    g = a[l][1] + k;
                    e = l;
                    b += ZC._i_(f) + "," + ZC._i_(g) + ","
                } else {
                    h = Math.sqrt((a[l][0] + k - f) * (a[l][0] + k - f) + (a[l][1] + k - g) * (a[l][1] + k - g));
                    if (h > c)
                        if (a[l - 1]) {
                            h = Math.sqrt((a[l][0] - a[l - 1][0]) * (a[l][0] - a[l - 1][0]) + (a[l][1] - a[l - 1][1]) * (a[l][1] - a[l - 1][1]));
                            if (h > c && l - e > 1) b += ZC._i_(a[l - 1][0] + k) + "," + ZC._i_(a[l - 1][1] + k) + ",";
                            f = a[l][0] +
                                k;
                            g = a[l][1] + k;
                            e = l;
                            b += ZC._i_(f) + "," + ZC._i_(g) + ","
                        }
                }
        return b = b.substring(0, b.length - 1)
    },
    SQ: function(a, c) {
        if (a == null || a.length < 2) return "";
        c = c || 5;
        for (var b = [], e = 0, f = a.length; e < f; e++) b.push(a[e]);
        b.sort(function(t, r) {
            if (t[0] >= r[0]) return 1;
            else if (t[0] < r[0]) return -1
        });
        var g = [],
            h = [];
        e = 0;
        for (f = b.length; e < f; e++) {
            var k = b[e][0],
                l = b[e][1],
                m, o, n, p;
            if (b[e - 1]) {
                n = b[e - 1][0];
                p = b[e - 1][1]
            }
            if (b[e + 1]) {
                m = b[e + 1][0];
                o = b[e + 1][1]
            }
            if (e == 0) {
                var s = Math.atan((o - l) / (m - k));
                s = ZC.V4(s);
                g.push(ZC.AP.BA(k, l, c, s + 90), ZC.AP.BA(k, l, c, s +
                    180), ZC.AP.BA(k, l, c, s + 270))
            } else if (e == b.length - 1) {
                s = Math.atan((p - l) / (n - k));
                s = ZC.V4(s);
                g.push(ZC.AP.BA(k, l, c, s + 270), ZC.AP.BA(k, l, c, s), ZC.AP.BA(k, l, c, s + 90))
            } else {
                s = ZC.V4((Math.atan((o - l) / (m - k)) + Math.atan((l - p) / (k - n))) / 2);
                g.push(ZC.AP.BA(k, l, c, s + 270));
                h.push(ZC.AP.BA(k, l, c, s + 90))
            }
        }
        for (e = h.length - 1; e >= 0; e--) g.push(h[e]);
        return g
    },
    TR: function(a, c) {
        var b = 0,
            e = 0,
            f = [];
        a += "";
        switch (a) {
            case "horizontal":
            case "h":
                b = 1;
                e = c;
                break;
            case "vertical":
            case "v":
                b = c;
                e = 1;
            default:
                f = a.split("x");
                if (f[0] != null && ZC._i_(f[0]) ==
                    f[0]) b = ZC._i_(f[0]);
                if (f[1] != null && ZC._i_(f[1]) == f[1]) e = ZC._i_(f[1]);
                if (e == 0 && b == 0) {
                    b = Math.ceil(Math.sqrt(c));
                    e = Math.ceil(c / b)
                } else {
                    if (e == 0) e = Math.ceil(c / b);
                    if (b == 0) b = Math.ceil(c / e)
                }
        }
        return [b, e]
    },
    NO: function(a, c, b) {
        function e(k, l, m, o) {
            if (k != null) return k;
            if (l != null) return l;
            if (m != null) return m;
            if (o != null) return o;
            return null
        }
        if (b == null) b = 1 / (4 * (c / a.length));
        c = [];
        for (var f = 1; f < a.length - 2; f++)
            if (b != 1) {
                var g = [a[f - 1], a[f], a[f + 1], a[f + 2]];
                if (g[1] == null || g[2] == null) c.push([]);
                else {
                    if (g[0] == null) g[0] = e(g[1],
                        g[2], g[3], g[0]);
                    if (g[1] == null) g[1] = e(g[2], g[0], g[3], g[1]);
                    if (g[2] == null) g[2] = e(g[3], g[1], g[0], g[2]);
                    if (g[3] == null) g[3] = e(g[2], g[1], g[0], g[3]);
                    for (var h = 0; h <= 1; h += b) c.push([f + h - 1, 0.5 * (2 * g[1] + (-g[0] + g[2]) * h + (2 * g[0] - 5 * g[1] + 4 * g[2] - g[3]) * h * h + (-g[0] + 3 * g[1] - 3 * g[2] + g[3]) * h * h * h)])
                }
            } else c.push([f - 1, a[f]]);
        return c
    },
    XH: function(a, c, b, e) {
        if (e == null || e == 0) e = 1;
        var f = Math.floor(ZC.NR(c) / Math.LN10),
            g = Math.floor(ZC.NR(a) / Math.LN10);
        f = Math.max(f, g);
        if (b == null) {
            b = Math.pow(10, f);
            if (ZC._a_(c) / b < 2 && ZC._a_(a) / b < 2) {
                f--;
                b = Math.pow(10, f)
            }
            g = Math.floor(ZC.NR(c - a) / Math.LN10);
            var h = Math.pow(10, g);
            if (c - a > 0 && b / h >= 10) {
                b = h;
                f = g
            }
        }
        b *= e;
        e = Math.ceil(c / b) * b;
        if (a < 0) {
            c = -(Math.floor(ZC._a_(a / b)) * b);
            if (c > a) c = -((Math.floor(ZC._a_(a / b)) + 1) * b)
        } else {
            c = Math.floor(ZC._a_(a / b)) * b;
            if (c > a) c = Math.floor(ZC._a_(a / b) - 1) * b;
            c = c < 0 ? 0 : c
        } if (f < 0) {
            c = ZC._f_(c.toFixed(-f));
            e = ZC._f_(e.toFixed(-f));
            b = ZC._f_(b.toFixed(-f))
        }
        return [c, e, b, f]
    }
};
ZC.Q1 = {
    md5: function(a) {
        return ZC.Q1.A0J(ZC.Q1.A0K(ZC.Q1.A08(a)))
    },
    A0K: function(a) {
        return ZC.Q1.ZT(ZC.Q1.A0H(ZC.Q1.ZV(a), a.length * 8))
    },
    A0J: function(a) {
        for (var c = "", b, e = 0, f = a.length; e < f; e++) {
            b = a.charCodeAt(e);
            c += "0123456789abcdef".charAt(b >>> 4 & 15) + "0123456789abcdef".charAt(b & 15)
        }
        return c
    },
    A08: function(a) {
        for (var c = "", b = -1, e = a.length, f, g; ++b < e;) {
            f = a.charCodeAt(b);
            g = b + 1 < e ? a.charCodeAt(b + 1) : 0;
            if (55296 <= f && f <= 56319 && 56320 <= g && g <= 57343) {
                f = 65536 + ((f & 1023) << 10) + (g & 1023);
                b++
            }
            if (f <= 127) c += String.fromCharCode(f);
            else if (f <= 2047) c += String.fromCharCode(192 | f >>> 6 & 31, 128 | f & 63);
            else if (f <= 65535) c += String.fromCharCode(224 | f >>> 12 & 15, 128 | f >>> 6 & 63, 128 | f & 63);
            else if (f <= 2097151) c += String.fromCharCode(240 | f >>> 18 & 7, 128 | f >>> 12 & 63, 128 | f >>> 6 & 63, 128 | f & 63)
        }
        return c
    },
    ZV: function(a) {
        for (var c = Array(a.length >> 2), b = 0; b < c.length; b++) c[b] = 0;
        for (b = 0; b < a.length * 8; b += 8) c[b >> 5] |= (a.charCodeAt(b / 8) & 255) << b % 32;
        return c
    },
    ZT: function(a) {
        for (var c = "", b = 0; b < a.length * 32; b += 8) c += String.fromCharCode(a[b >> 5] >>> b % 32 & 255);
        return c
    },
    A0H: function(a,
        c) {
        function b(y, w, v, x, z, C) {
            y = h(h(w, y), h(x, C));
            return h(y << z | y >>> 32 - z, v)
        }

        function e(y, w, v, x, z, C, B) {
            return b(w & v | ~w & x, y, w, z, C, B)
        }

        function f(y, w, v, x, z, C, B) {
            return b(w & x | v & ~x, y, w, z, C, B)
        }

        function g(y, w, v, x, z, C, B) {
            return b(v ^ (w | ~x), y, w, z, C, B)
        }

        function h(y, w) {
            var v = (y & 65535) + (w & 65535);
            return (y >> 16) + (w >> 16) + (v >> 16) << 16 | v & 65535
        }
        a[c >> 5] |= 128 << c % 32;
        a[(c + 64 >>> 9 << 4) + 14] = c;
        for (var k = 1732584193, l = -271733879, m = -1732584194, o = 271733878, n = 0, p = a.length; n < p; n += 16) {
            var s = k,
                t = l,
                r = m,
                u = o;
            k = e(k, l, m, o, a[n], 7, -680876936);
            o =
                e(o, k, l, m, a[n + 1], 12, -389564586);
            m = e(m, o, k, l, a[n + 2], 17, 606105819);
            l = e(l, m, o, k, a[n + 3], 22, -1044525330);
            k = e(k, l, m, o, a[n + 4], 7, -176418897);
            o = e(o, k, l, m, a[n + 5], 12, 1200080426);
            m = e(m, o, k, l, a[n + 6], 17, -1473231341);
            l = e(l, m, o, k, a[n + 7], 22, -45705983);
            k = e(k, l, m, o, a[n + 8], 7, 1770035416);
            o = e(o, k, l, m, a[n + 9], 12, -1958414417);
            m = e(m, o, k, l, a[n + 10], 17, -42063);
            l = e(l, m, o, k, a[n + 11], 22, -1990404162);
            k = e(k, l, m, o, a[n + 12], 7, 1804603682);
            o = e(o, k, l, m, a[n + 13], 12, -40341101);
            m = e(m, o, k, l, a[n + 14], 17, -1502002290);
            l = e(l, m, o, k, a[n + 15], 22, 1236535329);
            k = f(k, l, m, o, a[n + 1], 5, -165796510);
            o = f(o, k, l, m, a[n + 6], 9, -1069501632);
            m = f(m, o, k, l, a[n + 11], 14, 643717713);
            l = f(l, m, o, k, a[n], 20, -373897302);
            k = f(k, l, m, o, a[n + 5], 5, -701558691);
            o = f(o, k, l, m, a[n + 10], 9, 38016083);
            m = f(m, o, k, l, a[n + 15], 14, -660478335);
            l = f(l, m, o, k, a[n + 4], 20, -405537848);
            k = f(k, l, m, o, a[n + 9], 5, 568446438);
            o = f(o, k, l, m, a[n + 14], 9, -1019803690);
            m = f(m, o, k, l, a[n + 3], 14, -187363961);
            l = f(l, m, o, k, a[n + 8], 20, 1163531501);
            k = f(k, l, m, o, a[n + 13], 5, -1444681467);
            o = f(o, k, l, m, a[n + 2], 9, -51403784);
            m = f(m, o, k, l, a[n + 7], 14, 1735328473);
            l = f(l, m, o, k, a[n + 12], 20, -1926607734);
            k = b(l ^ m ^ o, k, l, a[n + 5], 4, -378558);
            o = b(k ^ l ^ m, o, k, a[n + 8], 11, -2022574463);
            m = b(o ^ k ^ l, m, o, a[n + 11], 16, 1839030562);
            l = b(m ^ o ^ k, l, m, a[n + 14], 23, -35309556);
            k = b(l ^ m ^ o, k, l, a[n + 1], 4, -1530992060);
            o = b(k ^ l ^ m, o, k, a[n + 4], 11, 1272893353);
            m = b(o ^ k ^ l, m, o, a[n + 7], 16, -155497632);
            l = b(m ^ o ^ k, l, m, a[n + 10], 23, -1094730640);
            k = b(l ^ m ^ o, k, l, a[n + 13], 4, 681279174);
            o = b(k ^ l ^ m, o, k, a[n], 11, -358537222);
            m = b(o ^ k ^ l, m, o, a[n + 3], 16, -722521979);
            l = b(m ^ o ^ k, l, m, a[n + 6], 23, 76029189);
            k = b(l ^ m ^ o, k, l, a[n + 9], 4, -640364487);
            o = b(k ^
                l ^ m, o, k, a[n + 12], 11, -421815835);
            m = b(o ^ k ^ l, m, o, a[n + 15], 16, 530742520);
            l = b(m ^ o ^ k, l, m, a[n + 2], 23, -995338651);
            k = g(k, l, m, o, a[n], 6, -198630844);
            o = g(o, k, l, m, a[n + 7], 10, 1126891415);
            m = g(m, o, k, l, a[n + 14], 15, -1416354905);
            l = g(l, m, o, k, a[n + 5], 21, -57434055);
            k = g(k, l, m, o, a[n + 12], 6, 1700485571);
            o = g(o, k, l, m, a[n + 3], 10, -1894986606);
            m = g(m, o, k, l, a[n + 10], 15, -1051523);
            l = g(l, m, o, k, a[n + 1], 21, -2054922799);
            k = g(k, l, m, o, a[n + 8], 6, 1873313359);
            o = g(o, k, l, m, a[n + 15], 10, -30611744);
            m = g(m, o, k, l, a[n + 6], 15, -1560198380);
            l = g(l, m, o, k, a[n + 13], 21, 1309151649);
            k = g(k, l, m, o, a[n + 4], 6, -145523070);
            o = g(o, k, l, m, a[n + 11], 10, -1120210379);
            m = g(m, o, k, l, a[n + 2], 15, 718787259);
            l = g(l, m, o, k, a[n + 9], 21, -343485551);
            k = h(k, s);
            l = h(l, t);
            m = h(m, r);
            o = h(o, u)
        }
        return [k, l, m, o]
    }
};
if (typeof zingchart == ZC._[33]) zingchart = {
    A12: true
};
zingchart.clipart = {};
zingchart.i18n = {};
zingchart.THEMES = {};
zingchart.V3D = 2;
zingchart.FASTWIDTH = 0;
zingchart.CANVASTEXT = 0;
zingchart.ZINDEX = 1;
zingchart.CMZINDEX = 0;
zingchart.FSZINDEX = 9999;
zingchart.LITE = 0;
zingchart.ZCOUTPUT = 0;
zingchart.ASYNC = 0;
zingchart.SORTTRACKERS = 0;
zingchart.TIMEOUT = 25;
zingchart.MODULESDIR = "./modules/";
zingchart.MODULESDEP = {
    line: "xy",
    line3d: "3d,line",
    area: "xy",
    area3d: "3d,area",
    vbar: "xy",
    vbar3d: "3d,vbar",
    hbar: "yx",
    hbar3d: "3d,hbar",
    scatter: "xy",
    bubble: "xy",
    pie: "r",
    pie3d: "3d,pie",
    nestedpie: "r",
    gauge: "r",
    vbullet: "vbar",
    hbullet: "hbar",
    vfunnel: "xy",
    hfunnel: "yx",
    piano: "xy",
    radar: "r",
    range: "xy",
    stock: "xy,vbar",
    venn: "r"
};
zingchart.USERCSS = {};
zingchart.CLICKS = [];
zingchart.EXPORTURL = "http://export.zingchart.com/";
zingchart.TOUCHZOOM = "normal";
zingchart.FONTSIZE = 11;
zingchart.FONTFAMILY = "Lucida Sans Unicode,Lucida Grande,Arial,Verdana,sans-serif";
if (ZC.mobile) zingchart.FONTFAMILY = "Helvetica,Verdana,Arial,Verdana,sans-serif";
zingchart.loadModules = function(a, c) {
    for (var b = (new String(a)).split(","), e = 0, f = b.length; e < f; e++) {
        var g = ZC.GS(b[e]);
        if (ZC.AH(["bar", "bar3d", "funnel", "bullet"], g) != -1) g = "v" + g;
        var h = zingchart.MODULESDEP[g];
        h != null && typeof h != ZC._[33] && zingchart.loadModules(h);
        ZC.AH(ZC.OQ, g) == -1 && ZC.OQ.push(g)
    }
    c && zingchart.RG(null, ZC.OQ, c)
};
zingchart.RG = function(a, c, b) {
    if (c.length == 0) b();
    else if (document.getElementsByTagName("head")[0]) {
        var e = 0,
            f = function() {
                function g() {
                    e++;
                    e == c.length ? b() : f()
                }
                var h, k = 1;
                if (zingchart.A0C(c[e])) h = zingchart.MODULESDIR + "zingchart-html5-" + c[e] + "-min.js";
                else k = 0;
                k ? ZC.BV.ZU(a, h, g) : g()
            };
        f()
    } else b()
};
zingchart.A0C = function(a) {
    return ZC.AH(ZC.OQ, a) != -1 && ZC.AH(ZC.S9, a) == -1
};
zingchart.IL = [];
ZC.ie67 || function() {
    for (var a in ZC.IMAGES)
        if (ZC.IMAGES.hasOwnProperty(a)) {
            zingchart.IL[a] = new Image;
            zingchart.IL[a].src = ZC.IMAGES[a]
        }
}();
if (typeof Ext != ZC._[33]) {
    zingchart.IL["zc.blank"] = new Image;
    zingchart.IL["zc.blank"].src = ZC.BLANK
}
zingchart.exec = function(a, c, b) {
    if (zingchart.exec_flash) return zingchart.exec_flash(a, c, b);
    return null
};
zingchart.A0P = function(a) {
    var c = a.dataurl || "",
        b = "",
        e, f = null;
    if ((e = a.data) != null)
        if (typeof e == "string") b = e;
        else f = e;
    var g = null;
    if (c != "") ZC.A3.ajax({
        type: "GET",
        url: c,
        dataType: "text",
        data: zingchart.ZCOUTPUT ? "zcoutput=userdef" : "",
        error: function() {
            return false
        },
        success: function(k) {
            try {
                ZC.cache["data-" + c] = k;
                g = JSON.parse(k);
                a.output = "auto";
                ZC.ET(g.render, a);
                zingchart.render(a)
            } catch (l) {}
        }
    });
    else {
        if (b != "") try {
            g = JSON.parse(b)
        } catch (h) {} else if (f != null) g = f;
        if (a.output == null) a.output = "auto";
        ZC.ET(g.render, a);
        zingchart.render(a)
    }
};
zingchart.QE = null;
zingchart.render = function(a, c) {
    if (c == null) c = 0;
    if (c) zingchart.A0P(a);
    else {
        if (typeof ZC.canvas == ZC._[33] || ZC.canvas == null) ZC.compat();
        var b = a.output || "auto";
        if (b == "html5") b = "auto";
        if (ZC.mobile && b == "auto") b = "svg";
        var e = 0;
        if (b.substring(0, 1) == "!") {
            e = 1;
            b = b.substring(1)
        }
        if (!e)
            if (b == "auto" || b == "canvas" && !ZC.canvas || b == "svg" && !ZC.svg || b == "vml" && !ZC.vml || b == "flash" && !ZC.flash)
                if (ZC.canvas) b = "canvas";
                else if (ZC.svg) b = "svg";
        else if (ZC.vml) b = "vml";
        else if (ZC.flash) b = "flash";
        if (b == "vml" && zingchart.QE == null) zingchart.QE =
            0;
        b == "flash" ? zingchart.render_flash(a) : zingchart.T4(a, b)
    }
};
if (document.attachEvent)
    if (document.readyState == "complete") zingchart.QE = 1;
    else document.attachEvent("onreadystatechange", function() {
        if (document.readyState == "complete") zingchart.QE = 1
    });
zingchart.setlabel = function(a, c) {
    ZC.EV[a] = c
};
zingchart.GK = [];
zingchart.A15 = 0;
zingchart.A0W = 0;
zingchart.A10 = 0;
zingchart.XD = 0;
zingchart.XA = 0;
zingchart.A0N = 0;
zingchart.css = null;
zingchart.RJ = function(a) {
    if (a.target.id) {
        for (var c = null, b = 0, e = zingchart.GK.length; b < e; b++)
            if (a.target.id.substr(0, zingchart.GK[b].Q.length + 1) == zingchart.GK[b].Q + "-") c = zingchart.GK[b];
        return c
    }
};
if (typeof zingchart.P7 == ZC._[33]) {
    zingchart.P7 = function(a) {
        if (window.ZC) window.ZC.FG = [a.pageX, a.pageY]
    };
    ZC.A3(document).bind(ZC._[50], zingchart.P7);
    if (window != window.top) try {
        ZC.A3(window.top.document).bind(ZC._[50], zingchart.P7)
    } catch (FB$$4) {}
}
if (typeof zingchart.MO == ZC._[33]) {
    zingchart.MO = function(a) {
        for (var c = 0, b = zingchart.GK.length; c < b; c++) zingchart.GK[c].hideCM();
        if (ZC.mobile && ZC.move) ZC.move = 0;
        else {
            zingchart.CLICKS.push(ZC.A3.BL(a));
            zingchart.CLICKS.length > 10 && zingchart.CLICKS.shift();
            if (!(!ZC.mobile && a.which > 1))
                if (c = zingchart.RJ(a)) {
                    var e = ZC.K.L3(a);
                    if (b = c.XN(e[0], e[1])) {
                        var f = ZC.A3("#" + c.Q + "-top"),
                            g = e[0] - f.offset().left;
                        e = e[1] - f.offset().top;
                        f = g >= b.O.iX && g <= b.O.iX + b.O.F && e >= b.O.iY && e <= b.O.iY + b.O.D;
                        var h = "none";
                        if (/(.*)\-plotset\-plot\-(\d+)\-node\-(\d+)(.*)/.test(a.target.id)) h =
                            "node";
                        if (/(.*)\-legend\-item\-(\d+)\-area/.test(a.target.id)) h = "legend-item";
                        if (/(.*)\-menu\-item\-(.*)/.test(a.target.id)) h = "menu-item";
                        if (/(.*)\-preview\-handler\-x(.*)/.test(a.target.id)) h = "preview";
                        if (/(.*)\-shape\-(.*?)\-area/.test(a.target.id)) h = "shape";
                        if (/(.*)\-label\-(.*?)\-area/.test(a.target.id)) h = "label";
                        b = {
                            id: c.Q,
                            graphid: b.Q,
                            targetid: a.target.id,
                            target: h,
                            x: g,
                            y: e,
                            plotarea: f,
                            touch: ZC.mobile
                        };
                        try {
                            zingchart.click(b)
                        } catch (k) {}
                        try {
                            c.OY.click(b)
                        } catch (l) {}
                    }
                    a.target.id != c.Q + "-menu-area" ? c.hideCM() :
                        zingchart.RR(a)
                }
        }
    };
    ZC.mobile ? ZC.A3(document).bind("touchmove", function() {
        ZC.move = 1
    }) : ZC.A3(document).bind("click", zingchart.MO)
}
if (typeof zingchart.RR == ZC._[33]) {
    zingchart.RR = function(a, c) {
        var b = c == null ? zingchart.RJ(a) : zingchart.loader(c);
        if (b) {
            if (ZC.AH(b.H3, ZC._[40]) != -1) return false;
            var e = -1;
            if (zingchart.CMZINDEX != 0) e = zingchart.CMZINDEX;
            else
                for (var f = ZC.AJ(b.Q); e == -1 && f.parentNode != null;) {
                    e = ZC._i_(ZC.A3(f).css("zIndex"));
                    if (e == "auto" || e == "" || e == null) e = -1;
                    f = f.parentNode
                }
            if (!e || e == -1 || e == null) e = 1;
            f = ZC.A3("#" + b.Q + "-menu");
            f.css("zIndex", zingchart.ZINDEX + e + 1);
            if (c == null)
                if (a.target.id == b.Q + "-print-png" || a.target.id == b.Q + "-print-jpeg") return true;
                else a.preventDefault();
            if (!ZC.AJ(b.Q + "-menu")) return false;
            var g = ZC.A3("#" + b.Q + "-top"),
                h = g.offset().left;
            e = g.offset().top;
            var k = g.width();
            g = g.height();
            if (c == null) {
                var l = ZC.K.L3(a),
                    m = l[0] || ZC.FG[0];
                l = l[1] || ZC.FG[1]
            } else {
                m = h + b.F / 2;
                l = e + 5
            } if (m >= h && m <= h + k && l >= e && l <= e + g) {
                ZC.A3(".zc-menu").each(function() {
                    this.id != b.Q + "-menu" && b.hideCM()
                });
                b.ML = [m, l, c == null ? a.target.id : c];
                f.css("opacity", 0).show();
                l = ZC._i_(f.css(ZC._[21]));
                k = ZC._i_(f.css(ZC._[22]));
                f.css("opacity", 1).hide();
                if (c == null && a.target.id == b.Q +
                    "-menu-area") {
                    ZC.AJ(b.Q + "-menu").style.paddingTop = 0;
                    g = ZC.A3("#" + b.Q + "-menu-area").attr("coords").split(",");
                    ZC._i_(g[2]);
                    ZC._i_(g[0]);
                    m = ZC._i_(g[3]) - ZC._i_(g[1]);
                    ZC.AJ(b.Q + "-menu").style.backgroundPosition = ZC._i_(g[0]) > b.F / 2 ? "100% 0% !important" : "0% 0% !important";
                    h = h + (ZC._i_(g[0]) > b.F / 2 ? ZC._i_(g[2]) - l : ZC._i_(g[0]));
                    e = e + (ZC._i_(g[1]) > b.D / 1.25 ? ZC._i_(g[3]) - k - m : ZC._i_(g[3]))
                } else {
                    ZC.AJ(b.Q + "-menu").style.paddingTop = "10px";
                    ZC.AJ(b.Q + "-menu").style.backgroundPosition = "50% 0% !important";
                    h = b.ML[0] - l / 2;
                    e = b.ML[1]
                }
                f.css("left", h + "px").css("top", e + "px").show();
                b.XS = 1;
                return false
            }
        }
    };
    ZC.A3(document).bind("contextmenu", zingchart.RR)
}
zingchart.Y3 = function(a, c) {
    return zingchart.css.addRule ? zingchart.css.addRule(a, c) : zingchart.css.insertRule(a + "{" + c + "}", 0)
};
zingchart.wh = function(a, c, b) {
    if (c == "auto") c = "100%";
    if (b == "auto") b = "100%";
    c = (new String(c)).indexOf("%") != -1 ? a.width() * parseInt(c, 10) / 100 : parseInt(c, 10);
    a = (new String(b)).indexOf("%") != -1 ? a.height() * parseInt(b, 10) / 100 : parseInt(b, 10);
    return [c, a]
};
zingchart.T4 = function(a, c) {
    var b = [],
        e, f;
    if ((e = a.flags) != null) b = e.split(",");
    if ((e = a.mode) != null) switch (e) {
        case "static":
            b = [ZC._[40], ZC._[41], ZC._[42], ZC._[43], ZC._[46]];
            break;
        case "fast":
            b = [ZC._[44], ZC._[45]]
    }
    if (c == "vml" && !zingchart.QE) window.setTimeout(function() {
        zingchart.T4(a, c)
    }, 10);
    else {
        if (!zingchart.XA) {
            zingchart.XA = 1;
            var g = {
                ".zc-style": "font-family:" + zingchart.FONTFAMILY + ";font-size:" + zingchart.FONTSIZE + "px;font-weight:normal;font-style:normal;text-decoration:none;",
                ".zc-style *": "font-family:" +
                    zingchart.FONTFAMILY + ";font-size:" + zingchart.FONTSIZE + "px;font-weight:normal;font-style:normal;text-decoration:none;",
                ".zc-top *": "text-align:left;margin:auto;text-shadow:none;",
                ".zc-menu *": "text-align:left;margin:auto",
                ".zc-img": "-webkit-user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;",
                ".zc-preview-mask": "-webkit-user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;",
                ".zc-rel": "top:0;left:0;position:relative",
                ".zc-abs": "top:0;left:0;position:absolute",
                ".zc-about": "position:absolute;overflow:hidden;border:5px solid #fff;background:#003C4F url(" + (ZC.ie67 ? "//" : ZC.LOGO_ABOUT) + ") no-repeat center 10px",
                ".zc-about-1": "padding:80px 5px 5px 5px;text-align:center !important;",
                ".zc-about-1 a": "color:#1AB6E3;font-size:17px;line-height:125%;",
                ".zc-about-2": "padding:5px;color:#fff;text-align:center !important;",
                ".zc-about-3": "padding:5px;text-align:center;line-height:125%;",
                ".zc-about-3 div": "background-color:#1AB6E3;line-height:125%;color:#fff;border:1px solid #fff;padding:5px 10px;font-weight:bold;width:60px;margin:0 auto;cursor:pointer;text-align:center",
                ".zc-about-4": "color:#fff;line-height:125%;",
                ".zc-about-4 div": "float:right;color:#fff;line-height:125%;",
                ".zc-viewsource": "border:5px solid #fff;background:#999",
                ".zc-error": "border:5px solid #fff;background:#900",
                ".zc-bugreport": "border:5px solid #fff;background:#999",
                ".zc-form-row-label": "padding:4px 10px 2px;text-align:left;color:#fff",
                ".zc-form-row-element": "padding:2px 8px",
                ".zc-form-row-last": "padding:8px 8px 2px !important",
                ".zc-form-row-element textarea": "text-align:left;background:#fff;color:#000",
                ".zc-form-row-label input": "color:#000;padding:2px;margin:0 5px 0 0;background-color:#999;",
                ".zc-form-row-element input": "color:#000;padding:2px;margin:0;background-color:#fff",
                ".zc-form-row-last input": "padding:4px 10px !important;margin:0 20px 0 0 !important;background-color:#eee !important;border:2px outset #ccc !important",
                ".zc-form-s0": "font-size:27px !important;letter-spacing:-1px;line-height:125%",
                ".zc-form-s1": "font-size:17px !important;line-height:125%",
                ".zc-bugreport label": "display:inline-block;position:relative;top:-2px",
                ".zc-viewimage div": "position:absolute;text-align:center;padding:5px;background:#999;color:#fff",
                ".zc-license-ie67": "padding:0;position:absolute;font-size:15pt;letter-spacing:-1px;font-weight:bold;color:#ccc;text-align:center",
                ".zc-license": "padding:0;position:absolute;background:transparent url(" + ZC.IMAGES["zc.wm"] + ") no-repeat",
                "#zc-fullscreen": "display:block;position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0;background:#fff;",
                ".zc-menu": "position:absolute;display:none;background-repeat:no-repeat !important;background-position:50% 0% !important;",
                ".zc-menu-sep": "font-size:1px;padding:0;line-height:1px;",
                ".zc-menu-item": "cursor:pointer;white-space:nowrap",
                ".zc-blocker": "background:#eee",
                ".zc-blocker div": "position:absolute;border:2px solid #ccc;padding:10px 30px;background:#333;color:#fff"
            };
            e = document.getElementsByTagName("head")[0];
            var h = document.createElement("style");
            h.type = "text/css";
            h.title = "zingchart";
            e.appendChild(h);
            e = 0;
            for (h = document.styleSheets.length; e < h; e++)
                if (document.styleSheets[e].title == "zingchart") zingchart.css = document.styleSheets[e];
            if (!zingchart.css) zingchart.css = document.styleSheets[document.styleSheets.length - 1];
            for (var k in g) zingchart.USERCSS[k] != null ? zingchart.Y3(k, zingchart.USERCSS[k]) : zingchart.Y3(k, g[k])
        }
        if (c == "vml" && !zingchart.XD) {
            document.namespaces.add("zcv", "urn:schemas-microsoft-com:vml");
            document.createStyleSheet().cssText = ".zcvml {behavior:url(#default#VML);}";
            zingchart.XD = 1
        }
        var l = "";
        if ((e = a.container) != null) l = e;
        if ((e = a.id) != null) l = e;
        if (ZC.AJ(l)) {
            ZC.AJ(l + "-top") && zingchart.exec(l, "destroy");
            k = "";
            if ((e = a.theme) !=
                null) k = e;
            g = 0;
            if ((e = a.apikey) != null)
                if (ZC._i_(e) == 1) g = 1;
            h = {
                data: false,
                defaults: false,
                css: false,
                csv: false
            };
            if ((e = a.cache) != null)
                for (var m in h)
                    if ((f = e[m]) != null) h[m] = ZC._b_(f);
            var o = 0;
            if ((e = a.fullscreen) != null) o = ZC._b_(e);
            m = 1;
            if ((e = a["auto-resize"]) != null) m = ZC._b_(e);
            f = ZC.A3("#" + l);
            var n = (a[ZC._[21]] || "100%") + "",
                p = (a[ZC._[22]] || "100%") + "";
            if (n == "auto") n = "100%";
            if (p == "auto") p = "100%";
            e = zingchart.wh(f, n, p);
            var s = e[0],
                t = e[1];
            if (o) {
                s = ZC.A3(window).width();
                t = ZC.A3(window).height();
                document.body.style.overflow =
                    "hidden"
            }
            if (s < 10 || t < 10) window.setTimeout(function() {
                zingchart.T4(a, c)
            }, 50);
            else {
                s = s == 0 ? 320 : s;
                t = t == 0 ? 240 : t;
                var r = a.dataurl || "",
                    u = a.defaultsurl || "",
                    y = null,
                    w = "",
                    v = null;
                if ((e = a.data) != null)
                    if (typeof e == "string") w = e;
                    else v = e;
                if ((e = a.defaults) != null) {
                    if (typeof e == "string") e = JSON.parse(e);
                    y = e
                }
                var x = 0,
                    z = null;
                for (e = 0; e < zingchart.GK.length; e++)
                    if (zingchart.GK[e].Q == l) {
                        zingchart.GK[e] = new ZC.LE;
                        z = zingchart.GK[e];
                        x = 1
                    }
                if (!x) {
                    z = new ZC.LE;
                    zingchart.GK.push(z)
                }
                if ((e = a.imggen) != null) z.SJ = ZC._b_(e);
                z.II = n + "/" + p;
                z.A5 =
                    c;
                z.Q = l;
                z.A = z;
                z.iX = 0;
                z.iY = 0;
                z.F = s;
                z.D = t;
                z.K5 = r;
                z.IO = w;
                z.L6 = v;
                z.JV = u;
                z.HG = y;
                z.MF = g;
                if (a.fullscreenmode != null && ZC._b_(a.fullscreenmode)) z.KL = 1;
                z.HA = o;
                z.L1 = h;
                z.H3 = b;
                z.NM = k;
                z.I = z;
                z.H.hideprogresslogo = 0;
                if ((e = a.hideprogresslogo) != null) z.H.hideprogresslogo = ZC._b_(e);
                if ((e = a.customprogresslogo) != null) z.H.customprogresslogo = e;
                if ((e = a.exportdataurl) != null) z.H.exportdataurl = e;
                if ((e = a.exportimageurl) != null) z.H.exportimageurl = e;
                b = {};
                if ((e = a.bgcolor) != null) b[ZC._[0]] = e;
                if ((e = a[ZC._[0]]) != null) b[ZC._[0]] = e;
                if ((e =
                    a["border-color"]) != null) b["border-color"] = e;
                if ((e = a["border-width"]) != null) b["border-width"] = e;
                if ((e = a.color) != null) b.color = e;
                z.H.progress = b;
                if ((e = a["auto-load-modules"]) != null) z.UQ = ZC._b_(e);
                if (a.events != null) z.OY = a.events;
                if ((e = a.csvdata) != null) z.IB = e;
                if ((e = a.locale) != null)
                    if (zingchart.i18n[e] != null) ZC.EV = zingchart.i18n[e];
                z.render();
                f.css("overflow", "hidden");
                z.HA && f.css("position", "absolute").css("top", 0).css("left", 0);
                if ((n.indexOf("%") != -1 || p.indexOf("%") != -1 || z.HA || z.KL) && m) {
                    var C = z.KL || z.HA ?
                        ZC.A3(window) : f;
                    window.setTimeout(function() {
                        var B = C.width(),
                            A = C.height();
                        z.PB = window.setInterval(function() {
                            if (ZC.AJ(l) != null) {
                                if (C.width() + C.height() > 0 && (C.width() != B || C.height() != A)) {
                                    var F = z.HA || z.KL ? zingchart.wh(C, new String(C.width()), new String(C.height())) : zingchart.wh(C, n, p);
                                    if (F[0] > 10 && F[1] > 10) {
                                        z.F = F[0];
                                        z.D = F[1];
                                        B = C.width();
                                        A = C.height();
                                        z.resize()
                                    }
                                }
                            } else window.clearInterval(z.PB)
                        }, 100)
                    }, 500)
                }
            }
        }
    }
};
window.zingchart = zingchart;
if (ZC.A3.browser.msie && parseFloat(ZC.A3.browser.version) < 9) {
    window.onunload = function() {
        for (; zingchart.GK.length;) zingchart.exec(zingchart.GK[0].Q, "destroy");
        ZC.A3(document).unbind(ZC._[50], zingchart.P7);
        ZC.A3(document).unbind("click", zingchart.MO);
        ZC.A3(document).unbind("contextmenu", zingchart.RR)
    };
    zingchart.GK = []
}
zingchart.i18n.en_us = {
    "decimals-separator": ".",
    "thousands-separator": "",
    "menu-reload": "Reload",
    "menu-print": "Print Chart",
    "menu-viewaspng": "View As PNG",
    "menu-viewasjpg": "View As JPG",
    "menu-downloadpdf": "Download PDF",
    "menu-zoomin": "Zoom In",
    "menu-zoomout": "Zoom Out",
    "menu-viewall": "View All",
    "menu-viewsource": "View Source",
    "menu-bugreport": "Submit Bug",
    "menu-switchto2d": "Switch To 2D",
    "menu-switchto3d": "Switch To 3D",
    "menu-switchtolin": "Show Linear Scale",
    "menu-switchtolog": "Show Log Scale",
    "menu-fullscreen": "Full Screen",
    "menu-exitfullscreen": "Exit Full Screen",
    "date-formats": {
        msecond: "%d %M %Y<br/>%g:%i:%s %A<br/>%q ms",
        second: "%d %M %Y<br/>%g:%i:%s %A",
        minute: "%d %M %Y<br/>%g:%i %A",
        hour: "%d %M %Y<br/>%g %A",
        day: "%d %M %Y",
        month: "%M %Y",
        year: "%Y"
    },
    "days-short": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    "days-long": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "months-short": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    "months-long": ["January", "February", "March",
        "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ],
    "sync-wait": "Wait...",
    "export-wait": "Exporting...",
    "progress-wait-long": "Wait. Loading...",
    "progress-wait-short": "Wait...",
    "progress-wait-mini": "...",
    "error-header": "An Error Has Occured",
    "error-message": "Error Message:",
    "error-close": "Close",
    "bugreport-header": "Submit Bug Report",
    "bugreport-senddata": "Send JSON Data",
    "bugreport-sendcapture": "Send Graph Capture",
    "bugreport-yourcomment": "Your Comment:",
    "bugreport-jsondata": "JSON Data:",
    "bugreport-youremail": "Your Email Address",
    "bugreport-infoemail": "if you want to receive via email our reply to your problem",
    "bugreport-emailmandatory": "Email address is mandatory...",
    "bugreport-submit": "Submit",
    "bugreport-cancel": "Cancel",
    "bugreport-confirm": "Your bug report was sent.\n\nThank you!",
    "about-close": "Close",
    "viewsource-jsonsource": "JSON Data:",
    "viewsource-close": "Close",
    "viewsource-apply": "Apply",
    "viewimage-close": "Close",
    "legend-pagination": "Page %page% of %pages%"
};
ZC.EV = zingchart.i18n.en_us;
zingchart.loader = function(a) {
    for (var c = 0; c < zingchart.GK.length; c++)
        if (zingchart.GK[c].Q == a) return zingchart.GK[c];
    return null
};
zingchart.graph = function(a, c) {
    return a.JY(c)
};
zingchart.scale = function(a, c) {
    return a.AY(c)
};
zingchart.exec = function(a, c, b) {
    if (zingchart.loader(a) != null) return zingchart.A0L(a, c, b);
    else if (zingchart.exec_flash) return zingchart.exec_flash(a, c, b)
};
zingchart.A0L = function(a, c, b) {
    var e;
    if (document.getElementById("zc-fullscreen")) a = "zc-fullscreen";
    b = b || {};
    if (typeof b == "string") b = JSON.parse(b);
    var f = zingchart.loader(a);
    if (b[ZC._[55]] != null) f.H[ZC._[55]] = ZC._b_(b[ZC._[55]]);
    if (f != null) switch (c) {
        case "setmode":
            f.H3 = [];
            var g = (new String(b.mode)).split(",");
            if (ZC.AH(g, "static") != -1) f.H3 = [ZC._[40], ZC._[41], ZC._[42], ZC._[43]];
            if (ZC.AH(g, "fast") != -1) f.H3 = [ZC._[44], ZC._[45]];
            break;
        case "showmenu":
            zingchart.RR(null, f.Q);
            break;
        case "hidemenu":
            f.hideCM();
            break;
        case "destroy":
        case "zcdestroy":
            f.XK(b);
            f.PB && window.clearInterval(f.PB);
            ZC.K.F6([f.Q + "-top", f.Q + "-text-ruler"]);
            g = ZC.AH(zingchart.GK, f);
            g != -1 && zingchart.GK.splice(g, 1);
            f = null;
            break;
        case "getrender":
            return f.A5;
        case "clear":
            f.XK(b);
            break;
        case "reload":
            f.WW(b);
            break;
        case "load":
            f.A0M(b);
            break;
        case "enable":
            f.WV();
            break;
        case "disable":
            f.WA(b.text);
            break;
        case "mapdata":
            f.ZP(b);
            break;
        case "print":
            f.XC();
            break;
        case "fullscreen":
            f.U7();
            break;
        case "exitfullscreen":
            zingchart.exec("zc-fullscreen", "destroy");
            ZC.K.F6("zc-fullscreen");
            break;
        case "resize":
            g = f.F;
            var h = f.D;
            e = f.II.split("/");
            var k = 0,
                l = e[0],
                m = e[1];
            if ((e = b[ZC._[21]]) != null) l = e;
            if ((e = b[ZC._[22]]) != null) m = e;
            if ((e = b.scale) != null) k = ZC._b_(e);
            l = zingchart.wh(ZC.A3("#" + f.Q), l, m);
            if ((g != l[0] || h != l[1]) && l[0] > 10 && l[1] > 10) {
                f.F = l[0];
                f.D = l[1];
                if ((e = b.layout) != null) f.o.layout = e;
                if (f.JW == "") {
                    f.H[ZC._[55]] = 1;
                    f.resize(k)
                }
            }
            break;
        case "plothide":
        case "hideplot":
            (g = f.BR(b[ZC._[3]])) && g.SO(b, "hide");
            break;
        case "plotshow":
        case "showplot":
            (g = f.BR(b[ZC._[3]])) && g.SO(b,
                "show");
            break;
        case "toggleplot":
            (g = f.BR(b[ZC._[3]])) && g.LY(b);
            break;
        case "getcharttype":
            g = f.BR(b[ZC._[3]]);
            if (g != null) return g.AB;
            return null;
        case "showversion":
        case "getversion":
            return ZC.VERSION;
        case "set3dview":
            if (g = f.BR(b[ZC._[3]])) {
                if (g.o[ZC._[28]] == null) g.o[ZC._[28]] = {};
                ZC.ET(b, g.o[ZC._[28]]);
                g.GX(true, true)
            }
            break;
        case "getpage":
            return f.I1;
        case "setpage":
            g = 0;
            if ((e = b.page) != null) g = ZC._i_(e);
            f.I1 = g;
            ZC.SL(function() {
                f.clear();
                f.parse();
                f.paint()
            }, true)
    }
    if (zingchart.Z6)
        if (g = zingchart.Z6(a, c, b)) e =
            g;
    if (zingchart.YM)
        if (g = zingchart.YM(a, c, b)) e = g;
    if (zingchart.YO)
        if (g = zingchart.YO(a, c, b)) e = g;
    if (zingchart.Z7)
        if (g = zingchart.Z7(a, c, b)) e = g;
    if (zingchart.YD)
        if (g = zingchart.YD(a, c, b)) e = g;
    return e
};
zingchart.Z6 = function(a, c, b) {
    var e;
    if (document.getElementById("zc-fullscreen")) a = "zc-fullscreen";
    b = b || {};
    if (typeof b == "string") b = JSON.parse(b);
    a = zingchart.loader(a);
    var f = 1;
    if (b.update != null && !ZC._b_(b.update)) f = 0;
    if (b["skip-update"] != null && ZC._b_(b["skip-update"])) f = 0;
    if (a != null) switch (c) {
        case "getobjectinfo":
            var g = a.BR(b[ZC._[3]]);
            if (!g) break;
            switch (b.object) {
                case "graph":
                    return {
                        x: g.iX,
                        y: g.iY,
                        w: g.F,
                        h: g.D
                    };
                case "plotarea":
                    return {
                        x: g.O.iX,
                        y: g.O.iY,
                        w: g.O.F,
                        h: g.O.D
                    };
                case "scale":
                    return (a = g.AY(b.name ||
                        "")) ? {
                        x: a.iX,
                        y: a.iY,
                        w: a.F,
                        h: a.D,
                        min: a.BJ,
                        max: a.C8,
                        s: a.DG,
                        sw: a.S,
                        l: a.W.length
                    } : null;
                case "plot":
                    var h = g.HO(b.plotindex, b.plotid);
                    return h ? {
                        text: h.o.text,
                        values: h.o[ZC._[5]]
                    } : null
            }
            break;
        case "getobjectxy":
            h = {};
            f = b.object;
            e = b[ZC._[11]];
            g = a.BR(b[ZC._[3]]);
            switch (f) {
                case "scale-x":
                    b = g.AY(ZC._[52]);
                    h.x = b.B4(e)
            }
            return h;
        case "getxyinfo":
            f = [];
            var k = b.x;
            c = b.y;
            for (var l = 0; l < a.B1.length; l++) {
                g = a.B1[l];
                for (var m = 0; m < g.AZ.AA.length; m++) {
                    h = g.AZ.AA[m];
                    b = g.AY(h.B6("k")[0]);
                    e = b.K8(k);
                    f.push({
                        infotype: "scale",
                        xydistance: ZC._a_(k -
                            b.LB(e)),
                        graphid: g.Q,
                        plotidx: h.J,
                        scalename: b.BK,
                        scaleidx: e,
                        scalevalue: b.W[e]
                    });
                    for (var o = Number.MAX_VALUE, n = null, p = 0, s = h.M.length; p < s; p++)
                        if ((B7 = h.M[p]) != null)
                            if (b.D8 && ZC.DK(B7.CH, b.W[b.V], b.W[b.A2]) || !b.D8 && ZC.DK(p, b.V, b.A2) || g.AM.layout == "") switch (g.AM.layout) {
                                case "xy":
                                    if (ZC.AH(["scatter", "bubble"], g.AB) != -1) {
                                        if ((e = Math.sqrt((B7.iX - k) * (B7.iX - k) + (B7.iY - c) * (B7.iY - c))) < o) {
                                            n = B7;
                                            o = e
                                        }
                                    } else if ((e = ZC._a_(B7.iX - k)) < o) {
                                        n = B7;
                                        o = e
                                    }
                                    break;
                                case "yx":
                                    if ((e = ZC._a_(B7.iY - c)) < o) {
                                        n = B7;
                                        o = e
                                    }
                                    break;
                                case "":
                                    e = B7.A16();
                                    if ((e = Math.sqrt((e[0] - k) * (e[0] - k) + (e[1] - c) * (e[1] - c))) < o) {
                                        n = B7;
                                        o = e
                                    }
                            }
                            if (n) {
                                e = n.CH;
                                if (e == null) e = b.W[n.J];
                                f.push({
                                    infotype: "node",
                                    xydistance: o,
                                    graphid: g.Q,
                                    plotidx: h.J,
                                    nodeidx: n.J,
                                    nodevalue: n.A8,
                                    nodekeyvalue: e
                                })
                            }
                }
            }
            return f;
        case "update":
            if (b[ZC._[3]] != null) {
                g = a.BR(b[ZC._[3]]);
                g != null ? g.GX() : a.GX()
            } else a.GX();
            break;
        case "setcharttype":
            g = a.BR(b[ZC._[3]]);
            if (g != null) {
                a.o[ZC._[18]][g.J].type = g.o.type = g.AB = b.type;
                f && a.GX()
            }
            break;
        case "addplot":
            e = {};
            g = b.plotdata ? "plotdata" : "data";
            if (b[g] != null)
                if (typeof b[g] ==
                    "object") ZC.ET(b[g], e);
                else e = JSON.parse(b[g]);
            g = a.BR(b[ZC._[3]]);
            if (g != null) {
                h = (h = g.HO(b.plotindex, b.plotid)) ? h.J : 0;
                b = [];
                if (g.o[ZC._[13]] == null) g.o[ZC._[13]] = [];
                if (g.o[ZC._[13]].length > 0)
                    for (k = 0; k < g.o[ZC._[13]].length; k++) {
                        b.push(g.o[ZC._[13]][k]);
                        k == h && b.push(e)
                    } else b.push(e);
                a.o[ZC._[18]][g.J][ZC._[13]] = g.o[ZC._[13]] = b;
                a.H.json = ZC.GS(JSON.stringify(a.o));
                f && g.GX()
            }
            break;
        case "removeplot":
            g = a.BR(b[ZC._[3]]);
            if (g != null)
                if (h = g.HO(b.plotindex, b.plotid)) {
                    ZC.BV.F1("plotremove", a, {
                        id: a.Q,
                        graphid: g.Q,
                        plotindex: h.J
                    });
                    g.o[ZC._[13]].splice(h.J, 1);
                    a.o[ZC._[18]][g.J][ZC._[13]] = g.o[ZC._[13]];
                    a.H.json = ZC.GS(JSON.stringify(a.o));
                    f && g.GX()
                }
            break;
        case "modify":
            e = {};
            if (b.data != null)
                if (typeof b.data == "object") ZC.ET(b.data, e);
                else e = JSON.parse(b.data);
            JSON.parse(a.H.json);
            g = a.BR(b[ZC._[3]]);
            if (g != null) {
                if (b.object != null && g.o[b.object] != null) switch (b.object) {
                    case "title":
                        ZC.ET(e, g.o.title);
                        break;
                    case "plotset":
                    case "series":
                        ZC.ET(e, g.o[ZC._[13]]);
                        break;
                    case "plotarea":
                        ZC.ET(e, g.o.plotarea);
                        break;
                    case "legend":
                        ZC.ET(e,
                            g.o.legend)
                } else ZC.ET(e, g.o);
                a.o[ZC._[18]][g.J] = g.o;
                a.H.json = ZC.GS(JSON.stringify(a.o));
                f && g.GX()
            }
            break;
        case "modifyplot":
            e = {};
            g = b.plotdata ? "plotdata" : "data";
            if (b[g] != null)
                if (typeof b[g] == "object") ZC.ET(b[g], e);
                else e = JSON.parse(b[g]);
            g = a.BR(b[ZC._[3]]);
            if (g != null)
                if (h = g.HO(b.plotindex, b.plotid)) {
                    ZC.ET(e, g.o[ZC._[13]][h.J]);
                    a.o[ZC._[18]][g.J][ZC._[13]][h.J] = g.o[ZC._[13]][h.J];
                    a.H.json = ZC.GS(JSON.stringify(a.o));
                    f && g.GX()
                }
            break;
        case "setnodevalue":
            g = a.BR(b[ZC._[3]]);
            if (g != null)
                if (h = g.HO(b.plotindex,
                    b.plotid)) {
                    c = 0;
                    if (b.nodeindex != null) c = ZC._i_(b.nodeindex);
                    e = 0;
                    if (b[ZC._[11]] != null) e = b[ZC._[11]];
                    a.o[ZC._[18]][g.J][ZC._[13]][h.J][ZC._[5]][c] = g.o[ZC._[13]][h.J][ZC._[5]][c] = e;
                    a.H.json = ZC.GS(JSON.stringify(a.o));
                    f && g.GX()
                }
            break;
        case "setscalevalues":
            g = a.BR(b[ZC._[3]]);
            if (g != null) {
                e = b.scale || ZC._[52];
                l = 0;
                for (m = g.B8.length; l < m; l++)
                    if (e == g.B8[l].BK)
                        if (g.o[e] != null) {
                            g.o[e][ZC._[5]] = b[ZC._[5]];
                            a.o[ZC._[18]][g.J][e] = a.o[ZC._[18]][g.J][e] || {};
                            a.o[ZC._[18]][g.J][e][ZC._[5]] = b[ZC._[5]]
                        }
                a.H.json = ZC.GS(JSON.stringify(a.o));
                f && g.GX()
            }
            break;
        case "addscalevalue":
            g = a.BR(b[ZC._[3]]);
            if (g != null) {
                e = b.scale || ZC._[52];
                l = 0;
                for (m = g.B8.length; l < m; l++)
                    if (e == g.B8[l].BK)
                        if (g.o[e] != null && g.o[e][ZC._[5]] != null) {
                            c = b.nodeindex == null ? g.o[e][ZC._[5]].length : ZC._i_(b.nodeindex);
                            o = g.o[e][ZC._[5]];
                            o.push(null);
                            for (k = o.length - 1; k > c; k--) o[k] = o[k - 1];
                            o[c] = b[ZC._[11]] || "";
                            a.o[ZC._[18]][g.J][e][ZC._[5]] = o
                        }
                a.H.json = ZC.GS(JSON.stringify(a.o));
                f && g.GX()
            }
            break;
        case "removescalevalue":
            g = a.BR(b[ZC._[3]]);
            if (g != null) {
                e = b.scale || ZC._[52];
                l = 0;
                for (m = g.B8.length; l <
                    m; l++)
                    if (e == g.B8[l].BK)
                        if (g.o[e] != null && g.o[e][ZC._[5]] != null) {
                            c = b.nodeindex == null ? g.o[e][ZC._[5]].length - 1 : ZC._i_(b.nodeindex);
                            o = g.o[e][ZC._[5]];
                            o.splice(c, 1);
                            a.o[ZC._[18]][g.J][e][ZC._[5]] = o
                        }
                a.H.json = ZC.GS(JSON.stringify(a.o));
                f && g.GX()
            }
            break;
        case "addnode":
            g = a.BR(b[ZC._[3]]);
            if (g != null)
                if (h = g.HO(b.plotindex, b.plotid)) {
                    e = g.o[ZC._[13]][h.J][ZC._[5]];
                    c = b.nodeindex == null ? e.length : b.nodeindex;
                    e.push(null);
                    k = e.length;
                    c = ZC.BN(0, ZC.CO(c, k));
                    for (k = k - 1; k > c; k--) e[k] = e[k - 1];
                    e[c] = b[ZC._[11]];
                    l = 0;
                    for (m = g.B8.length; l <
                        m; l++) {
                        e = g.B8[l].BK;
                        if (g.B8[l].AB == "k" && b[e + "-value"] != null)
                            if (g.o[e] != null && g.o[e][ZC._[5]] != null) {
                                o = g.o[e][ZC._[5]];
                                o.push(null);
                                for (k = o.length - 1; k > c; k--) o[k] = o[k - 1];
                                o[c] = b[e + "-value"];
                                a.o[ZC._[18]][g.J][e][ZC._[5]] = o
                            }
                    }
                    a.o[ZC._[18]][g.J][ZC._[13]][h.J][ZC._[5]] = g.o[ZC._[13]][h.J][ZC._[5]];
                    a.H.json = ZC.GS(JSON.stringify(a.o));
                    f && g.GX()
                }
            break;
        case "removenode":
            g = a.BR(b[ZC._[3]]);
            if (g != null)
                if (h = g.HO(b.plotindex, b.plotid)) {
                    e = g.o[ZC._[13]][h.J][ZC._[5]];
                    c = b.nodeindex == null ? h.M.length - 1 : ZC._i_(b.nodeindex);
                    if (ZC.DK(c, 0, h.M.length - 1)) {
                        e.splice(c, 1);
                        l = 0;
                        for (m = g.B8.length; l < m; l++) {
                            e = g.B8[l].BK;
                            if (g.B8[l].AB == "k" && b[e] != null && ZC._b_(b[e]))
                                if (g.o[e] != null && g.o[e][ZC._[5]] != null) {
                                    o = g.o[e][ZC._[5]];
                                    o.splice(c, 1);
                                    a.o[ZC._[18]][g.J][e][ZC._[5]] = o
                                }
                        }
                        a.o[ZC._[18]][g.J][ZC._[13]][h.J][ZC._[5]] = g.o[ZC._[13]][h.J][ZC._[5]];
                        a.H.json = ZC.GS(JSON.stringify(a.o));
                        f && g.GX()
                    }
                }
            break;
        case "setdata":
            e = {};
            if (b.data != null)
                if (typeof b.data == "object") ZC.ET(b.data, e);
                else try {
                    e = JSON.parse(b.data)
                } catch (t) {
                    a.IC(t, "JSON parser");
                    return false
                }
                if (b[ZC._[55]] == null) a.H[ZC._[55]] = 0;
            g = null;
            if (b[ZC._[3]] != null) g = a.BR(b[ZC._[3]]);
            ZC.BV.F1("setdata", a, {
                id: a.Q,
                graphid: g == null ? null : g.Q,
                data: e
            });
            a.H.json = ZC.GS(JSON.stringify(e));
            if (g != null) {
                a.o[ZC._[18]][g.J] = g.o = e;
                a.lookupShapes(a.o);
                a.HK(g);
                a.parse(g.Q);
                a.B1[g.J].paint()
            } else {
                a.o = e;
                f && a.GX()
            }
            break;
        case "setseriesdata":
        case "appendseriesdata":
            g = a.BR(b[ZC._[3]]);
            if (g != null) {
                e = c == "setseriesdata" ? [] : g.o[ZC._[13]] || [];
                if (b.data != null) typeof b.data == "object" ? ZC.ET(b.data, e) : ZC.ET(JSON.parse(b.data),
                    e);
                a.o[ZC._[18]][g.J][ZC._[13]] = g.o[ZC._[13]] = e;
                a.H.json = ZC.GS(JSON.stringify(a.o));
                f && g.GX()
            }
            break;
        case "setseriesvalues":
        case "appendseriesvalues":
            l = [];
            if (b[ZC._[5]] != null) l = typeof b[ZC._[5]] == "object" ? b[ZC._[5]] : JSON.parse(b[ZC._[5]]);
            g = a.BR(b[ZC._[3]]);
            if (g != null) {
                if (b.plotindex != null || b.plotid != null) l = [l];
                h = g.HO(b.plotindex, b.plotid, 0);
                k = 0;
                for (m = l.length; k < m; k++)
                    if (g.AZ.AA[h.J + k] != null)
                        if (c == "setseriesvalues") a.o[ZC._[18]][g.J][ZC._[13]][h.J + k][ZC._[5]] = g.o[ZC._[13]][h.J + k][ZC._[5]] = l[k];
                        else {
                            o =
                                a.o[ZC._[18]][g.J][ZC._[13]][h.J + k][ZC._[5]];
                            p = l[k].length > 0 && l[k][0].length > 1;
                            n = 1;
                            if ((e = b.ignoreduplicates) != null) n = ZC._b_(e);
                            if (p) {
                                e = o.length;
                                p = 0;
                                for (s = l[k].length; p < s; p++) {
                                    for (var r = 0, u = e - 1; u >= 0; u--)
                                        if (l[k][p][0] > o[u][0]) {
                                            o.push(l[k][p]);
                                            r = 1;
                                            break
                                        } else if (l[k][p][0] == o[u][0]) {
                                        r = 1;
                                        break
                                    }
                                    if (!r || !n) o.push(l[k][p])
                                }
                            } else {
                                p = 0;
                                for (s = l[k].length; p < s; p++) o.push(l[k][p])
                            }
                            a.o[ZC._[18]][g.J][ZC._[13]][h.J + k][ZC._[5]] = g.o[ZC._[13]][h.J + k][ZC._[5]] = o
                        }
                a.H.json = ZC.GS(JSON.stringify(a.o));
                f && g.GX()
            }
            break;
        case "getdata":
            return a.H.json;
        case "getgraphlength":
            return a.B1.length;
        case "getplotlength":
            g = a.BR(b[ZC._[3]]);
            if (g != null) return g.AZ.AA.length;
            break;
        case "getnodelength":
            g = a.BR(b[ZC._[3]]);
            if (g != null) {
                h = g.HO(b.plotindex, b.plotid);
                if (h != null) return h.M.length
            }
            break;
        case "getnodevalue":
            g = a.BR(b[ZC._[3]]);
            if (g != null) {
                h = g.HO(b.plotindex, b.plotid);
                if (h != null)
                    if (b.nodeindex != null)
                        if (BH = h.M[ZC._i_(b.nodeindex)]) return BH.A8;
                        else break
            }
            break;
        case "getplotvalues":
            g = a.BR(b[ZC._[3]]);
            if (g != null) {
                h = g.HO(b.plotindex, b.plotid);
                if (h != null) {
                    l = [];
                    k = 0;
                    for (m = h.M.length; k < m; k++) l.push(h.M[k].A8);
                    return l
                }
            }
    }
    return null
};
ZC.YR = ZC.BT.B2({
    $i: function() {
        ZC.OBJCOUNT++;
        this.o = {};
        this.H = {};
        this.DE = []
    },
    parse: function() {
        ZC.QB(this.o);
        var a = "";
        if (typeof this.I != ZC._[33]) a = this.I.A5;
        ZC.PP(this.o, "html5");
        a != "" && ZC.PP(this.o, a);
        if (this.o.rules != null) this.DE = this.o.rules;
        if (typeof this.I != ZC._[33] && this.I.R4 != null)
            for (var c in this.I.R4)
                if (this.I.R4.hasOwnProperty(c)) this.o[c] = this.I.R4[c]
    },
    append: function(a, c, b) {
        if (a != null) {
            ZC.ET(a, this.o, true, b);
            typeof this.A0Q != ZC._[33] && this.A0Q() && ZC.ET(a, this.o)
        }
    },
    A0Q: function() {},
    OT_a: function(a) {
        var c,
            b = [];
        c = 0;
        for (var e = a.length; c < e; c++) b.push(a[c][0]);
        for (var f in this.o)
            if (this.o.hasOwnProperty(f))
                if ((c = ZC.AH(b, f)) != -1) this.OT(a[c][0], a[c][1], a[c][2], a[c][3], a[c][4])
    },
    OT: function(a, c, b, e, f) {
        if ((a = this.o[a]) != null) {
            if (b != null) {
                if (b.indexOf("p") != -1) {
                    a = ZC._p_(a);
                    b = b.replace("p", "")
                }
                if (b.indexOf("a") != -1) {
                    a = ZC._a_(a);
                    b = b.replace("a", "")
                }
                switch (b) {
                    case "i":
                        a = ZC._i_(a);
                        break;
                    case "f":
                        a = ZC._f_(a);
                        break;
                    case "b":
                        a = ZC._b_(a);
                        break;
                    case "c":
                        a = ZC.BV.LF(a)
                }
            }
            if (e != null && f != null) a = ZC._l_(a, e, f);
            this[c] = a
        }
    },
    C2: function() {
        for (var a = 0, c = 0, b = this.DE.length; c < b; c++) {
            var e = 0;
            try {
                e = eval(this.GM(this.DE[c].rule))
            } catch (f) {
                e = 0
            }
            if (e) {
                a = 1;
                this.append(this.DE[c])
            }
        }
        return a
    },
    A06: function(a) {
        for (var c = "", b = 0, e = a.length; b < e; b++) {
            var f = 0;
            try {
                f = eval(this.GM(a[b].rule))
            } catch (g) {
                f = 0
            }
            if (f) c += "<" + a[b].rule + ">"
        }
        return c != "" ? [c, ZC.Q1.md5(c)] : null
    },
    GM: function() {
        return true
    },
    copy: function(a) {
        ZC.ET(a.o, this.o);
        ZC.ET(a.H, this.H);
        ZC.ET(a.DE, this.DE)
    }
});
ZC.E7 = ZC.YR.B2({
    $i: function(a) {
        this.b(a);
        if (a && a.I) this.I = a.I;
        this.Q = "";
        this.DY = null;
        this.AK = 1;
        this.A6 = this.X = -1;
        this.BW = this.ER = this.EF = "";
        this.I8 = "repeat";
        this.N6 = "50% 50%";
        this.PT = "";
        this.IV = "linear";
        this.IX = 90;
        this.AI = this.P1 = this.P2 = 0;
        this.AT = "#000";
        this.FO = "";
        this.AU = this.FP = this.EC = 0;
        this.BI = "#000";
        this.A9 = 1;
        this.LD = "butt";
        this.Q9 = "round";
        this.JE = 0;
        this.L7 = 45;
        this.G4 = 2;
        this.MI = 0.75;
        this.LA = "#999";
        this.J5 = 0;
        this.CV = 1;
        this.RU = this.J0 = this.IT = 0;
        this.K3 = null
    },
    copy: function(a) {
        this.b(a);
        for (var c =
            (new String("AK,X,A6,EF,ER,BW,I8,N6,PT,IV,IX,P2,P1,AI,AT,FO,EC,FP,AU,BI,A9,LD,JE,L7,G4,MI,LA,J5,CV,J0,I")).split(","), b = 0, e = c.length; b < e; b++)
            if (typeof a[c[b]] != ZC._[33]) this[c[b]] = a[c[b]]
    },
    A0Q: function() {
        var a, c = 0;
        if (this.o["class"] != null || this.o.id != null)
            if (this.I != null && this.I.R != null) {
                if ((a = this.o["class"]) != null)
                    for (var b = a.split(/(\s+)/), e = 0, f = b.length; e < f; e++)
                        if ((a = this.I.R["." + b[e]]) != null) {
                            c = 1;
                            ZC.ET(a, this.o)
                        }
                if ((a = this.o.id) != null)
                    if ((a = this.I.R["#" + a]) != null) {
                        c = 1;
                        ZC.ET(a, this.o)
                    }
            }
        return c
    },
    GL: function() {
        switch (this.FO) {
            case "dotted":
                this.EC = ZC.BN(1, this.AI * 0.75);
                this.FP = this.AI * 1.75;
                break;
            case "dashed":
                this.EC = 4 * this.AI;
                this.FP = 3 * this.AI;
                break;
            default:
                this.FP = this.EC = 0
        }
    },
    parse: function() {
        var a;
        this.b();
        if ((a = this.o.override) != null && !this.RU) {
            var c = -1,
                b = -1;
            if (typeof this.H.plotidx != ZC._[33]) c = ZC._i_(this.H.plotidx);
            if (typeof this.H.nodeidx != ZC._[33]) b = ZC._i_(this.H.nodeidx);
            for (var e, f, g, h = 0, k = a.length; h < k; h++) {
                f = e = -1;
                if (a[h].hook != null) {
                    if ((CW = a[h].hook["node-index"]) != null) {
                        f = 0;
                        g = [];
                        if (typeof CW == "object") g = CW;
                        else if (typeof CW == "string")
                            if (CW.indexOf(",") != -1) g = CW.split(",");
                            else {
                                if (CW.indexOf("-") != -1)
                                    for (var l = CW.split("-"), m = ZC._i_(l[0]); m <= ZC._i_(l[1]); m++) g.push(m)
                            } else g = [CW]; if (ZC.AH(g, b) != -1) f = 1
                    }
                    if ((CW = a[h].hook["plot-index"]) != null) {
                        e = 0;
                        g = [];
                        if (typeof CW == "object") g = CW;
                        else if (typeof CW == "string")
                            if (CW.indexOf(",") != -1) g = CW.split(",");
                            else {
                                if (CW.indexOf("-") != -1) {
                                    l = CW.split("-");
                                    for (m = ZC._i_(l[0]); m < ZC._i_(l[1]); m++) g.push(m)
                                }
                            } else g = [CW]; if (ZC.AH(g, c) != -1) e = 1
                    }
                }
                e !=
                    0 && f != 0 && this.append(a[h])
            }
        }
        if ((a = this.K3) != null) this.append(a);
        if ((a = this.o[ZC._[0]]) != null) {
            if (String(a).substring(0, 4) == "rgb(")
                for (c = /rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/; ED = c.exec(a);) a = a.replace(ED[0], ZC.BV.LF(ED[0]));
            a = String(a).split(/\s+|;|,/);
            this.X = ZC.BV.LF(a[0]);
            this.A6 = a.length == 1 ? this.X : ZC.BV.LF(a[1])
        }
        this.OT_a([
            ["visible", "AK", "b"],
            ["background-color-1", "X", "c"],
            ["background-color-2", "A6", "c"],
            ["gradient-colors", "EF"],
            ["gradient-stops", "ER"],
            ["background-image", "BW"],
            ["background-repeat",
                "I8"
            ],
            ["background-position", "N6"],
            ["background-fit", "PT"],
            ["fill-type", "IV"],
            ["fill-angle", "IX", "i"],
            ["fill-offset-x", "P2", "i"],
            ["fill-offset-y", "P1", "i"],
            [ZC._[4], "AI", "i"],
            ["line-color", "AT", "c"],
            ["line-style", "FO", ""]
        ]);
        this.GL();
        this.OT_a([
            ["line-segment-size", "EC", "i"],
            ["line-gap-size", "FP", "i"],
            ["border-width", "AU", "i"],
            ["border-color", "BI", "c"],
            ["alpha", "A9", "f", 0, 1],
            ["shadow", "JE", "b"],
            ["shadow-angle", "L7", "i", 0, 360],
            ["shadow-distance", "G4", "i"],
            ["shadow-alpha", "MI", "f", 0, 1],
            ["shadow-color",
                "LA", "c"
            ],
            ["shadow-blur", "J5", "i"]
        ]);
        if (zingchart.LITE) {
            this.X = this.A6;
            this.FO = "solid";
            this.FP = this.EC = 0
        }
    }
});
ZC.BQ = {
    contour: function(a, c, b) {
        if (!(!a || !b || b.length == 0))
            for (var e = 0, f = b.length, g = 0; g < f; g++) {
                if (b[g] != null) {
                    var h = [b[g][0], b[g][1]];
                    b[g][2] != null && h.push(b[g][2], b[g][3]);
                    b[g][4] != null && h.push(b[g][4], b[g][5]);
                    if (c.IT) {
                        h[0] = ZC._i_(h[0]);
                        h[1] = ZC._i_(h[1]);
                        if (h.length == 4) {
                            h[2] = ZC._i_(h[2]);
                            h[3] = ZC._i_(h[3])
                        }
                    }
                    if (c.CV && c.AI % 2 == 1) {
                        h[0] -= 0.5;
                        h[1] -= 0.5;
                        if (h.length == 4) {
                            h[2] -= 0.5;
                            h[3] -= 0.5
                        }
                    }
                }
                if (g == 0) a.moveTo(h[0], h[1]);
                else if (b[g]) {
                    if (e) {
                        a.moveTo(h[0], h[1]);
                        e = 0
                    }
                    if (h.length == 2) a.lineTo(h[0], h[1]);
                    else if (h.length ==
                        4) a.quadraticCurveTo(h[0], h[1], h[2], h[3]);
                    else h.length == 6 && a.arc(h[0], h[1], h[2], ZC.OJ(h[3]), ZC.OJ(h[4]), h[5])
                } else e = 1
            }
    },
    setup: function(a, c) {
        var b = c.I.A5;
        if (c.A9 != 1)
            if (c.J0) {
                if (c.o["border-color"] == null) c.BI = c.X;
                if (c.o["border-width"] == null) switch (b) {
                    case "canvas":
                        c.AU = 0.2;
                        break;
                    case "svg":
                        c.AU = 0.1;
                        break;
                    case "vml":
                        c.AU = 0.2;
                        c.H.RS = c.A9 / 10
                }
            }
    },
    paint: function(a, c, b, e, f) {
        if (f == null) f = 2;
        if (e == null) e = 0;
        if (!(!a || !b || b.length == 0 || !c)) {
            if (b[0] != null && b[b.length - 1] != null && b[0].join(",") == b[b.length - 1].join(",")) c.LD =
                "round";
            var g = c.I.A5;
            if (!(g == "canvas" && c.AI == 0)) {
                if (c.JE && c.C6 != null && !e) {
                    c.C6 = c.C6 || c.Y;
                    var h = ZC.K._sh_(b, c),
                        k;
                    if (typeof c.TH != ZC._[33]) k = c.TH;
                    else {
                        k = new ZC.E7(c);
                        k.copy(c);
                        k.Q = c.Q + "-sh";
                        k.JE = 0;
                        k.AI += k.J5;
                        k.AT = k.LA
                    }
                    k.A9 = c.A9 * k.MI;
                    if (typeof c.A11 == ZC._[33]) c.TH = k;
                    k.CV = 0;
                    var l = ZC.K.CN(c.C6, g);
                    ZC.BQ.setup(l, k);
                    ZC.BQ.paint(l, k, h, false, 1)
                }
                h = c.EC || 0;
                k = c.FP || 0;
                l = b.length;
                if (typeof c.A7 == ZC._[33]) c.A7 = 0;
                if (g == "canvas") {
                    a.lineJoin = c.Q9;
                    a.lineCap = c.LD;
                    a.strokeStyle = ZC.BV.R0(c.AT, c.A9);
                    a.lineWidth = c.AI;
                    a.beginPath()
                }
                var m =
                    0;
                if (ZC.AH(["svg", "vml"], g) != -1) var o = ZC.K.SK(b, g, c, e);
                else
                    for (var n = 0; n < l; n++)
                        if (b[n] == null) m = 1;
                        else {
                            var p = ZC.K._txp_(b[n], g, c, e);
                            if (!(p == null || isNaN(p[0]) || isNaN(p[1]) || !isFinite(p[0]) || !isFinite(p[1])))
                                if (n == 0)
                                    if (p.length == 2) a.moveTo(p[0], p[1]);
                                    else p.length == 6 && a.arc(p[0], p[1], p[2], ZC.OJ(p[3]), ZC.OJ(p[4]), p[5]);
                            else {
                                if (m) {
                                    a.moveTo(p[0], p[1]);
                                    m = 0
                                }
                                if (h == 0 || k == 0 || p.length == 4 || p.length == 6)
                                    if (p.length == 2) a.lineTo(p[0], p[1]);
                                    else if (p.length == 4) a.quadraticCurveTo(p[0], p[1], p[2], p[3]);
                                else p.length ==
                                    6 && a.arc(p[0], p[1], p[2], ZC.OJ(p[3]), ZC.OJ(p[4]), p[5]);
                                else if (b[n - 1] != null) {
                                    var s = ZC.K._txp_(b[n - 1], g, c, e),
                                        t = s[s.length == 4 ? 2 : 0],
                                        r = s[s.length == 4 ? 3 : 1];
                                    s = p[0];
                                    p = p[1];
                                    var u = h + k,
                                        y = s - t,
                                        w = p - r,
                                        v = Math.sqrt(y * y + w * w);
                                    v = Math.floor(ZC._a_(v / u));
                                    y = Math.atan2(w, y);
                                    var x = Math.cos(y),
                                        z = Math.sin(y);
                                    t = t;
                                    r = r;
                                    y = x * u;
                                    w = z * u;
                                    for (u = 0; u < v; u++) {
                                        a.moveTo(t, r);
                                        a.lineTo(t + x * h, r + z * h);
                                        t += y;
                                        r += w
                                    }
                                    a.moveTo(t, r);
                                    v = Math.sqrt((s - t) * (s - t) + (p - r) * (p - r));
                                    if (v > h) a.lineTo(t + x * h, r + z * h);
                                    else v > 0 && a.lineTo(t + x * v, r + z * v);
                                    a.moveTo(s, p)
                                }
                            }
                        } switch (g) {
                    case "canvas":
                        a.stroke();
                        break;
                    case "svg":
                    case "vml":
                        if (c.I.TS && (!e || c.H.areanode)) {
                            b = c.H.areanode ? c.X + "-" + c.A6 + "-" + c.BW + "-" + c.AI + "-" + c.FO + "-" + c.A9 : c.AT + "-" + c.AI + "-" + c.FO + "-" + c.A9;
                            if (c.I.IA[f] == null) c.I.IA[f] = {
                                uid: b,
                                ctx: a,
                                path: o,
                                style: c,
                                filled: e
                            };
                            else if (c.I.IA[f].uid == b && c.I.IA[f].path.length < 2E3) {
                                u = c.I.IA[f].path;
                                if (u.length > 0 && u[u.length - 1].replace(/[A-Z]+/, "") == o[0].replace(/[A-Z]+/, "")) o[0] = "";
                                c.I.IA[f].path = c.I.IA[f].path.concat(o)
                            } else {
                                g == "svg" ? ZC.BQ.RM(c.I.IA[f].ctx, c.I.IA[f].style, c.I.IA[f].path.join(" "), c.I.IA[f].filled) :
                                    ZC.BQ.RL(c.I.IA[f].ctx, c.I.IA[f].style, c.I.IA[f].path.join(" "), c.I.IA[f].filled);
                                c.I.IA[f] = {
                                    uid: b,
                                    ctx: a,
                                    path: o,
                                    style: c,
                                    filled: e
                                }
                            }
                        } else g == "svg" ? ZC.BQ.RM(a, c, o.join(" "), e) : ZC.BQ.RL(a, c, o.join(" "), e)
                }
            }
        }
    },
    RM: function(a, c, b, e) {
        if (b != "") {
            var f = ZC.K.DJ("path", ZC._[38]),
                g = "";
            if (typeof c.Q == ZC._[33] || c.Q == "") {
                if (typeof c.I != "") {
                    g = c.I.GRAPHID + "-path-" + ZC.SEQ;
                    ZC.SEQ++
                }
            } else g = c.Q + "-path";
            var h = "";
            if (typeof c.C0 != ZC._[33] && typeof c.C4 != ZC._[33])
                if (c.C0 != 0 || c.C4 != 0) h += "translate(" + c.C0 + " " + c.C4 + ")";
            if (typeof c.A7 !=
                ZC._[33])
                if (c.A7 != 0) {
                    var k = c.A7;
                    if (typeof c.H.cx != ZC._[33]) k += "," + c.H.cx;
                    if (typeof c.H.cy != ZC._[33]) k += "," + c.H.cy;
                    h += " rotate(" + k + ")"
                }
            e && c.H.fill != -1 ? ZC.K.EG(f, {
                fill: c.H.fill,
                "fill-opacity": c.A9
            }) : ZC.K.EG(f, {
                fill: "none"
            });
            if (c.AI > 0) {
                ZC.K.EG(f, {
                    stroke: c.AT,
                    "stroke-width": c.AI,
                    "stroke-opacity": c.A9,
                    "stroke-linecap": c.LD,
                    "stroke-linejoin": c.Q9
                });
                c.EC + "," + c.FP != "0,0" && ZC.K.EG(f, {
                    "stroke-dasharray": c.EC + "," + c.FP
                })
            }
            f.id = g;
            f.setAttribute("d", b);
            h != "" && f.setAttribute("transform", h);
            a.appendChild(f);
            if (typeof c.H.imgfill !=
                ZC._[33])
                if (typeof c.H.imgfill == "string") {
                    f = ZC.K.DJ("path", ZC._[38]);
                    ZC.K.EG(f, {
                        id: g + "-imgfill",
                        d: b,
                        transform: h,
                        fill: c.H.imgfill,
                        "fill-opacity": c.A9
                    });
                    a.appendChild(f)
                } else {
                    b = c.H.imgfill;
                    e = ZC.K.DJ("image", ZC._[38]);
                    if (e.setAttributeNS) c.BW.substring(0, 3) == "zc." ? e.setAttributeNS(ZC._[39], "href", ZC.IMAGES[c.BW]) : e.setAttributeNS(ZC._[39], "href", c.BW);
                    else c.BW.substring(0, 3) == "zc." ? e.setAttribute("src", ZC.IMAGES[c.BW]) : e.setAttribute("src", c.BW);
                    c.H["clip-path"] != null && ZC.K.EG(e, {
                        "clip-path": "url(#" +
                            c.H["clip-path"] + ")"
                    });
                    ZC.K.EG(e, {
                        id: g + "-image",
                        x: b[1],
                        y: b[2],
                        width: c.H[ZC._[69]],
                        height: c.H[ZC._[70]],
                        preserveAspectRatio: "none"
                    });
                    a.appendChild(e)
                }
        }
    },
    RL: function(a, c, b, e) {
        var f;
        if (e) b += " x e";
        var g = "";
        if (typeof c.Q == ZC._[33] || c.Q == "") {
            if (typeof c.I != "") {
                g = c.I.GRAPHID + "-path-" + ZC.SEQ;
                ZC.SEQ++
            }
        } else g = c.Q + "-path";
        var h = ZC.K.DJ("zcv:shape");
        h.style.position = "absolute";
        h.style.rotation = c.A7;
        h.id = g;
        f = ZC.K.DJ("zcv:path");
        f.v = b;
        f.setAttribute("VMLv", b);
        h.appendChild(f);
        if (c.AI == 0) h.stroked = 0;
        else if (typeof c.H.stroke !=
            ZC._[33]) {
            if (typeof c.H.RS != ZC._[33]) c.H.stroke.opacity = c.H.RS;
            h.appendChild(c.H.stroke)
        } else {
            var k = ZC.K.DJ("zcv:stroke"),
                l = c.A9;
            if (typeof c.H.RS != ZC._[33]) l = c.H.RS;
            var m = "solid";
            switch (c.FO) {
                case "solid":
                    m = "solid";
                    break;
                case "dotted":
                    m = "dot";
                    break;
                case "dashed":
                    m = "dash"
            }
            if ((f = ZC.CO(6, c.EC * c.AI) + " " + ZC.CO(8, c.FP * c.AI)) != "0 0") m = f;
            ZC.K.EG(k, {
                weight: c.AI + "px",
                color: c.AT,
                opacity: l,
                miterlimit: 10,
                endcap: "flat",
                joinstyle: "round",
                dashstyle: m
            });
            h.appendChild(k)
        } if (e && typeof c.H.fill != ZC._[33])
            if (c.H.fill !=
                -1) {
                h.filled = 1;
                h.appendChild(c.H.fill)
            } else h.filled = 0;
        else h.filled = 0;
        ZC.K.EG(h, {
            coordorigin: "0 0",
            coordsize: c.A7 % 360 == 0 ? "100 100" : c.I.F + " " + c.I.D
        });
        k = f = 0;
        if (c.A7 % 360 != 0 && typeof c.H.cx != ZC._[33] && typeof c.H.cy != ZC._[33]) {
            f = c.I.F / 2 - c.H.cx;
            e = c.I.D / 2 - c.H.cy;
            l = ZC.V4(Math.atan(f / e));
            if (c.H.cy > c.I.D / 2) l += 180;
            m = Math.sqrt(f * f + e * e);
            k = m * ZC.CJ(l - c.A7);
            l = m * ZC.CT(l - c.A7);
            f = f - k;
            k = e - l
        }
        e = 0 - f;
        if (c.C0 != null) e += c.C0;
        k = 0 - k;
        if (c.C4 != null) k += c.C4;
        h.style.left = e + "px";
        h.style.top = k + "px";
        a.appendChild(h);
        if (c.A7 % 360 == 0) {
            h.style.width =
                "10px";
            h.style.height = "10px"
        } else {
            h.style.width = c.I.F + "px";
            h.style.height = c.I.D + "px"
        } if (typeof c.H.imgfill != ZC._[33]) {
            l = c.H.imgfill;
            if (l.length == 1) {
                h = ZC.K.DJ("zcv:shape");
                h.style.position = "absolute";
                h.style.rotation = c.A7;
                f = ZC.K.DJ("zcv:path");
                f.v = b;
                h.appendChild(f);
                h.appendChild(l[0]);
                h.stroked = 0;
                ZC.K.EG(h, {
                    id: g + "-imgfill",
                    filled: true,
                    coordorigin: "0 0",
                    coordsize: c.A7 % 360 == 0 ? "100 100" : c.I.F + " " + c.I.D
                });
                h.style.left = e + "px";
                h.style.top = k + "px";
                a.appendChild(h);
                if (c.A7 % 360 == 0) {
                    h.style.width = "10px";
                    h.style.height =
                        "10px"
                } else {
                    h.style.width = c.I.F + "px";
                    h.style.height = c.I.D + "px"
                }
            } else if (l.length == 3) {
                GO = ZC.K.DJ("img");
                GO.id = g + "-img";
                GO.src = c.BW.substring(0, 3) == "zc." ? ZC.IMAGES[c.BW] : c.BW;
                GO.style.position = "absolute";
                GO.style.left = l[1] + "px";
                GO.style.top = l[2] + "px";
                GO.style.width = c.H[ZC._[69]] + "px";
                GO.style.height = c.H[ZC._[70]] + "px";
                a.appendChild(GO)
            }
        }
    }
};
ZC.D5 = ZC.E7.B2({
    $i: function(a) {
        this.b(a);
        this.A = a;
        this.C6 = this.Y = null;
        this.HS = "";
        this.iY = this.iX = -1;
        this.DQ = "poly";
        this.B = [];
        this.DF = [0, 0, 0, 0];
        this.AE = this.DI = this.C4 = this.C0 = this.AR = this.A7 = 0;
        this.AO = 360;
        this.YX = this.NK = this.BG = 0
    },
    build: function() {},
    copy: function(a) {
        this.b(a);
        for (var c = (new String("C0,C4,DI,AR,A7,DY,DQ")).split(","), b = 0, e = c.length; b < e; b++)
            if (typeof a[c[b]] != ZC._[33]) this[c[b]] = a[c[b]];
        if (a.B && a.B.length > 0) {
            this.B = [];
            b = 0;
            for (e = a.B.length; b < e; b++) this.B.push(a.B[b])
        }
    },
    ll_: function(a,
        c) {
        if (("" + a).indexOf("lat") != -1) c = "y";
        if (("" + a).indexOf("lon") != -1) c = "x";
        a = ZC._f_(("" + a).replace("lat", "").replace("lon", ""));
        var b = zingchart.maps.maps[this.YX];
        if (b) a = zingchart.maps.lonlat2xy(this.A.iX, this.A.iY, this.A.F, this.A.D, c == "x" ? [a, 0] : [0, a], b._INFO_.bbox);
        return a = ZC._i_(c == "x" ? a[0] : a[1])
    },
    xy_: function(a, c) {
        c = c || "x";
        if (!(("" + a).indexOf("lat") != -1 || ("" + a).indexOf("lon") != -1))
            if (ZC._f_(a) + "" == a + "") {
                a = ZC._a_(a);
                if (a > 1) return c == "x" ? this.A.iX + ZC._i_(a) : this.A.iY + ZC._i_(a);
                else if (a <= 1) return c ==
                    "x" ? ZC._i_(this.A.iX + this.A.F * a) : ZC._i_(this.A.iY + this.A.D * a)
            } else {
                a += "";
                return a.indexOf("%") != -1 ? this.xy_(ZC._f_(a.replace("%", "")) / 100, c) : a.indexOf("px") != -1 ? this.xy_(ZC._f_(a.replace("px", "")), c) : this.xy_(ZC._f_(a), c)
            }
    },
    locate: function(a) {
        if (this.NK) {
            this.OT_a([
                ["x", "iX"],
                ["y", "iY"]
            ]);
            this.ST()
        } else if (a == 1) {
            if ((a = this.o.x) != null) this.iX = this.xy_(a, "x");
            if ((a = this.o.y) != null) this.iY = this.xy_(a, "y");
            if (this.iX == -1) this.iX = this.A.iX;
            if (this.iY == -1) this.iY = this.A.iY
        } else if (a == 2) {
            this.ST();
            this.F =
                this.DF[2] - this.DF[0];
            this.D = this.DF[3] - this.DF[1]
        }
    },
    ST: function() {
        var a, c = Number.MAX_VALUE,
            b = Number.MAX_VALUE,
            e = -Number.MAX_VALUE,
            f = -Number.MAX_VALUE;
        switch (this.DQ) {
            case "custom":
                f = e = b = c = 0;
                break;
            case "circle":
            case "pie":
                c = this.iX - this.AR;
                b = this.iY - this.AR;
                e = this.iX + this.AR;
                f = this.iY + this.AR;
                break;
            default:
                for (var g = 0, h = this.B.length; g < h; g++)
                    if ((a = this.B[g]) != null) {
                        c = ZC.CO(c, a[0]);
                        b = ZC.CO(b, a[1]);
                        e = ZC.BN(e, a[0]);
                        f = ZC.BN(f, a[1])
                    }
        }
        this.DF = [c, b, e, f]
    },
    DA: function() {
        if (this.DQ == "pie") {
            var a = 1,
                c = [];
            if (this.AR >
                50) a = 2;
            if (this.AR > 100) a = 4;
            if (this.BG == 0) this.AE % 360 != this.AO % 360 && c.push([this.iX, this.iY]);
            else c.push(ZC.AP.BA(this.iX, this.iY, this.BG, this.AE), ZC.AP.BA(this.iX, this.iY, this.AR, this.AE));
            for (var b = this.AE; b <= this.AO; b += a) c.push(ZC.AP.BA(this.iX, this.iY, this.AR, b));
            c.push(ZC.AP.BA(this.iX, this.iY, this.AR, this.AO));
            if (this.BG == 0) this.AE % 360 != this.AO % 360 && c.push([this.iX, this.iY]);
            else {
                c.push(ZC.AP.BA(this.iX, this.iY, this.BG, this.AO));
                for (b = this.AO; b >= this.AE; b -= a) c.push(ZC.AP.BA(this.iX, this.iY, this.BG,
                    b));
                c.push(ZC.AP.BA(this.iX, this.iY, this.BG, this.AE))
            }
            c.push([c[0][0], c[0][1]]);
            return ZC.AP.M0(c, ZC.CO(20, this.AR / 5))
        }
        return ZC.AP.M0(this.B, ZC.CO(20, this.AR / 5))
    },
    X9: function() {
        var a = ZC.ie67 ? ZC.MAPTX : 0;
        switch (this.DQ) {
            case "line":
                return ["poly", ZC.AP.M0(ZC.AP.SQ(this.B, 4))];
            case "cross":
            case "plus":
                return ["circle", this.iX + a + "," + (this.iY + a) + "," + ZC._i_(this.AR * 1.2)];
            case "circle":
                return ["circle", this.iX + a + "," + (this.iY + a) + "," + ZC._i_(this.AR * 1.1)];
            case "pie":
                return ["poly", this.DA()];
            default:
                a = ["poly"];
                for (var c = [], b = 0, e = this.B.length; b < e; b++)
                    if (this.B[b] != null)
                        if (this.B[b].length == 6)
                            for (var f = this.B[b][3]; f < this.B[b][4]; f += 1) c.push(ZC.AP.BA(this.B[b][0], this.B[b][1], this.B[b][2], f));
                        else if (this.B[b].length == 4 && c[b - 1]) {
                    f = {
                        x: c[c.length - 1][0],
                        y: c[c.length - 1][1]
                    };
                    for (var g = {
                        x: this.B[b][2],
                        y: this.B[b][3]
                    }, h = {
                        x: this.B[b][0],
                        y: this.B[b][1]
                    }, k = 0; k <= 1; k += 0.1) c.push([ZC._i_((1 - k) * (1 - k) * f.x + 2 * k * (1 - k) * h.x + k * k * g.x), ZC._i_((1 - k) * (1 - k) * f.y + 2 * k * (1 - k) * h.y + k * k * g.y)])
                } else c.push(this.B[b]);
                else {
                    c.length > -1 && a.push(ZC.AP.M0(c,
                        ZC.CO(20, this.AR / 5)));
                    c = []
                }
                c.length > -1 && a.push(ZC.AP.M0(c, ZC.CO(20, this.AR / 5)));
                return a
        }
    },
    parse: function() {
        this.b();
        this.OT_a([
            ["id", "HS"],
            ["angle", "A7", "i"],
            [ZC._[1], "AE", "f"],
            [ZC._[2], "AO", "f"],
            [ZC._[10], "BG", "i"],
            [ZC._[23], "AR", "i"],
            ["map", "YX"],
            ["type", "DQ"],
            ["points", "B"],
            ["offset-x", "C0", "i"],
            ["offset-y", "C4", "i"],
            ["offset-r", "DI", "i"]
        ]);
        for (var a = 0, c = this.B.length; a < c; a++)
            if (this.B[a] != null)
                for (var b = 0; b < this.B[a].length; b++)
                    if (("" + this.B[a][b]).indexOf("lat") != -1 || ("" + this.B[a][b]).indexOf("lon") !=
                        -1) this.B[a][b] = this.ll_(this.B[a][b], b % 2 == 0 ? "x" : "y");
        this.A7 %= 360;
        this.locate(1);
        if (this.DQ != "bar") {
            c = this.AR;
            switch (this.DQ) {
                case "triangle":
                    c = this.AR;
                    a = 0.1 * this.AR;
                    this.B = [
                        [this.iX - c, this.iY + c - a],
                        [this.iX, this.iY - c - a],
                        [this.iX + c, this.iY + c - a],
                        [this.iX - c, this.iY + c - a]
                    ];
                    break;
                case "square":
                    c = ZC._i_(this.AR * 0.9);
                    this.B = [
                        [this.iX - c, this.iY - c],
                        [this.iX - c, this.iY + c],
                        [this.iX + c, this.iY + c],
                        [this.iX + c, this.iY - c],
                        [this.iX - c, this.iY - c]
                    ];
                    break;
                case "diamond":
                    c = ZC._i_(this.AR * 1.2);
                    this.B = [
                        [this.iX - c, this.iY],
                        [this.iX, this.iY + c],
                        [this.iX + c, this.iY],
                        [this.iX, this.iY - c],
                        [this.iX - c, this.iY]
                    ];
                    break;
                case "plus":
                    c = this.AR;
                    this.B = [
                        [this.iX, this.iY - c],
                        [this.iX, this.iY + c], null, [this.iX - c, this.iY],
                        [this.iX + c, this.iY]
                    ];
                    break;
                case "cross":
                    c = this.AR;
                    this.B = [
                        [this.iX - c, this.iY - c],
                        [this.iX + c, this.iY + c], null, [this.iX - c, this.iY + c],
                        [this.iX + c, this.iY - c]
                    ];
                    break;
                case "star3":
                case "star4":
                case "star5":
                case "star6":
                case "star7":
                case "star8":
                case "star9":
                    this.B = [];
                    c = 2 * this.AR;
                    a = ZC._i_(this.DQ.replace("star", ""));
                    b = 360 / a;
                    var e =
                        c / (a > 4 ? 2 : 7 - a);
                    for (a = 0; a < 360; a += b) this.B.push(ZC.AP.BA(this.iX, this.iY, c * 0.75, a), ZC.AP.BA(this.iX, this.iY, e * 0.75, a + b / 2));
                    this.B.push([this.B[0][0], this.B[0][1]]);
                    break;
                case "gear3":
                case "gear4":
                case "gear5":
                case "gear6":
                case "gear7":
                case "gear8":
                case "gear9":
                    this.B = [];
                    c = 2 * this.AR;
                    a = ZC._i_(this.DQ.replace("gear", ""));
                    b = 360 / (2 * a);
                    e = c * 0.75;
                    for (a = 0; a < 360; a += 2 * b) {
                        var f = a + b / 2;
                        this.B.push(ZC.AP.BA(this.iX, this.iY, c * 0.75, f), ZC.AP.BA(this.iX, this.iY, c * 0.75, f + b), ZC.AP.BA(this.iX, this.iY, e * 0.75, f + b + b * 0.2), ZC.AP.BA(this.iX,
                            this.iY, e * 0.75, f + b * 2 - b * 0.2))
                    }
                    this.B.push([this.B[0][0], this.B[0][1]]);
                    break;
                case "pie":
                    a = this.CV = 0;
                    if (ZC.AH(["svg", "vml"], this.I.A5) != -1 && this.AE % 360 == this.AO % 360) {
                        this.AO -= 0.05;
                        a = 1
                    }
                    this.B = [];
                    if (this.BG == 0) this.AE % 360 != this.AO % 360 && !a && this.B.push([this.iX, this.iY]);
                    else this.B.push(ZC.AP.BA(this.iX, this.iY, this.BG, this.AE));
                    this.B.push(ZC.AP.BA(this.iX, this.iY, c, this.AE), [this.iX, this.iY, c, this.AE, this.AO, 0]);
                    if (this.BG == 0) this.AE % 360 != this.AO % 360 && !a && this.B.push([this.iX, this.iY]);
                    else this.B.push(ZC.AP.BA(this.iX,
                        this.iY, c, this.AO), ZC.AP.BA(this.iX, this.iY, this.BG, this.AO), [this.iX, this.iY, this.BG, this.AO, this.AE, 1]);
                    this.B.push([this.B[0][0], this.B[0][1]])
            }
        }
        this.locate(2)
    },
    paint: function() {
        if (this.DQ != "none") {
            var a = this.I.A5;
            this.JE && this.C6 != null && this.XX();
            switch (a) {
                case "canvas":
                    this.Y2();
                    break;
                case "svg":
                    this.RM();
                    break;
                case "vml":
                    this.RL()
            }
        }
    },
    XX: function() {
        var a;
        if (this.DE.length == 0 && typeof this.QI != ZC._[33]) a = this.QI;
        else {
            a = new ZC.D5(this.A);
            a.copy(this);
            a.Y = this.C6;
            a.JE = 0;
            a.X = a.A6 = a.LA;
            a.BW = "";
            a.AU =
                1;
            a.BI = a.LA;
            a.AI = 0
        }
        a.A9 = a.MI * this.A9;
        a.Q = this.Q + "-sh";
        var c = (this.G4 - this.J5 / 2) * ZC.CT(this.L7) + this.J5,
            b = (this.G4 - this.J5 / 2) * ZC.CJ(this.L7) + this.J5;
        a.iX = this.iX + ZC._i_(c);
        a.iY = this.iY + ZC._i_(b);
        a.AR = this.AR;
        if (this.B.length > 0)
            for (var e = [], f = 0, g = this.B.length; f < g; f++)
                if (this.B[f] != null) {
                    for (var h = [], k = 0; k < this.B[f].length; k++) h[k] = this.B[f][k];
                    h[0] = this.B[f][0] + c;
                    h[1] = this.B[f][1] + b;
                    e.push(h)
                } else e.push(null);
        a.DF = [this.DF[0] + c, this.DF[1] + b, this.DF[2] + c, this.DF[3] + b];
        a.B = e;
        a.paint();
        if (this.DE.length ==
            0 && typeof this.QI == ZC._[33]) this.QI = a
    },
    R6: function() {
        var a = this.AT == -1 ? ZC._[34] : this.A9 == 1 ? this.AT : ZC.BV.R0(this.AT, this.A9),
            c = this.BI == -1 ? ZC._[34] : this.A9 == 1 ? this.BI : ZC.BV.R0(this.BI, this.A9),
            b = this.X == -1 ? ZC._[34] : this.A9 == 1 ? this.X : ZC.BV.R0(this.X, this.A9),
            e = this.A6 == -1 ? ZC._[34] : this.A9 == 1 ? this.A6 : ZC.BV.R0(this.A6, this.A9);
        return {
            lc: a,
            bc: c,
            bgc1: b,
            bgc2: e
        }
    },
    KM: function(a) {
        switch (this.DQ) {
            case "circle":
            case "pie":
                var c = this.iX,
                    b = this.iY,
                    e = this.AR;
                break;
            default:
                c = this.DF[0] + (this.DF[2] - this.DF[0]) / 2;
                b = this.DF[1] + (this.DF[3] - this.DF[1]) / 2;
                e = ZC.CT(this.IX) * (this.DF[2] - this.DF[0]) / 2 + ZC.CJ(this.IX) * (this.DF[3] - this.DF[1]) / 2
        }
        ZC.OE(c) || (c = 0);
        ZC.OE(b) || (b = 0);
        ZC.OE(e) || (e = 0);
        c += this.P2;
        b += this.P1;
        if (a == "radial") return {
            cx: c,
            cy: b,
            r: ZC._a_(e)
        };
        else if (a == "linear") {
            a = e * ZC.CT(this.IX);
            e = e * ZC.CJ(this.IX);
            return {
                x1: c - a,
                y1: b - e,
                x2: c + a,
                y2: b + e
            }
        }
    },
    K1: function() {
        if (ZC.cache[this.BW]) var a = ZC.cache[this.BW];
        else {
            a = new Image;
            a.src = this.BW;
            ZC.cache[this.BW] = a
        }
        var c = a.width,
            b = a.height;
        switch (this.PT) {
            case "x":
                c = this.F;
                break;
            case "y":
                b = this.D;
                break;
            case "xy":
            case "both":
                c = this.F;
                b = this.D
        }
        var e, f, g, h;
        f = this.N6.split(" ");
        e = f[0] || "";
        switch (e) {
            case "":
            case "left":
                e = 0;
                break;
            case "center":
                e = (this.F - c) / 2;
                break;
            case "right":
                e = this.F - c;
                break;
            default:
                e = e.indexOf("%") != -1 ? (this.F - c) * ZC._i_(e.replace(/[^0-9]/g, "")) / 100 : ZC._i_(e.replace(/[^0-9]/g, ""))
        }
        g = e / this.F;
        e += typeof this.GY != ZC._[33] ? this.iX + this.C0 : this.DF[0] + this.C0;
        f = f[1] || "";
        switch (f) {
            case "":
            case "top":
                f = 0;
                break;
            case "middle":
                f = (this.D - b) / 2;
                break;
            case "bottom":
                f =
                    this.D - b;
                break;
            default:
                f = f.indexOf("%") != -1 ? (this.D - b) * ZC._i_(f.replace(/[^0-9]/g, "")) / 100 : ZC._i_(f.replace(/[^0-9]/g, ""))
        }
        h = f / this.D;
        f += typeof this.GY != ZC._[33] ? this.iY + this.C4 : this.DF[1] + this.C4;
        this.H[ZC._[69]] = c;
        this.H[ZC._[70]] = b;
        return {
            image: a,
            x: e,
            y: f,
            cx: g,
            cy: h
        }
    },
    PV: function(a) {
        for (var c = this.EF.split(/\s+|;|,/), b = this.ER.split(/\s+|;|,/), e = 0, f = c.length; e < f; e++) {
            c[e] = ZC.BV.LF(c[e]);
            var g = c[e] == -1 ? ZC._[34] : this.A9 == 1 ? c[e] : ZC.BV.R0(c[e], this.A9),
                h = ZC._f_(b[e]) || 1;
            ZC.DK(h, 0, 1) || (h = 1);
            a.addColorStop(h,
                g)
        }
    },
    Y2: function() {
        var a = this.Y.getContext("2d");
        a.save();
        var c = this.DF[0] + (this.DF[2] - this.DF[0]) / 2,
            b = this.DF[1] + (this.DF[3] - this.DF[1]) / 2,
            e = this.R6(),
            f = e.lc,
            g = e.bc,
            h = e.bgc1;
        e = e.bgc2;
        if (h != e || this.EF != "" && this.ER != "") {
            var k = this.KM(this.IV);
            if (this.IV == "radial") var l = a.createRadialGradient(k.cx, k.cy, 1, k.cx, k.cy, k.r);
            else if (this.IV == "linear") l = a.createLinearGradient(k.x1, k.y1, k.x2, k.y2);
            if (this.EF != "" && this.ER != "") this.PV(l);
            else {
                l.addColorStop(0, h);
                l.addColorStop(1, e)
            }
            a.fillStyle = l
        } else {
            if (this.BW !=
                "" && ZC.AH(["repeat", "true", true], this.I8) != -1)
                if (this.X == -1 && this.A6 == -1) h = ZC._[34];
            a.fillStyle = h
        }
        switch (this.DQ) {
            case "custom":
                if ((E = this.o.url) != null) {
                    if (ZC.cache[E]) f = ZC.cache[E];
                    else {
                        f = new Image;
                        f.src = E;
                        ZC.cache[E] = f
                    }
                    a.drawImage(f, this.iX - f.width / 2 + this.C0, this.iY - f.height / 2 + this.C4)
                }
                break;
            case "plus":
            case "cross":
            case "line":
                a.strokeStyle = f;
                a.lineWidth = this.AI;
                break;
            default:
                a.strokeStyle = g;
                a.lineWidth = this.AU
        }
        a.translate(c, b);
        isNaN(this.A7) || a.rotate(ZC.OJ(this.A7));
        a.translate(-c, -b);
        !isNaN(this.C0) &&
            !isNaN(this.C4) && a.translate(this.C0, this.C4);
        a.beginPath();
        c = this.FO;
        this.FO = "";
        this.GL();
        switch (this.DQ) {
            case "circle":
                a.arc(this.iX, this.iY, this.AR, 0, Math.PI * 2, true);
                break;
            default:
                if (ZC.AH(["square", "plus"], this.DQ) != -1) this.IT = 1;
                ZC.BQ.contour(a, this, this.B);
                if (ZC.AH(["square", "plus"], this.DQ) != -1) this.IT = 0
        }
        this.FO = c;
        this.GL();
        if (this.BW != "") {
            a.save();
            a.clip();
            c = a.globalAlpha;
            a.globalAlpha = this.A9;
            b = this.K1();
            f = b.image;
            switch (this.I8) {
                case "repeat":
                case true:
                case "true":
                    b = this.DF[0] - (f.width - (this.DF[2] -
                        this.DF[0])) / 2;
                    g = this.DF[1] - (f.height - (this.DF[3] - this.DF[1])) / 2;
                    a.translate(b, g);
                    f = a.createPattern(f, "repeat");
                    a.fillStyle = f;
                    a.fill();
                    a.translate(-b, -g);
                    break;
                case "no-repeat":
                case false:
                case "false":
                    a.drawImage(f, b.x - this.C0, b.y - this.C4, this.H[ZC._[69]], this.H[ZC._[70]])
            }
            a.globalAlpha = c;
            a.restore()
        } else a.fill();
        a.closePath();
        a.beginPath();
        switch (this.DQ) {
            case "circle":
                a.arc(this.iX, this.iY, this.AR, 0, Math.PI * 2, true);
                this.AU > 0 && a.stroke();
                a.closePath();
                break;
            case "plus":
            case "cross":
            case "line":
                if (this.AI >
                    0) {
                    ZC.BQ.setup(a, this);
                    ZC.BQ.paint(a, this, this.B)
                }
                break;
            default:
                if (this.AU > 0) {
                    c = this.AT;
                    b = this.AI;
                    this.AT = this.BI;
                    this.AI = this.AU;
                    this.GL();
                    ZC.BQ.setup(a, this);
                    ZC.BQ.paint(a, this, this.B, true);
                    this.AT = c;
                    this.AI = b;
                    this.GL()
                }
                a.closePath()
        }
        a.restore()
    },
    RZ: function(a) {
        var c = a.info,
            b = c.image;
        switch (this.I8) {
            default: c = this.Q == "" ? "pattern-" + ZC.SEQ++ : this.Q + "-pattern";
            ZC.K.F6(c);
            this.KM("linear");
            var e = ZC.K.DJ("pattern", ZC._[38]);
            ZC.K.EG(e, {
                x: a.x,
                y: a.y,
                width: b.width,
                height: b.height,
                id: c,
                patternUnits: "userSpaceOnUse"
            });
            this.I.H4.childNodes[0].appendChild(e);
            a = ZC.K.DJ("image", ZC._[38]);
            a.setAttributeNS ? a.setAttributeNS(ZC._[39], "href", this.BW) : a.setAttribute("src", this.BW);
            ZC.K.EG(a, {
                width: b.width,
                height: b.height
            });
            e.appendChild(a);
            this.H.imgfill = "url(#" + c + ")";
            break;
            case "no-repeat":
            case "false":
            case false:
                this.H.imgfill = [b, c.x, c.y]
        }
    },
    O0: function(a) {
        if (a == null) a = 0;
        if (this.X != this.A6 || this.EF != "" && this.ER != "") {
            var c = this.Q == "" ? "gradient-" + ZC.SEQ++ : this.Q + "-gradient";
            if (a && ZC.AJ(c) == null) a = 0;
            if (ZC.A3.browser.msie &&
                ZC._i_(ZC.A3.browser.version) == 9) a = 0;
            ZC.AJ(c) != null && !a && ZC.K.F6(c);
            var b = this.KM(this.IV);
            if (this.IV == "radial") {
                var e = a ? ZC.AJ(c) : ZC.K.DJ("radialGradient", ZC._[38]);
                ZC.K.EG(e, {
                    cx: ZC._i_(b.cx),
                    cy: ZC._i_(b.cy),
                    r: ZC._i_(b.r),
                    fx: ZC._i_(b.cx),
                    fy: ZC._i_(b.cy)
                })
            } else if (this.IV == "linear") {
                e = a ? ZC.AJ(c) : ZC.K.DJ("linearGradient", ZC._[38]);
                ZC.K.EG(e, {
                    x1: ZC._i_(b.x1),
                    x2: ZC._i_(b.x2),
                    y1: ZC._i_(b.y1),
                    y2: ZC._i_(b.y2)
                })
            }
            if (!a) {
                ZC.K.EG(e, {
                    id: c,
                    gradientUnits: "userSpaceOnUse"
                });
                this.I.H4.childNodes[0].appendChild(e);
                if (this.EF != "" && this.ER != "") {
                    a = this.EF.split(/\s+|;|,/);
                    b = this.ER.split(/\s+|;|,/);
                    for (var f = 0, g = a.length; f < g; f++) {
                        a[f] = ZC.BV.LF(a[f]);
                        var h = a[f] == -1 ? ZC._[34] : this.A9 == 1 ? a[f] : ZC.BV.R0(a[f], this.A9),
                            k = b[f] || 1;
                        ZC.DK(k, 0, 1) || (k = 1);
                        var l = 1;
                        h = a[f];
                        if (a[f] == -1) {
                            l = 0;
                            h = ZC._[35]
                        }
                        var m = ZC.K.DJ("stop", ZC._[38]);
                        ZC.K.EG(m, {
                            offset: k,
                            "stop-color": h,
                            "stop-opacity": l
                        });
                        e.appendChild(m)
                    }
                } else {
                    b = 1;
                    f = this.X;
                    if (this.X == -1) {
                        b = 0;
                        f = ZC._[35]
                    }
                    a = ZC.K.DJ("stop", ZC._[38]);
                    ZC.K.EG(a, {
                        offset: 0,
                        "stop-color": f,
                        "stop-opacity": b
                    });
                    b = 1;
                    f = this.A6;
                    if (this.A6 == -1) {
                        b = 0;
                        f = ZC._[35]
                    }
                    g = ZC.K.DJ("stop", ZC._[38]);
                    ZC.K.EG(g, {
                        offset: 1,
                        "stop-color": f,
                        "stop-opacity": b
                    });
                    e.appendChild(a);
                    e.appendChild(g)
                }
                this.H.fill = "url(#" + c + ")"
            }
        } else if (this.X != -1) this.H.fill = this.X
    },
    RM: function() {
        var a = this.Y,
            c = this.DF[0] + (this.DF[2] - this.DF[0]) / 2,
            b = this.DF[1] + (this.DF[3] - this.DF[1]) / 2;
        this.H.cx = c;
        this.H.cy = b;
        this.H.fill = -1;
        if (this.BW != "") {
            var e = this.K1();
            this.RZ({
                info: e,
                x: c - e.image.width / 2,
                y: b - e.image.height / 2
            })
        }
        if (typeof this.H.imgfill == "object" && typeof this.I !=
            ZC._[33] && this.I) {
            c = this.X9()[1].split(",");
            b = "";
            e = 0;
            for (var f = c.length; e < f; e += 2) b += ZC._i_(c[e]) + ZC._i_(this.C0) + "," + (ZC._i_(c[e + 1]) + ZC._i_(this.C4)) + " ";
            this.I.H4.appendChild(ZC.K.UA({
                id: this.Q + "-clip",
                path: b
            }));
            this.H["clip-path"] = this.Q + "-clip"
        }
        this.O0();
        switch (this.DQ) {
            case "custom":
                if ((E = this.o.url) != null) {
                    if (ZC.cache[E]) b = ZC.cache[E];
                    else {
                        b = new Image;
                        b.src = E;
                        ZC.cache[E] = b
                    }
                    c = ZC.K.DJ("image", ZC._[38]);
                    c.setAttributeNS ? c.setAttributeNS(ZC._[39], "href", E) : c.setAttribute("src", E);
                    ZC.K.EG(c, {
                        id: this.Q +
                            "-image",
                        x: this.iX - b.width / 2 + this.C0,
                        y: this.iY - b.height / 2 + this.C4,
                        width: b.width,
                        height: b.height
                    });
                    a.appendChild(c)
                }
                break;
            case "circle":
                if (ZC.AJ(this.Q + "-circle") == null) {
                    c = ZC.K.DJ("circle", ZC._[38]);
                    this.H.fill != -1 ? ZC.K.EG(c, {
                        fill: this.H.fill,
                        "fill-opacity": this.A9
                    }) : ZC.K.EG(c, {
                        fill: "none"
                    });
                    ZC.K.EG(c, {
                        id: this.Q + "-circle",
                        cx: this.iX,
                        cy: this.iY,
                        r: this.AR
                    });
                    this.AU > 0 && ZC.K.EG(c, {
                        stroke: this.BI,
                        "stroke-width": this.AU,
                        "stroke-opacity": this.A9
                    });
                    a.appendChild(c);
                    if (typeof this.H.imgfill != ZC._[33])
                        if (typeof this.H.imgfill ==
                            "string") {
                            c = ZC.K.DJ("circle", ZC._[38]);
                            ZC.K.EG(c, {
                                id: this.Q + "-imgfill",
                                fill: this.H.imgfill,
                                "fill-opacity": this.A9,
                                cx: this.iX,
                                cy: this.iY,
                                r: this.AR,
                                "stroke-width": 0
                            });
                            a.appendChild(c)
                        } else {
                            b = this.H.imgfill;
                            c = ZC.K.DJ("image", ZC._[38]);
                            c.setAttributeNS && c.setAttributeNS(ZC._[39], "href", this.BW);
                            this.H["clip-path"] != null && ZC.K.EG(c, {
                                "clip-path": "url(#" + this.H["clip-path"] + ")"
                            });
                            ZC.K.EG(c, {
                                id: this.Q + "-imgfill",
                                x: b[1],
                                y: b[2],
                                width: b[0].width,
                                height: b[0].height
                            });
                            a.appendChild(c)
                        }
                }
                break;
            case "plus":
            case "cross":
            case "line":
                if (this.AI >
                    0) {
                    ZC.BQ.setup(a, this);
                    ZC.BQ.paint(a, this, this.B)
                }
                break;
            default:
                c = this.AT;
                b = this.AI;
                this.AT = this.BI;
                this.AI = this.AU;
                this.GL();
                ZC.BQ.setup(a, this);
                ZC.BQ.paint(a, this, this.B, true, 0);
                this.AT = c;
                this.AI = b;
                this.GL()
        }
    },
    O1: function(a, c) {
        if (c == null) c = 0;
        if (this.X != this.A6 || this.EF != "" && this.ER != "") {
            var b = this.Q == "" ? "gradient-" + ZC.SEQ++ : this.Q + "-gradient";
            if (c && ZC.AJ(b) == null) c = 0;
            ZC.AJ(b) != null && !c && ZC.A3(b).remove();
            this.KM(this.IV);
            var e = c ? ZC.AJ(b) : ZC.K.DJ("zcv:fill");
            if (c) a = ZC.A3("#" + b).attr("focusposition");
            if (this.EF != "" && this.ER != "") {
                for (var f = this.EF.split(/\s+|;|,/), g = this.ER.split(/\s+|;|,/), h = "", k = "", l = "", m = 0, o = f.length; m < o; m++) {
                    f[m] = ZC.BV.LF(f[m]);
                    var n = f[m] == -1 ? ZC._[35] : f[m],
                        p = g[m] || 1;
                    ZC.DK(p, 0, 1) || (p = 1);
                    p = ZC._i_(p * 100);
                    if (m == 0) h = n;
                    else if (m == o - 1) k = n;
                    else l += p + "% " + ZC.BV.LF(n) + ","
                }
                if (l != "") l = l.substring(0, l.length - 1);
                if (this.IV == "radial") ZC.K.EG(e, {
                    id: b,
                    type: "gradientradial",
                    focusposition: a,
                    color: h,
                    color2: k,
                    colors: l
                });
                else this.IV == "linear" && ZC.K.EG(e, {
                    id: b,
                    type: "gradient",
                    method: "sigma",
                    angle: 270 -
                        this.IX - this.A7,
                    color: h,
                    color2: k,
                    colors: l
                })
            } else {
                f = this.X;
                if (this.X == -1) f = ZC._[35];
                g = this.A6;
                if (this.A6 == -1) g = ZC._[35];
                if (this.IV == "radial") ZC.K.EG(e, {
                    id: b,
                    type: "gradientradial",
                    focusposition: a,
                    color: g,
                    color2: f
                });
                else this.IV == "linear" && ZC.K.EG(e, {
                    id: b,
                    type: "gradient",
                    method: "sigma",
                    angle: 270 - this.IX - this.A7,
                    color: f,
                    color2: g
                })
            }
            ZC.K.EG(e, {
                opacity: this.A9,
                "o:opacity2": typeof this.H.opacity2 != ZC._[33] ? this.H.opacity2 : this.A9
            });
            this.H.fill = e
        } else {
            e = ZC.K.DJ("zcv:fill");
            if (this.X != -1) {
                ZC.K.EG(e, {
                    type: "solid",
                    color: this.X,
                    opacity: this.A9
                });
                this.H.fill = e
            }
        }
    },
    RL: function() {
        var a = this.Y,
            c = this.DF[1] + (this.DF[3] - this.DF[1]) / 2;
        this.H.cx = this.DF[0] + (this.DF[2] - this.DF[0]) / 2;
        this.H.cy = c;
        this.H.fill = -1;
        var b = ZC.K.DJ("zcv:fill");
        if (this.BW != "") {
            var e = this.K1();
            c = e.image;
            switch (this.I8) {
                default: b.type = "tile";
                b.src = this.BW;
                ZC.K.EG(b, {
                    position: e.cx + "," + e.cy,
                    opacity: this.A9,
                    "o:opacity2": this.A9
                });
                this.H.imgfill = [b];
                break;
                case "no-repeat":
                case "false":
                case false:
                    this.H.imgfill = [c, e.x, e.y]
            }
        }
        this.O1("0,0");
        b = ZC.K.DJ("zcv:stroke");
        switch (this.DQ) {
            case "custom":
                if ((E = this.o.url) != null) {
                    if (ZC.cache[E]) c = ZC.cache[E];
                    else {
                        c = new Image;
                        c.src = E;
                        ZC.cache[E] = c
                    }
                    GO = ZC.K.DJ("img");
                    GO.id = this.Q + "-img";
                    GO.src = E;
                    GO.style.position = "absolute";
                    GO.style.left = this.iX - c.width / 2 + this.C0 + "px";
                    GO.style.top = this.iY - c.height / 2 + this.C4 + "px";
                    a.appendChild(GO)
                }
                break;
            case "plus":
            case "cross":
            case "line":
                b.weight = this.AI + "px";
                b.color = this.AT;
                break;
            default:
                b.weight = this.AU + "px";
                b.color = this.BI
        }
        b.opacity = this.A9;
        switch (this.FO) {
            case "solid":
                b.dashstyle = "solid";
                break;
            case "dotted":
                b.dashstyle = "dot";
                break;
            case "dashed":
                b.dashstyle = "dash"
        }
        this.H.stroke = b;
        switch (this.DQ) {
            case "circle":
                if (ZC.AJ(this.Q + "-circle") == null) {
                    c = ZC.K.DJ("zcv:oval");
                    c.id = this.Q + "-circle";
                    c.style.position = "absolute";
                    if (this.H.fill != -1) c.appendChild(this.H.fill);
                    else c.filled = 0; if (this.AU > 0) c.appendChild(b);
                    else c.stroked = 0;
                    c.style.left = this.iX - this.AR + "px";
                    c.style.top = this.iY - this.AR + "px";
                    c.style.width = 2 * this.AR + "px";
                    c.style.height = 2 * this.AR + "px";
                    a.appendChild(c);
                    if (typeof this.H.imgfill !=
                        ZC._[33]) {
                        b = this.H.imgfill;
                        if (b.length == 1) {
                            c = ZC.K.DJ("zcv:oval");
                            c.id = this.Q + "-imgfill";
                            c.style.position = "absolute";
                            a.appendChild(c);
                            c.appendChild(b[0]);
                            c.style.left = this.iX - this.AR + "px";
                            c.style.top = this.iY - this.AR + "px";
                            c.style.width = 2 * this.AR + "px";
                            c.style.height = 2 * this.AR + "px"
                        } else if (b.length == 3) {
                            GO = ZC.K.DJ("img");
                            GO.id = this.Q + "-img";
                            GO.src = this.BW;
                            GO.style.position = "absolute";
                            GO.style.left = b[1] + "px";
                            GO.style.top = b[2] + "px";
                            a.appendChild(GO)
                        }
                    }
                }
                break;
            case "plus":
            case "cross":
            case "line":
                if (this.AI >
                    0) {
                    ZC.BQ.setup(a, this);
                    ZC.BQ.paint(a, this, this.B)
                }
                break;
            default:
                c = this.AT;
                b = this.AI;
                this.AT = this.BI;
                this.AI = this.AU;
                this.GL();
                ZC.BQ.setup(a, this);
                ZC.BQ.paint(a, this, this.B, true, 0);
                this.AT = c;
                this.AI = b;
                this.GL()
        }
    }
});
ZC.FY = ZC.D5.B2({
    $i: function(a) {
        this.b(a);
        this.DQ = "box";
        this.D = this.F = 0;
        this.YS = "";
        this.CR = this.CI = this.CK = this.CM = -1;
        this.GY = this.V2 = this.EQ = this.EI = this.F8 = this.EB = 0;
        this.FA = "bottom";
        this.HJ = this.FV = 0;
        this.FW = this.G7 = 8;
        this.D7 = null;
        this.HD = 0;
        this.IT = 1
    },
    build: function() {},
    wh_: function(a, c) {
        c = c || "w";
        if (ZC._f_(a) + "" == a + "") {
            a = ZC._a_(a);
            if (a > 1) return ZC._i_(a);
            else if (a <= 1) return c == "w" ? ZC._i_(this.A.F * a) : ZC._i_(this.A.D * a)
        } else {
            a += "";
            return a.indexOf("%") != -1 ? this.wh_(ZC._f_(a.replace("%", "")) / 100, c) :
                a.indexOf("px") != -1 ? this.wh_(ZC._f_(a.replace("px", "")), c) : this.wh_(ZC._f_(a), c)
        }
    },
    m_: function(a, c) {
        c = c || "all";
        if (c == "all") {
            var b = String(a).split(/\s+|;|,/);
            return b.length == 1 ? [this.m_(b[0], "tb"), this.m_(b[0], "lr"), this.m_(b[0], "tb"), this.m_(b[0], "lr")] : b.length == 2 ? [this.m_(b[0], "tb"), this.m_(b[1], "lr"), this.m_(b[0], "tb"), this.m_(b[1], "lr")] : b.length == 3 ? [this.m_(b[0], "tb"), this.m_(b[1], "lr"), this.m_(b[2], "tb"), this.m_(b[1], "lr")] : [this.m_(b[0], "tb"), this.m_(b[1], "lr"), this.m_(b[2], "tb"), this.m_(b[3],
                "lr")]
        } else {
            if (a + "" == "auto") return -2;
            if (ZC._f_(a) + "" == a + "") {
                a = ZC._a_(a);
                if (a >= 1) return ZC._i_(a);
                else if (a < 1) return c == "lr" ? ZC._i_(this.A.F * a) : ZC._i_(this.A.D * a)
            } else {
                a += "";
                return a.indexOf("%") != -1 ? this.m_(ZC._f_(a.replace("%", "")) / 100, c) : a.indexOf("px") != -1 ? this.m_(ZC._f_(a.replace("px", "")), c) : this.m_(ZC._f_(a), c)
            }
        }
    },
    copy: function(a) {
        this.b(a);
        for (var c = (new String("F,D,EB,F8,EI,EQ,GY,FA,D7,G7,FW,FV,HJ,YS")).split(","), b = 0, e = c.length; b < e; b++)
            if (typeof a[c[b]] != ZC._[33]) this[c[b]] = a[c[b]]
    },
    locate: function(a) {
        var c,
            b;
        a = a || 1;
        if (a != 2)
            if (this.NK) this.OT_a([
                ["x", "iX"],
                ["y", "iY"],
                [ZC._[21], "F"],
                [ZC._[22], "D"]
            ]);
            else if (!this.HD) {
            var e = a = 0,
                f = 0,
                g = 0;
            if ((c = this.o.margin) != null) {
                b = this.m_(c, "all");
                if (this.o[ZC._[59]] == null) a = b[0];
                if (this.o[ZC._[60]] == null) e = b[1];
                if (this.o[ZC._[61]] == null) f = b[2];
                if (this.o[ZC._[62]] == null) g = b[3]
            }
            if ((c = this.o[ZC._[59]]) != null) a = b = this.m_(c, "tb");
            if ((c = this.o[ZC._[60]]) != null) e = b = this.m_(c, "lr");
            if ((c = this.o[ZC._[61]]) != null) f = b = this.m_(c, "tb");
            if ((c = this.o[ZC._[62]]) != null) g = b = this.m_(c,
                "lr");
            b = [a, e, f, g];
            if (this.o.x != null) this.iX = this.xy_(this.o.x, "x");
            if (this.o.y != null) this.iY = this.xy_(this.o.y, "y");
            if ((c = this.o[ZC._[21]]) != null) {
                c = ZC._p_(c);
                this.F = c > 1 ? ZC._i_(c) : g == -2 && e == -2 ? ZC._i_(this.A.F * c) : g == -2 && e != -2 ? ZC._i_((this.A.F - e) * c) : g != -2 && e == -2 ? ZC._i_((this.A.F - g) * c) : ZC._i_((this.A.F - g - e) * c);
                if (this.iX != -1) {
                    this.CR = this.iX - this.A.iX;
                    this.CK = this.A.iX + this.A.F - this.CR - this.F
                } else if (g == -2 && e == -2) {
                    this.CR = this.CK = (this.A.F - this.F) / 2;
                    this.iX = this.A.iX + this.CR
                } else if (g == -2 && e != -2) {
                    this.CK =
                        e;
                    this.CR = this.A.F - this.CK - this.F;
                    this.iX = this.A.iX + this.CR
                } else {
                    this.CR = g;
                    this.iX = this.A.iX + this.CR;
                    this.CK = this instanceof ZC.DC ? e : this.A.F - this.CR - this.F
                }
            } else {
                if (this.iX != -1) {
                    this.CR = this.iX - this.A.iX;
                    this.CK = e == -2 ? 0 : e
                } else {
                    if (g == -2 && e == -2) this.CR = this.CK = 0;
                    else if (g == -2 && e != -2) {
                        this.CK = e;
                        this.CR = 0
                    } else if (g != -2 && e == -2) {
                        this.CR = g;
                        this.CK = this instanceof ZC.DC ? e : 0
                    } else {
                        this.CR = g;
                        this.CK = e
                    }
                    this.iX = this.A.iX + this.CR
                }
                this.F = this.A.F - this.CR - this.CK
            } if ((c = this.o[ZC._[22]]) != null) {
                e = ZC._p_(c);
                this.D =
                    e > 1 ? ZC._i_(e) : a == -2 && f == -2 ? ZC._i_(this.A.D * e) : a == -2 && f != -2 ? ZC._i_((this.A.D - f) * e) : a != -2 && f == -2 ? ZC._i_((this.A.D - a) * e) : ZC._i_((this.A.D - a - f) * e);
                if (this.iY != -1) {
                    this.CM = this.iY - this.A.iY;
                    this.CI = this.A.iY + this.A.D - this.CM - this.D
                } else if (a == -2 && f == -2) {
                    this.CM = this.CI = (this.A.D - this.D) / 2;
                    this.iY = this.A.iY + this.CM
                } else if (a == -2 && f != -2) {
                    this.CI = f;
                    this.CM = this.A.D - this.CI - this.D;
                    this.iY = this.A.iY + this.CM
                } else {
                    this.CM = a;
                    this.iY = this.A.iY + this.CM;
                    this.CI = this instanceof ZC.DC ? f : this.A.D - this.CM - this.D
                }
            } else {
                if (this.iY !=
                    -1) {
                    this.CM = this.iY - this.A.iY;
                    this.CI = f == -2 ? 0 : f
                } else {
                    if (a == -2 && a == -2) this.CM = this.CM = 0;
                    else if (a == -2 && f != -2) {
                        this.CI = f;
                        this.CM = 0
                    } else if (a == -2 && f != -2) {
                        this.CM = a;
                        this.CI = this instanceof ZC.DC ? f : 0
                    } else {
                        this.CM = a;
                        this.CI = f
                    }
                    this.iY = this.A.iY + this.CM
                }
                this.D = this.A.D - this.CM - this.CI
            } if ((c = this.o.position) != null) {
                if (this.A && typeof this.A.iX != ZC._[33] && typeof this.A.iY != ZC._[33] && typeof this.A.F != ZC._[33] && typeof this.A.D != ZC._[33]) {
                    var h = 0,
                        k = 0;
                    k = String(c).split(/\s+/);
                    switch (k[0]) {
                        case "left":
                            h = 0;
                            break;
                        case "right":
                            h = 1;
                            break;
                        case "center":
                            h = 0.5;
                            break;
                        default:
                            h = ZC.M7(k[0]);
                            if (h > 1) h /= this.A.F
                    }
                    switch (k[1]) {
                        case "top":
                            k = 0;
                            break;
                        case "bottom":
                            k = 1;
                            break;
                        case "middle":
                            k = 0.5;
                            break;
                        default:
                            k = ZC.M7(k[1]);
                            if (k > 1) k /= this.A.D
                    }
                }
                this.iX = this.A.iX + ZC._i_(h * this.A.F) + b[3];
                if (this.iX + this.F + b[1] > this.A.iX + this.A.F) this.iX = this.A.iX + ZC._i_(h * (this.A.F - this.F - b[1] - b[3])) + b[3];
                this.iY = this.A.iY + ZC._i_(k * this.A.D) + b[0];
                if (this.iY + this.D + b[0] > this.A.iY + this.A.D) this.iY = this.A.iY + ZC._i_(k * (this.A.D - this.D - b[0] - b[2])) +
                    b[0]
            }
            this.DF = [this.iX, this.iY, this.iX + this.F, this.iY + this.D]
        }
    },
    parse: function() {
        var a;
        this.b();
        this.OT_a([
            ["center-ref", "V2", "b"],
            ["callout", "GY", "b"],
            ["callout-position", "FA"],
            ["callout-hook", "D7"],
            ["callout-width", "G7", "i"],
            ["callout-height", "FW", "i"],
            ["callout-offset", "FV", "i"],
            ["callout-extension", "HJ", "i"],
            ["border-radius-top-left", "EB", "i"],
            ["border-radius-top-right", "F8", "i"],
            ["border-radius-bottom-right", "EI", "i"],
            ["border-radius-bottom-left", "EQ", "i"]
        ]);
        if ((a = this.o["border-radius"]) != null) {
            a =
                String(a).split(/\s+|;|,/);
            if (a.length == 2) {
                this.EB = this.F8 = ZC._i_(a[0]);
                this.EI = this.EQ = ZC._i_(a[1])
            } else if (a.length == 4) {
                this.EB = ZC._i_(a[0]);
                this.F8 = ZC._i_(a[1]);
                this.EI = ZC._i_(a[2]);
                this.EQ = ZC._i_(a[3])
            } else this.EB = this.F8 = this.EI = this.EQ = ZC._i_(a[0])
        }
    },
    paint: function() {
        if (this.V2) {
            this.iX -= this.F / 2;
            this.iY -= this.D / 2
        }
        if (!((this.BI == -1 || this.AU == 0) && this.X == -1 && this.A6 == -1 && this.BW == "" && this.EF == "" && this.ER == "")) {
            var a = this.I.A5;
            this.JE && this.C6 != null && this.XX();
            switch (a) {
                case "canvas":
                    this.Y2();
                    break;
                case "svg":
                    this.RM();
                    break;
                case "vml":
                    this.RL()
            }
        }
    },
    XX: function() {
        var a;
        if (this.DE.length == 0 && typeof this.S4 != ZC._[33]) a = this.S4;
        else {
            a = new ZC.FY(this.A);
            a.copy(this);
            a.Y = this.C6;
            a.JE = 0;
            a.X = a.A6 = a.LA;
            a.BW = "";
            a.AU = 1;
            a.BI = a.LA;
            a.AI = 0
        }
        a.A9 = a.MI * this.A9;
        a.Q = this.Q + "-sh";
        var c = (this.G4 - this.J5 / 2) * ZC.CT(this.L7) + this.J5,
            b = (this.G4 - this.J5 / 2) * ZC.CJ(this.L7) + this.J5;
        a.iX = this.iX + ZC._i_(c);
        a.iY = this.iY + ZC._i_(b);
        a.F = this.F;
        a.D = this.D;
        a.paint();
        if (this.DE.length == 0 && typeof this.S4 == ZC._[33]) this.S4 = a
    },
    KM: function(a) {
        var c = this.iX + this.F / 2 + this.P2,
            b = this.iY + this.D / 2 + this.P1;
        if (a == "radial") {
            a = ZC._i_((this.F + this.D) / 2);
            var e = ZC.CO(this.F, this.D);
            e = e < a / 4 ? (e + a) / 2 : e;
            return {
                cx: c,
                cy: b,
                r: ZC._a_(e)
            }
        } else if (a == "linear") {
            e = this.F >= this.D ? ZC._a_(ZC.CJ(this.IX)) > 0.5 ? this.D / 2 : this.F / 2 : ZC._a_(ZC.CT(this.IX)) > 0.5 ? this.F / 2 : this.D / 2;
            a = e * ZC.CT(this.IX);
            e = e * ZC.CJ(this.IX);
            return {
                x1: c - a,
                y1: b - e,
                x2: c + a,
                y2: b + e
            }
        }
    },
    NL: function() {
        var a = this.iX,
            c = this.iY;
        this.B = [];
        var b = this.AU / 2,
            e = 1;
        switch (this.I.A5) {
            case "vml":
                e = 2;
                if (this.AU %
                    2 == 1) {
                    b = ZC._i_((this.AU - 1) / 2);
                    ZC._i_((this.AU + 1) / 2)
                }
        }
        var f = a + b;
        a = a - b;
        var g = c + b;
        c = c - b;
        b = this.D7 != null && this.D7.length == 2;
        var h = ZC._i_(this.FV * (this.F - this.G7) / 100);
        if (this.EB + this.F8 + this.EI + this.EQ != 0) {
            var k, l = ZC.CO(this.F / 2, this.D / 2);
            if (this.EB > 0) {
                k = this.F / 2 >= this.EB && this.D / 2 >= this.EB ? this.EB : l;
                this.B.push([f + k, g])
            } else this.B.push([f, g]); if (this.GY && this.FA == "top") {
                this.B.push([f + this.F / 2 - this.G7 / 2 + h, g]);
                b ? this.B.push([this.D7[0], this.D7[1]]) : this.B.push([f + this.F / 2 + h, g - this.FW]);
                if (this.HJ > 0) {
                    k =
                        this.B[this.B.length - 1];
                    this.B.push([k[0], k[1] + this.HJ]);
                    this.B.push([k[0], k[1]])
                }
                this.B.push([f + this.F / 2 + this.G7 / 2 + h, g])
            }
            if (this.F8 > 0) {
                k = this.F / 2 >= this.F8 && this.D / 2 >= this.F8 ? this.F8 : l;
                this.B.push([a + this.F - k, g]);
                this.B.push([a + this.F, g, a + this.F, g + e * k])
            } else this.B.push([a + this.F, g]); if (this.GY && this.FA == "right") {
                this.B.push([a + this.F, g + this.D / 2 - this.FW / 2]);
                b ? this.B.push([this.D7[0], this.D7[1]]) : this.B.push([a + this.F + this.G7, g + this.D / 2]);
                this.B.push([a + this.F, g + this.D / 2 + this.FW / 2])
            }
            if (this.EI > 0) {
                k =
                    this.F / 2 >= this.EI && this.D / 2 >= this.EI ? this.EI : l;
                this.B.push([a + this.F, c + this.D - k]);
                this.B.push([a + this.F, c + this.D, a + this.F - e * k, c + this.D])
            } else this.B.push([a + this.F, c + this.D]); if (this.GY && this.FA == "bottom") {
                this.B.push([a + this.F / 2 + this.G7 / 2 + h, c + this.D]);
                b ? this.B.push([this.D7[0], this.D7[1]]) : this.B.push([a + this.F / 2 + h, c + this.D + this.FW]);
                if (this.HJ > 0) {
                    k = this.B[this.B.length - 1];
                    this.B.push([k[0], k[1] + this.HJ]);
                    this.B.push([k[0], k[1]])
                }
                this.B.push([a + this.F / 2 - this.G7 / 2 + h, c + this.D])
            }
            if (this.EQ > 0) {
                k = this.F /
                    2 >= this.EQ && this.D / 2 >= this.EQ ? this.EQ : l;
                this.B.push([f + k, c + this.D]);
                this.B.push([f, c + this.D, f, c + this.D - e * k])
            } else this.B.push([f, c + this.D]); if (this.GY && this.FA == "left") {
                this.B.push([f, c + this.D / 2 + this.FW / 2]);
                b ? this.B.push([this.D7[0], this.D7[1]]) : this.B.push([f - this.G7, c + this.D / 2]);
                this.B.push([f, c + this.D / 2 - this.FW / 2])
            }
            if (this.EB > 0) {
                k = this.F / 2 >= this.EB && this.D / 2 >= this.EB ? this.EB : l;
                this.B.push([f, g + k]);
                this.B.push([f, g, f + e * k, g]);
                this.B.push([f + k, g])
            } else this.B.push([f, g])
        } else {
            this.B.push([f, g]);
            if (this.GY &&
                this.FA == "top") {
                this.B.push([f + this.F / 2 - this.G7 / 2 + h, g]);
                b ? this.B.push([this.D7[0], this.D7[1]]) : this.B.push([f + this.F / 2 + h, g - this.FW]);
                if (this.HJ > 0) {
                    k = this.B[this.B.length - 1];
                    this.B.push([k[0], k[1] - this.HJ]);
                    this.B.push([k[0], k[1]])
                }
                this.B.push([f + this.F / 2 + this.G7 / 2 + h, g])
            }
            this.B.push([a + this.F, g]);
            if (this.GY && this.FA == "right") {
                this.B.push([a + this.F, g + this.D / 2 - this.FW / 2]);
                b ? this.B.push([this.D7[0], this.D7[1]]) : this.B.push([a + this.F + this.G7, g + this.D / 2]);
                this.B.push([a + this.F, g + this.D / 2 + this.FW / 2])
            }
            this.B.push([a +
                this.F, c + this.D
            ]);
            if (this.GY && this.FA == "bottom") {
                this.B.push([a + this.F / 2 + this.G7 / 2 + h, c + this.D]);
                b ? this.B.push([this.D7[0], this.D7[1]]) : this.B.push([a + this.F / 2 + h, c + this.D + this.FW]);
                if (this.HJ > 0) {
                    k = this.B[this.B.length - 1];
                    this.B.push([k[0], k[1] + this.HJ]);
                    this.B.push([k[0], k[1]])
                }
                this.B.push([a + this.F / 2 - this.G7 / 2 + h, c + this.D])
            }
            this.B.push([f, c + this.D]);
            if (this.GY && this.FA == "left") {
                this.B.push([f, c + this.D / 2 + this.FW / 2]);
                b ? this.B.push([this.D7[0], this.D7[1]]) : this.B.push([f - this.G7, c + this.D / 2]);
                this.B.push([f,
                    c + this.D / 2 - this.FW / 2
                ])
            }
            this.B.push([f, g]);
            this.B.push([f + 1, g])
        }
    },
    Y2: function() {
        var a = this.Y.getContext("2d");
        a.save();
        var c = this.iX,
            b = this.iY,
            e = this.R6(),
            f = e.bc,
            g = e.bgc1;
        e = e.bgc2;
        if (g != e || this.EF != "" && this.ER != "") {
            var h = this.KM(this.IV);
            if (this.IV == "radial") var k = a.createRadialGradient(h.cx, h.cy, 1, h.cx, h.cy, h.r);
            else if (this.IV == "linear") k = a.createLinearGradient(h.x1, h.y1, h.x2, h.y2);
            if (this.EF != "" && this.ER != "") this.PV(k);
            else {
                k.addColorStop(0, g);
                k.addColorStop(1, e)
            }
            a.fillStyle = k
        } else {
            if (this.BW !=
                "" && ZC.AH(["repeat", "true", true], this.I8) != -1)
                if (this.X == -1 && this.A6 == -1) g = ZC._[34];
            a.fillStyle = g
        }
        a.strokeStyle = f;
        a.lineWidth = this.AU;
        a.translate(this.C0, this.C4);
        if (this.A7 != 0) {
            a.translate(c + this.F / 2, b + this.D / 2);
            a.rotate(ZC.OJ(this.A7));
            a.translate(-(c + this.F / 2), -(b + this.D / 2))
        }
        a.beginPath();
        this.NL();
        c = this.EB + this.F8 + this.EI + this.EQ != 0;
        b = this.AI;
        this.AI = this.AU;
        f = this.FO;
        this.FO = "";
        this.GL();
        ZC.BQ.contour(a, this, this.B);
        this.AI = b;
        this.FO = f;
        this.GL();
        if (this.BW != "") {
            a.fill();
            a.save();
            a.clip();
            b =
                a.globalAlpha;
            a.globalAlpha = this.A9;
            f = this.K1();
            g = f.image;
            switch (this.I8) {
                default: a.translate(f.x, f.y);
                g = a.createPattern(g, "repeat");
                a.fillStyle = g;
                a.fill();
                a.translate(-f.x, -f.y);
                break;
                case "no-repeat":
                case "false":
                case false:
                    a.drawImage(g, f.x, f.y, this.H[ZC._[69]], this.H[ZC._[70]])
            }
            a.globalAlpha = b;
            a.restore()
        } else a.fill(); if (this.AU > 0) {
            f = this.AT;
            b = this.AI;
            this.AT = this.BI;
            this.AI = this.AU;
            this.GL();
            ZC.BQ.setup(a, this);
            this.LD = c ? "round" : "square";
            if (this.EC + this.FP > 0) this.LD = "butt";
            this.Q9 = c ? "round" :
                "miter";
            ZC.BQ.paint(a, this, this.B, true);
            this.AT = f;
            this.AI = b;
            this.GL()
        }
        a.closePath();
        a.restore()
    },
    RM: function() {
        var a = this.Y;
        this.H.fill = -1;
        if (this.BW != "") {
            var c = this.K1();
            this.RZ({
                info: c,
                x: c.x,
                y: c.y
            })
        }
        this.O0();
        this.NL();
        c = this.EB + this.F8 + this.EI + this.EQ != 0;
        this.H.cx = this.iX + this.F / 2;
        this.H.cy = this.iY + this.D / 2;
        var b = this.AT,
            e = this.AI;
        this.AT = this.BI;
        this.AI = this.AU;
        this.GL();
        ZC.BQ.setup(a, this);
        this.LD = c ? "round" : "square";
        if (this.EC + this.FP > 0) this.LD = "butt";
        this.Q9 = c ? "round" : "miter";
        ZC.BQ.paint(a,
            this, this.B, true);
        this.AT = b;
        this.AI = e;
        this.GL()
    },
    RL: function() {
        var a = this.Y,
            c = ZC.K.DJ("zcv:fill");
        if (this.BW != "") {
            var b = this.K1(),
                e = b.image;
            switch (this.I8) {
                default: c.type = "tile";
                c.src = this.BW;
                ZC.K.EG(c, {
                    position: b.cx + "," + b.cy,
                    opacity: this.A9,
                    "o:opacity2": this.A9
                });
                this.H.imgfill = [c];
                break;
                case "no-repeat":
                case "false":
                case false:
                    this.H.imgfill = [e, b.x, b.y]
            }
        }
        this.O1("0.5,0.5");
        c = ZC.K.DJ("zcv:stroke");
        c.weight = this.AU + "px";
        c.color = this.BI;
        c.opacity = this.A9;
        switch (this.FO) {
            case "solid":
                c.dashstyle = "solid";
                break;
            case "dotted":
                c.dashstyle = "dot";
                break;
            case "dashed":
                c.dashstyle = "dash"
        }
        this.H.stroke = c;
        this.NL();
        c = this.EB + this.F8 + this.EI + this.EQ != 0;
        this.H.cx = this.iX + this.F / 2;
        this.H.cy = this.iY + this.D / 2;
        b = this.AT;
        e = this.AI;
        this.AT = this.BI;
        this.AI = this.AU;
        this.GL();
        ZC.BQ.setup(a, this);
        this.LD = c ? "round" : "square";
        if (this.EC + this.FP > 0) this.LD = "butt";
        this.Q9 = c ? "round" : "miter";
        ZC.BQ.paint(a, this, this.B, true);
        this.AT = b;
        this.AI = e;
        this.GL()
    }
});
ZC.XQ = ZC.FY.B2({
    $i: function(a) {
        this.b(a);
        this.AL = this.KW = this.G = this.BE = null;
        this.SE = 0
    },
    parse: function() {
        var a;
        this.b();
        this.BE = this.DQ == "rect" ? new ZC.FY(this.A) : new ZC.D5(this.A);
        this.BE.append(this.o);
        this.BE.iX = this.iX;
        this.BE.iY = this.iY;
        this.BE.Q = this.Q;
        this.BE.parse();
        if ((a = this.o.label) != null) {
            this.G = new ZC.DC(this);
            this.G.append(a);
            this.G.parse()
        }
        if ((a = this.o.tooltip) != null) {
            this.AL = new ZC.DC(this);
            this.AL.append(a);
            this.AL.parse()
        }
        if ((a = this.o["static"]) != null) this.SE = ZC._b_(a);
        if ((a = this.o.connector) !=
            null) {
            this.KW = new ZC.D5(this);
            this.KW.append(a);
            this.KW.parse()
        }
    },
    paint: function() {
        this.BE.Y = this.BE.C6 = this.Y;
        this.BE.locate(2);
        this.BE.paint();
        if (this.G && this.G.AK) {
            this.G.Y = this.Y;
            this.G.GT = ZC.AJ(this.A.A.Q + "-text");
            this.G.Q = this.A.Q + "-shape-label-" + this.HS;
            this.G.F0 = this.A.Q + "-shape-label zc-shape-label";
            switch (this.DQ) {
                default: this.G.iX = this.iX - this.G.F / 2 + this.BE.C0;
                this.G.iY = this.iY - this.G.D / 2 + this.BE.C0;
                break;
                case "line":
                case "poly":
                case "rect":
                    this.G.iX = ZC._i_((this.BE.DF[0] + this.BE.DF[2]) /
                        2) - this.G.F / 2 + this.BE.C0;
                    this.G.iY = ZC._i_((this.BE.DF[1] + this.BE.DF[3]) / 2) - this.G.D / 2 + this.BE.C4
            }
            this.G.paint();
            this.G.D4();
            if (this.KW != null && this.KW.B.length > 0) {
                var a = this.KW.B,
                    c = this.KW.o.anchor || "";
                if (c == "") {
                    c += this.G.iX + this.G.C0 > a[0][0] ? "l" : "r";
                    c += this.G.iY + this.G.C4 > a[0][1] ? "t" : "b"
                }
                switch (c) {
                    case "lt":
                        a.push([this.G.iX + this.G.C0, this.G.iY + this.G.C4]);
                        break;
                    case "lb":
                        a.push([this.G.iX + this.G.C0, this.G.iY + this.G.D + this.G.C4]);
                        break;
                    case "rt":
                        a.push([this.G.iX + this.G.F + this.G.C0, this.G.iY + this.G.C4]);
                        break;
                    case "rb":
                        a.push([this.G.iX + this.G.F + this.G.C0, this.G.iY + this.G.D + this.G.C4]);
                        break;
                    case "l":
                        a.push([this.G.iX + this.G.C0 - 10, this.G.iY + this.G.D / 2 + this.G.C4]);
                        a.push([this.G.iX + this.G.C0, this.G.iY + this.G.D / 2 + this.G.C4]);
                        break;
                    case "r":
                        a.push([this.G.iX + this.G.F + this.G.C0 + 10, this.G.iY + this.G.D / 2 + this.G.C4]);
                        a.push([this.G.iX + this.G.F + this.G.C0, this.G.iY + this.G.D / 2 + this.G.C4]);
                        break;
                    case "t":
                        a.push([this.G.iX + this.G.F / 2 + this.G.C0, this.G.iY + this.G.C4 - 10]);
                        a.push([this.G.iX + this.G.F / 2 + this.G.C0, this.G.iY +
                            this.G.C4
                        ]);
                        break;
                    case "b":
                        a.push([this.G.iX + this.G.F / 2 + this.G.C0, this.G.iY + this.G.D + this.G.C4 + 10]);
                        a.push([this.G.iX + this.G.F / 2 + this.G.C0, this.G.iY + this.G.D + this.G.C4])
                }
                c = ZC.K.CN(ZC.AJ(this.A.Q + "-front-c"), this.A.I.A5);
                ZC.BQ.setup(c, this.KW);
                ZC.BQ.paint(c, this.KW, a)
            }
        }
    }
});
ZC.DC = ZC.FY.B2({
    $i: function(a) {
        this.b(a);
        this.GT = null;
        this.F0 = "";
        this.B0 = null;
        this.LX = "center";
        this.K4 = "middle";
        this.DS = zingchart.FONTSIZE;
        this.G1 = zingchart.FONTFAMILY;
        this.BO = "#000";
        this.JQ = this.LK = this.KA = 0;
        this.GE = this.IE = this.GW = this.IJ = 2;
        this.CZ = this.C9 = 0;
        this.P6 = -1;
        this.SE = 0;
        this.QY = zingchart.FASTWIDTH;
        this.N4 = [0.24, 0.6, 0.74, 1.12];
        this.HN = this.EE = null;
        this.Q7 = this.PH = 0;
        this.AL = null
    },
    copy: function(a) {
        this.b(a);
        for (var c = (new String("LX,K4,DS,G1,BO,KA,LK,JQ,IJ,GW,IE,GE,PH,B0,QY,N4")).split(","),
            b = 0, e = c.length; b < e; b++)
            if (typeof a[c[b]] != ZC._[33]) this[c[b]] = a[c[b]]
    },
    KC: function(a) {
        return a
    },
    cwidth: function(a) {
        if (this.QY) {
            var c = a.length;
            a = a.replace(/[W]/g, "");
            var b = c - a.length;
            c = a.length;
            a = a.replace(/[ABCDEFGHKNOPQRSTUVXYZMmw]/g, "");
            var e = c - a.length;
            c = a.length;
            a = a.replace(/[ijltI!\'\":;.,\s]/g, "");
            a = this.N4[0] * this.DS * (c - a.length) + this.N4[1] * this.DS * a.length + this.N4[2] * this.DS * e + this.N4[3] * this.DS * b
        } else a = ZC.K.A04(this.I.Q, a, this.G1, this.DS, this.KA);
        return a
    },
    parse: function() {
        var a;
        this.F =
            this.D = this.CZ = this.C9 = 0;
        this.b();
        this.OT("text", "B0");
        if (this.B0 != null) {
            this.B0 = this.KC(this.B0);
            this.B0 = (new String(this.B0)).replace(/\n/g, "<br/>");
            if (this.I.A5 == "svg") this.B0 = (new String(this.B0)).replace(/&nbsp;/g, " ")
        }
        this.OT_a([
            ["url", "EE"],
            ["target", "HN"],
            ["fast-width", "QY", "b"],
            ["width-ratio", "N4"],
            ["static", "SE", "b"],
            ["bold", "KA", "b"],
            ["italic", "LK", "b"],
            ["underline", "JQ", "b"],
            ["text-align", "LX"],
            ["align", "LX"],
            ["vertical-align", "K4"],
            ["text-alpha", "P6", "i"],
            ["font-size", "DS", "i"],
            ["font-family",
                "G1"
            ],
            ["font-angle", "A7", "i"],
            ["color", "BO", "c"],
            ["font-color", "BO", "c"]
        ]);
        if (this.B0 && this.B0.indexOf("<") != -1) this.QY = 0;
        if ((a = this.o.tooltip) != null) {
            this.AL = new ZC.DC(this);
            this.AL.append(a);
            this.AL.parse()
        }
        if ((a = this.o["font-weight"]) != null) this.KA = a == "bold";
        if ((a = this.o["text-decoration"]) != null) this.JQ = a == "underline";
        if ((a = this.o["font-style"]) != null) this.LK = a == "italic" || a == "oblique";
        if ((a = this.o.padding) != null) {
            a = String(a).split(/\s+|;|,/);
            a = a.length == 1 ? [ZC._i_(a[0]), ZC._i_(a[0]), ZC._i_(a[0]),
                ZC._i_(a[0])
            ] : a.length == 2 ? [ZC._i_(a[0]), ZC._i_(a[1]), ZC._i_(a[0]), ZC._i_(a[1])] : a.length == 3 ? [ZC._i_(a[0]), ZC._i_(a[1]), ZC._i_(a[2]), ZC._i_(a[0])] : [ZC._i_(a[0]), ZC._i_(a[1]), ZC._i_(a[2]), ZC._i_(a[3])];
            this.IJ = a[0];
            this.GW = a[1];
            this.IE = a[2];
            this.GE = a[3]
        }
        this.OT_a([
            ["padding-top", "IJ", "i"],
            ["padding-right", "GW", "i"],
            ["padding-bottom", "IE", "i"],
            ["padding-left", "GE", "i"],
            ["fit-to-text", "PH", "b"]
        ]);
        if (this.B0 != null) {
            a = (new String(this.B0)).split(/<br>|<br\/>|<br \/>|\n/);
            this.C9 = ZC._i_(a.length * 1.25 * this.DS) +
                this.IJ + this.IE;
            if (this.o[ZC._[21]] == null)
                for (var c = 0, b = a.length; c < b; c++) this.CZ = ZC.BN(this.CZ, this.cwidth(a[c]) + this.GE + this.GW)
        } else {
            this.B0 = "";
            this.CZ = ZC._i_(this.DS * 1.25);
            this.C9 = ZC._i_(this.DS * 1.25)
        } if (this.o[ZC._[21]] == null || isNaN(this.F)) this.F = this.CZ;
        if (this.o[ZC._[22]] == null || isNaN(this.D)) this.D = this.C9
    },
    paint: function() {
        var a = this.I.A5,
            c = ZC.K.CN(this.Y, a);
        this.Q7 || this.b();
        var b = this.A7 % 360 == 0 ? "0" : "";
        if (this.Q7 || zingchart.CANVASTEXT && a == "canvas") b = "";
        if (ZC.vml && a == "svg" && this.F0 == "") this.F0 =
            this.Q + "-class";
        if (!this.Q7 && ZC.AJ(this.Q) != null) a = "_";
        var e = (new String(this.B0)).split(/<br>|<br\/>|<br \/>|\n/);
        switch (a + b) {
            case "canvas0":
            case "vml0":
                a = 0;
                switch (this.K4) {
                    case "middle":
                        a += (this.D - this.C9) / 2;
                        break;
                    case "bottom":
                        a += this.D - this.C9
                }
                e = ZC.K.I2({
                    id: this.Q,
                    cls: this.F0,
                    p: this.GT == null ? this.Y.parentNode : this.GT,
                    tl: this.iY + this.C4 + "/" + (this.iX + this.C0),
                    wh: this.F + "/" + this.D,
                    position: "absolute",
                    padding: 0,
                    margin: 0,
                    overflow: "hidden",
                    textAlign: this.LX
                });
                ZC.K.I2({
                    id: this.Q + "-t",
                    cls: this.F0 != "" ?
                        this.F0 + "-t" : "",
                    p: e,
                    width: this.F - this.GE - this.GW,
                    height: this.C9 - this.IJ - this.IE,
                    tl: a + "/0",
                    html: this.B0 + "",
                    position: "absolute",
                    whiteSpace: "nowrap",
                    opacity: this.P6 != -1 ? this.P6 : this.A9,
                    color: this.BO,
                    fontWeight: this.KA ? "bold" : "normal",
                    fontStyle: this.LK ? "oblique" : "normal",
                    textDecoration: this.JQ ? "underline" : "none",
                    fontSize: this.DS,
                    fontFamily: this.G1,
                    marginTop: this.IJ,
                    marginRight: this.GW,
                    marginBottom: this.IE,
                    marginLeft: this.GE,
                    verticalAlign: this.K4,
                    textAlign: this.LX,
                    lineHeight: "125%",
                    padding: 0
                });
                break;
            case "canvas":
                var f =
                    0;
                if (ZC.A3.browser.opera && this.A7 % 90 == 0 && this.A7 != 0) {
                    this.A7 += 0.5;
                    f = 1
                }
                c = this.Y.getContext("2d");
                b = 0;
                for (var g = e.length; b < g; b++)
                    if (ZC.GS(e[b]) != "") {
                        var h = this.cwidth(e[b]) + this.GE + this.GW;
                        e[b] = e[b].replace(/<.+?>/gi, "").replace(/<\/.+?>/gi, "");
                        var k = 0;
                        a = 0;
                        switch (this.LX) {
                            case "center":
                                k += (this.F - h) / 2;
                                break;
                            case "right":
                                k += this.F - h
                        }
                        switch (this.K4) {
                            case "middle":
                                a += (this.D - this.C9) / 2;
                                break;
                            case "bottom":
                                a += this.D - this.C9
                        }
                        c.save();
                        c.globalAlpha = this.A9;
                        c.font = (this.LK ? "italic" : "normal") + " normal " + (this.KA ?
                            "bold" : "normal") + " " + this.DS + "px " + this.G1;
                        c.fillStyle = this.BO;
                        c.textAlign = "left";
                        c.textBaseline = "alphabetic";
                        c.translate(this.iX + this.C0, this.iY + this.C4);
                        c.translate(this.F / 2, this.D / 2);
                        c.rotate(ZC.OJ(this.A7));
                        c.translate(-this.F / 2, -this.D / 2);
                        c.translate(this.GE, this.IJ + this.DS);
                        c.translate(k, a);
                        c.fillText(e[b], 0, b * 1.25 * this.DS);
                        c.restore()
                    }
                if (f) this.A7 -= 0.5;
                break;
            case "vml":
                a = 0;
                switch (this.K4) {
                    case "top":
                        a -= (this.D - this.C9) / 2;
                        break;
                    case "bottom":
                        a += (this.D - this.C9) / 2
                }
                b = 4 + 6 * ZC.CJ(this.A7);
                e = ZC.K.DJ("zcv:line");
                k = this.iX + this.C0 + this.F / 2;
                f = this.iY + this.C4 + this.D / 2;
                var l = ZC.CT(this.A7) * (this.F - this.GE - this.GW - b) / 2,
                    m = ZC.CJ(this.A7) * (this.F - this.GE - this.GW - b) / 2;
                b = ZC._i_(k - l - ZC.CT(90 - this.A7) * a);
                g = ZC._i_(f - m + ZC.CJ(90 - this.A7) * a);
                k = ZC._i_(k + l - ZC.CT(90 - this.A7) * a);
                a = ZC._i_(f + m + ZC.CJ(90 - this.A7) * a);
                if (b == k) b += 1;
                if (g == a) g += 1;
                f = this.BO;
                if (this.A7 != 0) f = ZC.BV._lighten_(f, (1 - this.A9) * 99);
                ZC.K.EG(e, {
                    id: this.Q + "-line",
                    from: b + "px," + g + "px",
                    to: k + "px," + a + "px",
                    fillcolor: f
                });
                e.filled = 1;
                e.stroked = 0;
                a = ZC.K.DJ("zcv:path");
                a.setAttribute("textpathok",
                    true);
                e.appendChild(a);
                a = ZC.K.DJ("zcv:textpath");
                b = (new String(this.B0)).replace(/<br>|<br\/>|<br \/>/gi, "\n").replace(/<.+?>/gi, "").replace(/<\/.+?>/gi, "");
                ZC.K.EG(a, {
                    on: true,
                    string: b
                });
                ZC.K.M2(a, {
                    color: f,
                    fontWeight: this.KA ? "bold" : "normal",
                    fontStyle: this.LK ? "oblique" : "normal",
                    textDecoration: this.JQ ? "underline" : "none",
                    fontSize: this.DS + "px",
                    fontFamily: this.G1,
                    "v-text-align": this.LX
                });
                e.appendChild(a);
                c.appendChild(e);
                break;
            case "svg":
            case "svg0":
                c = this.iX + this.GE + this.C0;
                l = this.iY + this.IJ + this.C4;
                m = ZC.K.DJ("text", ZC._[38]);
                ZC.K.EG(m, {
                    x: c,
                    y: l,
                    id: this.Q,
                    "class": this.F0,
                    opacity: this.P6 != -1 ? this.P6 : this.A9
                });
                this.A7 % 360 != 0 && m.setAttribute("transform", "rotate(" + this.A7 + " " + (c + (this.F - this.GE - this.GW) / 2) + " " + (l + (this.D - this.IJ - this.IE) / 2) + ")");
                (this.GT == null ? this.Y.parentNode : this.GT).appendChild(m);
                b = 0;
                for (g = e.length; b < g; b++) {
                    h = this.cwidth(e[b]) + this.GW + this.GE;
                    f = e[b];
                    var o = f.indexOf("<") == -1 ? f : f.replace(/<.+?>/gi, "").replace(/<\/.+?>/gi, "");
                    k = 0;
                    a = this.DS;
                    switch (this.LX) {
                        case "center":
                            k = (this.F -
                                h) / 2;
                            break;
                        case "right":
                            k = this.F - h
                    }
                    switch (this.K4) {
                        case "middle":
                            a += (this.D - this.C9) / 2;
                            break;
                        case "bottom":
                            a += this.D - this.C9
                    }
                    if (typeof this.H["html-mode"] != ZC._[33] && this.H["html-mode"]) {
                        ZC.K.F6(this.Q + "-float");
                        a = ZC.K.DJ("div");
                        ZC.K.M2(a, {
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: this.F - this.GE - this.GW,
                            height: this.D - this.IJ - this.IE
                        });
                        a.id = this.Q + "-float";
                        a.className = "zc-style";
                        a.innerHTML = f;
                        document.body.appendChild(a)
                    } else {
                        h = 0;
                        if (f != o) {
                            for (; o = /<(.+?)>(.*?)<\/(.+?)>/.exec(f);) {
                                var n = "",
                                    p = "";
                                if (WT = /(.+?)style=(.+?)(\'|")(.*?)/.exec(o[1])) p =
                                    WT[2].replace(/\'|"/g, "");
                                switch (o[3]) {
                                    case "b":
                                    case "strong":
                                        n = "font-weight:bold";
                                        break;
                                    case "i":
                                    case "em":
                                        n = "font-style:italic";
                                        break;
                                    case "u":
                                        n = "text-decoration:underline"
                                }
                                f = f.replace(o[0], '[[span style="' + (n == "" ? "" : n + ";") + p + '"]]' + o[2] + "[[/span]]")
                            }
                            f = f.replace(/\[\[/g, "<").replace(/\]\]/g, ">").replace(/<span/g, "[[*]]<span").replace(/<\/span>/g, "</span>[[*]]");
                            n = 0;
                            o = f.split("[[*]]");
                            p = 0;
                            for (var s = o.length; p < s; p++)
                                if (o[p] != "") {
                                    f = this.BO;
                                    var t = this.KA,
                                        r = this.LK,
                                        u = this.JQ,
                                        y = this.DS,
                                        w = this.G1,
                                        v = o[p];
                                    if (TC = /<span style=(.+?)>(.+?)<\/(.+?)>/.exec(o[p])) {
                                        v = TC[2];
                                        for (var x = TC[1].replace(/\'|"/g, "").split(/;|:/), z = 0, C = x.length; z < C - 1; z += 2) switch (ZC.GS(x[z])) {
                                            case "font-size":
                                                y = ZC._i_(ZC.GS(x[z + 1]));
                                                break;
                                            case "font-family":
                                                w = ZC.GS(x[z + 1]);
                                                break;
                                            case "font-weight":
                                                if (ZC.AH(["bold", "bolder"], ZC.GS(x[z + 1])) != -1) t = 1;
                                                break;
                                            case "font-style":
                                                if (ZC.AH(["italic", "oblique"], ZC.GS(x[z + 1])) != -1) r = 1;
                                            case "text-decoration":
                                                if ("underline" == ZC.GS(x[z + 1])) u = 1;
                                                break;
                                            case "color":
                                                f = ZC.BV.LF(ZC.GS(x[z + 1]))
                                        }
                                    }
                                    x = ZC.K.DJ("tspan",
                                        ZC._[38]);
                                    if (h == 0) {
                                        ZC.K.EG(x, {
                                            x: c + k,
                                            y: l + a
                                        });
                                        b > 0 && ZC.K.EG(x, {
                                            dy: b * 1.25 + "em"
                                        })
                                    } else ZC.K.EG(x, {
                                        dx: n || t || u ? 2 : 0
                                    });
                                    ZC.K.EG(x, {
                                        color: f,
                                        fill: f
                                    });
                                    ZC.K.M2(x, {
                                        fontWeight: t ? "bold" : "normal",
                                        fontStyle: r ? "oblique" : "normal",
                                        textDecoration: u ? "underline" : "none",
                                        fontSize: y + "px",
                                        fontFamily: w
                                    });
                                    f = document.createElement("span");
                                    f.innerHTML = v;
                                    v = f.innerText || f.textContent;
                                    x.textContent = v;
                                    m.appendChild(x);
                                    n = r;
                                    h++
                                }
                        } else {
                            x = ZC.K.DJ("tspan", ZC._[38]);
                            ZC.K.EG(x, {
                                x: c + k,
                                y: l + a,
                                color: this.BO,
                                fill: this.BO
                            });
                            b > 0 && ZC.K.EG(x, {
                                dy: b * 1.25 +
                                    "em"
                            });
                            ZC.K.M2(x, {
                                fontWeight: this.KA ? "bold" : "normal",
                                fontStyle: this.LK ? "oblique" : "normal",
                                textDecoration: this.JQ ? "underline" : "none",
                                fontSize: this.DS + "px",
                                fontFamily: this.G1
                            });
                            x.textContent = o;
                            m.appendChild(x)
                        }
                    }
                }
        }
    },
    D4: function(a) {
        a || (a = ZC.AJ(this.I.Q + ZC._[17]));
        if (!(!ZC.canvas || this.I.A5 != "canvas"))
            if (zingchart.CANVASTEXT != 1)
                if (this.A7 % 360 == 0) {
                    var c = this.B0;
                    this.B0 = this.B0.replace(/<br>|<br(\s*)\/>/gi, "\n");
                    var b = document.createElement("span");
                    b.innerHTML = this.B0;
                    this.B0 = b.innerText || b.textContent;
                    this.B0 = this.B0.replace("\n", "<br/>");
                    this.Y = a;
                    this.Q7 = 1;
                    this.iY--;
                    a = this.I.A5;
                    this.I.A5 = "canvas";
                    this.paint();
                    this.iY++;
                    this.Q7 = 0;
                    this.B0 = c;
                    this.I.A5 = a
                }
    }
});
ZC.LE = ZC.FY.B2({
    $i: function(a) {
        this.b(a);
        this.SJ = 0;
        this.VQ = "en_us";
        this.R4 = null;
        this.II = "";
        this.MF = 0;
        this.L1 = {};
        this.A17 = {};
        this.IO = this.K5 = "";
        this.L6 = {};
        this.ID = null;
        this.B1 = [];
        this.NM = "";
        this.BY = this.FU = this.AL = null;
        this.AQ = new ZC.YI;
        this.JV = "";
        this.HG = null;
        this.IA = [null, null, null, null];
        this.TS = 0;
        this.K6 = "x";
        this.IP = this.SS = this.XF = this.OU = this.KY = 0;
        this.XT = {};
        this.IB = null;
        this.LC = {};
        this.KL = this.HA = 0;
        this.A0O = null;
        this.ML = [];
        this.R = {};
        this.CY = this.JD = this.MG = null;
        this.JI = [];
        this.RW = this.NW = 0;
        this.TB =
            1;
        this.HM = null;
        this.KQ = "";
        this.YK = "F*nStrlng4Cu$tOmLlc9nc9!";
        this.JW = "";
        this.OY = {};
        this.SY = 0;
        this.A5 = "";
        this.H4 = null;
        this.S8 = 0;
        this.KB = ["", ""];
        this.I1 = 0;
        this.H3 = [];
        this.XS = this.W5 = this.VY = 0;
        this.UQ = this.L8 = 1
    },
    usc: function() {
        return ZC.AH(this.H3, ZC._[46]) != -1
    },
    mc: function(a) {
        a = a || "";
        return ZC.AJ(this.Q + "-main-c" + (a == "" ? a : "-" + a))
    },
    hideCM: function() {
        var a;
        if (a = ZC.AJ(this.Q + "-menu")) a.style.display = "none";
        this.XS = 0
    },
    S5: function() {
        for (var a = this.IA.length, c = 0; c < a; c++)
            if (this.IA[c] != null) {
                switch (this.A5) {
                    case "svg":
                        ZC.BQ.RM(this.IA[c].ctx,
                            this.IA[c].style, this.IA[c].path.join(" "), this.IA[c].filled);
                        break;
                    case "vml":
                        ZC.BQ.RL(this.IA[c].ctx, this.IA[c].style, this.IA[c].path.join(" "), this.IA[c].filled)
                }
                this.IA[c] = null
            }
    },
    A07: function() {
        function a(k) {
            if (ZC.NOABOUT && ZC.NOABOUT instanceof Array) {
                k = ZC.Q1.md5(ZC.XZ(ZC.R3(k)));
                if (ZC.AH(ZC.NOABOUT, k) != -1) c.XF = 1
            }
        }
        var c = this,
            b = document.location.protocol == "file:" ? ZC.HOSTNAME || "" : document.location.hostname,
            e = [b],
            f = b.split(".");
        f[0] == "www" ? e.push(b.replace("www.", "")) : e.push("www." + b);
        for (b = 0; b <=
            f.length - 2; b++) {
            for (var g = "*", h = b; h < f.length; h++) g += "." + f[h];
            e.push(g)
        }
        if (ZC.AH(e, "localhost") != -1 || ZC.AH(e, "127.0.0.1") != -1) {
            c.OU = 1;
            c.SS = 1;
            a("localhost")
        } else {
            for (b = 0; b < e.length; b++) {
                f = ZC.Q1.md5(ZC.XZ(ZC.R3(e[b])));
                if (ZC.LICENSE instanceof Array && ZC.AH(ZC.LICENSE, f) != -1) {
                    c.OU = 1;
                    a(f)
                }
            }
            if (ZC.BUILDCODE instanceof Array && ZC.BUILDCODE.length == 2) {
                e = ZC.A0R(c.YK);
                e = e.replace("O", "0");
                c.KQ = ZC.A03(ZC.BUILDCODE[0], e);
                if (c.KQ == ZC.BUILDCODE[1]) {
                    c.OU = 1;
                    c.SS = 1;
                    a(ZC.BUILDCODE[0])
                }
            }
        }
    },
    WZ: function() {
        var a = this;
        if (a.HG !=
            null) {
            ZC.QB(a.HG);
            a.load()
        } else if (ZC.cache["defaults-" + a.JV] == null) ZC.A3.ajax({
            type: "GET",
            url: a.JV,
            dataType: "text",
            beforeSend: function(e) {
                a.L1.defaults || e.setRequestHeader(ZC._[47], ZC._[48])
            },
            data: zingchart.ZCOUTPUT ? "zcoutput=" + a.A5 : "",
            error: function(e, f, g, h) {
                a.IC({
                    name: ZC._[63],
                    message: "Resource not found (" + h + ")"
                }, ZC._[64]);
                return false
            },
            success: function(e) {
                try {
                    var f = JSON.parse(e);
                    ZC.cache["defaults-" + a.JV] = e
                } catch (g) {
                    a.IC(g, "JSON parser");
                    return false
                }
                a.HG = f;
                ZC.QB(a.HG);
                a.load()
            }
        });
        else {
            try {
                var c =
                    JSON.parse(ZC.cache["defaults-" + a.JV])
            } catch (b) {
                a.IC(b, "JSON parser");
                return false
            }
            a.HG = c;
            ZC.QB(a.HG);
            a.load()
        }
    },
    load: function(a, c) {
        var b = this;
        b.JW = "load";
        c = c || b.K5;
        if (c != "")
            if (ZC.cache["data-" + c] == null) ZC.A3.ajax({
                type: "GET",
                url: c,
                dataType: "text",
                beforeSend: function(e) {
                    b.L1.data || e.setRequestHeader(ZC._[47], ZC._[48])
                },
                data: zingchart.ZCOUTPUT ? "zcoutput=" + b.A5 : "",
                error: function(e, f, g, h) {
                    b.IC({
                        name: ZC._[63],
                        message: "Resource not found (" + h + ")"
                    }, ZC._[64]);
                    return false
                },
                success: function(e) {
                    b.data_(e,
                        function(f) {
                            b.load_(a, f)
                        })
                }
            });
            else {
                b.data_(ZC.cache["data-" + c], function(e) {
                    b.load_(a, e)
                });
                ZC.cache["data-" + c] = null
            } else if (b.IO != "") b.data_(b.IO, function(e) {
            b.load_(a, e)
        });
        else b.L6 != null && b.data_(b.L6, function(e) {
            b.load_(a, e)
        })
    },
    data_: function(a, c) {
        var b = 0,
            e = 0;
        try {
            if (zingchart.dataload) zingchart.dataload(this.G8(), a, c);
            else b = 1
        } catch (f) {
            b = 1
        }
        try {
            var g;
            if (g = this.OY.dataload) g(this.G8(), a, c);
            else e = 1
        } catch (h) {
            e = 1
        }
        b && e && c(a)
    },
    TL: function(a) {
        if (!a) a = this.o;
        var c = [];
        if (a.graphset)
            for (var b = 0, e = a.graphset.length; b <
                e; b++) {
                var f = a.graphset[b].type || "null";
                if (ZC.AH(ZC.CHARTS, f) == -1) {
                    if (f.substring(f.length - 2) == "3d") f = f.substring(0, f.length - 2);
                    for (var g in ZC.EQUIV)
                        if (ZC.EQUIV.hasOwnProperty(g))
                            if (ZC.AH(ZC.EQUIV[g], f) != -1) f = g;
                    zingchart.loadModules(f);
                    c.push(f)
                }
            }
        return c
    },
    scanModules: function() {},
    load_: function(a, c) {
        var b = this,
            e;
        if (typeof c == "string") {
            if (c.indexOf('"graphset"') == -1) c = '{"graphset":[' + c + "]}";
            try {
                var f = JSON.parse(c)
            } catch (g) {
                try {
                    f = eval("(" + c + ")")
                } catch (h) {
                    b.IC(h, "JSON parser");
                    return false
                }
            }
        } else {
            f =
                c;
            if (f[ZC._[18]] == null) f = {
                graphset: [f]
            }
        }
        b.H.json = ZC.GS(JSON.stringify(f));
        zingchart.RG(b, b.TL(f), function() {
            if (zingchart.dataparse != null) f = zingchart.dataparse(b.G8(), f);
            var k;
            if (k = b.OY.dataparse) f = k(b.G8(), f);
            zingchart.RG(b, b.TL(f), function() {
                if (a == null) {
                    b.lookupShapes(f);
                    b.o = f;
                    if (b.SJ) {
                        b.parse();
                        b.paint()
                    } else b.VW(function() {
                        b.parse();
                        b.paint()
                    })
                } else {
                    var l = b.JY(a);
                    if (l != null && (e = f[ZC._[18]]) != null) {
                        b.o[ZC._[18]][l.J] = e.length > 1 ? e[l.J] : e[0];
                        b.VW(function() {
                            b.parse(a);
                            b.B1[l.J].paint()
                        })
                    }
                }
            })
        })
    },
    lookupShapes: function(a) {
        for (var c = 0, b = a[ZC._[18]].length; c < b; c++)
            if ((E = a[ZC._[18]][c].shapes) != null)
                for (var e = 0, f = E.length; e < f; e++)
                    if (E[e].type != null && E[e].type.indexOf("zingchart.") == 0) try {
                        var g = ZC.BV.S6(E[e].type),
                            h = {
                                id: E[e].id || "",
                                arguments: g[1]
                            },
                            k = eval(g[0]).call(this, h),
                            l;
                        for (l in k)
                            if (k.hasOwnProperty(l)) {
                                ZC.QB(k[l]);
                                l != "_ALERT_" && ZC.ET(E[e].style, k[l]);
                                E[e].objects != null && ZC.ET(E[e].objects[l], k[l]);
                                k[l].tooltip != null && E[e].tooltip != null && ZC.ET(E[e].tooltip, k[l].tooltip);
                                k[l].label != null &&
                                    E[e].label != null && ZC.ET(E[e].label, k[l].label);
                                E.splice(1, 0, k[l])
                            }
                    } catch (m) {}
    },
    Y5: function(a, c) {
        switch (a) {
            case "line":
                return new ZC.UC(this);
            case "area":
                return new ZC.UH(this);
            case "bar":
            case "vbar":
                return new ZC.S1(this);
            case "hbar":
                return new ZC.S7(this);
            case "mixed":
            case "mixed3d":
                for (var b = 0, e = this.o[ZC._[18]][c][ZC._[13]], f = 0, g = e.length; f < g; f++)
                    if (e[f].type && e[f].type.indexOf("3d") != -1) b = 1;
                return b ? new ZC.VN(this) : new ZC.TO(this);
            case "scatter":
                return new ZC.VL(this);
            case "bubble":
                return new ZC.X3(this);
            case "pie":
                return new ZC.V8(this);
            case "nestedpie":
                return new ZC.UW(this);
            case "radar":
                return new ZC.XO(this);
            case "venn":
                return new ZC.Y7(this);
            case "bullet":
            case "vbullet":
                return new ZC.VS(this);
            case "hbullet":
                return new ZC.W8(this);
            case "funnel":
            case "vfunnel":
                return new ZC.W2(this);
            case "hfunnel":
                return new ZC.W0(this);
            case "piano":
                return new ZC.XE(this);
            case "stock":
                return new ZC.XM(this);
            case "range":
                return new ZC.XU(this);
            case "gauge":
                return new ZC.Y1(this);
            case "line3d":
                return new ZC.WR(this);
            case "area3d":
                return new ZC.WO(this);
            case "pie3d":
                return new ZC.X8(this);
            case "bar3d":
            case "vbar3d":
                return new ZC.WU(this);
            case "hbar3d":
                return new ZC.WX(this);
            default:
                return new ZC.Y4(this)
        }
    },
    JY: function(a) {
        for (var c = 0, b = this.B1.length; c < b; c++)
            if (this.B1[c].Q == this.Q + "-graph-" + a || this.B1[c].Q == this.Q + "-graph-id" + a || this.B1[c].Q == a) return this.B1[c];
        return null
    },
    XN: function(a, c) {
        var b = ZC.A3("#" + this.Q + (this.A5 == "svg" ? "-top" : "-main"));
        a -= b.offset().left;
        c -= b.offset().top;
        b = null;
        for (var e = 0, f = this.B1.length; e <
            f; e++)
            if (ZC.DK(a, this.B1[e].iX, this.B1[e].iX + this.B1[e].F) && ZC.DK(c, this.B1[e].iY, this.B1[e].iY + this.B1[e].D)) b = this.B1[e];
        return b
    },
    parse: function(a) {
        var c, b = this.G8();
        if (a != null) b[ZC._[3]] = a;
        ZC.BV.F1("dataready", this, b);
        this.JW = "parse";
        this.KB[1] = this.KB[0];
        this.KB[0] = "";
        this.KB[0] += this.F + ":" + this.D + ":";
        if ((c = this.o[ZC._[18]]) != null) {
            this.KB[0] += c.length + ":";
            for (b = 0; b < c.length; b++) {
                this.KB[0] += (c[b].type || "") + ":";
                this.KB[0] += (c[b].x || "") + ":" + (c[b].y || "") + ":" + (c[b][ZC._[21]] || "") + ":" + (c[b][ZC._[22]] ||
                    "") + ":";
                if (c[b][ZC._[13]] != null) this.KB[0] += c[b][ZC._[13]].length + ":"
            }
        }
        ZC.AJ(this.Q + "-main-c") && this.clear(a);
        if (typeof ZC.V1 != ZC._[33]) this.FU = new ZC.V1(this);
        if (a == null) {
            this.OT_a([
                ["theme", "NM"]
            ]);
            if (this.NM == "") this.NM = "zingchart";
            var e = String(this.NM).split(/\s+|;|,/);
            b = 0;
            for (var f = e.length; b < f; b++) this.AQ.V7(e[b]);
            this.AQ.WZ(this.HG);
            ZC.mobile && this.AQ.V7("mobile");
            ZC.orientation != "" && this.AQ.V7(ZC.orientation);
            b = this.o.gui ? true : false;
            this.AQ.load(this.o, "loader", false, true);
            this.OT_a([
                ["locale",
                    "VQ"
                ],
                ["set-locale", "VQ"],
                ["layout", "K6"],
                ["h-space", "VY", "i"],
                ["v-space", "W5", "i"],
                ["flat", "KY", "b"],
                ["show-progress", "SY", "b"],
                ["gui", "CY"],
                ["globals", "R4"]
            ]);
            ZC.ET(this.AQ.AQ.gui, this.CY, false, true, true);
            b || delete this.o.gui;
            if (ZC.AH(this.H3, "skip-auto") == -1)
                if (this.H.json.indexOf('"rules"') == -1 && this.H.json.indexOf('"styles"') == -1) {
                    if (this.H.json.indexOf('"animate"') == -1 && this.H.json.indexOf('"animation"') == -1 && this.H.json.indexOf('"override"') == -1 && this.H.json.indexOf('"aspect":"spline"') == -1) {
                        this.H3.push(ZC._[44]);
                        this.H3.push(ZC._[45])
                    }
                    this.L8 = 0
                }
            if ((c = this.o.style) != null)
                for (var g in c)
                    if (g != "url") this.R[g] = c[g];
            this.b();
            if ((c = zingchart.i18n[this.VQ]) != null) ZC.EV = c;
            this.B1 = []
        }
        g = this.JY(a);
        if ((e = this.o[ZC._[18]]) != null) {
            var h, k = 0;
            b = 0;
            for (f = e.length; b < f; b++) {
                h = 0;
                if ((c = e[b].page) != null) h = ZC._i_(c);
                k += this.I1 == h ? 1 : 0
            }
            b = ZC.AP.TR(this.K6, k);
            k = b[0];
            var l = b[1],
                m = 0,
                o = 0,
                n = 0;
            b = 0;
            for (f = e.length; b < f; b++) {
                h = 0;
                if (g == null)
                    if ((c = e[b].page) != null) h = ZC._i_(c);
                if ((g == null || n == g.J) && this.I1 == h) {
                    this.B1[n] = this.Y5(e[b].type || "null",
                        b);
                    this.AQ.load(this.B1[n].o, "graph");
                    this.AQ.load(this.B1[n].o, e[b].type || "null");
                    this.B1[n].append(e[b]);
                    this.B1[n].J = n;
                    this.B1[n].Q = e[n].id == null ? this.Q + "-graph-id" + n : this.Q + "-graph-" + e[b].id;
                    if (e.length > 0) {
                        var p = c = 0,
                            s = ZC._i_((this.F - (l + 1) * this.VY) / l),
                            t = ZC._i_((this.D - (k + 1) * this.W5) / k);
                        if (this.B1[n].o.x == null) this.B1[n].o.x = ZC._i_(this.iX + (m + 1) * this.VY + m * s);
                        else {
                            c = ZC.M7(this.B1[n].o.x);
                            if (c < 1) c = ZC._i_(this.F * c)
                        } if (this.B1[n].o.y == null) this.B1[n].o.y = ZC._i_(this.iY + (o + 1) * this.W5 + o * t);
                        else {
                            p = ZC.M7(this.B1[n].o.y);
                            if (p < 1) p = ZC._i_(this.D * p)
                        } if (this.B1[n].o[ZC._[21]] == null) this.B1[n].o[ZC._[21]] = s - c;
                        if (this.B1[n].o[ZC._[22]] == null) this.B1[n].o[ZC._[22]] = t - p
                    }
                    this.B1[n].parse();
                    c = 0;
                    for (p = this.B1[n].B8.length; c < p; c++)
                        if (this.B1[n].B8[c].IP) this.IP = 1
                }
                if (this.I1 == h) {
                    n++;
                    m++;
                    if (m == l) {
                        o++;
                        m = 0
                    }
                }
            }
        }
        if (a == null)
            if ((c = this.o.refresh) != null) {
                this.ID = {
                    type: "full",
                    interval: 10
                };
                ZC.ET(c, this.ID)
            }
    },
    T2: function(a, c) {
        c = c || "";
        var b = [],
            e;
        for (e in a)
            if (typeof a[e] == "object")
                for (var f = this.T2(a[e], c + "." + e), g = 0, h = f.length; g < h; g++) ZC.AH(b,
                    f[g]) == -1 && b.push(f[g]);
            else {
                f = c + "." + e;
                ZC.AH(["background-image", "backgroundImage"], e) != -1 && a[e] != "" && a[e].substring(0, 3) != "zc." && b.push([a[e], "image"]);
                ZC.AH(["src"], e) != -1 && a[e] != "" && a[e].substring(0, 3) != "zc." && f.indexOf(".images.") != -1 && b.push([a[e], "image"]);
                if (ZC.AH(["url"], e) != -1) {
                    f.indexOf(".style.") != -1 && b.push([a[e], "css"]);
                    f.indexOf(".csv.") != -1 && b.push([a[e], "csv"]);
                    f.indexOf(".marker.") != -1 && b.push([a[e], "image"])
                }
                if (typeof a[e] == "string" && e != "url" && (a[e].indexOf("url:") == 0 && e == ZC._[5] ||
                    a[e].indexOf("javascript:") == 0)) b.push([a[e], "data"])
            }
        return b
    },
    VW: function(a) {
        function c(l) {
            if (!(l >= e.length)) {
                var m = e[l][0];
                l = e[l][1];
                if (m.substring(0, 4) == "url:") {
                    m = m.substring(4);
                    b.LC["url:" + m] = "[]";
                    try {
                        ZC.A3.ajax({
                            type: "GET",
                            url: m,
                            beforeSend: function(r) {
                                b.L1.data || r.setRequestHeader(ZC._[47], ZC._[48])
                            },
                            data: "",
                            error: function(r, u, y, w) {
                                b.IC({
                                    name: ZC._[63],
                                    message: "Resource not found (" + w + ")"
                                }, ZC._[64]);
                                return false
                            },
                            success: function(r, u, y, w) {
                                b.LC["url:" + w] = r;
                                f++
                            }
                        })
                    } catch (o) {
                        b.IC(o, ZC._[64]);
                        return false
                    }
                } else if (m.substring(0,
                    11) == "javascript:") {
                    b.LC[m] = "[]";
                    l = ZC.BV.S6(m.substring(11));
                    var n = {
                            id: b.Q,
                            resource: m
                        },
                        p = l[0];
                    n.arguments = l[1];
                    try {
                        var s = eval(p).call(b, n);
                        if (s != null && s) {
                            b.LC[m] = s;
                            f++
                        }
                    } catch (t) {
                        b.IC(t, "JavaScript data loader");
                        return false
                    }
                } else if (l == "image") {
                    g[m] = new Image;
                    g[m].onload = function() {
                        f++
                    };
                    g[m].onerror = function() {
                        if (ZC.ie67) {
                            b.IC({
                                name: ZC._[63],
                                message: "Resource not found (" + this.src + ")"
                            }, "Resource loader (image)");
                            return false
                        } else this.src = ZC.BLANK;
                        f++
                    };
                    g[m].src = m;
                    ZC.cache[m] = g[m]
                } else if (l == "css") ZC.A3.ajax({
                    type: "GET",
                    url: m,
                    beforeSend: function(r) {
                        b.L1.css || r.setRequestHeader(ZC._[47], ZC._[48])
                    },
                    data: "",
                    error: function(r, u, y) {
                        b.IC(y, "Resource loader");
                        return false
                    },
                    success: function(r) {
                        var u = {};
                        r = r.match(/(\.|\#)(.+?)\{((.|\s)+?)\}/gi);
                        for (var y = 0, w = r.length; y < w; y++) {
                            var v = r[y].split("{"),
                                x = ZC.GS(v[0]);
                            u[x] = {};
                            v = v[1].replace("}", "").split(";");
                            for (var z = 0, C = v.length; z < C; z++) {
                                var B = v[z].split(":");
                                if (B.length == 2) u[x][ZC.GS(B[0])] = "" + ZC.GS(B[1])
                            }
                        }
                        ZC.ET(u, b.o.style);
                        f++
                    }
                });
                else l == "csv" && ZC.A3.ajax({
                    type: "GET",
                    url: m,
                    beforeSend: function(r) {
                        b.L1.csv || r.setRequestHeader(ZC._[47], ZC._[48])
                    },
                    data: "",
                    error: function(r, u, y) {
                        b.IC(y, "Resource loader");
                        return false
                    },
                    success: function(r, u, y, w) {
                        b.XT[w] = r;
                        f++
                    }
                })
            }
        }
        var b = this,
            e = b.T2(b.o).concat(b.T2(b.HG));
        if (e.length == 0) a();
        else {
            var f = 0,
                g = {},
                h = 0,
                k = window.setInterval(function() {
                    if (f >= e.length) {
                        window.clearInterval(k);
                        b.Z9(b.o);
                        a()
                    } else {
                        h++;
                        c(h)
                    }
                }, 20);
            c(h)
        }
    },
    Z9: function(a) {
        for (var c in a)
            if (typeof a[c] == "object") this.Z9(a[c]);
            else
                for (var b in this.LC)
                    if (b == a[c]) a[c] = eval(this.LC[b])
    },
    resize: function(a) {
        var c = this;
        if (typeof a == ZC._[33]) a = 0;
        ZC.BV.F1("resize", c, c.G8());
        if (a) {
            var b = c.II.split("/");
            ZC.A3("#" + c.Q + "-top").width(c.F).height(c.D);
            if (c.A5 == "canvas") {
                ZC.A3("#" + c.Q + "-main").width(c.F).height(c.D);
                ZC.A3("#" + c.Q + "-main canvas").each(function() {
                    var h;
                    if (ZC.cache["canvas-" + this.id] == null) {
                        h = document.createElement("canvas");
                        h.width = ZC._i_(b[0]);
                        h.height = ZC._i_(b[1]);
                        h.getContext("2d").drawImage(this, 0, 0);
                        ZC.cache["canvas-" + this.id] = h
                    } else h = ZC.cache["canvas-" + this.id];
                    this.width =
                        c.F;
                    this.height = c.D;
                    this.getContext("2d").drawImage(h, 0, 0, h.width, h.height, 0, 0, c.F, c.D)
                })
            }
            if (c.A5 == "svg") {
                if (ZC.cache[c.Q + "-svg-wh"] == null) ZC.cache[c.Q + "-svg-wh"] = b;
                var e = c.F / ZC.cache[c.Q + "-svg-wh"][0],
                    f = c.D / ZC.cache[c.Q + "-svg-wh"][1];
                c.H4.setAttribute(ZC._[21], c.F);
                c.H4.setAttribute(ZC._[22], c.D);
                ZC.A3("#" + c.Q + "-main-c *").each(function() {
                    var h = this.getAttribute("transform") || "";
                    h = h.replace(/scale\(.+?\)\s/g, "");
                    this.setAttribute("transform", "scale(" + e + "," + f + ") " + h)
                });
                ZC.A3("#" + c.Q + "-main-c-top *").each(function() {
                    var h =
                        this.getAttribute("transform") || "";
                    h = h.replace(/scale\(.+?\)\s/g, "");
                    this.setAttribute("transform", "scale(" + e + "," + f + ") " + h)
                })
            }
            ZC.A3("#" + c.Q + "-img").width(c.F).height(c.D);
            c.II = c.F + "/" + c.D
        } else {
            ZC.A3("#" + c.Q + "-top").width(c.F).height(c.D);
            if ((a = ZC.A3("#" + c.Q + "-img")).length == 1) a.width(c.F).height(c.D).css("clip", "rect(1px," + (c.F - 1) + "px," + (c.D - 1) + "px,1px)");
            if (c.A5 == "svg") {
                c.H4.setAttribute(ZC._[21], c.F);
                c.H4.setAttribute(ZC._[22], c.D)
            }
            if (c.A5 == "canvas" || c.A5 == "vml") {
                ZC.A3("#" + c.Q + "-main").width(c.F).height(c.D);
                a = 0;
                for (var g = c.B1.length; a < g; a++) ZC.A3("#" + c.B1[a].Q + "-hover").remove();
                ZC.A3("#" + c.Q + "-main>div").width(c.F).height(c.D)
            }
            if (c.A5 == "canvas") {
                if (a = ZC.AJ(c.Q + "-main-c")) {
                    a.width = c.F;
                    a.height = c.D
                }
                if (a = ZC.AJ(c.Q + "-main-c-top")) {
                    a.width = c.F;
                    a.height = c.D
                }
                ZC.A3("#" + c.Q + "-objects canvas").each(function() {
                    this.width = c.F;
                    this.height = c.D
                });
                ZC.A3("#" + c.Q + "-tools canvas").each(function() {
                    this.width = c.F;
                    this.height = c.D
                })
            }
            if (c.A5 == "vml") {
                ZC.A3("#" + c.Q + "-objects div").each(function() {
                    this.style.width = c.F + "px";
                    this.style.height =
                        c.D + "px"
                });
                ZC.A3("#" + c.Q + "-tools div").each(function() {
                    this.style.width = c.F + "px";
                    this.style.height = c.D + "px"
                })
            }
            c.parse();
            c.paint()
        }
    },
    clear: function(a) {
        if (a != null) this.JY(a).clear();
        else {
            this.unbind();
            a = 0;
            for (var c = this.B1.length; a < c; a++) this.B1[a].clear();
            if ((XB = ZC.AJ(this.Q + "-main-c")) != null) ZC.K.IW(XB, this.A5, this.iX, this.iY, this.F, this.D);
            if ((YW = ZC.AJ(this.Q + "-main-c-top")) != null) ZC.K.IW(YW, this.A5, this.iX, this.iY, this.F, this.D);
            if ((YV = ZC.AJ(this.Q + "-trigger-c")) != null) ZC.K.IW(YV, this.A5, this.iX,
                this.iY, this.F, this.D);
            this.AL && this.AL.hide();
            ZC.A3("." + this.Q + "-menu-item").remove();
            ZC.K.F6([this.Q + "-menu-trigger", this.Q + "-menu", this.Q + "-license"])
        }
    },
    YJ: function() {
        var a = this.F + "/" + this.D,
            c = ZC.K.I2({
                cls: "zc-rel zc-top",
                wh: a,
                id: this.Q + "-top",
                overflow: "hidden",
                p: ZC.AJ(this.Q)
            });
        switch (this.A5) {
            case "svg":
                this.H4 = ZC.K.DJ("svg", ZC._[38]);
                this.H4.setAttributeNS && this.H4.setAttributeNS(null, "xlink", ZC._[39]);
                ZC.K.EG(this.H4, {
                    version: "1.1",
                    cls: "zc-svg",
                    width: this.F,
                    height: this.D
                });
                c.appendChild(this.H4);
                c = ZC.K.DJ("defs", ZC._[38]);
                c.id = this.Q + "-defs";
                this.H4.appendChild(c);
                ZC.K.IG({
                    cls: "zc-rel zc-main",
                    wh: a,
                    id: this.Q + "-main",
                    p: this.H4
                }, this.A5);
                break;
            case "vml":
                ZC.K.I2({
                    cls: "zc-rel zc-main",
                    wh: a,
                    id: this.Q + "-main",
                    p: c
                });
                break;
            case "canvas":
                ZC.K.I2({
                    cls: "zc-rel zc-main",
                    wh: a,
                    id: this.Q + "-main",
                    p: c
                })
        }
    },
    paint: function() {
        var a = this,
            c;
        a.JW = "paint";
        var b = a.F + "/" + a.D;
        a.T5();
        if (ZC.AJ(a.Q + "-top") == null) {
            a.YJ();
            var e = ZC.AJ(a.Q + "-main");
            ZC.K.H9({
                cls: "zc-abs",
                id: a.Q + "-main-c",
                wh: b,
                p: e
            }, a.A5);
            if (a.I.usc()) {
                ZC.K.H9({
                    cls: "zc-abs",
                    id: a.Q + "-main-c-top",
                    wh: b,
                    p: e
                }, a.A5);
                ZC.K.H9({
                    cls: ZC._[26],
                    id: a.Q + ZC._[17],
                    p: e,
                    wh: b,
                    display: "none"
                }, a.A5)
            } else {
                ZC.K.IG({
                    cls: "zc-abs",
                    wh: b,
                    id: a.Q + "-graphset",
                    p: e
                }, a.A5);
                ZC.K.IG({
                    cls: "zc-abs",
                    wh: b,
                    id: a.Q + "-objects",
                    p: e
                }, a.A5);
                ZC.K.IG({
                    cls: "zc-abs",
                    wh: b,
                    id: a.Q + "-hover",
                    p: e
                }, a.A5);
                ZC.K.IG({
                    cls: "zc-abs",
                    wh: b,
                    id: a.Q + "-front",
                    p: e
                }, a.A5);
                ZC.K.IG({
                    cls: "zc-abs",
                    wh: b,
                    id: a.Q + "-text",
                    p: e
                }, a.A5);
                ZC.K.IG({
                    cls: "zc-abs",
                    wh: b,
                    id: a.Q + "-legend",
                    p: e
                }, a.A5);
                ZC.K.IG({
                    cls: "zc-abs",
                    wh: b,
                    id: a.Q + "-tools",
                    p: e
                }, a.A5);
                var f = ZC.AJ(a.Q +
                    "-tools");
                ZC.K.H9({
                    cls: ZC._[26],
                    id: a.Q + "-static-c",
                    wh: b,
                    p: f
                }, a.A5);
                ZC.K.H9({
                    cls: ZC._[26] + " zc-guide-c",
                    id: a.Q + "-guide-c",
                    wh: b,
                    p: f
                }, a.A5);
                if (ZC.A3.browser.opera && ZC._i_(ZC.A3.browser.version) <= 9.5 || ZC.mobile) ZC.K.H9({
                    cls: ZC._[26],
                    id: a.Q + "-trigger-c",
                    wh: b,
                    p: f
                }, a.A5);
                ZC.K.H9({
                    cls: ZC._[26],
                    id: a.Q + ZC._[17],
                    p: f,
                    wh: b,
                    display: "none"
                }, a.A5);
                ZC.K.IG({
                    cls: "zc-abs",
                    wh: b,
                    id: a.Q + "-text-top",
                    p: e
                }, a.A5)
            }
            b = document.createElement("img");
            b.id = a.Q + "-img";
            b.className = "zc-img";
            b.setAttribute("useMap", "#" + a.Q + "-map");
            ZC.K.M2(b, {
                position: "absolute",
                borderWidth: 0,
                width: a.F + ZC.MAPTX + "px",
                height: a.D + ZC.MAPTX + "px",
                left: -ZC.MAPTX + "px",
                top: -ZC.MAPTX + "px",
                opacity: 0,
                clip: "rect(" + (ZC.MAPTX + 1) + "px," + (a.F + ZC.MAPTX - 1) + "px," + (a.D + ZC.MAPTX - 1) + "px," + (ZC.MAPTX + 1) + "px)"
            });
            b.src = (ZC.ie67 ? "//" : "") + ZC.BLANK;
            ZC.AJ(a.Q + "-top").appendChild(b);
            if (!a.I.usc()) {
                b = document.createElement("map");
                ZC.K.EG(b, {
                    id: a.Q + "-map",
                    name: a.Q + "-map"
                });
                ZC.AJ(a.Q + "-top").appendChild(b)
            }
        }
        a.Y = ZC.AJ(a.Q + "-main-c");
        a.b();
        e = b = 0;
        for (f = a.B1.length; e < f; e++) {
            a.B1[e].paint();
            if (a.B1[e].BY != null) b = 1
        }
        a.H[ZC._[55]] = null;
        !a.OU && !a.MF && function() {
            if (ZC.ie67) var g = 28,
                h = 110,
                k = 0,
                l = 1,
                m = "ZingChart";
            else {
                g = 46;
                h = 104;
                k = 0;
                l = 1;
                m = ""
            } if ((c = ZC.AJ(a.Q + "-top")) != null) {
                var o = a.Q + "-license";
                if (ZC.AJ(o) == null) {
                    ZC.K.I2({
                        cls: "zc-style zc-license" + (ZC.ie67 ? "-ie67" : ""),
                        id: o,
                        p: c,
                        tl: a.D - g + "/" + (a.F - h),
                        wh: h + "/" + (g - k),
                        paddingTop: k,
                        opacity: l,
                        html: m
                    }, a.A5);
                    ZC.AJ(o).style.cursor = "pointer";
                    a.zc_license_redirect = function() {
                        window.top.location.href = "http://www.zingchart.com/"
                    };
                    ZC.A3("#" + o).bind("click", a.zc_license_redirect)
                } else {
                    ZC.K.M2(ZC.AJ(o), {
                        left: a.F - h + "px",
                        top: a.D - g + "px",
                        width: h + "px",
                        height: g - k + "px",
                        display: "block",
                        opacity: 1,
                        filter: "alpha(opacity=100)"
                    });
                    ZC.AJ(o).className = "zc-license" + (ZC.ie67 ? "-ie67" : "")
                }
            }
        }();
        ZC.AH(a.H3, ZC._[40]) == -1 && a.Z2();
        if (ZC.AH(a.H3, ZC._[43]) == -1) {
            if (typeof ZC.WK != ZC._[33]) a.AL = new ZC.WK(a);
            typeof ZC.V1 != ZC._[33] && a.FU.bind();
            if (b && typeof ZC.Y8 != ZC._[33]) {
                a.BY = new ZC.Y8(a);
                a.BY.bind()
            }
            if (ZC.mobile) {
                a.A2I = function(g) {
                    a.CY != null && a.CY["page-scroll"] != null && !a.CY["page-scroll"] && g.preventDefault();
                    ZC.move = 0;
                    a.hideCM();
                    a.AL && a.AL.hide();
                    a.N8(g)
                };
                a.J1 = function() {
                    window.clearTimeout(a.YE);
                    a.SP = null
                };
                a.A28 = function(g) {
                    !a.XS && !ZC.move && zingchart.MO(g);
                    a.J1(g)
                };
                ZC.A3("#" + a.Q + "-img").bind("touchstart", a.A2I).bind("touchmove", a.J1).bind("touchend", a.A28);
                ZC.A3("#" + a.Q + "-menu-area").bind("touchstart", a.A2I)
            }
            a.RV = function(g) {
                g.keyCode == 27 && a.KL && a.destroy()
            };
            ZC.A3(document).bind("keyup", a.RV);
            a.A2U = function() {
                ZC.A3("#" + a.Q + ZC._[66]).unbind("click", a.A2U);
                a.destroy()
            };
            ZC.A3("#" + a.Q + ZC._[66]).bind("click", a.A2U)
        } else if (ZC.mobile) {
            a.A2I_static =
                function(g) {
                    g.preventDefault();
                    zingchart.MO(g);
                    return false
                };
            ZC.A3("#" + a.Q + "-img").bind("touchstart", a.A2I_static)
        }
        if (a.ID != null) {
            b = ZC._i_(a.ID.interval);
            b = b >= 50 ? b : 1E3 * b;
            window.setTimeout(function() {
                a.HK();
                a.load()
            }, b)
        }
        a.JW = ""
    },
    unbind: function() {
        this.zc_license_redirect && ZC.A3("#" + this.Q + "-license").unbind("click", this.zc_license_redirect);
        ZC.A3("#" + this.Q + "-menu").unbind(ZC._[49], this.LP);
        ZC.A3("." + this.Q + "-menu-item").unbind(ZC._[49], this.LP);
        ZC.A3("." + this.Q + "-menu-item").unbind("click", this.A2S).unbind("mouseover",
            this.A2J).unbind("mouseout", this.A2T);
        this.FU != null && this.FU.unbind();
        this.BY != null && this.BY.unbind();
        if (ZC.mobile) {
            ZC.A3("#" + this.Q + "-img").unbind("touchstart", this.A2I).unbind("touchmove", this.J1).unbind("touchend", this.A28);
            ZC.A3("#" + this.Q + "-menu-area").unbind("touchstart", this.A2I);
            ZC.A3("#" + this.Q + "-img").unbind("touchstart", this.A2I_static)
        }
        ZC.A3(document).unbind("keyup", this.RV);
        ZC.A3("#" + this.Q + ZC._[66]).unbind("click", this.A2U)
    },
    Z2: function() {
        var a = this,
            c;
        a.JI = [];
        typeof ZC.AC == ZC._[33] &&
            a.JI.push({
                id: "3D",
                enabled: "none"
            }, {
                id: "SwitchTo3D",
                enabled: "none"
            }, {
                id: "SwitchTo2D",
                enabled: "none"
            });
        if (a.CY != null && (c = a.CY.behaviors) != null)
            for (var b = 0, e = c.length; b < e; b++) {
                for (var f = 0, g = 0, h = a.JI.length; g < h; g++)
                    if (a.JI[g].id == c[b].id) {
                        a.JI[g] = c[b];
                        f = 1
                    }
                f || a.JI.push(c[b])
            }
        f = a.CY != null && a.CY["context-menu"] != null ? a.CY["context-menu"] : null;
        h = a.CY != null && a.CY["context-menu[mobile]"] != null ? a.CY["context-menu[mobile]"] : null;
        b = 0;
        for (e = a.JI.length; b < e; b++)
            if (a.JI[b]["function"] != null) {
                if (f == null) f = {};
                if (f["custom-items"] ==
                    null) f["custom-items"] = [];
                f["custom-items"].push(a.JI[b])
            }
        a.JD = new ZC.DC(a);
        a.AQ.load(a.JD.o, ZC._[65]);
        f && a.JD.append(f);
        if (ZC.mobile) {
            a.AQ.load(a.JD.o, ZC._[65] + "[mobile]");
            h && a.JD.append(h)
        }
        a.JD.parse();
        if (a.JD.AK || !a.SS) {
            if (ZC.A3.browser.opera && ZC._i_(ZC.A3.browser.version) <= 9.5 || ZC.mobile) {
                var k = new ZC.DC(a);
                a.AQ.load(k.o, ZC._[65] + ".button");
                if (f && (c = f.button) != null) k.append(c);
                if (ZC.mobile) {
                    a.AQ.load(k.o, ZC._[65] + "[mobile].button");
                    if (h && (c = h.button) != null) k.append(c)
                }
                k.Q = a.Q + "-menu-trigger";
                k.GT = ZC.AJ(a.Q + "-tools");
                k.Y = ZC.AJ(a.Q + "-trigger-c");
                k.parse();
                if (k.AK) {
                    k.paint();
                    if (k.B0 == "") {
                        b = new ZC.D5(a);
                        b.CV = 0;
                        a.AQ.load(b.o, ZC._[65] + ".gear");
                        if (f && (c = f.gear) != null) b.append(c);
                        if (ZC.mobile) {
                            a.AQ.load(b.o, ZC._[65] + "[mobile].gear");
                            if (h && (c = h.gear) != null) b.append(c)
                        }
                        b.Q = a.Q + "-menu-trigger-gear";
                        b.GT = ZC.AJ(a.Q + "-tools");
                        b.Y = ZC.AJ(a.Q + "-trigger-c");
                        b.iX = k.iX + k.F / 2;
                        b.iY = k.iY + k.D / 2;
                        b.AR = ZC.CO(k.F, k.D) / 4.5;
                        b.parse();
                        b.paint();
                        b = new ZC.D5(a);
                        b.copy(k);
                        b.Q = a.Q + "-menu-trigger-gear-hole";
                        b.GT = ZC.AJ(a.Q +
                            "-tools");
                        b.Y = ZC.AJ(a.Q + "-trigger-c");
                        b.DQ = "circle";
                        b.iX = k.iX + k.F / 2;
                        b.iY = k.iY + k.D / 2;
                        b.AR = ZC.CO(k.F, k.D) / 7;
                        b.parse();
                        b.paint()
                    }
                    ZC.AJ(a.Q + "-map").innerHTML += ZC.K.DM("rect") + 'id="' + a.Q + "-menu-area" + ZC._[32] + ZC._i_(k.iX + ZC.MAPTX) + "," + ZC._i_(k.iY + ZC.MAPTX) + "," + ZC._i_(k.iX + k.F + ZC.MAPTX) + "," + ZC._i_(k.iY + k.D + ZC.MAPTX) + '"/>'
                }
            }
            var l = new ZC.DC(a);
            a.AQ.load(l.o, ZC._[65] + ".item");
            if (f && (c = f.item) != null) l.append(c);
            if (ZC.mobile) {
                a.AQ.load(l.o, ZC._[65] + "[mobile].item");
                if (h && (c = h.item) != null) l.append(c)
            }
            l.parse();
            var m = new ZC.DC(a);
            m.copy(l);
            a.AQ.load(m.o, ZC._[65] + ".item.hover-state");
            if (f && f.item != null && (c = f.item["hover-state"]) != null) m.append(c);
            if (ZC.mobile) {
                a.AQ.load(m.o, ZC._[65] + "[mobile].item.hover-state");
                if (h && h.item != null && (c = h.item["hover-state"]) != null) m.append(c)
            }
            m.parse();
            var o = function(w) {
                return w == "" ? "none" : "url(" + (w.indexOf("zc.") == 0 ? ZC.IMAGES[w] : w) + ")"
            };
            c = [];
            b = null;
            h = '<div class="zc-menu-sep" style="background:' + l.X + " " + o(l.BW) + ' repeat-x 50% 0%;">&nbsp;</div>';
            var n = function(w, v) {
                    v = v || ZC.EV["menu-" +
                        w];
                    return '<div class="zc-menu-item ' + a.Q + '-menu-item" style="color:' + l.BO + ";background:" + l.X + " " + o(l.BW) + " repeat-x 50% 0%;border-top:" + (ZC.ie67 ? l.AU : 0) + "px solid " + l.BI + ";border-left:" + l.AU + "px solid " + l.BI + ";border-right:" + l.AU + "px solid " + l.BI + ";padding:" + l.IJ + "px " + l.GW + "px " + l.IE + "px " + l.GE + 'px;" id="' + a.Q + "-menu-item-" + w + '">' + v + "</div>"
                },
                p = function(w) {
                    for (var v = 0, x = a.JI.length; v < x; v++)
                        if (a.JI[v].id == w) return a.JI[v];
                    return {
                        enabled: "all"
                    }
                };
            b = p("Reload");
            if (b.enabled != "none") {
                c.push(n("reload",
                    b.text));
                c.push(h)
            }
            if (typeof ZC.W6 != ZC._[33]) {
                b = p("SaveAsImage");
                if (b.enabled != "none") {
                    c.push(n("viewaspng", b.text ? b.text + " (PNG)" : null));
                    c.push(n("viewasjpg", b.text ? b.text + " (JPG)" : null));
                    c.push(h)
                }
                b = p("DownloadPDF");
                if (b.enabled != "none") {
                    c.push(n("downloadpdf", b.text));
                    c.push(h)
                }
                b = p("Print");
                if (b.enabled != "none") {
                    c.push(n("print", b.text));
                    c.push(h)
                }
            }
            if (a.IP && typeof ZC.V1 != ZC._[33]) {
                e = 0;
                b = p("ZoomIn");
                if (b.enabled != "none") {
                    c.push(n("zoomin", b.text));
                    e = 1
                }
                b = p("ZoomOut");
                if (b.enabled != "none") {
                    c.push(n("zoomout",
                        b.text));
                    e = 1
                }
                b = p("ViewAll");
                if (b.enabled != "none") {
                    c.push(n("viewall", b.text));
                    e = 1
                }
                e && c.push(h)
            }
            var s = g = 0;
            b = 0;
            for (e = a.B1.length; b < e; b++) {
                if (ZC.AH(["line", "area", "bar", "vbar", "hbar", "pie", "mixed"], a.B1[b].AB) != -1) {
                    g = 1;
                    a.OF = "2d"
                }
                if (ZC.AH(["line3d", "area3d", "bar3d", "vbar3d", "hbar3d", "pie3d", "mixed3d"], a.B1[b].AB) != -1) {
                    s = 1;
                    a.OF = "3d"
                }
            }
            if (g || s) {
                b = p("3D");
                if (b.enabled != "none") {
                    b = p(g ? "SwitchTo3D" : "SwitchTo2D");
                    if (b.enabled != "none") {
                        c.push(n(g ? "switchto3d" : "switchto2d", b.text));
                        c.push(h)
                    }
                }
            }
            var t = 0;
            b = s = 0;
            for (e =
                a.B1.length; b < e; b++)
                for (g = 0; g < a.B1[b].B8.length; g++) {
                    var r = a.B1[b].B8[g];
                    if (r.BK.indexOf(ZC._[53]) == 0) t = 1;
                    if (r.KD == "log") s = 1
                }
            if (t) {
                b = p("Progression");
                if (b.enabled != "none") {
                    b = p(s ? "LinearScale" : "LogScale");
                    if (b.enabled != "none") {
                        c.push(n(s ? "switchtolin" : "switchtolog", b.text));
                        c.push(h)
                    }
                }
            }
            e = 0;
            if (typeof ZC.X1 != ZC._[33]) {
                b = p("ViewSource");
                if (b.enabled != "none") {
                    c.push(n("viewsource", b.text));
                    e++
                }
                b = p("BugReport");
                if (b.enabled != "none") {
                    c.push(n("bugreport", b.text));
                    e++
                }
            }
            e > 0 && c.push(h);
            b = p("FullScreen");
            if (b.enabled !=
                "none" && !a.HA) {
                if (a.KL) {
                    b = p("ExitFullScreen");
                    c.push(n("exitfullscreen", b.text))
                } else c.push(n("fullscreen", b.text));
                c.push(h)
            }
            a.OU || c.push(n("xmibl", ZC.R3("Ohl Yvprafr")));
            a.XF || c.push(n(ZC.R3("kzvnog"), ZC.R3("Nobhg MvatPuneg")));
            c.length > 0 && c[c.length - 1] == h && c.splice(c.length - 1, 1);
            var u = {},
                y;
            if (f && (y = f["custom-items"]) != null) {
                c.push(h);
                b = 0;
                for (e = y.length; b < e; b++) {
                    f = y[b].id || "custom-" + b;
                    if (y[b].id == "sep") c.push(h);
                    else {
                        p = y[b].text || "Custom Menu " + b;
                        u[f] = y[b]["function"] || "";
                        c.push(n(f, p))
                    }
                }
            }
            ZC.K.I2({
                id: a.Q +
                    "-menu",
                p: document.body,
                cls: "zc-menu zc-style",
                top: k == null ? 0 : k.iY + k.D / 2,
                left: k == null ? 0 : k.iX + k.F / 2,
                borderBottom: a.JD.AU + "px solid " + a.JD.BI,
                background: (a.JD.X == -1 ? "transparent" : a.JD.X) + " " + o(a.JD.BW),
                paddingTop: a.JD.IJ,
                paddingRight: a.JD.GW,
                paddingBottom: a.JD.IE,
                paddingLeft: a.JD.GE,
                html: c.join("")
            });
            a.LP = function(w) {
                w.preventDefault();
                return false
            };
            ZC.A3("#" + a.Q + "-menu").bind(ZC._[49], a.LP);
            ZC.A3("." + a.Q + "-menu-item").bind(ZC._[49], a.LP);
            a.A2S = function(w) {
                var v = w.target.nodeType != 1 ? w.target.parentNode.id :
                    w.target.id;
                ZC.mobile && a.J1();
                var x = a.XN(a.ML[0], a.ML[1]);
                a.hideCM();
                ZC.mobile && zingchart.MO(w);
                v = v.replace(a.Q + "-menu-item-", "");
                a.YA({
                    graphid: x ? x.Q : null,
                    menuitemid: v,
                    ev: ZC.A3.BL(w)
                });
                switch (v) {
                    case "switchto2d":
                    case "switchto3d":
                        x && a.YU(x.Q);
                        break;
                    case "switchtolin":
                        a.QZ("lin");
                        break;
                    case "switchtolog":
                        a.QZ("log");
                        break;
                    case "reload":
                        a.WW();
                        break;
                    case "viewaspng":
                        a.MR("png");
                        break;
                    case "viewasjpg":
                        a.MR("jpeg");
                        break;
                    case "downloadpdf":
                        a.MR("pdf");
                        break;
                    case "print":
                        a.XC();
                        break;
                    case "viewsource":
                        a.Z0();
                        break;
                    case "bugreport":
                        a.Z4();
                        break;
                    case "fullscreen":
                        a.U7();
                        break;
                    case "xmibl":
                        window.location.href = "http://www.zingchart.com/";
                        break;
                    case "zoomin":
                        if (x) {
                            a.FU.C = x;
                            a.WS({
                                graphid: x.Q
                            })
                        }
                        break;
                    case "zoomout":
                        if (x) {
                            a.FU.C = x;
                            a.VX({
                                graphid: x.Q
                            })
                        }
                        break;
                    case "viewall":
                        if (x) {
                            a.FU.C = x;
                            a.VU({
                                graphid: x.Q
                            })
                        }
                        break;
                    case ZC.R3("kzvnog"):
                        a.A0B();
                        break;
                    default:
                        if (u[v] && u[v] != "") a.YL({
                            graphid: x ? x.Q : null,
                            menuitemid: v,
                            "function": u[v]
                        })
                }
            };
            a.A2J = function() {
                this.style.backgroundColor = m.X;
                this.style.color = m.BO;
                this.style.backgroundImage =
                    o(m.BW);
                this.style.borderLeft = this.style.borderRight = m.AU + "px solid " + m.BI
            };
            a.A2T = function() {
                this.style.backgroundColor = l.X;
                this.style.color = l.BO;
                this.style.backgroundImage = o(l.BW);
                this.style.borderLeft = this.style.borderRight = l.AU + "px solid " + l.BI
            };
            ZC.A3("." + a.Q + "-menu-item").bind("click", a.A2S).bind("mouseover", a.A2J).bind("mouseout", a.A2T)
        }
    },
    destroy: function() {
        this.unbind();
        zingchart.GK.length -= 1;
        this.clear();
        ZC.A3("#zc-fullscreen").remove();
        document.body.style.overflow = ""
    },
    HK: function(a, c) {
        if (c ==
            null) c = 0;
        if (c || this.SY)
            if (ZC.AH(this.H3, ZC._[43]) == -1) {
                var b = ZC.A3("#" + this.Q);
                if (typeof b.offset() != ZC._[33]) {
                    this.S8 = 1;
                    c && ZC.K.I2({
                        id: this.Q + "-dummy",
                        p: ZC.AJ(this.Q),
                        wh: this.F + "/" + this.D
                    });
                    if (!this.H.hideprogresslogo || !this.OU) {
                        var e = b.offset().left + ZC._i_(b.css("border-left-width")) + (a == null ? this.iX : a.iX),
                            f = b.offset().top + ZC._i_(b.css("border-top-width")) + (a == null ? this.iY : a.iY);
                        if (ZC.ipad || ZC.iphone) {
                            e -= ZC.A3(window).scrollLeft();
                            f -= ZC.A3(window).scrollTop()
                        }
                        b = a == null ? this.F : a.F;
                        var g = a == null ?
                            this.D : a.D,
                            h = ZC._i_(this.F * 0.8),
                            k = 30,
                            l = new ZC.DC(this);
                        this.AQ.load(l.o, "loader.gui.progress");
                        l.append(this.H.progress);
                        if (this.CY != null && (E = this.CY.progress) != null) l.append(E);
                        l.parse();
                        var m = ZC.EV["progress-wait-long"],
                            o = l.X + " url(" + ((ZC.ie67 ? "//" : "") + (this.H.customprogresslogo || ZC.IMAGES["zc.logo"])) + ") no-repeat center center";
                        if (b < 180 || g < 90) {
                            o = l.X;
                            k = -12
                        }
                        if (b < 120 && b > 60) {
                            h = 60;
                            m = ZC.EV["progress-wait-short"]
                        } else if (b < 60) {
                            h = 20;
                            m = ZC.EV["progress-wait-mini"]
                        }
                        e = ZC.K.I2({
                            id: this.Q + "-progress",
                            p: document.body,
                            tl: f + "/" + e,
                            width: b - 2 * l.AU,
                            height: g - 2 * l.AU,
                            position: "absolute",
                            opacity: 0.8,
                            border: l.AU + "px solid " + l.BI,
                            background: o
                        });
                        ZC.K.I2({
                            id: this.Q + "-progress-text",
                            p: e,
                            width: h,
                            html: m,
                            textAlign: "center",
                            marginLeft: ZC._i_((b - h) / 2),
                            marginTop: ZC._i_(g / 2 + k),
                            fontFamily: zingchart.FONTFAMILY,
                            fontSize: zingchart.FONTSIZE,
                            color: l.BO,
                            fontWeight: "bold"
                        })
                    }
                }
            }
    },
    T5: function() {
        if (!this.H.hideprogresslogo) {
            this.S8 = 0;
            ZC.K.F6([this.Q + "-dummy", this.Q + "-progress"])
        }
    },
    GX: function() {
        var a = this;
        if (a.o[ZC._[18]] == null) a.o = {
            graphset: [a.o]
        };
        a.HK();
        zingchart.RG(a, a.TL(), function() {
            if (zingchart.dataparse != null) a.o = zingchart.dataparse(a.G8(), a.o);
            var c;
            if (c = a.OY.dataparse) a.o = c(a.G8(), a.o);
            ZC.SL(function() {
                a.parse();
                a.paint()
            })
        })
    },
    render: function() {
        var a = this;
        (function() {
            function c() {
                a.JV != "" || a.HG != null ? a.WZ() : a.load()
            }
            a.MF || a.A07();
            a.H.hideprogresslogo || a.HK(null, true);
            a.H.hideprogresslogo ? c() : ZC.SL(c)
        })()
    },
    N8: function(a) {
        var c = this;
        if (c.SP == null) {
            c.SP = (new Date).getTime();
            c.YE = window.setTimeout(function() {
                    if (c.SP != null) {
                        c.SP = null;
                        zingchart.RR(a)
                    }
                },
                1E3)
        }
    },
    G8: function() {
        var a = 0,
            c = 0;
        if (!ZC.mobile || typeof Ext == ZC._[33]) {
            var b = ZC.A3("#" + this.Q + "-top");
            if (b.length && b.offset()) {
                a = b.offset().left;
                c = b.offset().top
            }
        }
        return {
            id: this.Q,
            width: this.F,
            height: this.D,
            output: this.A5,
            x: this.ML[0] - a,
            y: this.ML[1] - c,
            targetid: this.ML[2]
        }
    },
    ZP: function(a) {
        a = a || {};
        if (a.resource != null) {
            this.LC[a.resource] = a.data || "[]";
            this.NW++
        }
    },
    WS: function() {},
    VX: function() {},
    VU: function() {},
    KO: function() {},
    XK: function(a) {
        a = a || {};
        if (a[ZC._[3]] != null) {
            a = this.JY(a[ZC._[3]]);
            a != null &&
                a.clear()
        } else this.clear()
    },
    WA: function(a) {
        a = a || ZC.EV["sync-wait"];
        if (ZC.AJ(this.Q + "-blocker") == null) {
            ZC.K.I2({
                cls: "zc-abs zc-style zc-blocker",
                id: this.Q + "-blocker",
                p: ZC.AJ(this.Q + "-top"),
                wh: this.F + "/" + this.D,
                opacity: 0.75
            });
            ZC.K.I2({
                id: this.Q + "-blocker-t",
                p: ZC.AJ(this.Q + "-blocker"),
                html: a
            });
            a = ZC.A3("#" + this.Q + "-blocker-t");
            a.css("top", this.D / 2 - a.height() / 2 + "px").css("left", this.F / 2 - a.width() / 2 + "px")
        }
    },
    WV: function() {
        ZC.K.F6(this.Q + "-blocker")
    },
    A0B: function() {
        function a() {
            ZC.K.F6([c.Q + "-about", c.Q +
                "-about-mask"
            ])
        }
        var c = this;
        ZC.K.I2({
            cls: "zc-abs",
            id: c.Q + "-about-mask",
            p: ZC.AJ(c.Q + "-top"),
            wh: c.F + "/" + c.D,
            background: "#ccc",
            opacity: 0.75
        });
        var b = ZC.CO(320, c.F),
            e = ZC.CO(215, c.D),
            f = ZC.BN(0, (c.F - b) / 2),
            g = ZC.BN(0, (c.D - e) / 2);
        b = ZC.K.I2({
            cls: "zc-about zc-style",
            id: c.Q + "-about",
            p: ZC.AJ(c.Q + "-top"),
            tl: g + "/" + f,
            wh: b - (ZC.quirks ? 0 : 10) + "/" + (e - (ZC.quirks ? 0 : 10))
        });
        f = "";
        if (c.KQ != "") f = "Custom Built for<br/>" + c.KQ;
        b.innerHTML = '<div class="zc-about-1"><a href="http://www.zingchart.com" target="_blank">zingchart.com</a></div><div class="zc-about-2">&copy;2009-2012</div><div class="zc-about-3"><div id="' +
            c.Q + '-about-close">' + ZC.EV["about-close"] + '</div></div><div class="zc-about-4" style="padding:' + (e - 215) + 'px 5px 5px 5px;"><div>&nbsp;<br/>Build ' + ZC.VERSION + " [" + c.A5 + "]</div>" + f + "</div>";
        ZC.A3("#" + c.Q + "-about-close").bind("click", a);
        ZC.A3(b).bind("click", a)
    },
    IC: function(a, c) {
        var b = this,
            e = "";
        e += typeof a == "object" ? a.name + ":" + a.message + "\n\n" : new String(a) + "\n\n";
        if (c != null) e += "Section:" + c + "\n\n";
        e += "JSON data:\n\n" + b.H.json + "\n\n";
        b.T5();
        ZC.AJ(b.Q + "-top") == null && b.YJ();
        ZC.K.I2({
                cls: "zc-abs zc-error zc-style",
                id: b.Q + "-error",
                p: ZC.AJ(b.Q + "-top"),
                wh: b.F - (ZC.quirks ? 0 : 10) + "/" + (b.D - (ZC.quirks ? 0 : 10))
            }).innerHTML = '<div class="zc-form-row-label zc-form-s0">' + ZC.EV["error-header"] + '</div><div class="zc-form-row-label zc-form-s1">' + ZC.EV["error-message"] + '</div><div class="zc-form-row-element"><textarea id="' + b.Q + '-error-message" style="width:' + (b.F - 35) + "px;height:" + (b.D - 135) + 'px;"></textarea></div><div class="zc-form-row-element zc-form-row-last"><input type="button" value="' + ZC.EV["error-close"] + '" id="' + b.Q +
            '-error-close"/></div>';
        ZC.A3("#" + b.Q + "-error-message").val(ZC.GS(e));
        ZC.A3("#" + b.Q + "-error-close").bind("click", function() {
            ZC.K.F6(b.Q + "-error")
        })
    },
    Z0: function() {},
    Z4: function() {},
    U7: function() {
        var a = document.createElement("div");
        a.id = "zc-fullscreen";
        a.style.zIndex = zingchart.FSZINDEX;
        a.style.overflow = "hidden";
        document.body.appendChild(a);
        window.scroll(0, 0);
        zingchart.render({
            id: "zc-fullscreen",
            output: this.A5,
            width: ZC.A3(window).width(),
            height: ZC.A3(window).height(),
            fullscreenmode: true,
            dataurl: this.K5,
            data: this.IO || this.L6,
            defaults: this.HG,
            defaultsurl: this.JV
        })
    },
    QZ: function(a) {
        for (var c = 0, b = this.B1.length; c < b; c++)
            for (var e = this.o[ZC._[18]][c], f = 0; f < 10; f++) {
                var g = ZC._[53] + (f == 0 ? "" : "-" + f);
                if (e[g] != null) e[g].progression = a
            }
        this.GX()
    },
    YU: function() {
        for (var a = ["line", "area", "bar", "vbar", "hbar", "pie", "mixed"], c = 0, b = this.B1.length; c < b; c++) {
            var e = this.o[ZC._[18]][c];
            if (e.type == "mixed")
                for (var f = 0, g = e[ZC._[13]].length; f < g; f++) {
                    var h = e[ZC._[13]][f];
                    h.type = h.type || "line";
                    if (this.OF == "3d") h.type = h.type.replace("3d",
                        "");
                    else if (ZC.AH(a, h.type) != -1) h.type += "3d"
                } else if (this.OF == "3d") e.type = e.type.replace("3d", "");
                else if (ZC.AH(a, e.type) != -1) e.type += "3d"
        }
        this.OF = this.OF == "3d" ? "2d" : "3d";
        this.GX()
    },
    WW: function(a) {
        a = a || {};
        ZC.BV.F1("reload", this, {
            id: this.Q,
            graphid: a[ZC._[3]]
        });
        if ((E = a[ZC._[3]]) != null) {
            a = this.BR(E);
            if (a != null) {
                this.HK(a);
                this.load(a.Q)
            }
        } else {
            this.HK();
            this.load()
        }
    },
    A0M: function(a) {
        a = a || {};
        if ((E = a[ZC._[3]]) != null) {
            var c = this.BR(E);
            if (c != null && a.dataurl != null) {
                this.HK(c);
                this.load(E, a.dataurl)
            }
        } else if ((E =
            a.dataurl) != null) {
            this.K5 = E;
            this.HK();
            this.load()
        }
    },
    XC: function() {},
    MR: function() {},
    PL: function() {},
    YA: function(a) {
        ZC.ET(this.G8(), a);
        ZC.BV.F1("menuitem_click", this, a)
    },
    YL: function(a) {
        try {
            var c = ZC.BV.S6(a["function"]);
            a["function"] = c[0];
            a.arguments = c[1];
            ZC.ET(this.G8(), a);
            eval(a["function"]).call(this, a)
        } catch (b) {
            this.IC(b, "JavaScript data loader");
            return false
        }
    },
    BR: function(a) {
        if (a == null) {
            if (this.B1.length > 0) return this.B1[0]
        } else return this.JY(a);
        return null
    }
});
ZC.LE.prototype.WS = function(a) {
    a = a || {};
    a.action = "zoomin";
    var c = a[ZC._[3]] != null ? this.JY(a[ZC._[3]]) : this.B1[0];
    if (c != null) {
        for (var b = 0, e = c.B6("k").length; b < e; b++) {
            var f = c.B6("k")[b],
                g = f.J == 1 ? "" : "-" + f.J;
            if (f.IP && (a["zoomx" + g] == null || a["zoomx" + g])) {
                a["zoomx" + g] = 1;
                var h = f.A2 - f.V,
                    k = f.V + (h < 2 ? 0 : ZC._i_(h / 4));
                f = f.A2 - (h < 2 ? 0 : ZC._i_(h / 4));
                if (k < f) {
                    a["xmin" + g] = k;
                    a["xmax" + g] = f
                }
            }
        }
        b = 0;
        for (e = c.B6("v").length; b < e; b++) {
            f = c.B6("v")[b];
            g = f.J == 1 ? "" : "-" + f.J;
            if (f.IP && (a["zoomy" + g] == null || a["zoomy" + g])) {
                a["zoomy" + g] = 1;
                h =
                    f.C8 - f.BJ;
                k = f.BJ + ZC._f_(h / 4);
                f = f.C8 - ZC._f_(h / 4);
                if (k < f) {
                    a["ymin" + g] = k;
                    a["ymax" + g] = f
                }
            }
        }
        this.KO(a)
    }
};
ZC.LE.prototype.VX = function(a) {
    a = a || {};
    a.action = "zoomout";
    var c = a[ZC._[3]] != null ? this.JY(a[ZC._[3]]) : this.B1[0];
    if (c != null) {
        for (var b = 0, e = c.B6("k").length; b < e; b++) {
            var f = c.B6("k")[b],
                g = f.J == 1 ? "" : "-" + f.J;
            if (f.IP && (a["zoomx" + g] == null || a["zoomx" + g])) {
                a["zoomx" + g] = 1;
                var h = ZC.BN(2, f.A2 - f.V),
                    k = ZC.BN(f.HT, f.V - ZC._i_(h / 2));
                f = ZC.CO(f.HW, f.A2 + ZC._i_(h / 2));
                if (k < f) {
                    a["xmin" + g] = k;
                    a["xmax" + g] = f
                }
            }
        }
        b = 0;
        for (e = c.B6("v").length; b < e; b++) {
            f = c.B6("v")[b];
            g = f.J == 1 ? "" : "-" + f.J;
            if (f.IP && (a["zoomy" + g] == null || a["zoomy" + g])) {
                a["zoomy" +
                    g] = 1;
                h = f.C8 - f.BJ;
                k = ZC.BN(f.NB, f.BJ - ZC._f_(h / 2));
                f = ZC.CO(f.NA, f.C8 + ZC._f_(h / 2));
                if (k < f) {
                    a["ymin" + g] = k;
                    a["ymax" + g] = f
                }
            }
        }
        this.KO(a)
    }
};
ZC.LE.prototype.VU = function(a) {
    a = a || {};
    var c = a[ZC._[3]] != null ? this.JY(a[ZC._[3]]) : this.B1[0];
    a.action = "viewall";
    for (var b = 0, e = c.B6("k").length; b < e; b++) {
        var f = c.B6("k")[b];
        f = f.J == 1 ? "" : "-" + f.J;
        a["zoomx" + f] = 1;
        a["xmin" + f] = null;
        a["xmax" + f] = null
    }
    b = 0;
    for (e = c.B6("v").length; b < e; b++) {
        f = c.B6("v")[b];
        f = f.J == 1 ? "" : "-" + f.J;
        a["zoomy" + f] = 1;
        a["ymin" + f] = null;
        a["ymax" + f] = null
    }
    this.KO(a)
};
ZC.LE.prototype.KO = function(a) {
    var c;
    a = a || {};
    a.id = this.Q;
    var b = 1;
    if (typeof a.triggerevent != ZC._[33] && !a.triggerevent) b = 0;
    var e = a[ZC._[3]] != null ? this.JY(a[ZC._[3]]) : this.B1[0];
    if (e != null) {
        for (var f = {}, g = 0, h = e.B6("k").length; g < h; g++) {
            var k = e.B6("k")[g],
                l = k.J == 1 ? "" : "-" + k.J;
            if (a["kmin" + l] != null && a["kmax" + l] != null) {
                var m = c = 0;
                g = 0;
                for (h = k.W.length; g < h; g++) {
                    if (a["kmin" + l] <= k.W[g] && !c) {
                        a["xmin" + l] = g;
                        c = 1
                    }
                    if (a["kmax" + l] <= k.W[g] && !m) {
                        a["xmax" + l] = g;
                        m = 1
                    }
                    if (c && m) break
                }
                c || (a["xmin" + l] = 0);
                m || (a["xmax" + l] = k.W.length -
                    1);
                a["zoomx" + l] = 1
            } else {
                if ((c = k.W[a["xmin" + l]]) != null) a["kmin" + l] = c;
                if ((c = k.W[a["xmax" + l]]) != null) a["kmax" + l] = c
            }
        }
        g = 1;
        if (b) {
            try {
                var o = zingchart.zoom(a);
                if (typeof o != ZC._[33]) g = g && o
            } catch (n) {}
            try {
                o = this.OY.zoom(a);
                if (typeof o != ZC._[33]) g = g && o
            } catch (p) {}
        }
        if (g) {
            g = 0;
            for (h = e.B6("k").length; g < h; g++) {
                k = e.B6("k")[g];
                l = k.J == 1 ? "" : "-" + k.J;
                if (a["zoomx" + l]) {
                    k.Y9(a["xmin" + l], a["xmax" + l]);
                    f["xmin" + l] = a["xmin" + l];
                    f["xmax" + l] = a["xmax" + l]
                }
            }
            g = 0;
            for (h = e.B6("v").length; g < h; g++) {
                var s = e.B6("v")[g];
                l = s.J == 1 ? "" : "-" + s.J;
                if (a["zoomy" +
                    l] && s != null) {
                    s.Y9(a["ymin" + l], a["ymax" + l]);
                    f["ymin" + l] = a["ymin" + l];
                    f["ymax" + l] = a["ymax" + l]
                }
            }
            this.FU.parse();
            if (this.FU.QL) this.H["graph" + e.J + ".zoom"] = f;
            e.E0 != null && !a.preview && e.E0.update(a.xmin, a.xmax, true);
            e.clear(true);
            if (s && s.XY) {
                a = Number.MAX_VALUE;
                b = -Number.MAX_VALUE;
                f = 0;
                for (o = e.AZ.AA.length; f < o; f++)
                    if (e.AZ.AA[f].AK && ZC.AH(e.AZ.AA[f].B8, s.BK) != -1)
                        if (k.D8) {
                            g = 0;
                            for (h = e.AZ.AA[f].M.length; g < h; g++)
                                if (BH = e.AZ.AA[f].M[g])
                                    if (ZC.DK(BH.CH, k.W[k.V], k.W[k.A2])) {
                                        a = ZC.CO(a, BH.D3);
                                        b = ZC.BN(b, BH.D3);
                                        l = 0;
                                        for (c =
                                            BH.D2.length; l < c; l++) {
                                            a = ZC.CO(a, BH.D2[l]);
                                            b = ZC.BN(b, BH.D2[l])
                                        }
                                    }
                        } else
                            for (g = k.V; g <= k.A2; g++)
                                if (BH = e.AZ.AA[f].M[g]) {
                                    a = ZC.CO(a, BH.D3);
                                    b = ZC.BN(b, BH.D3);
                                    l = 0;
                                    for (c = BH.D2.length; l < c; l++) {
                                        a = ZC.CO(a, BH.D2[l]);
                                        b = ZC.BN(b, BH.D2[l])
                                    }
                                }
                s.Q2(a, b, true);
                s.JJ()
            }
            e.paint(true);
            this.FU.C = null
        }
    }
};
zingchart.Z7 = function(a, c, b) {
    if (document.getElementById("zc-fullscreen")) a = "zc-fullscreen";
    b = b || {};
    if (typeof b == "string") b = JSON.parse(b);
    a = zingchart.loader(a);
    if (b[ZC._[55]] != null) a.H[ZC._[55]] = ZC._b_(b[ZC._[55]]);
    if (a != null) switch (c) {
        case "zoomin":
            a.WS(b);
            break;
        case "zoomout":
            a.VX(b);
            break;
        case "zoomto":
            c = a.BR(b[ZC._[3]]);
            if (b.xall != null && b.xall)
                for (var e = 0, f = c.B6("k").length; e < f; e++) {
                    var g = c.B6("k")[e],
                        h = g.J == 1 ? "" : "-" + g.J;
                    b["xmin" + h] = b.xmin || null;
                    b["xmax" + h] = b.xmax || null;
                    b["kmin" + h] = b.kmin || null;
                    b["kmax" + h] = b.kmax || null
                }
            e = 0;
            for (f = c.B6("k").length; e < f; e++) {
                g = c.B6("k")[e];
                h = g.J == 1 ? "" : "-" + g.J;
                if (b["xmin" + h] != null || b["xmax" + h] != null || b["kmin" + h] != null || b["kmax" + h] != null) b["zoomx" + h] = 1
            }
            if (b.yall != null && b.yall) {
                e = 0;
                for (f = c.B6("v").length; e < f; e++) {
                    g = c.B6("v")[e];
                    h = g.J == 1 ? "" : "-" + g.J;
                    b["ymin" + h] = b.ymin || null;
                    b["ymax" + h] = b.ymax || null
                }
            }
            e = 0;
            for (f = c.B6("v").length; e < f; e++) {
                g = c.B6("v")[e];
                h = g.J == 1 ? "" : "-" + g.J;
                if (b["ymin" + h] != null || b["ymax" + h] != null) b["zoomy" + h] = 1
            }
            a.KO(b);
            break;
        case "zoomtovalues":
            c = a.BR(b[ZC._[3]]);
            if (b.xall != null && b.xall) {
                e = 0;
                for (f = c.B6("k").length; e < f; e++) {
                    g = c.B6("k")[e];
                    h = g.J == 1 ? "" : "-" + g.J;
                    b["xmin" + h] = b.xmin || null;
                    b["xmax" + h] = b.xmax || null
                }
            }
            e = 0;
            for (f = c.B6("k").length; e < f; e++) {
                g = c.B6("k")[e];
                h = g.J == 1 ? "" : "-" + g.J;
                if (b["xmin" + h] != null || b["xmax" + h] != null) {
                    b["xmin" + h] = (xmin = ZC.AH(g.W, b["xmin" + h])) != -1 ? xmin : 0;
                    b["xmax" + h] = (xmax = ZC.AH(g.W, b["xmax" + h])) != -1 ? xmax : g.W.length - 1;
                    b["zoomx" + h] = 1
                }
            }
            if (b.yall != null && b.yall) {
                e = 0;
                for (f = c.B6("v").length; e < f; e++) {
                    g = c.B6("v")[e];
                    h = g.J == 1 ? "" : "-" + g.J;
                    b["ymin" + h] = b.ymin ||
                        null;
                    b["ymax" + h] = b.ymax || null
                }
            }
            e = 0;
            for (f = c.B6("v").length; e < f; e++) {
                g = c.B6("v")[e];
                h = g.J == 1 ? "" : "-" + g.J;
                if (b["ymin" + h] != null || b["ymax" + h] != null) b["zoomy" + h] = 1
            }
            a.KO(b);
            break;
        case "viewall":
            a.VU(b)
    }
    return null
};
ZC.W6 = {};
ZC.BV.SN = function(a, c, b, e) {
    e = e || "png";
    if (e == "jpg") e = "jpeg";
    var f = document.createElement("canvas");
    f.width = c;
    f.height = b;
    f.style.width = c + "px";
    f.style.height = b + "px";
    var g = f.getContext("2d");
    a instanceof Array || (a = [a]);
    for (var h = 0, k = a.length; h < k; h++) a[h].className.indexOf("zc-no-print") == -1 && g.drawImage(a[h], 0, 0, a[h].width, a[h].height, 0, 0, c, b);
    return f.toDataURL("image/" + e)
};
ZC.BV.ZD = function(a, c, b, e, f) {
    if (f == null) f = 0;
    a = ZC.BV.SN(a, c, b, e);
    if (f) {
        e = document.createElement("img");
        e.src = a;
        return e
    } else {
        a = a.replace("image/" + e, "image/octet-stream");
        document.location.href = a
    }
};
ZC.LE.prototype.XC = function() {
    var a = this,
        c = [];
    if (!a.YB) {
        a.YB = 1;
        var b = document.body.childNodes,
            e = ZC.A3(document.body).css(ZC._[0]),
            f = ZC.A3(document.body).css("background-image");
        ZC.A3(document.body).css(ZC._[0], "#fff").css("background-image", "none");
        for (var g = 0, h = b.length; g < h; g++)
            if (b[g].nodeType == 1) {
                c[g] = b[g].style.display;
                b[g].style.display = "none"
            }
        document.body.appendChild(ZC.AJ(a.Q + "-top"));
        window.setTimeout(function() {
            window.print();
            window.setTimeout(function() {
                ZC.A3(document.body).css(ZC._[0],
                    e).css("background-image", f);
                ZC.AJ(a.Q).appendChild(ZC.AJ(a.Q + "-top"));
                for (var k = 0, l = b.length; k < l; k++)
                    if (b[k].nodeType == 1) b[k].style.display = c[k];
                a.YB = 0
            }, 1E3)
        }, 50)
    }
};
ZC.LE.prototype.MR = function(a, c) {
    var b = this;
    c = c || {};
    if (ZC.AJ(b.Q + "-viewimage") == null) {
        a = a || "png";
        ZC.K.IW(ZC.AJ(b.Q + "-guide-c"), b.A5, 0, 0, b.F, b.D);
        ZC.A3(".zc-guide-label").remove();
        if (b.A5 == "canvas" && a != "pdf") {
            var e = ZC.K.I2({
                    cls: "zc-abs zc-viewimage zc-style",
                    id: b.Q + "-viewimage",
                    p: ZC.AJ(b.Q + "-top"),
                    wh: b.F - 10 + "/" + (b.D - 10)
                }),
                f = ZC.K.I2({
                    id: b.Q + "-viewimage-close",
                    p: e,
                    tl: "5/" + (b.F - 15),
                    html: ZC.EV["viewimage-close"]
                }),
                g = document.createElement("canvas");
            g.width = b.F;
            g.height = b.D;
            for (var h = 0, k = b.B1.length; h <
                k; h++)
                for (var l = 0, m = b.B1[h].BD.length; l < m; l++) b.B1[h].BD[l].D4(g);
            var o = [];
            ZC.A3("#" + b.Q + " canvas").each(function() {
                ZC.AH([b.Q + "-guide-c", b.Q + "-trigger-c"], this.id) == -1 && o.push(this)
            });
            o.push(g);
            g = ZC.BV.ZD(o, b.F, b.D, a, true);
            g.id = b.Q + "-print-" + a;
            e.appendChild(g)
        } else {
            b.WA(ZC.EV["export-wait"]);
            var n = function() {
                    ZC.AJ(b.Q + "-export") && ZC.K.F6(b.Q + "-export");
                    ZC.K.I2({
                        cls: "zc-abs zc-style",
                        id: b.Q + "-export",
                        p: ZC.AJ(b.Q + "-top"),
                        display: "none"
                    });
                    var s = ZC.K.YZ(ZC.AJ(b.Q + "-export")),
                        t = s.createElement("FORM");
                    t.action = zingchart.EXPORTURL;
                    t.method = "post";
                    s.body.appendChild(t);
                    t.style.display = "none";
                    var r = {
                        svg: p,
                        w: b.F,
                        h: b.D,
                        t: a
                    };
                    ZC.ET(c, r);
                    for (var u in r) {
                        var y = s.createElement("INPUT");
                        y.type = "hidden";
                        y.name = u;
                        y.value = r[u];
                        t.appendChild(y)
                    }
                    t.submit();
                    t = null;
                    window.setTimeout(function() {
                        b.WV()
                    }, 1E3)
                },
                p = ZC.AJ(b.Q + "-top").innerHTML;
            if (b.A5 == "vml" || b.A5 == "canvas" && a == "pdf") {
                g = document.createElement("div");
                g.id = "zc-export-svg";
                document.body.appendChild(g);
                zingchart.render({
                    id: "zc-export-svg",
                    output: "!svg",
                    imggen: true,
                    width: b.F,
                    height: b.D,
                    data: b.H.json,
                    defaults: b.HG,
                    hideprogresslogo: true,
                    events: {
                        gsetload: function() {
                            p = ZC.AJ("zc-export-svg-top").innerHTML;
                            zingchart.exec("zc-export-svg", "destroy");
                            n()
                        }
                    }
                })
            } else b.A5 == "svg" && n()
        } if (b.A5 == "canvas" && a != "pdf") {
            ZC.A3(f).css("cursor", "pointer").css("left", b.F - 15 - ZC.A3(f).width() + "px");
            ZC.A3(f).bind("click", function() {
                ZC.A3(e).remove()
            })
        }
    }
};
ZC.LE.prototype.PL = function(a) {
    var c = this;
    a = a || "png";
    var b = [];
    ZC.A3("#" + c.Q + " canvas").each(function() {
        ZC.AH([c.Q + "-guide-c", c.Q + "-tooltip-c"], this.id) == -1 && b.push(this)
    });
    return ZC.BV.SN(b, c.F, c.D, a)
};
zingchart.YO = function(a, c, b) {
    var e;
    if (document.getElementById("zc-fullscreen")) a = "zc-fullscreen";
    b = b || {};
    if (typeof b == "string") b = JSON.parse(b);
    a = zingchart.loader(a);
    if (a != null) switch (c) {
        case "getimagedata":
            if (a.A5 != "canvas") return -1;
            var f = "png";
            if ((e = b.format) != null) f = e;
            if ((e = b.filetype) != null) f = e;
            if (f == "jpg") f = "jpeg";
            return b = a.PL(f).replace(/data:image\/(png|jpeg);base64,/, "");
        case "exportimage":
        case "saveasimage":
            f = "png";
            c = null;
            if ((e = b.options) != null) c = e;
            if ((e = b.format) != null) f = e;
            if ((e = b.filetype) !=
                null) f = e;
            if (f == "jpg") f = "jpeg";
            if (a.A5 != "canvas") a.MR(f, c);
            else {
                c = a.H.exportimageurl || "";
                if ((e = b.url) != null) c = e;
                var g = null;
                if ((e = b.callback) != null) g = e;
                b = a.PL(f).replace(/data:image\/(png|jpeg);base64,/, "");
                if (c != "") ZC.A3.ajax({
                    type: "post",
                    url: c,
                    data: b,
                    success: function(p, s, t) {
                        g && g.call(p, s, t)
                    }
                });
                else {
                    a = document.createElement("img");
                    a.src = b;
                    return a
                }
            }
            break;
        case "exportdata":
            c = a.H.exportdataurl || "";
            if ((e = b.url) != null) c = e;
            f = "";
            for (var h = 0, k = a.B1.length; h < k; h++) {
                f += ",";
                e = a.B1[h];
                for (var l = e.AZ.AA, m = 0, o =
                    l.length; m < o; m++) f += '"' + l[m].B0.replace('"', '"') + '",';
                f = f.substr(0, f.length - 1);
                f += "\n";
                m = e.B6("k")[0];
                o = 0;
                for (var n = m.W.length; o < n; o++) {
                    f += m.W[o] + ",";
                    i = 0;
                    for (A1 = l.length; i < A1; i++)
                        if ((e = l[i].M[o]) != null) f += e.D1 + ",";
                    f = f.substr(0, f.length - 1);
                    f += "\n"
                }
                if (k > 1 && h < k - 1) f += "\n$\n\n"
            }
            if (c != "") {
                g = null;
                if ((e = b.callback) != null) g = e;
                ZC.A3.ajax({
                    type: "post",
                    url: c,
                    data: f,
                    success: function(p, s, t) {
                        g && g.call(p, s, t)
                    }
                })
            } else return f
    }
    return null
};
ZC.X1 = {};
ZC.BV.VZ = function(a) {
    var c = "";
    a = a.replace(/\t|\r|\n/g, "");
    for (var b = 0, e = 0, f = 0, g = "", h = 0, k = a.length; h < k; h++) {
        HE = a.substr(h, 1);
        switch (HE) {
            case '"':
                b = !b;
                c += a.substr(h, 1);
                g = HE;
                break;
            case "{":
                c += a.substr(h, 1);
                if (!b) {
                    c += "\n" + Array(f + 1).join("    ");
                    f++;
                    g = HE
                }
                break;
            case "}":
                if (!b) {
                    c += "\n" + Array(f - 2 + 1).join("    ");
                    f--;
                    g = HE
                }
                c += a.substr(h, 1);
                break;
            case "[":
                e = a.indexOf("]", h);
                g = a.indexOf("}", h);
                g = g == -1 ? 999999 : g;
                var l = a.indexOf("{", h);
                l = l == -1 ? 999999 : l;
                g = ZC.CO(g, l);
                if (e < g) {
                    e = 1;
                    c += a.substr(h, 1)
                } else {
                    e = 0;
                    c += a.substr(h,
                        1);
                    c += "\n" + Array(f + 1).join("    ");
                    f++
                }
                g = HE;
                break;
            case "]":
                if (e) e = 0;
                if (g == "}") {
                    f--;
                    c += "\n" + Array(f - 1 + 1).join("    ")
                }
                c += a.substr(h, 1);
                g = HE;
                break;
            case " ":
                if (b) {
                    c += a.substr(h, 1);
                    g = HE
                }
                break;
            case ",":
                c += a.substr(h, 1);
                if (!b && !e) c += "\n" + Array(f - 1 + 1).join("    ");
                g = HE;
                break;
            default:
                c += a.substr(h, 1);
                g = HE
        }
    }
    return c
};
ZC.LE.prototype.Z0 = function() {
    var a = this;
    ZC.K.I2({
            cls: "zc-abs zc-viewsource zc-style",
            id: a.Q + "-viewsource",
            p: ZC.AJ(a.Q + "-top"),
            wh: a.F - (ZC.quirks ? 0 : 10) + "/" + (a.D - (ZC.quirks ? 0 : 10))
        }).innerHTML = '<div class="zc-form-row-label zc-form-s1">' + ZC.EV["viewsource-jsonsource"] + '</div><div class="zc-form-row-element"><textarea id="' + a.Q + '-viewsource-json" style="width:' + (a.F - 35) + "px;height:" + (a.D - 95) + 'px;"></textarea></div><div class="zc-form-row-element zc-form-row-last"><input type="button" value="' + ZC.EV["viewsource-close"] +
        '" id="' + a.Q + '-viewsource-close"/></div>';
    ZC.A3("#" + a.Q + "-viewsource-json").val(ZC.BV.VZ(a.H.json));
    ZC.A3("#" + a.Q + "-viewsource-close").bind("click", function() {
        ZC.K.F6(a.Q + "-viewsource")
    })
};
ZC.LE.prototype.Z4 = function() {
    var a = this;
    if (a.F < 300 || a.D < 300) window.open("http://www.zingchart.com/support/", "", "");
    else {
        var c = ZC.K.I2({
                cls: "zc-abs zc-bugreport zc-style",
                id: a.Q + "-bugreport",
                p: ZC.AJ(a.Q + "-top"),
                wh: a.F - (ZC.quirks ? 0 : 10) + "/" + (a.D - (ZC.quirks ? 0 : 10))
            }),
            b = "";
        b += '<div class="zc-form-row-label zc-form-s0">' + ZC.EV["bugreport-header"] + '</div><div class="zc-form-row-label"><input type="checkbox" id="' + a.Q + '-chkdata" checked="checked"/><label for="' + a.Q + '-chkdata">' + ZC.EV["bugreport-senddata"] +
            "</label>";
        if (ZC.canvas) b += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="' + a.Q + '-chkcapture" checked="checked"/><label for="' + a.Q + '-chkcapture">' + ZC.EV["bugreport-sendcapture"] + "</label>";
        b += '</div><div class="zc-form-row-label zc-form-s1">' + ZC.EV["bugreport-yourcomment"] + '</div><div class="zc-form-row-element"><textarea id="' + a.Q + '-bugreport-comment" style="width:' + (a.F - 35) + "px;height:" + (a.D - 300) / 2 + 'px;"></textarea></div><div class="zc-form-row-label zc-form-s1">' + ZC.EV["bugreport-jsondata"] +
            '</div><div class="zc-form-row-element"><textarea id="' + a.Q + '-bugreport-json" style="width:' + (a.F - 35) + "px;height:" + (a.D - 210) / 2 + 'px;"></textarea></div><div class="zc-form-row-label zc-form-s1">' + ZC.EV["bugreport-youremail"] + (a.F >= 510 ? "<span>(" + ZC.EV["bugreport-infoemail"] + ")</span>" : "") + '</div><div class="zc-form-row-element"><input type="text" id="' + a.Q + '-bugreport-email" style="width:' + (a.F - 35) + 'px;"/></div><div class="zc-form-row-element zc-form-row-last"><input type="button" value="' + ZC.EV["bugreport-submit"] +
            '" id="' + a.Q + '-bugreport-submit"/><input type="button" value="' + ZC.EV["bugreport-cancel"] + '" id="' + a.Q + '-bugreport-cancel"/></div>';
        c.innerHTML = b;
        ZC.A3("#" + a.Q + "-bugreport-json").val(ZC.BV.VZ(a.H.json));
        ZC.A3("#" + a.Q + "-bugreport-cancel").bind("click", function() {
            ZC.K.F6(a.Q + "-bugreport")
        });
        ZC.A3("#" + a.Q + "-bugreport-submit").bind("click", function() {
            var e = ZC.A3("#" + a.Q + "-bugreport-email");
            if (/^((\w+\+*\-*)+\.?)+@((\w+\+*\-*)+\.?)*[\w-]+\.[a-z]{2,6}$/.test(e.val())) {
                var f = "";
                if (ZC.canvas) f = a.PL("png");
                var g = a.H.json.replace(/\r|\n|\t|(\s{2,})/g, ""),
                    h = "",
                    k = [];
                ZC.A3("#" + a.Q + "-chkcapture").attr("checked") && k.push("****IMAGE:", f);
                ZC.A3("#" + a.Q + "-chkdata").attr("checked") && k.push("****JSON:", g);
                k.push("****COMMENT:", ZC.A3("#" + a.Q + "-bugreport-comment").val(), "****EMAIL:", e.val(), "****VERSION:", ZC.VERSION, "****WIDTH:", a.F, "****HEIGHT:", a.D, "****URL:", window.location.href, "****UA:", navigator.userAgent, "****RENDER:", a.A5.toUpperCase(), "****RESOLUTION:", screen.width + "x" + screen.height);
                for (e = 0; e < k.length -
                    1; e += 2) h += k[e] + encodeURIComponent(k[e + 1]);
                h += "****END";
                e = ZC.K.YZ(ZC.AJ(a.Q + "-bugreport"));
                k = e.createElement("FORM");
                k.action = "http://www.zingchart.com/support/submitreportH5.php";
                k.method = "post";
                e.body.appendChild(k);
                e = e.createElement("INPUT");
                e.type = "text";
                e.name = "data";
                e.value = h;
                k.appendChild(e);
                k.submit();
                window.setTimeout(function() {
                    alert(ZC.EV["bugreport-confirm"]);
                    ZC.K.F6(a.Q + "-bugreport")
                }, 1E3)
            } else e.val(ZC.EV["bugreport-emailmandatory"])
        })
    }
};
ZC.AC = {
    TE: 1,
    DX: 0,
    DU: 0,
    FK: 40
};
ZC.DZ = {
    DH: function(a, c, b, e, f, g, h, k, l) {
        l = l || "z";
        a = new ZC.PS(a, c);
        switch (l) {
            case "x":
                var m = new ZC.C3(c, b, f, h),
                    o = new ZC.C3(c, e, f, h),
                    n = new ZC.C3(c, e, g, k),
                    p = new ZC.C3(c, b, g, k);
                break;
            case "y":
                m = new ZC.C3(c, b, f, h);
                o = new ZC.C3(c, b, g, h);
                n = new ZC.C3(c, e, g, k);
                p = new ZC.C3(c, e, f, k);
                break;
            case "z":
                m = new ZC.C3(c, b, f, h);
                o = new ZC.C3(c, b, f, k);
                n = new ZC.C3(c, e, g, k);
                p = new ZC.C3(c, e, g, h)
        }
        a.add(m);
        a.add(o);
        a.add(n);
        a.add(p);
        return a
    },
    DL: function(a, c, b, e) {
        if (typeof e == ZC._[33]) e = 0;
        a = new ZC.PS(a, c);
        for (var f = 0, g = b.length; f <
            g; f++) e ? a.add(b[f]) : a.add(new ZC.C3(c, b[f][0], b[f][1], b[f][2]));
        return a
    }
};
ZC.C3 = ZC.BT.B2({
    $i: function(a, c, b, e) {
        this.C = a;
        this.iX = c;
        this.iY = b;
        this.iZ = e;
        this.ZK = this.DT = this.E1 = 0;
        this.DP = [];
        var f = this.C.DD.angle;
        a = this.C.DD.zoom;
        if (this.C.DD.true3d) {
            c = {
                x: c,
                y: b,
                z: e
            };
            b = {
                x: 0,
                y: 0,
                z: 0
            };
            var g = {
                x: this.C.DD[ZC._[29]],
                y: this.C.DD[ZC._[30]],
                z: this.C.DD[ZC._[31]]
            };
            e = ZC.CJ(g.x);
            f = ZC.CJ(g.y);
            var h = ZC.CJ(g.z),
                k = ZC.CT(g.x),
                l = ZC.CT(g.y);
            g = ZC.CT(g.z);
            this.E1 = l * (h * (c.y - b.y) + g * (c.x - b.x)) - f * (c.z - b.z);
            this.DT = e * (l * (c.z - b.z) + f * (h * (c.y - b.y) + g * (c.x - b.x))) + k * (g * (c.y - b.y) - h * (c.x - b.x));
            this.ZK = k * (l *
                (c.z - b.z) + f * (h * (c.y - b.y) + g * (c.x - b.x))) - e * (g * (c.y - b.y) - h * (c.x - b.x));
            this.DP[0] = ZC.AC.DX + ZC.AC.TE / (ZC.AC.TE + this.ZK) * this.E1 * a;
            this.DP[1] = ZC.AC.DU + ZC.AC.TE / (ZC.AC.TE + this.ZK) * this.DT * a
        } else {
            this.DP[0] = ZC.AC.DX + c + e * ZC.CT(f) * a;
            this.DP[1] = ZC.AC.DU + b - e * ZC.CJ(f) * a
        }
    }
});
ZC.PS = ZC.BT.B2({
    $i: function(a, c) {
        this.C = c;
        this.R = a;
        this.Q = "";
        this.KY = 0;
        this.IU = [1, 1, 1];
        this.B = [];
        this.RY = this.KS = -9999;
        this.X6 = this.RO = this.T9 = 9999;
        this.ZH = this.VH = this.YH = 0
    },
    add: function(a) {
        this.B.push(a)
    },
    A0Y: function() {
        for (var a = this.B.length, c = 0; c < a; c++) {
            var b = this.B[c];
            this.KS = ZC.BN(this.KS, b.iZ);
            if (this.C.DD.true3d == 1) {
                this.T9 = ZC.CO(this.T9, b.iZ);
                this.RY = ZC.BN(this.RY, b.ZK);
                this.VH += b.iY
            } else {
                this.RO = ZC.CO(this.RO, b.iX);
                this.X6 = ZC.CO(this.X6, b.iY);
                this.YH += b.iX;
                this.VH += b.iY;
                this.ZH += b.iZ
            }
        }
        this.YH /=
            a;
        this.VH /= a;
        this.ZH /= a
    },
    DA: function() {
        for (var a = "", c = 0, b = this.B.length; c < b; c++) a += ZC._i_(this.B[c].DP[0] + ZC.MAPTX) + "," + ZC._i_(this.B[c].DP[1] + ZC.MAPTX) + ",";
        return a = a.substring(0, a.length - 1)
    }
});
ZC.NV = ZC.BT.B2({
    $i: function() {
        this.TP = [];
        this.NY = []
    },
    clear: function() {
        this.TP = [];
        this.NY = []
    },
    add: function(a) {
        this.TP.push(a)
    },
    sortFaces: function(a, c) {
        if (zingchart.V3D == 1) return a[0][0] > c[0][0] ? -1 : a[0][0] < c[0][0] ? 1 : a[0][1] > c[0][1] ? 1 : a[0][1] < c[0][1] ? -1 : a[0][2] > c[0][2] ? -1 : a[0][2] < c[0][2] ? 1 : a[0][3] > c[0][3] ? -1 : a[0][3] < c[0][3] ? 1 : 0;
        else if (zingchart.V3D == 2) return a[0][0] > c[0][0] ? -1 : a[0][0] < c[0][0] ? 1 : a[0][1] > c[0][1] ? 1 : a[0][1] < c[0][1] ? -1 : a[0][2] > c[0][2] ? 1 : a[0][2] < c[0][2] ? -1 : 0
    }
});
ZC.WK = ZC.BT.B2({
    $i: function(a) {
        this.I = a;
        this.AL = null
    },
    onmouseout: function() {
        ZC.mobile || this.hide()
    },
    hide: function() {
        ZC.K.F6(this.I.Q + "-tooltip");
        this.AL && this.I.A5 == "svg" && this.AL.H["html-mode"] && ZC.K.F6(this.I.Q + "-tooltip-text-float")
    },
    show: function(a) {
        var c;
        c = this.I.Q;
        if (ZC.A3("#" + c + "-tooltip-c").length != 0) {
            var b = ZC.K.L3(a),
                e = ZC.A3("#" + c + "-main");
            if (this.I.A5 == "svg") e = ZC.A3("#" + c + "-top");
            a = b[0] - e.offset().left - this.AL.F / 2 + ZC._i_(this.AL.H["offset-x"]);
            b = b[1] - e.offset().top - this.AL.D + ZC._i_(this.AL.H["offset-y"]);
            if (a < 0)
                if (a + this.AL.F / 2 < this.I.F) a += this.AL.F / 2;
                else a = 0;
            if (a + this.AL.F > this.I.F)
                if (a - this.AL.F / 2 > 0) a -= this.AL.F / 2;
                else a = this.I.F - this.AL.F;
            if (b < 0) b = b + 2 * this.AL.D - 2 * this.AL.H["offset-y"] < this.I.D ? b + this.AL.D - 2 * this.AL.H["offset-y"] : 0;
            if (b + this.AL.D > this.I.D) b = this.I.D - this.AL.D;
            switch (this.I.A5) {
                case "svg":
                    ZC.AJ(c + "-tooltip").setAttribute("transform", "translate(" + a + "," + b + ")");
                    this.AL.H["html-mode"] && ZC.K.M2(ZC.AJ(c + "-tooltip-text-float"), {
                        left: a + e.offset().left + this.AL.GE + "px",
                        top: b + e.offset().top +
                            this.AL.IJ + "px"
                    });
                    break;
                case "vml":
                    ZC.K.M2(ZC.AJ(c + "-tooltip"), {
                        left: a + "px",
                        top: b + "px"
                    });
                    break;
                case "canvas":
                    ZC.K.M2(ZC.AJ(c + "-tooltip-c"), {
                        left: a + "px",
                        top: b + "px"
                    });
                    if ((c = ZC.AJ(c + "-tooltip-text")) != null) ZC.K.M2(c, {
                        width: this.AL.F + "px",
                        height: this.AL.D + "px",
                        left: a + "px",
                        top: b + "px"
                    })
            }
        }
    },
    onmousemove: function(a) {
        this.show(a)
    },
    onmouseover: function(a) {
        if (!(this.I.FU && this.I.FU.KJ)) {
            var c = this.I.Q,
                b = a.targetid || a.target.id,
                e = b.replace(/--([a-zA-Z0-9]+)/, "").split("-").reverse(),
                f = b.split("--");
            b = 0;
            if (e[1] ==
                "node" && e[3] == "plot" && e[4] == "plotset") b = 1;
            ZC.K.F6([c + "-tooltip-text", c + "-tooltip"]);
            if (b) {
                var g = this.I.JY(e[5]),
                    h = g.AZ.AA[e[2]],
                    k = h.M[e[0]];
                ZC.A3("#" + c + "-graph-" + e[5] + "-plot-" + e[2] + "-bg-hover-c").show()
            } else g = this.I.JY(e[3]); if (ZC.AJ(c + "-tooltip") == null) {
                ZC.K.IG({
                    id: c + "-tooltip",
                    p: ZC.AJ(c + "-main"),
                    cls: "zc-abs",
                    wh: this.I.F + "/" + this.I.D,
                    overflow: "hidden"
                }, this.I.A5);
                ZC.K.H9({
                    id: c + "-tooltip-c",
                    p: ZC.AJ(c + "-tooltip"),
                    cls: "zc-abs",
                    tl: "-999/-999",
                    width: 140,
                    height: 60
                }, this.I.A5)
            }
            this.AL = new ZC.DC(this);
            this.AL.A = this.I;
            this.AL.Q = c + "-tooltip-text";
            this.AL.append(g.AL.o);
            if (b) {
                this.AL.append(h.AL.o);
                f.length == 2 && this.AL.append(h.ZJ(f[1]))
            } else {
                f = 0;
                if (e[2] == "shape")
                    for (var l = 0, m = g.IR.length; l < m; l++)
                        if (g.Q + "-shape-" + e[1] == g.IR[l].Q && g.IR[l].AL) {
                            this.AL.append(g.IR[l].AL.o);
                            f = 1
                        }
                if (e[2] == "label") {
                    l = 0;
                    for (m = g.BD.length; l < m; l++)
                        if (g.Q + "-label-" + e[1] == g.BD[l].Q && g.BD[l].AL) {
                            this.AL.append(g.BD[l].AL.o);
                            f = 1
                        }
                }
                if (!f) return
            }
            this.AL.iX = 0;
            this.AL.iY = 0;
            this.AL.Y = this.AL.C6 = ZC.AJ(c + "-tooltip-c");
            if (b) {
                e = k.R9();
                this.AL.X = this.AL.A6 = ZC.BV.L0(e[ZC._[0]]);
                this.AL.BO = e.color;
                this.AL.B0 = h.PF;
                var o = ZC.BV.PA(this.AL.o);
                this.AL.KC = function(n) {
                    return k.KC(n, o)
                };
                this.AL.H.plotidx = k.A.J;
                this.AL.H.nodeidx = k.J
            }
            this.AL.parse();
            this.AL.H["html-mode"] = 0;
            if ((E = this.AL.o["html-mode"]) != null) this.AL.H["html-mode"] = ZC._b_(E);
            if (b) {
                this.AL.GM = function(n) {
                    return k.GM(n)
                };
                this.AL.C2() && this.AL.parse()
            }
            if ((this.I.A5 == "canvas" || this.I.A5 == "vml") && this.AL.A7 != 0) {
                g = e = h = 1.25 * ZC.BN(this.AL.F, this.AL.D) + this.AL.G4;
                this.AL.iX += (h - this.AL.F) /
                    2;
                this.AL.iY += (h - this.AL.D) / 2;
                this.AL.H["offset-x"] = -(h - this.AL.F) / 2 + this.AL.C0;
                this.AL.H["offset-y"] = -(h - this.AL.D) / 2 + this.AL.C4
            } else {
                e = this.AL.F + this.AL.G4;
                g = this.AL.D + this.AL.G4;
                if (this.AL.GY) switch (this.AL.FA) {
                    case "bottom":
                    case "top":
                        g += this.AL.FW;
                        break;
                    case "left":
                    case "right":
                        e += this.AL.G7
                }
                this.AL.H["offset-x"] = this.AL.C0;
                this.AL.H["offset-y"] = this.AL.C4
            }
            ZC.A3("#" + c + "-tooltip-c").attr(ZC._[21], e).attr(ZC._[22], g);
            this.I.A5 == "vml" && ZC.K.M2(ZC.AJ(c + "-tooltip-c"), {
                top: 0,
                left: 0
            });
            this.AL.C0 = 0;
            this.AL.C4 = 0;
            this.AL.AK && this.AL.B0 != "" && this.AL.paint();
            if (b) {
                k.YG();
                k.C.N7(true)
            }
            this.show(a)
        }
    }
});
ZC.V1 = ZC.FY.B2({
    $i: function(a) {
        this.b(a);
        this.I = a;
        this.KJ = 0;
        this.C = null;
        this.FZ = this.EN = this.G0 = this.EP = 0;
        this.BU = this.AN = null;
        this.QL = this.YT = this.PQ = 0;
        this.PG = this.O7 = this.O2 = null
    },
    parse: function() {
        this.append(this.C.FU.o);
        this.b();
        if (this.C.AM["3d"]) this.QL = 1;
        this.OT("preserve-zoom", "QL", "b")
    },
    unbind: function() {
        ZC.A3("#" + this.I.Q + "-img").unbind(ZC.K.BL(ZC._[49]), this.O2)
    },
    bind: function() {
        var a = this,
            c = a.I.Q;
        a.O2 = function(b) {
            if (b.target.id.indexOf("-legend-header-area") == -1) {
                ZC.mobile || b.preventDefault();
                a.I.hideCM();
                if (!(!ZC.mobile && b.which > 1))
                    if (!(a.I.A5 == "vml" && b.target.className.indexOf("zc-node-area") != -1)) {
                        if (b.shiftKey) a.PQ = 1;
                        var e = ZC.K.L3(b),
                            f = ZC.A3("#" + c + "-top").offset();
                        b = e[0] - f.left;
                        e = e[1] - f.top;
                        if (a.PQ) a.YT = b;
                        f = 0;
                        for (var g, h = 0, k = a.I.B1.length; h < k; h++) {
                            g = a.I.B1[h].O;
                            if (ZC.DK(b, g.iX - 5, g.iX + g.F + 5) && ZC.DK(e, g.iY - 5, g.iY + g.D + 5)) a.C = a.I.B1[h]
                        }
                        if (a.C != null) {
                            g = a.C.O;
                            if (a.C.AZ.AA.length > 0) {
                                a.AN = a.C.AY(a.C.AZ.AA[0].B6("k")[0]);
                                a.BU = a.C.AY(a.C.AZ.AA[0].B6("v")[0])
                            }
                            if (a.AN != null && a.BU != null)
                                if (a.AN.IP ||
                                    a.BU.IP) {
                                    a.EP = a.AN.EX ? e : b;
                                    a.EN = a.BU.EX ? b : e;
                                    f = 1;
                                    if (a.AN.IP)
                                        if (a.AN.EX) {
                                            a.EP = ZC.BN(a.EP, g.iY);
                                            a.EP = ZC.CO(a.EP, g.iY + g.D)
                                        } else {
                                            a.EP = ZC.BN(a.EP, g.iX);
                                            a.EP = ZC.CO(a.EP, g.iX + g.F)
                                        } else a.EP = a.AN.EX ? g.iY : g.iX; if (a.BU.IP)
                                        if (a.BU.EX) {
                                            a.EN = ZC.BN(a.EN, g.iX);
                                            a.EN = ZC.CO(a.EN, g.iX + g.F)
                                        } else {
                                            a.EN = ZC.BN(a.EN, g.iY);
                                            a.EN = ZC.CO(a.EN, g.iY + g.D)
                                        } else a.EN = a.BU.EX ? g.iX : g.iY
                                }
                        }
                        if (f) {
                            a.G0 = a.EP;
                            a.FZ = a.EN;
                            a.KJ = 1;
                            ZC.A3(document.body).bind(ZC.K.BL(ZC._[50]), a.O7);
                            ZC.A3(document.body).bind(ZC.K.BL(ZC._[51]), a.PG);
                            if (a.PQ) document.body.style.cursor =
                                "pointer";
                            else {
                                a.parse();
                                a.C.AM["3d"] || ZC.K.I2({
                                    id: c + "-zoom",
                                    p: ZC.AJ(c + "-top"),
                                    top: a.BU.EX ? a.EP : a.EN,
                                    left: a.AN.EX ? a.EN : a.EP,
                                    wh: "1/1",
                                    position: "absolute",
                                    border: a.AU + "px solid " + a.BI,
                                    background: a.X,
                                    opacity: a.A9
                                });
                                document.body.style.cursor = "crosshair"
                            }
                        }
                        if (!ZC.mobile) return false
                    }
            }
        };
        a.O7 = function(b) {
            b.preventDefault();
            if (a.KJ) {
                ZC.move = 1;
                var e = ZC.K.L3(b),
                    f = ZC.A3("#" + c + "-top").offset();
                b = e[0] - f.left;
                e = e[1] - f.top;
                a.G0 = a.AN.EX ? e : b;
                a.FZ = a.BU.EX ? b : e;
                if (!a.PQ) {
                    b = a.C.O;
                    if (a.AN.IP)
                        if (a.AN.EX) {
                            a.G0 = ZC.BN(a.G0,
                                b.iY);
                            a.G0 = ZC.CO(a.G0, b.iY + b.D);
                            if (a.AN.P0) {
                                a.EP = a.AN.iY + a.AN.S * ZC._i_((a.EP - a.AN.iY) / a.AN.S);
                                a.G0 = a.AN.iY + a.AN.S * ZC._i_((a.G0 - a.AN.iY) / a.AN.S)
                            }
                        } else {
                            a.G0 = ZC.BN(a.G0, b.iX);
                            a.G0 = ZC.CO(a.G0, b.iX + b.F);
                            if (a.AN.P0) {
                                a.EP = a.AN.iX + a.AN.S * ZC._i_((a.EP - a.AN.iX) / a.AN.S);
                                a.G0 = a.AN.iX + a.AN.S * ZC._i_((a.G0 - a.AN.iX) / a.AN.S)
                            }
                        } else a.G0 = a.AN.EX ? b.iY + b.D : b.iX + b.F; if (a.BU.IP)
                        if (a.BU.EX) {
                            a.FZ = ZC.BN(a.FZ, b.iX);
                            a.FZ = ZC.CO(a.FZ, b.iX + b.F);
                            if (a.BU.P0) {
                                a.EN = a.BU.iX + a.BU.S * ZC._i_((a.EN - a.BU.iX) / a.BU.S);
                                a.FZ = a.BU.iX + a.BU.S * ZC._i_((a.FZ -
                                    a.BU.iX) / a.BU.S)
                            }
                        } else {
                            a.FZ = ZC.BN(a.FZ, b.iY);
                            a.FZ = ZC.CO(a.FZ, b.iY + b.D);
                            if (a.BU.P0) {
                                a.EN = a.BU.iY + a.BU.S * ZC._i_((a.EN - a.BU.iY) / a.BU.S);
                                a.FZ = a.BU.iY + a.BU.S * ZC._i_((a.FZ - a.BU.iY) / a.BU.S)
                            }
                        } else a.FZ = a.BU.EX ? b.iX + b.F : b.iY + b.D;
                    var g, h;
                    f = ZC.A3.browser.msie ? 0 : 2 * a.AU;
                    if (a.C.AM["3d"]) f = 0;
                    b = ZC.AJ(c + "-zoom");
                    if (a.AN.EX && a.BU.EX) {
                        e = ZC._a_(a.FZ - a.EN - f);
                        f = ZC._a_(a.G0 - a.EP - f);
                        g = ZC.CO(a.EN, a.FZ);
                        h = ZC.CO(a.EP, a.G0)
                    } else {
                        e = ZC._a_(a.G0 - a.EP - f);
                        f = ZC._a_(a.FZ - a.EN - f);
                        g = ZC.CO(a.EP, a.G0);
                        h = ZC.CO(a.EN, a.FZ)
                    } if (a.C.AM["3d"]) {
                        a.C.J2();
                        var k = ZC.AJ(a.I.Q + "-guide-c");
                        ZC.K.IW(k, a.I.A5, a.C.iX, a.C.iY, a.C.F, a.C.D);
                        ZC.A3(".zc-guide-label").remove();
                        b = new ZC.D5(a);
                        b.Y = k;
                        b.X = b.A6 = a.X;
                        b.BI = a.BI;
                        b.AU = a.AU;
                        b.A9 = a.A9;
                        b.B = [
                            [g, h],
                            [g + e, h],
                            [g + e, h + f],
                            [g, h + f],
                            [g, h]
                        ];
                        for (e = 0; e < b.B.length; e++) {
                            f = new ZC.C3(a.C, b.B[e][0] - ZC.AC.DX, b.B[e][1] - ZC.AC.DU, 0);
                            b.B[e][0] = f.DP[0];
                            b.B[e][1] = f.DP[1]
                        }
                        b.parse();
                        b.paint()
                    } else {
                        b.style.width = e + "px";
                        b.style.height = f + "px";
                        b.style.left = g + "px";
                        b.style.top = h + "px"
                    }
                }
            }
            return false
        };
        a.PG = function() {
            if (a.C) {
                ZC.move = 0;
                a.KJ = 0;
                document.body.style.cursor =
                    "auto";
                ZC.K.F6(c + "-zoom");
                if (a.C.AM["3d"]) {
                    a.C.J2();
                    var b = ZC.AJ(a.I.Q + "-guide-c");
                    ZC.K.IW(b, a.I.A5, a.C.iX, a.C.iY, a.C.F, a.C.D);
                    ZC.A3(".zc-guide-label").remove()
                }
                ZC.A3(document.body).unbind(ZC.K.BL(ZC._[50]), a.O7);
                ZC.A3(document.body).unbind(ZC.K.BL(ZC._[51]), a.PG);
                if (a.PQ) a.PQ = 0;
                else {
                    b = {
                        graphid: a.C.Q
                    };
                    if (ZC._a_(a.EP - a.G0) + ZC._a_(a.EN - a.FZ) > 20) {
                        var e = 0,
                            f = 0;
                        if (a.AN.EX && a.BU.EX) {
                            var g = a.AN.K8(ZC.CO(a.EP, a.G0)),
                                h = a.AN.K8(ZC.BN(a.EP, a.G0));
                            if (ZC._a_(h - g) > 1) {
                                b.zoomx = 1;
                                b.xmin = ZC.CO(g, h);
                                b.xmax = ZC.BN(g, h);
                                e = 1
                            }
                            g = a.BU.OS(ZC.BN(a.EN, a.FZ));
                            h = a.BU.OS(ZC.CO(a.EN, a.FZ));
                            var k = (a.BU.NA - a.BU.NB) / 1E3;
                            if (ZC._a_(h - g) > k) {
                                b.zoomy = 1;
                                b.ymin = ZC.CO(g, h);
                                b.ymax = ZC.BN(g, h);
                                f = 1
                            }
                        } else {
                            for (var l = a.C.B6("k"), m = 0, o = l.length; m < o; m++)
                                if ((P = l[m]) && l[m].IP) {
                                    var n = P.J == 1 ? "" : "-" + P.J;
                                    g = P.K8(ZC.CO(a.EP, a.G0));
                                    h = P.K8(ZC.BN(a.EP, a.G0));
                                    if (ZC._a_(h - g) > 1) {
                                        b["zoomx" + n] = 1;
                                        b["xmin" + n] = ZC.CO(g, h);
                                        b["xmax" + n] = ZC.BN(g, h);
                                        e = 1
                                    }
                                }
                            l = a.C.B6("v");
                            m = 0;
                            for (o = l.length; m < o; m++)
                                if ((A0 = l[m]) && l[m].IP) {
                                    n = A0.J == 1 ? "" : "-" + A0.J;
                                    g = A0.OS(ZC.BN(a.EN, a.FZ));
                                    h =
                                        A0.OS(ZC.CO(a.EN, a.FZ));
                                    k = (A0.NA - A0.NB) / 1E3;
                                    if (ZC._a_(h - g) > k) {
                                        b["zoomy" + n] = 1;
                                        b["ymin" + n] = ZC.CO(g, h);
                                        b["ymax" + n] = ZC.BN(g, h);
                                        f = 1
                                    }
                                }
                        } if (e || f) a.C.A.KO(b)
                    }
                    a.C = null
                }
            }
        };
        if (!ZC.mobile || zingchart.TOUCHZOOM == "normal") ZC.A3("#" + c + "-img").bind(ZC.K.BL(ZC._[49]), a.O2)
    }
});
ZC.WI = ZC.E7.B2({
    $i: function(a) {
        this.b(a);
        this.FH = 1;
        this.ZR = 0;
        this.C = a;
        this.I = a.A;
        this.KJ = 0;
        this.RX = this.UY = this.MJ = this.LS = this.EH = this.F9 = this.HQ = this.FI = this.FR = this.Y = this.AX = this.GR = null;
        this.JU = this.H5 = this.HV = 0;
        this.NE = this.MQ = this.MN = null
    },
    parse: function() {
        var a;
        this.Q = this.C.Q + "-preview";
        this.OT_a([
            ["live", "ZR", "b"],
            ["min-distance", "JU", "i"]
        ]);
        var c = "(" + this.C.AB + ").preview",
            b = this.I.AQ;
        this.AX = new ZC.FY(this.C);
        this.AX.Q = this.C.Q + "-preview-viewport";
        b.load(this.AX.o, [c]);
        this.AX.append(this.o);
        this.AX.parse();
        this.LS = new ZC.E7(this.C);
        b.load(this.LS.o, [c + ".mask"]);
        if ((a = this.o.mask) != null) this.LS.append(a);
        this.LS.parse();
        this.MJ = new ZC.E7(this.C);
        b.load(this.MJ.o, [c + ".active"]);
        if ((a = this.o.active) != null) this.MJ.append(a);
        this.MJ.parse();
        this.F9 = new ZC.FY(this);
        this.EH = new ZC.FY(this);
        b.load(this.F9.o, [c + ".handler", c + ".handler-left"]);
        b.load(this.EH.o, [c + ".handler", c + ".handler-right"]);
        if ((a = this.o.handler) != null) {
            this.F9.append(a);
            this.EH.append(a)
        }
        if ((a = this.o["handler-left"]) != null) this.F9.append(a);
        if ((a = this.o["handler-right"]) != null) this.EH.append(a);
        this.F9.parse();
        this.EH.parse()
    },
    paint: function() {
        this.Y = this.AX.Y = ZC.AJ(this.I.Q + "-static-c");
        this.AX.paint();
        var a = ZC.AJ(this.I.Q + "-top");
        if (this.JU == 0) {
            var c = this.C.B6("k")[0];
            this.JU = ZC.BN(1, ZC._i_(2 * this.AX.F / c.W.length))
        }
        var b = this.F9.F;
        c = this.F9.D;
        this.QG = ZC.mobile ? 40 : ZC.ie67 ? 0 : 20;
        this.UY = ZC.K.I2({
            cls: "zc-abs zc-preview-mask zc-preview-mask-left " + this.C.Q + "-preview-mask",
            id: this.Q + "-mask-x-left",
            wh: "0/" + this.AX.D,
            tl: this.AX.iY + "/" + this.AX.iX,
            background: this.LS.X,
            opacity: this.LS.A9,
            p: a
        });
        this.RX = ZC.K.I2({
            cls: "zc-abs zc-preview-mask zc-preview-mask-right " + this.C.Q + "-preview-mask",
            id: this.Q + "-mask-x-right",
            wh: "0/" + this.AX.D,
            tl: this.AX.iY + "/" + (this.AX.iX + this.AX.F),
            background: this.LS.X,
            opacity: this.LS.A9,
            p: a
        });
        this.HQ = ZC.K.I2({
            cls: "zc-abs zc-preview-handler zc-preview-handler-middle " + this.C.Q + "-preview-handler",
            id: this.Q + "-handler-x-middle",
            wh: this.AX.F + "/" + this.AX.D,
            tl: this.AX.iY + "/" + this.AX.iX,
            background: this.MJ.X,
            opacity: this.MJ.A9,
            p: a
        });
        this.HQ.style.cursor = "pointer";
        this.FR = ZC.K.I2({
            cls: "zc-abs zc-preview-handler zc-preview-handler-left " + this.C.Q + "-preview-handler",
            id: this.Q + "-handler-x-left",
            wh: ZC.quirks ? null : b + "/" + c,
            "line-height": "10%",
            tl: ZC._i_(this.AX.iY + (this.AX.D - c) / 4 - this.QG / 2) + "/" + ZC._i_(this.AX.iX - b / 2 - this.QG / 2),
            p: a,
            border: this.QG / 2 + "px solid transparent"
        });
        this.FR.style.cursor = "pointer";
        var e = this.FR;
        if (this.I.A5 == "svg") {
            e = ZC.K.DJ("svg", ZC._[38]);
            ZC.K.EG(e, {
                version: "1.1",
                width: b,
                height: c
            });
            this.FR.appendChild(e);
            e = e
        }
        this.F9.Y = ZC.K.H9({
            cls: "zc-no-print",
            id: this.Q + "-handler-x-left-c",
            wh: b + "/" + c,
            p: e
        }, this.I.A5);
        this.F9.Q = this.Q + "-handler-x-left-c-preview";
        this.F9.iX = 0;
        this.F9.iY = 0;
        this.F9.paint();
        e = ZC.K.CN(this.I.usc() ? this.I.Q + "-main-c" : this.Q + "-handler-x-left-c", this.I.A5);
        var f = this.F9.AI,
            g = this.F9.AU,
            h = ZC._i_(b / 2 - f);
        b = ZC._i_(b / 2 + f);
        f = g + 3;
        c = c - g - 2;
        c = [
            [h, f],
            [h, c], null, [b, f],
            [b, c]
        ];
        ZC.BQ.paint(e, this.F9, c);
        b = this.EH.F;
        c = this.EH.D;
        this.FI = ZC.K.I2({
            cls: "zc-abs zc-preview-handler zc-preview-handler-right " + this.C.Q +
                "-preview-handler",
            id: this.Q + "-handler-x-right",
            wh: ZC.quirks ? null : b + "/" + c,
            "line-height": "10%",
            tl: ZC._i_(this.AX.iY + this.AX.D - this.EH.D - (this.AX.D - c) / 4 - this.QG / 2) + "/" + ZC._i_(this.AX.iX + this.AX.F - this.EH.F / 2 - this.QG / 2),
            p: a,
            border: this.QG / 2 + "px solid transparent"
        });
        this.FI.style.cursor = "pointer";
        a = this.FI;
        if (this.I.A5 == "svg") {
            a = ZC.K.DJ("svg", ZC._[38]);
            ZC.K.EG(a, {
                version: "1.1",
                width: b,
                height: c
            });
            this.FI.appendChild(a);
            a = a
        }
        this.EH.Y = ZC.K.H9({
            cls: "zc-no-print",
            id: this.Q + "-handler-x-right-c",
            wh: b + "/" + c,
            p: a
        }, this.I.A5);
        this.EH.Q = this.Q + "-handler-x-right-c-preview";
        this.EH.iX = 0;
        this.EH.iY = 0;
        this.EH.paint();
        e = ZC.K.CN(this.I.usc() ? this.I.Q + "-main-c" : this.Q + "-handler-x-right-c", this.I.A5);
        g = this.EH.AI;
        a = this.EH.AU;
        h = ZC._i_(b / 2 - g);
        b = ZC._i_(b / 2 + g);
        f = a + 3;
        c = c - a - 2;
        c = [
            [h, f],
            [h, c], null, [b, f],
            [b, c]
        ];
        ZC.BQ.paint(e, this.EH, c);
        this.HV = 0;
        this.H5 = this.AX.F;
        this.bind()
    },
    update: function(a, c, b) {
        if (b == null) b = 0;
        var e = this.C.B6("k")[0];
        if (b) {
            if (e) {
                if (a == null) a = e.HT;
                if (c == null) c = e.HW;
                this.update((a - e.HT) * this.AX.F / (e.HW -
                    e.HT), (c - e.HT) * this.AX.F / (e.HW - e.HT))
            }
        } else {
            if (c - a < this.JU)
                if (this.GR == this.FI) c = a + this.JU;
                else if (this.GR == this.FR) a = c - this.JU;
            b = 1;
            if (a >= c) {
                if (this.GR == this.FR) this.update(c - 1, c);
                else this.GR == this.FI && this.update(a, a + 1);
                b = 0
            }
            if (a < 0) {
                if (this.GR == this.FR) this.update(0, c);
                else this.GR == this.HQ && this.update(0, ZC.A3(this.HQ).width());
                b = 0
            }
            if (c > this.AX.F) {
                if (this.GR == this.FI) this.update(a, this.AX.F);
                else this.GR == this.HQ && this.update(this.AX.F - ZC.A3(this.HQ).width(), this.AX.F);
                b = 0
            }
            if (b) {
                if (e.P0) {
                    e = this.AX.F /
                        (e.W.length - 1);
                    a = e * Math.round(a / e);
                    c = ZC.CO(e * Math.round(c / e), this.AX.F)
                }
                this.HV = a;
                this.H5 = c;
                this.FR.style.left = ZC._i_(this.AX.iX + this.HV - this.F9.F / 2 - this.QG / 2) + "px";
                this.UY.style.width = ZC._i_(this.HV) + "px";
                this.FI.style.left = ZC._i_(this.AX.iX + this.H5 - this.EH.F / 2 - this.QG / 2) + "px";
                this.RX.style.left = ZC._i_(this.AX.iX + this.H5) + "px";
                this.RX.style.width = ZC._i_(this.AX.F - this.H5) + "px";
                this.HQ.style.left = ZC._i_(this.AX.iX + this.HV) + "px";
                this.HQ.style.width = ZC._i_(this.H5 - this.HV) + "px";
                if (this.ZR && this.KJ) {
                    this.C.JP =
                        1;
                    this.zoom(true)
                }
            }
        }
    },
    zoom: function(a) {
        a = {
            graphid: this.C.Q,
            preview: 1,
            zooming: a
        };
        for (var c = this.C.B6("k"), b = 0, e = c.length; b < e; b++)
            if (P = c[b]) {
                var f = P.J == 1 ? "" : "-" + P.J;
                a["zoomx" + f] = 1;
                a["xmin" + f] = ZC._i_(this.HV / this.AX.F * (P.HW - P.HT));
                a["xmax" + f] = ZC._i_(this.H5 / this.AX.F * (P.HW - P.HT))
            }
        this.I.KO(a)
    },
    unbind: function() {
        ZC.A3("." + this.C.Q + "-preview-handler").unbind(ZC.K.BL(ZC._[49]), this.MN);
        ZC.A3("." + this.C.Q + "-preview-mask").unbind(ZC.K.BL("click"), this.A2V)
    },
    bind: function() {
        var a = this,
            c = a.I.Q,
            b = 0;
        a.A2V = function(e) {
            e.preventDefault();
            e = ZC.K.L3(e);
            var f = ZC.A3("#" + c + "-top").offset();
            e = e[0] - f.left - a.AX.iX;
            f = a.H5 - a.HV;
            if (e - f / 2 < 0) {
                a.HV = 0;
                a.H5 = f
            } else if (e + f / 2 > a.AX.F) {
                a.HV = a.AX.F - f;
                a.H5 = a.AX.F
            } else {
                a.HV = ZC._i_(e - f / 2);
                a.H5 = ZC._i_(e + f / 2)
            }
            a.KJ = 0;
            a.C.JP = 0;
            a.update(a.HV, a.H5);
            a.zoom(false);
            return false
        };
        a.MN = function(e) {
            e.preventDefault();
            if (a.I.FU) {
                a.I.FU.C = a.C;
                a.I.FU.parse();
                for (var f = e.target; f && f.tagName.toUpperCase() != "BODY";) {
                    if (ZC.K.Z3(f).indexOf("zc-preview-handler") != -1) break;
                    f = f.parentNode
                }
                if (!(!ZC.mobile && e.which > 1))
                    if (f) {
                        e = ZC.K.L3(e);
                        var g = ZC.A3("#" + c + "-top").offset();
                        e = e[0] - g.left - a.AX.iX;
                        if (f.id.indexOf("handler-x-left") != -1) a.GR = a.FR;
                        else if (f.id.indexOf("handler-x-right") != -1) a.GR = a.FI;
                        else if (f.id.indexOf("handler-x-middle") != -1) {
                            a.GR = a.HQ;
                            b = e - a.HV
                        }
                        ZC.A3(document.body).bind(ZC.K.BL(ZC._[50]), a.MQ);
                        ZC.A3(document.body).bind(ZC.K.BL(ZC._[51]), a.NE);
                        a.KJ = 1;
                        return false
                    }
            }
        };
        a.MQ = function(e) {
            e.preventDefault();
            if (a.KJ) {
                e = ZC.K.L3(e);
                var f = ZC.A3("#" + c + "-top").offset();
                e = e[0] - f.left - a.AX.iX;
                if (a.GR == a.FR) a.update(e, a.H5);
                else if (a.GR ==
                    a.FI) a.update(a.HV, e);
                else a.GR == a.HQ && a.update(e - b, e - b + ZC.A3(a.HQ).width())
            }
            return false
        };
        a.NE = function() {
            if (a.KJ) {
                ZC.A3(document.body).unbind(ZC.K.BL(ZC._[50]), a.MQ);
                ZC.A3(document.body).unbind(ZC.K.BL(ZC._[51]), a.NE);
                a.KJ = 0;
                a.C.JP = 0;
                a.zoom(false)
            }
            return false
        };
        ZC.A3("." + a.C.Q + "-preview-handler").bind(ZC.K.BL(ZC._[49]), a.MN);
        ZC.A3("." + a.C.Q + "-preview-mask").bind(ZC.K.BL("click"), a.A2V)
    }
});
ZC.XR = ZC.FY.B2({
    $i: function(a) {
        this.b(a);
        this.PR = this.B9 = null;
        this.K6 = "x1";
        this.G9 = "hide";
        this.MS = this.ND = 0;
        this.RK = "none";
        this.ME = "icon";
        this.FJ = 9999;
        this.JC = this.DW = this.AG = this.RC = this.BC = null;
        this.GP = this.DT = 0;
        this.CX = {
            enabled: false,
            min: -1,
            max: -1,
            page: -1,
            pages: -1
        };
        this.JT = 0
    },
    parse: function() {
        var a, c = this.A.I.AQ,
            b = "(" + this.A.AB + ")";
        this.b();
        this.OT_a([
            ["minimize", "ND", "b"],
            ["draggable", "MS", "b"],
            ["overflow", "RK"],
            ["max-items", "FJ", "i"],
            ["drag-handler", "ME"]
        ]);
        this.BC = new ZC.FY(this);
        c.load(this.BC.o,
            b + ".legend.item");
        if ((a = this.o.item) != null) this.BC.append(a);
        this.BC.parse();
        this.RC = new ZC.FY(this);
        c.load(this.RC.o, b + ".legend.item-off");
        if ((a = this.o["item-off"]) != null) this.RC.append(a);
        this.RC.parse();
        this.AG = new ZC.E7(this);
        c.load(this.AG.o, b + ".legend.marker");
        this.AG.append(this.o.marker);
        this.AG.H.type = "default";
        this.AG.H["show-marker"] = 1;
        this.AG.H["show-line"] = 0;
        if ((a = this.AG.o.type) != null) this.AG.H.type = a;
        if ((a = this.AG.o["show-line"]) != null) this.AG.H["show-line"] = ZC._b_(a);
        if ((a = this.BC.o["marker-style"]) !=
            null) this.AG.H.type = a;
        if ((a = this.BC.o["show-line"]) != null) this.AG.H["show-line"] = ZC._b_(a);
        if ((a = this.BC.o["show-marker"]) != null) this.AG.o.visible = ZC._b_(a);
        this.AG.parse();
        if ((a = this.o.header) != null || this.MS || this.ND) {
            this.DW = new ZC.DC(this);
            this.DW.F0 = "zc-legend-item " + this.Q + "-header";
            this.DW.Q = this.Q + "-header";
            c.load(this.DW.o, b + ".legend.header");
            this.DW.o.text = this.DW.o.text || " ";
            this.DW.append(a);
            this.DW.parse()
        }
        if ((a = this.o.footer) != null) {
            this.JC = new ZC.DC(this);
            this.JC.F0 = "zc-legend-item " +
                this.Q + "-footer";
            this.JC.Q = this.Q + "-footer";
            c.load(this.JC.o, b + ".legend.footer");
            this.JC.append(a);
            this.JC.parse()
        }
        if ((a = this.o.layout) != null) this.K6 = a;
        if ((a = this.o[ZC._[56]]) != null) this.G9 = a;
        if (this.o.item != null)
            if ((a = this.o.item[ZC._[56]]) != null) this.G9 = a;
        c = this.A.AZ.AA;
        this.B9 = [];
        b = 0;
        for (var e = c.length; b < e; b++) {
            var f = new ZC.DC(this);
            f.copy(this.BC);
            f.append(c[b].o["legend-item"]);
            var g = null;
            if ((a = c[b].UB) != null) g = a;
            if (g == null)
                if ((a = c[b].B0) != null) g = a;
            f.B0 = g == null ? "Series " + b : g;
            f.PH = 1;
            f.H.order =
                b;
            f.H.index = b;
            if (c[b].o["legend-item"] != null && (a = c[b].o["legend-item"].order) != null) f.H.order = ZC._l_(ZC._i_(a) - 1, 0, e - 1);
            f.parse();
            this.B9.push(f)
        }
        if (a = this.A.H["legend-info"]) this.JT = a.collapsed;
        if (this.RK == "page") {
            if (a = this.A.H["legend-info"]) {
                this.CX.min = a.min;
                this.CX.max = a.max;
                this.CX.page = a.page
            } else {
                this.CX.min = 0;
                this.CX.max = this.FJ;
                this.CX.page = 1
            }
            this.CX.pages = Math.ceil(this.B9.length / this.FJ);
            if (this.CX.page > this.CX.pages) {
                this.CX.page = this.CX.pages;
                this.CX.min = (this.CX.page - 1) * this.FJ;
                this.CX.max =
                    this.CX.page * this.FJ - 1
            }
            this.CX.page = ZC.CO(this.CX.page, this.CX.pages)
        } else {
            this.CX.min = 0;
            this.CX.max = this.RK == "hidden" ? this.FJ : this.B9.length;
            this.CX.page = 1
        }
        this.saveInfo(false);
        this.B9.sort(function(n, p) {
            return n.H.order >= p.H.order ? 1 : -1
        });
        var h = this.A.F * 0.9;
        if (this.o[ZC._[21]] != null) h = this.F;
        c = f = 0;
        g = -Number.MAX_VALUE;
        var k = -Number.MAX_VALUE,
            l = this.AG.H["show-line"] ? 3 : 2,
            m = 0;
        if (this.K6 == "float") {
            b = 0;
            for (e = this.B9.length; b < e; b++) {
                m += this.B9[b].AK ? 1 : 0;
                if (!(b < this.CX.min || b >= this.CX.max || this.JT))
                    if (this.B9[b].AK) {
                        var o =
                            this.B9[b].F + this.B9[b].CR + this.B9[b].CK + l * this.B9[b].DS;
                        k = ZC.BN(k, this.B9[b].D + this.B9[b].CM + this.B9[b].CI);
                        if (f + o > h) {
                            g = ZC.BN(g, f);
                            c += k;
                            f = o;
                            k = ZC.BN(k, this.B9[b].D + this.B9[b].CM + this.B9[b].CI)
                        } else f += o
                    }
            }
            if (k != -Number.MAX_VALUE) c += k;
            if (g != -Number.MAX_VALUE) f = g
        } else {
            b = f = 0;
            for (e = this.B9.length; b < e; b++) {
                m += this.B9[b].AK ? 1 : 0;
                b < this.CX.min || b >= this.CX.max || this.JT || (f += this.B9[b].AK ? 1 : 0)
            }
            b = ZC.AP.TR(this.K6, f);
            h = b[0];
            f = b[1];
            b = 0;
            for (e = this.B9.length; b < e; b++)
                if (!(b < this.CX.min || b >= this.CX.max || this.JT))
                    if (this.B9[b].AK) {
                        g =
                            ZC.BN(g, this.B9[b].F + this.B9[b].CR + this.B9[b].CK + l * this.B9[b].DS);
                        k = ZC.BN(k, this.B9[b].D + this.B9[b].CM + this.B9[b].CI);
                        if (f == 1) c += this.B9[b].D + this.B9[b].CM + this.B9[b].CI
                    }
            f = f * g;
            c = h * k
        } if (this.RK == "page" && m > this.FJ) this.CX.enabled = 1;
        if (this.DW != null) {
            b = this.DW.F;
            if (this.MS && this.ME == "icon") {
                b += 15;
                if (this.ND) b += 25
            } else if (this.ND) b += 15;
            if (f < b) f = b
        }
        e = b = 0;
        if (this.o[ZC._[21]] == null) {
            this.o[ZC._[21]] = f;
            b = 1
        }
        if (this.o[ZC._[22]] == null) {
            this.o[ZC._[22]] = c;
            e = 1
        }
        this.iY = this.iX = -1;
        this.locate();
        if (!ZC.move && (a = this.A.A.H["graph-" +
            this.A.Q + "-legend-info"])) {
            if (a.x) this.iX = a.x;
            if (a.y) this.iY = a.y
        }
        this.GP = this.D;
        this.DT = this.iY;
        if (this.DW != null) {
            this.D += this.DW.D;
            this.DT += this.DW.D
        }
        if (this.JC != null) this.D += this.JC.D;
        if (this.CX.enabled && !this.JT) {
            a = new ZC.DC(this);
            a.B0 = " ";
            a.append(this.o["page-status"]);
            a.parse();
            this.D += a.D + 4
        }
        if (this.iX + this.F > this.A.iX + this.A.F) this.iX = this.A.iX + this.A.F - this.F - 5;
        if (this.iY + this.D > this.A.iY + this.A.D) this.iY = this.A.iY + this.A.D - this.D - 5;
        if (b) this.o[ZC._[21]] = null;
        if (e) this.o[ZC._[22]] = null
    },
    saveInfo: function(a) {
        if (typeof a ==
            ZC._[33]) a = 1;
        this.A.H["legend-info"] = {
            collapsed: this.JT,
            min: this.CX.min,
            max: this.CX.max,
            page: this.CX.page
        };
        if (a) this.A.A.H["graph-" + this.A.Q + "-legend-info"] = {
            x: this.iX,
            y: this.iY
        }
    },
    clear: function(a) {
        if (a == null) a = 1;
        var c = this.A.Q + "-legend-";
        ZC.A3("." + c + "item").remove();
        ZC.A3("." + c + "header").remove();
        ZC.A3("." + c + "footer").remove();
        ZC.A3("#" + c + "page-status").remove();
        if (!a) {
            ZC.move || this.unbind();
            ZC.A3("." + c + "page-area").remove();
            ZC.A3("." + c + "header-area").remove();
            ZC.A3("." + c + "item-area").remove()
        }
        ZC.K.IW(ZC.AJ(c +
            "c"), this.A.I.A5, this.iX - 2 * this.AU - 2 * this.G4, this.iY - 2 * this.AU - 2 * this.G4, this.F + 4 * this.AU + 4 * this.G4, this.D + 4 * this.AU + 4 * this.G4)
    },
    unbind: function() {
        ZC.A3("#" + this.Q + "-move-area").die(ZC.K.BL(ZC._[49]), this.PJ);
        ZC.A3("#" + this.Q + "-minimize-area").die(ZC.K.BL("click"), this.R2);
        ZC.A3("." + this.Q + "-page-area").die(ZC.K.BL("click"), this.PE)
    },
    paint: function() {
        var a = this,
            c;
        if (a.AK) {
            var b = a.A.AZ.AA;
            a.b();
            if (a.DW != null) {
                a.DW.iX = a.iX;
                a.DW.iY = a.iY;
                a.DW.F = a.F;
                a.DW.Y = a.DW.C6 = a.Y;
                a.DW.paint();
                ZC.move || a.DW.D4();
                if (a.MS &&
                    a.ME == "icon") {
                    var e = new ZC.D5(a);
                    e.Y = a.Y;
                    e.AT = "#000";
                    e.AI = 1;
                    e.DQ = "line";
                    e.append(a.o.icon);
                    var f = a.DW.iX + a.DW.F - 10,
                        g = a.DW.iY + a.DW.D / 2;
                    e.B = [
                        [f - 7, g],
                        [f + 7, g], null, [f, g - 7],
                        [f, g + 7], null, [f - 6, g - 1],
                        [f - 6, g + 1], null, [f - 5, g - 2],
                        [f - 5, g + 2], null, [f + 6, g - 1],
                        [f + 6, g + 1], null, [f + 5, g - 2],
                        [f + 5, g + 2], null, [f - 1, g - 6],
                        [f + 1, g - 6], null, [f - 2, g - 5],
                        [f + 2, g - 5], null, [f - 1, g + 6],
                        [f + 1, g + 6], null, [f - 2, g + 5],
                        [f + 2, g + 5]
                    ];
                    e.parse();
                    e.paint()
                }
                if (a.ND) {
                    e = new ZC.D5(a);
                    e.Y = a.Y;
                    e.AT = "#000";
                    e.AI = 1;
                    e.append(a.o.icon);
                    e.DQ = "line";
                    f = a.DW.iX + a.DW.F - 10 - (a.MS &&
                        a.ME == "icon" ? 20 : 0);
                    g = a.DW.iY + a.DW.D / 2;
                    e.B = [
                        [f - 7, g - 2],
                        [f + 2, g - 2],
                        [f + 2, g + 7],
                        [f - 7, g + 7],
                        [f - 7, g - 2],
                        [f + 2, g - 2], null, [f - 4, g - 5],
                        [f + 5, g - 5],
                        [f + 5, g + 4],
                        [f - 4, g + 4],
                        [f - 4, g - 5],
                        [f + 5, g - 5]
                    ];
                    e.parse();
                    e.paint()
                }
            }
            if (a.JC != null) {
                a.JC.iX = a.iX;
                a.JC.iY = a.iY + a.D - a.JC.D;
                a.JC.F = a.F;
                a.JC.Y = a.JC.C6 = a.Y;
                a.JC.paint();
                ZC.move || a.JC.D4()
            }
            f = e = 0;
            for (g = a.B9.length; f < g; f++) f < a.CX.min || f >= a.CX.max || a.JT || (e += a.B9[f].AK ? 1 : 0);
            e = ZC.AP.TR(a.K6, e);
            var h = e[1],
                k = a.F / h,
                l = a.GP / e[0],
                m = 0,
                o = 0;
            a.PR = [];
            var n = 0,
                p = -Number.MAX_VALUE,
                s = a.AG.H["show-line"] ?
                3 : 2,
                t = null;
            e = "";
            f = 0;
            for (g = a.B9.length; f < g; f++)
                if (!(f < a.CX.min || f >= a.CX.max || a.JT)) {
                    var r = a.B9[f],
                        u = r.H.index,
                        y = new ZC.DC(a);
                    y.Q = a.Q + "-item-" + u;
                    y.F0 = "zc-legend-item " + a.Q + "-item";
                    y.copy(r);
                    y.PH = 1;
                    a.A.H["plot" + u + ".visible"] || y.append(a.RC.o);
                    y.append(b[u].o["legend-item"]);
                    y.KC = function(A) {
                        return b[u] && b[u].M[0] ? b[u].M[0].KC(A) : A
                    };
                    y.parse();
                    if (y.AK) {
                        if (a.K6 == "float") {
                            p = ZC.BN(p, r.D);
                            if (t == null) {
                                r.iX = a.iX + r.CR + s * r.DS;
                                r.iY = a.DT + r.CM;
                                n = a.DT
                            } else {
                                r.iX = t.iX + t.F + t.CK + r.CR + s * r.DS;
                                if (ZC._i_(r.iX + r.F + r.CK) > ZC._i_(a.iX +
                                    a.F)) {
                                    r.iX = a.iX + r.CR + s * r.DS;
                                    n += p + r.CM + r.CI;
                                    p = -Number.MAX_VALUE
                                }
                                r.iY = n + r.CM
                            }
                        } else {
                            r.iX = a.iX + o * k + r.CR + s * r.DS;
                            r.iY = a.DT + m * l + r.CM;
                            o++;
                            if (o == h) {
                                o = 0;
                                m++
                            }
                        }
                        t = r;
                        y.iX = r.iX = ZC._i_(r.iX);
                        y.iY = r.iY = ZC._i_(r.iY);
                        y.Y = r.C6 = a.Y;
                        y.paint();
                        if (typeof a.H.showhide == ZC._[33] || a.H.showhide == null) ZC.move || y.D4()
                    }
                    var w = a.AG.H.type;
                    if (w == "match") w = (c = b[u].AG.o.type) != null ? c : "default";
                    if (ZC.AH(["default", "square"], w) != -1) r = new ZC.FY(a);
                    else {
                        r = new ZC.D5(a);
                        r.DQ = w
                    }
                    r.append(a.AG.o);
                    r.append(b[u].o["legend-marker"]);
                    if (a.AG.H.type ==
                        "match") r.append(b[u].AG.o);
                    else switch (b[u].AB) {
                        case "pie":
                        case "pie3d":
                        case "nestedpie":
                        case "vbar":
                        case "vbar3d":
                        case "hbar":
                        case "hbar3d":
                        case "vbullet":
                        case "hbullet":
                        case "area":
                        case "area3d":
                        case "gauge":
                        case "vfunnel":
                        case "hfunnel":
                        case "venn":
                            r.X = b[u].X;
                            r.A6 = b[u].A6;
                            r.EF = b[u].EF;
                            r.ER = b[u].ER;
                            break;
                        case "scatter":
                        case "bubble":
                            if (typeof(c = b[u].H["marker-style"]) != ZC._[33]) {
                                r.X = c.X;
                                r.A6 = c.A6;
                                r.EF = c.EF;
                                r.ER = c.ER
                            } else {
                                r.X = b[u].AG.X;
                                r.A6 = b[u].AG.A6;
                                r.EF = b[u].AG.EF;
                                r.ER = b[u].AG.ER
                            }
                            break;
                        default:
                            r.X =
                                b[u].AT;
                            r.A6 = b[u].AT
                    }
                    r.o["line-style"] = "solid";
                    r.o.type = r.DQ;
                    if (ZC.AH(["default", "square"], w) != -1)
                        if ((c = r.o[ZC._[23]]) != null) {
                            if (r.o[ZC._[21]] == null) r.o[ZC._[21]] = 2 * ZC._i_(c);
                            if (r.o[ZC._[22]] == null) r.o[ZC._[22]] = 2 * ZC._i_(c)
                        }
                    r.Q = a.Q + "-marker-" + u;
                    r.Y = r.C6 = a.Y;
                    r.iX = y.iX - s * y.DS + (s - 1) * y.DS / 2 + y.DS / 2;
                    r.iY = y.iY + (y.D - y.DS) / 2 + y.DS / 2;
                    r.parse();
                    if (ZC.AH(["default", "square"], w) != -1) {
                        r.iX -= r.F / 2;
                        r.iY -= r.D / 2
                    }
                    a.A.H["plot" + u + ".visible"] || (r.A9 /= 4);
                    if (a.AG.H["show-line"]) {
                        c = ZC.K.CN(a.Y, a.A.I.A5);
                        w = new ZC.E7(a);
                        w.Y =
                            a.Y;
                        w.copy(b[u]);
                        w.o["line-style"] = a.AG.FO;
                        w.parse();
                        if (!a.A.H["plot" + u + ".visible"]) w.A9 = 0.25;
                        var v = [];
                        v.push([r.iX - y.DS, r.iY]);
                        v.push([r.iX + y.DS, r.iY]);
                        ZC.BQ.paint(c, w, v)
                    }
                    r.AK && r.paint();
                    a.PR.push(r);
                    w = 1;
                    if ((c = a.BC.o.toggle) != null) w = ZC._b_(c);
                    if (w && (y.AK || r.AK))
                        if (ZC.AH(a.A.I.H3, ZC._[43]) == -1) ZC.AJ(y.Q + "-area") || (e += ZC.K.DM("rect") + 'class="' + (a.Q + "-item-area zc-legend-item-area") + '" id="' + y.Q + "-area" + ZC._[32] + ZC._i_(y.iX - 1.5 * y.DS + ZC.MAPTX) + "," + ZC._i_(y.iY + ZC.MAPTX) + "," + ZC._i_(y.iX + y.F + ZC.MAPTX) +
                            "," + ZC._i_(y.iY + y.D + ZC.MAPTX) + '"/>')
                }
            if (a.CX.enabled && !a.JT) {
                var x = new ZC.DC(a);
                x.Y = a.Y;
                x.Q = a.Q + "-page-status";
                x.B0 = ZC.EV["legend-pagination"].replace("%page%", a.CX.page).replace("%pages%", a.CX.pages);
                x.append(a.o["page-status"]);
                x.parse();
                if (a.F < x.F + 48) {
                    x.B0 = a.CX.page + "/" + a.CX.pages;
                    x.parse()
                }
                x.iX = a.iX + a.F / 2 - x.F / 2;
                x.iY = a.iY + a.D - (a.JC ? a.JC.D : 0) - x.D - 4;
                x.AK && x.paint();
                var z = new ZC.D5(a);
                z.Y = z.C6 = a.Y;
                z.X = z.A6 = a.CX.page > 1 ? "#f90" : "#999";
                z.append(a.CX.page > 1 ? a.o["page-on"] : a.o["page-off"]);
                var C = a.iX + a.F /
                    2 - x.F / 2 - 6,
                    B = x.iY + x.D / 2;
                z.parse();
                z.AR = ZC.BN(z.AR, 8);
                c = ZC._i_(z.AR * 0.75);
                z.B = [
                    [C, B - c],
                    [C, B + c],
                    [C - z.AR, B],
                    [C, B - c]
                ];
                z.AK && z.paint();
                f = new ZC.D5(a);
                f.Y = f.C6 = a.Y;
                f.X = f.A6 = a.CX.page < a.CX.pages ? "#f90" : "#999";
                f.append(a.CX.page < a.CX.pages ? a.o["page-on"] : a.o["page-off"]);
                z = a.iX + a.F / 2 + x.F / 2 + 6;
                x = x.iY + x.D / 2;
                f.parse();
                f.AR = ZC.BN(f.AR, 8);
                c = ZC._i_(f.AR * 0.75);
                f.B = [
                    [z, x - c],
                    [z, x + c],
                    [z + f.AR, x],
                    [z, x - c]
                ];
                f.AK && f.paint()
            }
            if (!ZC.move) {
                if (a.CX.enabled) {
                    if (a.CX.page > 1) e += ZC.K.DM("circle") + 'class="' + (a.Q + "-page-area zc-legend-page-area") +
                        '" id="' + a.Q + "-page-prev-area" + ZC._[32] + ZC._i_(C - 2 + ZC.MAPTX) + "," + ZC._i_(B + ZC.MAPTX) + ',10"/>';
                    if (a.CX.page < a.CX.pages) e += ZC.K.DM("circle") + 'class="' + (a.Q + "-page-area zc-legend-page-area") + '" id="' + a.Q + "-page-next-area" + ZC._[32] + ZC._i_(z + 2 + ZC.MAPTX) + "," + ZC._i_(x + ZC.MAPTX) + ',10"/>'
                }
                if (a.DW && a.MS) {
                    e += ZC.K.DM("rect") + 'class="' + (a.Q + "-header-area zc-legend-header-area") + '" id="' + a.Q + "-move-area" + ZC._[32];
                    e += a.ME == "icon" ? ZC._i_(a.DW.iX + a.DW.F - 20 + ZC.MAPTX) + "," + ZC._i_(a.DW.iY + ZC.MAPTX) + "," + ZC._i_(a.DW.iX +
                        a.DW.F - 1 + ZC.MAPTX) + "," + ZC._i_(a.DW.iY + a.DW.D + ZC.MAPTX) : ZC._i_(a.DW.iX + ZC.MAPTX) + "," + ZC._i_(a.DW.iY + ZC.MAPTX) + "," + ZC._i_(a.DW.iX + a.DW.F - (a.ND ? 23 : 0) + ZC.MAPTX) + "," + ZC._i_(a.DW.iY + a.DW.D + ZC.MAPTX);
                    e += '"/>'
                }
                if (a.ND) {
                    e += ZC.K.DM("rect") + 'class="' + (a.Q + "-header-area zc-legend-header-area") + '" id="' + a.Q + "-minimize-area" + ZC._[32];
                    e += a.MS && a.ME == "icon" ? ZC._i_(a.DW.iX + a.DW.F - 41 + ZC.MAPTX) + "," + ZC._i_(a.DW.iY + ZC.MAPTX) + "," + ZC._i_(a.DW.iX + a.DW.F - 22 + ZC.MAPTX) + "," + ZC._i_(a.DW.iY + a.DW.D + ZC.MAPTX) : ZC._i_(a.DW.iX + a.DW.F -
                        22 + ZC.MAPTX) + "," + ZC._i_(a.DW.iY + ZC.MAPTX) + "," + ZC._i_(a.DW.iX + a.DW.F - 1 + ZC.MAPTX) + "," + ZC._i_(a.DW.iY + a.DW.D + ZC.MAPTX);
                    e += '"/>'
                }
                if (e != "") ZC.AJ(a.A.A.Q + "-map").innerHTML += e;
                a.QF = 0;
                a.QA = 0;
                a.PJ = function(A) {
                    A.preventDefault();
                    a.I.hideCM();
                    ZC.move = 1;
                    if (!(!ZC.mobile && A.which > 1)) {
                        a.A.A.H["graph-" + a.A.Q + "-legend-info"] = null;
                        A = ZC.K.L3(A);
                        var F = ZC.A3("#" + a.A.A.Q + "-top").offset();
                        a.QF = A[0] - F.left - a.DW.iX;
                        a.QA = A[1] - F.top - a.DW.iY;
                        ZC.A3(document.body).bind(ZC.K.BL(ZC._[50]), a.PM);
                        ZC.A3(document.body).bind(ZC.K.BL(ZC._[51]),
                            a.QS)
                    }
                };
                a.PM = function(A) {
                    var F = ZC.K.L3(A),
                        G = ZC.A3("#" + a.A.A.Q + "-top").offset();
                    A = F[0] - G.left - a.QF;
                    F = F[1] - G.top - a.QA;
                    A = ZC.BN(A, a.A.iX + 2);
                    A = ZC.CO(A, a.A.iX + a.A.F - a.F - 2);
                    F = ZC.BN(F, a.A.iY + 2);
                    F = ZC.CO(F, a.A.iY + a.A.D - a.D - 2);
                    a.o.x = A;
                    a.o.y = F;
                    a.clear(true);
                    a.parse();
                    a.paint()
                };
                a.QS = function() {
                    ZC.move = 0;
                    ZC.A3(document.body).unbind(ZC.K.BL(ZC._[50]), a.PM);
                    ZC.A3(document.body).unbind(ZC.K.BL(ZC._[51]), a.QS);
                    a.clear(false);
                    a.parse();
                    a.paint();
                    a.saveInfo()
                };
                a.PE = function(A) {
                    if (A.target.id.indexOf("-page-next-area") !=
                        -1) {
                        a.CX.min += a.FJ;
                        a.CX.max += a.FJ;
                        a.CX.page += 1
                    } else {
                        a.CX.min -= a.FJ;
                        a.CX.max -= a.FJ;
                        a.CX.page -= 1
                    }
                    a.saveInfo();
                    a.clear(false);
                    a.parse();
                    a.paint()
                };
                a.R2 = function() {
                    a.JT = !a.JT;
                    a.saveInfo();
                    a.clear(false);
                    a.parse();
                    a.paint()
                };
                ZC.A3("#" + a.Q + "-move-area").live(ZC.K.BL(ZC._[49]), a.PJ);
                ZC.A3("#" + a.Q + "-minimize-area").live(ZC.K.BL("click"), a.R2);
                ZC.A3("." + a.Q + "-page-area").live(ZC.K.BL("click"), a.PE)
            }
            a.H.showhide = null
        }
    }
});
ZC.ZZ = ZC.D5.B2({
    $i: function(a) {
        this.b(a);
        this.DV = 1;
        this.G = this.BZ = this.MP = null
    },
    parse: function() {
        var a;
        this.OT(["alpha-area", "DV", "f"]);
        if ((a = this.o.from) != null) {
            this.MP = new ZC.D5(this.A);
            this.MP.append(a);
            if (a.hook != null) this.MP.H.hook = a.hook;
            this.MP.parse();
            if (typeof a == "string") this.MP.H.hook = a
        }
        if ((a = this.o.to) != null) {
            this.BZ = new ZC.D5(this.A);
            this.BZ.append(a);
            if (a.hook != null) this.BZ.H.hook = a.hook;
            this.BZ.parse();
            if (typeof a == "string") this.BZ.H.hook = a
        }
        if ((a = this.o.label) != null) {
            this.G = new ZC.DC(this);
            this.G.append(a);
            this.G.parse()
        }
        this.b()
    },
    paint: function() {
        var a;
        if (this.AK)
            if (!(this.MP == null || this.BZ == null)) {
                if (this.AR < 2) this.AR = 2;
                if ((a = this.MP.H.hook) != null) {
                    a = this.A.SR(a);
                    this.MP.iX = a[0];
                    this.MP.iY = a[1]
                }
                if ((a = this.BZ.H.hook) != null) {
                    a = this.A.SR(a);
                    this.BZ.iX = a[0];
                    this.BZ.iY = a[1]
                }
                this.MP.iX += this.MP.C0;
                this.MP.iY += this.MP.C4;
                this.BZ.iX += this.BZ.C0;
                this.BZ.iY += this.BZ.C4;
                var c = [this.MP.iX, this.MP.iY],
                    b = [this.BZ.iX, this.BZ.iY],
                    e = b[0] - c[0],
                    f = b[1] - c[1];
                a = ZC.V4(Math.atan2(f, e));
                f = Math.sqrt(e * e + f *
                    f);
                var g;
                e = [];
                e.push(c);
                g = ZC.AP.BA(c[0], c[1], this.AR, a + 90);
                e.push(g);
                g = ZC.AP.BA(g[0], g[1], f - 4 * this.AR, a);
                e.push(g);
                g = ZC.AP.BA(g[0], g[1], 2 * this.AR, a + 90);
                e.push(g);
                e.push(b);
                g = ZC.AP.BA(g[0], g[1], 6 * this.AR, a - 90);
                e.push(g);
                g = ZC.AP.BA(g[0], g[1], 2 * this.AR, a + 90);
                e.push(g);
                g = ZC.AP.BA(c[0], c[1], this.AR, a - 90);
                e.push(g);
                e.push(c);
                f = new ZC.D5(this.A);
                f.Y = f.C6 = this.Y;
                f.copy(this);
                f.B = e;
                f.CV = 0;
                f.A9 = this.DV;
                f.paint();
                if (this.G != null) {
                    this.G.Y = this.Y;
                    this.G.Q = this.A.Q + "-arrow-label-" + this.HS;
                    this.G.F0 = this.A.Q + "-arrow-label zc-arrow-label";
                    c = ZC.AP.I4(c[0], c[1], b[0], b[1]);
                    this.G.iX = c[0];
                    this.G.iY = c[1];
                    this.G.C0 -= this.G.F / 2;
                    this.G.C4 -= this.G.D / 2;
                    if (this.G.o["font-angle"] != null && this.G.o["font-angle"] == "inherit") this.G.A7 = a;
                    this.G.paint();
                    this.G.D4()
                }
            }
    }
});
ZC.Y8 = ZC.BT.B2({
    $i: function(a) {
        this.I = a;
        this.NC = 0;
        this.KE = this.BB = null
    },
    unbind: function() {
        this.BB && window.clearInterval(this.BB);
        ZC.A3(document.body).unbind(ZC.K.BL(ZC._[50]), this.KE);
        ZC.mobile && ZC.A3(document.body).unbind(ZC.K.BL(ZC._[49]), this.KE)
    },
    bind: function() {
        function a() {
            if (g == 0 || h == 0) {
                g = ZC.A3(e).width();
                h = ZC.A3(e).height()
            }
            ZC.LG != null && ZC.LG != e.id && ZC.AJ(ZC.LG) && ZC.K.IW(ZC.AJ(ZC.LG), c.I.A5, 0, 0, ZC.A3("#" + ZC.LG).width(), ZC.A3("#" + ZC.LG).height());
            ZC.LG = e.id;
            ZC.K.IW(e, c.I.A5, 0, 0, g, h);
            ZC.A3(".zc-guide-label").remove()
        }
        var c = this,
            b = c.I.Q,
            e = ZC.AJ(b + "-guide-c"),
            f = ZC.K.CN(e, c.I.A5),
            g = ZC.A3(e).width(),
            h = ZC.A3(e).height(),
            k = {},
            l = {},
            m = {};
        if (!ZC.mobile && ZC.SX == null) ZC.SX = window.setInterval(function() {
            for (var o = 1, n = 0, p = zingchart.GK.length; n < p; n++)
                if (ZC.AJ(zingchart.GK[n].Q + "-top") != null) {
                    var s = ZC.A3("#" + zingchart.GK[n].Q + "-top").offset();
                    if (ZC.FG[0] >= s.left && ZC.FG[0] <= s.left + zingchart.GK[n].F && ZC.FG[1] >= s.top && ZC.FG[1] <= s.top + zingchart.GK[n].D) o = 0
                } else {
                    window.clearInterval(ZC.SX);
                    ZC.SX = null
                }
            o && a()
        }, 500);
        c.KE = function(o) {
            if (!ZC.move) {
                if (c.I.S8 ||
                    ZC.AJ(b + "-top") == null) return false;
                var n = [],
                    p = ZC.K.L3(o);
                o = p[0];
                p = p[1];
                var s = ZC.A3("#" + b + "-top").offset();
                o = o - s.left;
                s = p - s.top;
                for (var t = null, r = 0, u = c.I.B1.length; r < u; r++) {
                    p = c.I.B1[r].O;
                    if (ZC.DK(o, p.iX - 5, p.iX + p.F + 5) && ZC.DK(s, p.iY - 5, p.iY + p.D + 5)) t = c.I.B1[r]
                }
                var y = 0;
                if (t != null) {
                    n.push(t);
                    if (t != null && t.BY != null) y = t.BY.o.shared != null && ZC._b_(t.BY.o.shared);
                    r = 0;
                    for (u = c.I.B1.length; r < u; r++)
                        if (c.I.B1[r] != t) {
                            p = c.I.B1[r].O;
                            var w = c.I.B1[r].BY,
                                v = w && w.o.shared != null && ZC._b_(w.o.shared);
                            if (w != null && ZC.DK(o, p.iX -
                                5, p.iX + p.F + 5) && (ZC.DK(s, p.iY - 5, p.iY + p.D + 5) || y && v)) n.push(c.I.B1[r])
                        }
                }
                if (n.length == 0) {
                    k = {};
                    l = {};
                    m = {};
                    if (c.NC) {
                        a();
                        c.NC = 0
                    }
                }
                if (n.length > 0) {
                    c.NC = 1;
                    var x = s = 0;
                    for (t = n.length; x < t; x++) {
                        var z = 0;
                        if (k[x] == null) k[x] = {};
                        if (l[x] == null) l[x] = {};
                        if (m[x] == null) m[x] = {};
                        if (n[x].BY && n[x].JW == "ready") {
                            y = [];
                            w = [];
                            var C = [];
                            v = [];
                            var B = [];
                            p = n[x].O;
                            r = 0;
                            for (u = n[x].AZ.AA.length; r < u; r++)
                                if (n[x].H["plot" + r + ".visible"]) {
                                    var A = n[x].AY(n[x].AZ.AA[r].B6("k")[0]);
                                    n[x].AY(n[x].AZ.AA[r].B6("v")[0]);
                                    o = ZC._l_(o, A.AD ? A.iX + A.CP : A.iX + A.Z, A.AD ?
                                        A.iX + A.F - A.Z : A.iX + A.F - A.CP);
                                    var F = A.D8 && n[x].AZ.AA[r].D8 ? A.K8(o, n[x].AZ.AA[r]) : A.K8(o);
                                    if (F != null) {
                                        var G = [];
                                        G = typeof F.length == ZC._[33] || F.length == 0 ? [F] : F;
                                        for (var K = 0, I = G.length; K < I; K++) {
                                            F = G[K];
                                            var M = null,
                                                J = n[x].AZ.AA[r].M[F];
                                            if (J) {
                                                J.setup();
                                                var N = J.iX,
                                                    Q = J.iY;
                                                if (typeof J.H.ZY != ZC._[33]) N = ZC._i_(J.H.ZY);
                                                if (typeof J.H.YC != ZC._[33]) Q = ZC._i_(J.H.YC);
                                                var H = new ZC.DC(A);
                                                H.Y = H.C6 = e;
                                                H.Q = n[x].Q + "-guide-label-" + F + "-" + r;
                                                H.F0 = n[x].Q + "-guide-label zc-guide-label";
                                                var O = J.VM();
                                                H.X = H.A6 = ZC.BV.L0(O[ZC._[0]]);
                                                H.BO =
                                                    O.color;
                                                H.B0 = J.A.PF;
                                                H.append(n[x].BY.o["plot-label"]);
                                                H.append(n[x].BY.o["value-label"]);
                                                H.append(n[x].AZ.AA[r].o["guide-label"]);
                                                var R = ZC.BV.PA(H.o);
                                                H.KC = function(S) {
                                                    return J.KC(S, R)
                                                };
                                                J.YG();
                                                O = "auto";
                                                if ((E = H.o[ZC._[9]]) != null) O = E;
                                                H.H[ZC._[9]] = O;
                                                H.GY = 1;
                                                H.H.plotidx = J.A.J;
                                                H.H.nodeidx = J.J;
                                                H.parse();
                                                y.push({
                                                    plotindex: J.A.J,
                                                    nodeindex: J.J,
                                                    nodevalue: J.A8,
                                                    text: H.B0
                                                });
                                                if (ZC.DK(J.iX, p.iX, p.iX + p.F)) {
                                                    H.H["marker-x"] = N;
                                                    H.H["marker-y"] = Q;
                                                    H.H["guide-style"] = J.VM();
                                                    switch (O) {
                                                        default: if (J.iX >= p.iX + p.F / 2) {
                                                            H.iX = N - H.F -
                                                                6;
                                                            H.FA = "right"
                                                        } else {
                                                            H.iX = N + 6;
                                                            H.FA = "left"
                                                        }H.iY = Q - H.C9 / 2;
                                                        if (H.iY < p.iY) H.iY = p.iY;
                                                        if (H.iY + H.D > p.iY + p.D) H.iY = p.iY + p.D - H.D;
                                                        H.D7 = [N, Q];
                                                        break;
                                                        case "top":
                                                            H.iX = N - H.F / 2;
                                                            H.iY = p.iY;
                                                            H.FA = "bottom";
                                                            H.D7 = [N, H.iY + H.D + 6];
                                                            break;
                                                        case "bottom":
                                                            H.iX = N - H.F / 2;
                                                            H.iY = p.iY + p.D - H.D;
                                                            H.FA = "top";
                                                            H.D7 = [N, H.iY - 6]
                                                    }
                                                    w.push(H);
                                                    l[x][r] = H;
                                                    z = 1
                                                }
                                            }
                                        }
                                        if (J)
                                            if (ZC.AH(B, A.BK) == -1 && A.AK && ZC.DK(J.iX, p.iX, p.iX + p.F))
                                                if (M == null) {
                                                    G = new ZC.DC(A);
                                                    G.Y = G.C6 = e;
                                                    G.Q = n[x].Q + "-guide-scale-label-" + r;
                                                    G.F0 = n[x].Q + "-guide-label zc-guide-label";
                                                    G.X = G.A6 = A.AT;
                                                    G.BO = n[x].AM["3d"] ?
                                                        "#999" : "#fff";
                                                    G.PH = 1;
                                                    G.append(n[x].BY.o["scale-label"]);
                                                    G.GY = 1;
                                                    G.H.nodeidx = J.J;
                                                    R = ZC.BV.PA(G.o);
                                                    G.KC = function(S) {
                                                        return A.KC(S, F, A.D8 && n[x].AZ.AA[r].D8 ? n[x].AZ.AA[r] : null, R)
                                                    };
                                                    G.parse();
                                                    if (A.BK == ZC._[52]) {
                                                        G.FA = "top";
                                                        G.iY = A.H.iY + 6;
                                                        G.D7 = [N, A.H.iY]
                                                    } else {
                                                        G.FA = "bottom";
                                                        G.iY = A.H.iY - G.D - 6;
                                                        G.D7 = [J.iX, A.H.iY]
                                                    }
                                                    G.iX = J.iX - G.F / 2;
                                                    if (G.AK) {
                                                        v.push(G);
                                                        B.push(A.BK);
                                                        m[x][r] = G;
                                                        z = 1
                                                    }
                                                    A.BK == ZC._[52] ? C.push([N, A.H.iY], [N, n[x].O.iY]) : C.push([N, A.H.iY], [N, n[x].O.iY + n[x].O.D])
                                                } else {
                                                    v.push(M);
                                                    B.push(A.BK)
                                                }
                                    }
                                }
                            if (z) {
                                if (!s) {
                                    a();
                                    s =
                                        1
                                }
                                if (C.length > 0) {
                                    if (n[x].AM["3d"]) {
                                        n[x].J2();
                                        u = 0;
                                        for (B = C.length; u < B; u++) {
                                            z = new ZC.C3(n[x], C[u][0] - ZC.AC.DX, C[u][1] - ZC.AC.DU, 0);
                                            C[u][0] = z.DP[0];
                                            C[u][1] = z.DP[1]
                                        }
                                    }
                                    ZC.BQ.paint(f, n[x].BY, C)
                                }
                                if (w.length > 1)
                                    for (u = 1; u;)
                                        for (r = u = 0; r < w.length - 1; r++)
                                            if (w[r].AK)
                                                if (w[r].iY > w[r + 1].iY) {
                                                    u = w[r];
                                                    w[r] = w[r + 1];
                                                    w[r + 1] = u;
                                                    u = 1
                                                }
                                if (w.length > 0) {
                                    u = [];
                                    B = 1;
                                    C = 0;
                                    for (z = w.length * w.length; B && C < z;) {
                                        C++;
                                        for (r = B = 0; r < w.length - 1; r++)
                                            if (w[r].AK)
                                                if (w[r + 1].iY < w[r].iY + w[r].D) {
                                                    if (w[r + 1].iY - w[r].D - 4 < p.iY && ZC.AH(u, w[r]) == -1) {
                                                        u.push(w[r]);
                                                        w[r].iY =
                                                            p.iY
                                                    }
                                                    w[r + 1].iY = w[r].iY + w[r].D + 4;
                                                    if (w[r + 1].iY + w[r + 1].D > p.iY + p.D) {
                                                        B = w[r + 1].iY - (p.iY + p.D - w[r + 1].D);
                                                        G = 0;
                                                        for (K = w.length; G < K; G++)
                                                            if (w[G].iY - B >= p.iY) w[G].iY -= B;
                                                            else {
                                                                w[G].iY = p.iY;
                                                                if (G > 0) w[G].iX = w[r + 1].H["marker-x"] < p.iX + p.F / 2 ? w[G - 1].iX + w[G - 1].F + 4 : w[G - 1].iX - w[G].F - 4
                                                            }
                                                    }
                                                    B = 1
                                                }
                                    }
                                }
                                r = 0;
                                for (u = v.length; r < u; r++) {
                                    if (n[x].AM["3d"]) {
                                        n[x].J2();
                                        z = new ZC.C3(n[x], v[r].iX + v[r].F / 2 - ZC.AC.DX, v[r].iY + v[r].D / 2 - ZC.AC.DU, 0);
                                        v[r].iX = z.DP[0] - v[r].F / 2;
                                        v[r].iY = z.DP[1] - v[r].D / 2;
                                        z = new ZC.C3(n[x], v[r].D7[0] - ZC.AC.DX, v[r].D7[1] - ZC.AC.DU, 0);
                                        v[r].D7[0] = z.DP[0];
                                        v[r].D7[1] = z.DP[1]
                                    }
                                    v[r].paint()
                                }
                                r = 0;
                                for (u = w.length; r < u; r++)
                                    if (ZC.DK(w[r].D7[0], p.iX - 5, p.iX + p.F + 5) && ZC.DK(w[r].D7[1], p.iY - 5, p.iY + p.D + 5)) {
                                        if (w[r].AK) {
                                            switch (w[r].H[ZC._[9]]) {
                                                case "top":
                                                    w[r].D7[1] = w[r].iY + w[r].D + w[r].FW;
                                                    break;
                                                case "bottom":
                                                    w[r].D7[1] = w[r].iY - w[r].FW
                                            }
                                            if (ZC.AH(["top", "bottom"], w[r].H[ZC._[9]]) != -1) {
                                                v = w[r].iX + w[r].F / 2;
                                                w[r].iX = ZC.BN(w[r].iX, 0);
                                                w[r].iX = ZC.CO(w[r].iX, c.I.F - w[r].F);
                                                w[r].iY = ZC.BN(w[r].iY, 0);
                                                w[r].iY = ZC.CO(w[r].iY, c.I.D - w[r].D);
                                                if (w[r].o["callout-offset"] ==
                                                    null) w[r].FV = ZC._i_(100 * (v - w[r].iX - w[r].F / 2) / (w[r].F - w[r].G7))
                                            }
                                            if (n[x].AM["3d"]) {
                                                n[x].J2();
                                                z = new ZC.C3(n[x], w[r].iX + w[r].F / 2 - ZC.AC.DX, w[r].iY + w[r].D / 2 - ZC.AC.DU, 0);
                                                w[r].iX = z.DP[0] - w[r].F / 2;
                                                w[r].iY = z.DP[1] - w[r].D / 2;
                                                z = new ZC.C3(n[x], w[r].D7[0] - ZC.AC.DX, w[r].D7[1] - ZC.AC.DU, 0);
                                                w[r].D7[0] = z.DP[0];
                                                w[r].D7[1] = z.DP[1]
                                            }
                                            w[r].paint()
                                        }
                                        v = new ZC.D5(c);
                                        c.I.AQ.load(v.o, "(" + n[x].AB + ").guide.marker");
                                        v.Q = w[r].Q + "-marker";
                                        v.Y = v.C6 = e;
                                        v.iX = w[r].H["marker-x"];
                                        v.iY = w[r].H["marker-y"];
                                        if (n[x].AM["3d"]) {
                                            n[x].J2();
                                            z = new ZC.C3(n[x],
                                                v.iX - ZC.AC.DX, v.iY - ZC.AC.DU, 0);
                                            v.iX = z.DP[0];
                                            v.iY = z.DP[1]
                                        }
                                        O = w[r].H["guide-style"];
                                        v.X = v.A6 = ZC.BV.L0(O[ZC._[0]]);
                                        v.BI = O.color;
                                        v.append(n[x].BY.o.marker);
                                        v.append(n[x].AZ.AA[w[r].H.plotidx].o["guide-marker"]);
                                        v.parse();
                                        v.AK && v.DQ != "none" && v.paint()
                                    }
                                p = n[x].M3();
                                p.items = y;
                                ZC.BV.F1("guide_mousemove", c.I, p);
                                n[x].N7(true)
                            }
                        }
                    }
                }
            }
        };
        ZC.A3(document.body).bind(ZC.K.BL(ZC._[50]), c.KE);
        ZC.mobile && ZC.A3(document.body).bind(ZC.K.BL(ZC._[49]), c.KE)
    }
});
ZC.Y6 = ZC.BT.B2({
    $i: function(a, c) {
        this.o = null;
        this.C = a;
        this.IB = c
    },
    parse: function() {
        var a;
        this.o = this.C.o;
        var c = this.IB,
            b = "\r\n",
            e = ",",
            f = 0,
            g = null,
            h = null,
            k = null,
            l = null,
            m = null,
            o = null,
            n = {};
        if ((a = this.o["html5-csv"]) != null) n = a;
        if ((a = this.o.csv) != null) n = a;
        if ((a = n.separator) != null) e = a;
        if ((a = n.mirrored) != null) f = ZC._b_(a);
        if ((a = n.title) != null) g = ZC._b_(a);
        if (f) {
            if ((a = n["horizontal-labels"]) != null) k = ZC._b_(a);
            if ((a = n["vertical-labels"]) != null) h = ZC._b_(a)
        } else {
            if ((a = n["horizontal-labels"]) != null) h = ZC._b_(a);
            if ((a =
                n["vertical-labels"]) != null) k = ZC._b_(a)
        } if ((a = n["smart-scales"]) != null) l = ZC._b_(a);
        if ((a = n["separate-scales"]) != null) m = ZC._b_(a);
        if ((a = n.columns) != null) o = a;
        if (o != null && o.length > 0) {
            var p = [];
            if ((a = n["row-separator"]) != null) b = a;
            else if (c.split(/\n/).length > 0) b = "\n";
            else if (c.split(/\r/).length > 0) b = "\r";
            b = c.split(b);
            c = n = 0;
            for (e = b.length; c < e; c++)
                if (b[c].replace(/\s+/g, "") != "") {
                    p[n] = [];
                    for (var s = 0, t = 0; s < b[c].length - 1;) {
                        a = b[c].substring(s, s + o[t]);
                        p[n].push(a);
                        s += o[t];
                        t++
                    }
                    n++
                }
        } else {
            p = [
                []
            ];
            o = (a = n["row-separator"]) !=
                null ? RegExp("(\\" + e + "|" + a + '|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\' + e + "" + a + "]*))", "gi") : RegExp("(\\" + e + '|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\' + e + "\\r\\n]*))", "gi");
            for (a = null; a = o.exec(c);) {
                b = a[1];
                b.length && b != e && p.push([]);
                a = a[2] ? a[2].replace(RegExp('""', "g"), '"') : a[3];
                p[p.length - 1].push(a)
            }
        }
        b = [];
        c = 0;
        for (e = p.length; c < e; c++) p[c].join("").replace(/\s+/g, "").length != 0 && b.push(p[c]);
        o = n = 0;
        if (g == null)
            if (b.length > 1 && b[0].length == 1) {
                if (this.o.title == null) this.o.title = {
                    text: b[0][0]
                };
                else if (this.o.title.text ==
                    null) this.o.title.text = b[0][0];
                g = 1
            } else g = 0;
        g && n++;
        if (f) {
            p = [];
            g && p.push(b[0]);
            c = n;
            for (e = b.length; c < e; c++) {
                s = 0;
                for (a = b[c].length; s < a; s++) {
                    if (p[s + n] == null) p[s + n] = [];
                    p[s + n].push(b[c][s])
                }
            }
            b = p
        }
        c = f = 0;
        for (e = b.length; c < e; c++) f = ZC.BN(f, b[c].length);
        p = [];
        if (h == null) {
            var r = b[n].join("").length,
                u = b[n].join("").replace(/[0-9]/g, "").length;
            h = u / r > 0.75 ? 1 : 0
        }
        if (h) {
            p = b[n];
            n++
        }
        g = [];
        if (k == null)
            if (h && p[0].indexOf("\\") != -1) k = 1;
            else {
                k = "";
                c = n;
                for (e = b.length; c < e; c++) k += b[c][0];
                k.replace(/[0-9]/g, "");
                k = u / r > 0.75 ? 1 : 0
            }
        if (k) {
            c =
                n;
            for (e = b.length; c < e; c++) g.push(b[c][o]);
            o++
        }
        r = [];
        u = [];
        for (s = o; s < f; s++) {
            u[s - o] = [];
            var y = t = null,
                w = 0,
                v = null;
            c = n;
            for (e = b.length; c < e; c++)
                if (b[c][s] != null) {
                    a = b[c][s];
                    if (v == null) v = a.replace(/[0-9\,\.]+/g, "%v");
                    a = a.replace(/[^0-9\,\.]+/g, "");
                    var x = a.indexOf("."),
                        z = a.indexOf(",");
                    if (x != -1 && z != -1)
                        if (x < z) {
                            t = ".";
                            y = ",";
                            w = ZC.BN(0, a.length - z)
                        } else {
                            t = ",";
                            y = ".";
                            w = ZC.BN(0, a.length - x)
                        } else if (x == -1 && z != -1)
                        if (a.length - z - 1 == 3) {
                            t = ",";
                            y = "."
                        } else {
                            t = ".";
                            y = ",";
                            w = ZC.BN(0, a.length - z)
                        } else if (x != -1 && z == -1)
                        if (a.length - x - 1 == 3) {
                            t =
                                ".";
                            y = ","
                        } else {
                            t = ",";
                            y = ".";
                            w = ZC.BN(0, a.length - x)
                        }
                    if (t == ".") a = a.replace(".", "").replace(",", ".");
                    if (t == ",") a = a.replace(",", "");
                    if (isNaN(ZC._f_(a))) {
                        x = ZC.AH(this.C.H0, a);
                        if (x != -1) u[s - o].push(x);
                        else {
                            this.C.H0.push(a);
                            u[s - o].push(this.C.H0.length - 1)
                        }
                    } else u[s - o].push(ZC._f_(a))
                } else u[s - o].push(null);
            r[s - o] = {};
            if (v != null) r[s - o].format = v;
            if (t != null) r[s - o][ZC._[15]] = t;
            if (t != null) r[s - o][ZC._[16]] = y;
            if (w != 0) r[s - o][ZC._[14]] = w
        }
        switch (this.C.AB) {
            case "line":
            case "area":
            case "vbar":
            case "hbar":
            case "mixed":
                if (this.o[ZC._[52]] ==
                    null) this.o[ZC._[52]] = {};
                a = [];
                if (k && p[0] != null) a = p[0].split(/\\/);
                if (a[0] != null) {
                    if (this.o[ZC._[52]].label == null) this.o[ZC._[52]].label = {};
                    if (this.o[ZC._[52]].label.text == null) this.o[ZC._[52]].label.text = a[0]
                }
                if (k)
                    if (this.o[ZC._[52]][ZC._[5]] == null) this.o[ZC._[52]][ZC._[5]] = g;
                    else if (this.o[ZC._[52]][ZC._[12]] == null) this.o[ZC._[52]][ZC._[12]] = g;
                k = [];
                b = 0;
                if (m != null && m) {
                    c = 0;
                    for (e = u.length; c < e; c++) {
                        k[c] = ZC._[53] + (c == 0 ? "" : "-" + (c + 1));
                        b++
                    }
                } else if (l != null && l) {
                    l = {};
                    c = m = 0;
                    for (e = u.length; c < e; c++) {
                        n = b = 0;
                        for (f =
                            u[c].length; n < f; n++) b += u[c][n];
                        b /= u[c].length;
                        b = Math.round(ZC.NR(b) / Math.LN10 / 2);
                        if (l[b] == null) {
                            l[b] = ZC._[53] + (m == 0 ? "" : "-" + (m + 1));
                            m++
                        }
                        k[c] = l[b]
                    }
                }
                if (k.length == 0) k[0] = ZC._[53];
                if (this.o[ZC._[13]] == null) this.o[ZC._[13]] = [];
                c = 0;
                for (e = u.length; c < e; c++) {
                    if (this.o[ZC._[13]][c] == null) this.o[ZC._[13]][c] = {};
                    this.o[ZC._[13]][c][ZC._[5]] = u[c];
                    if (h) {
                        if (this.o[ZC._[13]][c].text == null) this.o[ZC._[13]][c].text = p[c + o];
                        if (this.o[ZC._[13]][c]["legend-text"] == null) this.o[ZC._[13]][c]["legend-text"] = p[c + o];
                        if (this.o[ZC._[13]][c]["tooltip-text"] ==
                            null && r[c].format != null) this.o[ZC._[13]][c]["tooltip-text"] = r[c].format
                    }
                    if (k[c] != null) {
                        if (this.o[k[c]] == null) this.o[k[c]] = {};
                        if (a[1] != null) {
                            if (this.o[k[c]].label == null) this.o[k[c]].label = {};
                            if (this.o[k[c]].label.text == null) this.o[k[c]].label.text = a[1]
                        }
                        if (this.o[ZC._[13]][c].scales == null) this.o[ZC._[13]][c].scales = "scale-x," + k[c];
                        if (this.o[k[c]][ZC._[14]] == null && r[c][ZC._[14]] != null) this.o[k[c]][ZC._[14]] = r[c][ZC._[14]];
                        if (this.o[k[c]][ZC._[15]] == null && r[c][ZC._[15]] != null) this.o[k[c]][ZC._[15]] = r[c][ZC._[15]];
                        if (this.o[k[c]][ZC._[16]] == null && r[c][ZC._[16]] != null) this.o[k[c]][ZC._[16]] = r[c][ZC._[16]];
                        if (this.o[k[c]].format == null && r[c].format != null) this.o[k[c]].format = r[c].format
                    }
                }
                break;
            case "pie":
            case "nestedpie":
                if (this.o.scale == null) this.o.scale = {};
                if (k && p[0] != null) {
                    l = p[0].split(/\\/);
                    if (this.o.scale.label == null) this.o.scale.label = {};
                    if (this.o.scale.label.text == null) this.o.scale.label.text = l[0]
                }
                if (k)
                    if (this.o.scale[ZC._[5]] == null) this.o.scale[ZC._[5]] = g;
                    else if (this.o.scale[ZC._[12]] == null) this.o.scale[ZC._[12]] =
                    g;
                if (this.o[ZC._[13]] == null) this.o[ZC._[13]] = [];
                c = 0;
                for (e = u.length; c < e; c++) {
                    if (this.o[ZC._[13]][c] == null) this.o[ZC._[13]][c] = {};
                    this.o[ZC._[13]][c][ZC._[5]] = u[c];
                    if (h) {
                        if (this.o[ZC._[13]][c].text == null) this.o[ZC._[13]][c].text = p[c + o];
                        if (this.o[ZC._[13]][c]["legend-text"] == null) this.o[ZC._[13]][c]["legend-text"] = p[c + o];
                        if (this.o[ZC._[13]][c]["tooltip-text"] == null && r[c].format != null) this.o[ZC._[13]][c]["tooltip-text"] = r[c].format
                    }
                    if (this.o[ZC._[54]] == null) this.o[ZC._[54]] = {};
                    if (this.o[ZC._[54]][ZC._[14]] ==
                        null && r[c][ZC._[14]] != null) this.o[ZC._[54]][ZC._[14]] = r[c][ZC._[14]];
                    if (this.o[ZC._[54]][ZC._[15]] == null && r[c][ZC._[15]] != null) this.o[ZC._[54]][ZC._[15]] = r[c][ZC._[15]];
                    if (this.o[ZC._[54]][ZC._[16]] == null && r[c][ZC._[16]] != null) this.o[ZC._[54]][ZC._[16]] = r[c][ZC._[16]];
                    if (this.o[ZC._[54]].format == null && r[c].format != null) this.o[ZC._[54]].format = r[c].format
                }
        }
        return this.o
    }
});
ZC.HP = ZC.FY.B2({
    $i: function(a) {
        this.b(a);
        this.I = a;
        this.AB = "";
        this.E0 = this.O = this.L5 = this.JM = this.MH = null;
        this.TW = this.T7 = this.U4 = 1;
        this.J = 0;
        this.XV = this.ID = null;
        this.CL = 0;
        this.LQ = "normal";
        this.B8 = [];
        this.BD = [];
        this.N5 = [];
        this.IR = [];
        this.IL = [];
        this.AZ = new ZC.IK(this);
        this.H0 = [];
        this.HH = [];
        this.BY = this.AL = this.IH = this.FU = null;
        this.TU = "always";
        this.ZB = 1;
        this.JW = "";
        this.HZ = null;
        this.QH = 0;
        this.DD = {
            true3d: 1,
            angle: 45,
            depth: 40,
            "x-angle": 0,
            "y-angle": 0,
            "z-angle": 0,
            zoom: 1
        };
        this.AM = {
            "enable-guide": false,
            "enable-preview": false,
            "3d": false,
            clip: false,
            layout: "",
            "enable-animation": true,
            "angle-min": 15,
            "angle-max": 75,
            "x-angle-min": -20,
            "x-angle-max": 0,
            "y-angle-min": -20,
            "y-angle-max": 20,
            "z-angle-min": 0,
            "z-angle-max": 0
        };
        this.TZ = this.JP = 0;
        this.XI = [];
        if (typeof ZC.J9 != ZC._[33]) this.J4 = new ZC.J9(this);
        this.ES = 0;
        this.CU = {};
        this.H6 = [];
        this.I1 = this.FL = this.I6 = 0
    },
    getToggleAction: function() {
        var a, c = "hide";
        if (this.o.legend && (a = this.o.legend[ZC._[56]])) c = a;
        if (this.o.legend && this.o.legend.item && (a = this.o.legend.item[ZC._[56]])) c = a;
        return c
    },
    B6: function(a) {
        for (var c = [], b = 0, e = this.B8.length; b < e; b++) this.B8[b].AB == a && this.B8[b].W.length > 0 && c.push(this.B8[b]);
        return c
    },
    AY: function(a) {
        for (var c = 0, b = this.B8.length; c < b; c++)
            if (this.B8[c].BK == a) return this.B8[c];
        return null
    },
    OB: function(a) {
        return a
    },
    A05: function(a) {
        return new ZC.Y6(this, a)
    },
    A0D: function() {
        for (var a = 0, c = this.B8.length; a < c; a++) {
            var b = this.B8[a],
                e = b.BK;
            this.A.AQ.load(b.o, ["(" + this.AB + ").SCALE", "(" + this.AB + ")." + e, "(" + this.AB + ")." + e.replace(/\-[0-9]/, "-n"), "(" + this.AB + ")." + e.replace(/\-[0-9]/,
                "")], false, true);
            this.o[e] != null && b.append(this.o[e]);
            b.parse()
        }
    },
    Z1: function() {
        return null
    },
    Y0: function(a) {
        for (var c = 0, b = this.AZ.AA.length, e = 0; e < b; e++) c = ZC.BN(c, this.AZ.AA[e].M.length);
        e = 0;
        for (var f = this.B8.length; e < f; e++) {
            var g = this.B8[e];
            g.XP(a);
            if (a == 2) {
                g.GM = function(h) {
                    h = h.replace(/(%N|%node-count)/g, c);
                    h = h.replace(/(%P|%plot-count)/g, b);
                    return h = h.replace(/(%S|%scale-values-count)/g, g.W.length)
                };
                g.C2() && g.parse()
            }
            g.o["max-items"] == null && g.o["max-labels"] == null && g.ZX();
            g.o["max-ticks"] == null &&
                g.A01()
        }
    },
    SR: function() {},
    J2: function() {},
    parse3D: function() {},
    parseSelection: function() {},
    parse: function() {
        var a = this,
            c, b = a.A.AQ,
            e = "(" + a.AB + ")";
        a.JW = "parse.init";
        a.b();
        a.parse3D();
        var f = null;
        if ((c = a.o["html5-csv"]) != null) a.HZ = c["html5-url"];
        if ((c = a.o.csv) != null)
            if (typeof c == "object")
                if (c.url != null) a.HZ = c.url;
                else {
                    if (c["data-string"] != null) f = c["data-string"]
                } else a.HZ = c; if (a.HZ != "")
            if (a.A.XT[a.HZ] != null) f = a.A.XT[a.HZ];
        if (a.I.IB != null) f = a.I.IB;
        if (f != null) {
            c = a.A05(f);
            a.o = c.parse()
        }
        a.QH = zingchart.ASYNC;
        a.OT_a([
            ["async", "QH", "b"],
            ["stacked", "CL", "b"],
            ["stack-type", "LQ"],
            ["animate-type", "TU"],
            ["url-data", "XV"],
            ["page", "I1", "i"]
        ]);
        if (a.AM["3d"] || a.A.SJ) a.QH = 0;
        a.parseSelection();
        if (ZC.AH(a.I.H3, ZC._[43]) == -1)
            if (((c = a.o.preview) != null || b.hasFeature("preview", a.AB)) && a.AM[ZC._[58]])
                if (a.E0 == null && typeof ZC.WI != ZC._[33]) {
                    a.E0 = new ZC.WI(a);
                    b.load(a.E0.o, e + ".preview");
                    a.E0.append(c);
                    a.E0.parse()
                }
        a.O = new ZC.FY(a);
        a.O.Q = a.Q + "-plotarea";
        c = [e + ".plotarea"];
        a.E0 != null && c.push(e + ".plotarea[preview]");
        a.AM["3d"] &&
            c.push(e + ".plotarea[3d]");
        b.load(a.O.o, c);
        a.O.append(a.o.chart);
        a.O.append(a.o.plotarea);
        a.E0 != null && a.O.append(a.o["plotarea[preview]"]);
        a.AM["3d"] && a.O.append(a.o["plotarea[3d]"]);
        a.O.parse();
        if (a.AM["3d"])
            if (a.DD.true3d) {
                c = ZC._a_(ZC._i_(0.5 * a.DD.depth * ZC.CT(a.DD[ZC._[29]])));
                a.O.iY += c;
                a.O.D -= c;
                c = 0.5 * ZC._a_(ZC._i_(a.DD.depth * ZC.CJ(a.DD[ZC._[29]])));
                a.O.iX += c;
                a.O.F -= 2 * c
            } else {
                c = ZC._a_(ZC._i_(a.DD.depth * ZC.CJ(a.DD.angle)));
                a.O.iY += c;
                a.O.D -= c;
                a.O.F -= ZC._i_(a.DD.depth * ZC.CT(a.DD.angle))
            }
        a.J2();
        a.B8 = [];
        a.A0D();
        a.Y0(1);
        if ((c = a.o[ZC._[13]]) != null) a.AZ.o = c;
        a.AZ.parse();
        a.Y0(2);
        ZC.K.F6(a.A.Q + "-tooltip");
        if (typeof a.H.datalength != ZC._[33] && a.H.datalength != null && a.H.datalength.length > 0 && a.I.A5 != "canvas")
            if (a.AZ.AA != null) {
                c = 0;
                for (f = a.AZ.AA.length; c < f; c++) {
                    if (a.AZ.AA[c].M.length < a.H.datalength[c]) {
                        d = a.AZ.AA[c].M.length;
                        for (XJ = a.H.datalength[c]; d < XJ; d++) {
                            var g = a.Q + ZC._[37] + c + "-node-" + d;
                            ZC.K.F6([g + "-path", g + "-area-path", g + "-sh-path"]);
                            ZC.AH(["scatter", "bubble"], a.AB) != -1 && ZC.K.F6([g + "-marker-gradient",
                                g + "-marker-path", g + "-marker-sh-path", g + "-marker-circle", g + "-marker-sh-circle"
                            ]);
                            a.CS[c + "-" + d] = null
                        }
                    }
                    if (ZC.AH(["scatter", "bubble"], a.AB) == -1 || ZC.A3.browser.webkit) {
                        d = 0;
                        for (XJ = a.H.datalength[c]; d < XJ; d++) {
                            g = a.Q + ZC._[37] + c + "-node-" + d;
                            ZC.K.F6([g + "-marker-gradient", g + "-marker-path", g + "-marker-sh-path", g + "-marker-circle", g + "-marker-sh-circle"])
                        }
                    }
                }
            }
        a.H.datalength = null;
        c = 0;
        for (f = a.AZ.AA.length; c < f; c++) a.ES = a.ES || a.AZ.AA[c].ES;
        if (a.FL || typeof ZC.J9 == ZC._[33]) a.ES = 0;
        if (a.ES) a.J4.onStop = function() {
            a.JW = "ready"
        };
        if (typeof ZC.XR != ZC._[33])
            if ((c = a.o.legend) != null || b.hasFeature("legend", a.AB)) {
                a.IH = new ZC.XR(a);
                a.IH.Q = a.Q + "-legend";
                b.load(a.IH.o, e + ".legend");
                a.IH.append(c);
                a.IH.parse()
            }
        if (ZC.AH(a.I.H3, ZC._[43]) == -1) {
            a.FU = new ZC.FY(a);
            a.FU.Q = a.Q + "-zoom";
            b.load(a.FU.o, e + ".zoom");
            a.FU.append(a.o.zoom);
            a.AL = new ZC.FY(a);
            b.load(a.AL.o, e + ".tooltip");
            a.AL.append(a.o.tooltip);
            a.AL.HD = 1;
            a.AL.parse();
            if ((c = a.o["crosshair-x"]) != null) a.o.guide = c;
            if (((c = a.o.guide) != null || b.hasFeature("guide", a.AB) || b.hasFeature("crosshair-x",
                a.AB)) && a.AM[ZC._[25]]) {
                a.BY = new ZC.E7(a);
                b.load(a.BY.o, [e + ".guide", e + ".crosshair-x"], true, true);
                a.BY.append(c);
                a.BY.parse()
            }
        }
        a.WP();
        if ((c = a.o.title) != null || b.hasFeature("title", a.AB)) {
            a.MH = new ZC.DC(a);
            b.load(a.MH.o, e + ".title");
            a.MH.append(c);
            a.MH.Q = a.Q + "-title";
            a.MH.parse()
        }
        if ((c = a.o.subtitle) != null || b.hasFeature("subtitle", a.AB)) {
            a.JM = new ZC.DC(a);
            b.load(a.JM.o, e + ".subtitle");
            a.JM.append(c);
            a.JM.Q = a.Q + "-subtitle";
            a.JM.parse()
        }
        if ((c = a.o.source) != null) {
            a.L5 = new ZC.DC(a);
            b.load(a.L5.o, e + ".source");
            a.L5.append(c);
            a.L5.Q = a.Q + "-source";
            a.L5.parse()
        }
        if ((c = a.o.refresh) != null) {
            a.ID = {
                type: "full",
                interval: 10,
                "max-ticks": 20,
                "reset-timeout": 100,
                "stop-timeout": 0
            };
            ZC.ET(c, a.ID)
        }
        a.JW = "parse.complete"
    },
    WP: function() {},
    build: function() {
        var a = this,
            c = a.A.F + "/" + a.A.D;
        if (!a.I.usc()) {
            if (a.A.A5 == "svg" && !a.AM["3d"] && a.AM.clip) {
                ZC.K.F6([a.Q + "-clip", a.Q + "-clip-hover"]);
                var b = function(m) {
                    var o = a.O.iX,
                        n = a.O.iY,
                        p = a.O.F,
                        s = a.O.D;
                    return [
                        [o - m, n - m].join(","), [o + p + m, n - m].join(","), [o + p + m, n + s + m].join(","), [o - m, n + s + m].join(","), [o - m, n - m].join(",")
                    ].join(" ")
                };
                a.A.H4.appendChild(ZC.K.UA({
                    id: a.Q + "-clip",
                    path: b(2)
                }));
                a.A.H4.appendChild(ZC.K.UA({
                    id: a.Q + "-clip-hover",
                    path: b(6)
                }))
            }
            var e = a.AM["3d"] || !a.AM.clip,
                f = function(m) {
                    return "rect(" + (a.O.iY - m) + "px," + (a.O.iX + a.O.F + m) + "px," + (a.O.iY + a.O.D + m) + "px," + (a.O.iX - m) + "px)"
                };
            b = e ? null : f(2);
            var g = e ? null : "url(#" + a.Q + "-clip)";
            f = e ? null : f(6);
            e = e ? null : "url(#" + a.Q + "-clip-hover)";
            ZC.K.IG({
                cls: "zc-abs",
                id: a.Q,
                p: ZC.AJ(a.A.Q + "-graphset"),
                tl: "0/0",
                wh: c
            }, a.A.A5);
            ZC.K.H9({
                cls: ZC._[26] + " zc-persistent",
                id: a.Q + "-c",
                p: ZC.AJ(a.Q),
                wh: c
            }, a.A.A5);
            ZC.K.IG({
                id: a.Q + "-plotarea",
                p: ZC.AJ(a.Q),
                tl: "0/0",
                wh: c,
                position: "absolute",
                "clip-path": g,
                clip: b
            }, a.A.A5);
            ZC.K.H9({
                cls: ZC._[26] + " zc-persistent",
                id: a.Q + "-plotarea-c",
                p: ZC.AJ(a.Q + "-plotarea"),
                wh: c
            }, a.A.A5);
            ZC.K.IG({
                id: a.Q + "-scales-bl",
                p: ZC.AJ(a.Q),
                tl: "0/0",
                wh: c,
                position: "absolute",
                "clip-path": g,
                clip: b
            }, a.A.A5);
            for (var h = 0; h < a.U4; h++) ZC.K.H9({
                cls: ZC._[26],
                id: a.Q + "-scales-bl-" + h + "-c",
                p: ZC.AJ(a.Q + "-scales-bl"),
                wh: c
            }, a.A.A5);
            if (a.A.KY || a.AM["3d"]) {
                ZC.AJ(a.Q + "-plots-bl") ==
                    null && ZC.K.IG({
                        id: a.Q + "-plots-bl",
                        p: ZC.AJ(a.Q),
                        tl: "0/0",
                        wh: c,
                        position: "absolute",
                        "clip-path": g,
                        clip: b
                    }, a.A.A5);
                ZC.K.H9({
                    cls: "zc-abs zc-layer zc-bl",
                    id: a.Q + "-plots-bl-c",
                    p: ZC.AJ(a.Q + "-plots-bl"),
                    wh: c
                }, a.A.A5)
            } else {
                h = 0;
                for (var k = a.AZ.AA.length; h < k; h++)
                    for (var l = 0; l < a.AZ.AA[h].LZ; l++) {
                        ZC.AJ(a.Q + "-plots-bl-" + l) == null && ZC.K.IG({
                            id: a.Q + "-plots-bl-" + l,
                            p: ZC.AJ(a.Q),
                            tl: "0/0",
                            wh: c,
                            position: "absolute",
                            "clip-path": g,
                            clip: b
                        }, a.A.A5);
                        ZC.K.H9({
                            cls: "zc-abs zc-layer zc-bl",
                            id: a.Q + "-plot-" + h + "-bl-" + l + "-c",
                            p: ZC.AJ(a.Q +
                                "-plots-bl-" + l),
                            wh: c
                        }, a.A.A5)
                    }
            }
            for (h = 0; h < a.T7; h++) ZC.K.H9({
                cls: ZC._[26],
                id: a.Q + "-scales-ml-" + h + "-c",
                p: ZC.AJ(a.Q),
                wh: c
            }, a.A.A5);
            if (a.A.KY || a.AM["3d"]) {
                ZC.AJ(a.Q + "-plots-fl") == null && ZC.K.IG({
                    id: a.Q + "-plots-fl",
                    p: ZC.AJ(a.Q),
                    tl: "0/0",
                    wh: c,
                    position: "absolute"
                }, a.A.A5);
                ZC.K.H9({
                    cls: "zc-abs zc-layer zc-fl",
                    id: a.Q + "-plots-fl-c",
                    p: ZC.AJ(a.Q + "-plots-fl"),
                    wh: c
                }, a.A.A5)
            } else {
                h = 0;
                for (k = a.AZ.AA.length; h < k; h++)
                    for (l = 0; l < a.AZ.AA[h].TN; l++) {
                        ZC.AJ(a.Q + "-plots-fl-" + l) == null && ZC.K.IG({
                            id: a.Q + "-plots-fl-" + l,
                            p: ZC.AJ(a.Q),
                            tl: "0/0",
                            wh: c,
                            position: "absolute"
                        }, a.A.A5);
                        ZC.K.H9({
                            cls: "zc-abs zc-layer zc-fl",
                            id: a.Q + "-plot-" + h + "-fl-" + l + "-c",
                            p: ZC.AJ(a.Q + "-plots-fl-" + l),
                            wh: c
                        }, a.A.A5)
                    }
            }
            for (h = 0; h < a.TW; h++) ZC.K.H9({
                cls: ZC._[26],
                id: a.Q + "-scales-fl-" + h + "-c",
                p: ZC.AJ(a.Q),
                wh: c
            }, a.A.A5);
            ZC.K.IG({
                id: a.Q + "-plots-vb",
                p: ZC.AJ(a.Q),
                tl: "0/0",
                wh: c,
                position: "absolute"
            }, a.A.A5);
            if (a.A.KY || a.AM["3d"]) ZC.K.H9({
                cls: "zc-abs zc-layer zc-vb",
                id: a.Q + "-plots-vb-c",
                p: ZC.AJ(a.Q + "-plots-vb"),
                wh: c
            }, a.A.A5);
            else {
                h = 0;
                for (k = a.AZ.AA.length; h < k; h++) ZC.K.H9({
                    cls: "zc-abs zc-layer zc-vb",
                    id: a.Q + "-plot-" + h + "-vb-c",
                    p: ZC.AJ(a.Q + "-plots-vb"),
                    wh: c
                }, a.A.A5)
            }
            ZC.K.IG({
                cls: "zc-abs",
                wh: c,
                id: a.Q + "-hover",
                p: ZC.AJ(a.A.Q + "-hover"),
                "clip-path": e,
                clip: f
            }, a.A.A5);
            if (a.A.A5 == "canvas") ZC.AJ(a.Q + "-hover").style.clip = f;
            ZC.K.H9({
                cls: ZC._[26],
                id: a.Q + ZC._[24],
                p: ZC.AJ(a.Q + "-hover"),
                wh: c
            }, a.A.A5);
            ZC.K.IG({
                cls: "zc-abs",
                wh: c,
                id: a.Q + "-objects",
                p: ZC.AJ(a.A.Q + "-objects")
            }, a.A.A5);
            ZC.K.H9({
                cls: ZC._[26],
                id: a.Q + "-objects-c",
                p: ZC.AJ(a.Q + "-objects"),
                wh: c
            }, a.A.A5);
            ZC.K.IG({
                cls: "zc-abs",
                wh: c,
                id: a.Q + "-front",
                p: ZC.AJ(a.A.Q +
                    "-front")
            }, a.A.A5);
            ZC.K.H9({
                cls: ZC._[26],
                id: a.Q + "-front-c",
                p: ZC.AJ(a.Q + "-front"),
                wh: c
            }, a.A.A5);
            ZC.K.H9({
                cls: ZC._[26],
                id: a.Q + "-legend-c",
                p: ZC.AJ(a.A.Q + "-legend"),
                wh: c
            }, a.A.A5)
        }
        a.Y = a.I.usc() ? a.I.mc() : ZC.AJ(a.Q + "-c")
    },
    X4: function() {},
    clear_: function() {},
    clear: function(a, c) {
        if (a == null) a = 0;
        if (c == null) c = 0;
        var b = this;
        b.ES && b.J4.stop(true);
        b.JW = "clear.init";
        b.unbind(a);
        b.X4();
        b.MU();
        b.MU("guide", true);
        b.MU("print", true);
        a || b.MU("static", true);
        b.IH && b.IH.clear();
        b.H.datalength = [];
        if (ZC.mobile) ZC.A3("." + b.Q +
            "-node-area").remove();
        else if (ZC.AJ(b.A.Q + "-img") != null && ZC.AJ(b.A.Q + "-map") != null) {
            ZC.AJ(b.A.Q + "-img").setAttribute("useMap", "");
            for (var e = ZC.AJ(b.A.Q + "-map").cloneNode(true), f = e.childNodes.length - 1; f >= 0; f--) e.childNodes[f].className.indexOf(b.Q + "-node-area") != -1 && e.removeChild(e.childNodes[f]);
            ZC.K.F6(b.A.Q + "-map");
            ZC.AJ(b.A.Q + "-top").appendChild(e);
            ZC.AJ(b.A.Q + "-img").setAttribute("useMap", "#" + b.A.Q + "-map")
        }
        ZC.A3("." + b.Q + "-value-box").remove();
        ZC.A3("." + b.Q + "-scale-marker-label").remove();
        ZC.A3("." +
            b.Q + "-scale-item").remove();
        ZC.A3("." + b.Q + "-scale-label").remove();
        ZC.A3("." + b.Q + "-guide-label").remove();
        ZC.A3("." + b.Q + "-shape-label").remove();
        switch (b.A.A5) {
            case "svg":
                ZC.A3("#" + b.A.Q + "-defs").children().each(function() {
                    if (this.id.indexOf(b.Q + "-") == 0 || b.A.B1.length == 1)
                        if (a) {
                            if (this.id != b.Q + "-gradient" && this.id.indexOf("-preview-gradient") == -1 && this.id.indexOf("-menu-trigger-gradient") == -1 && this.id.indexOf(b.Q + ZC._[37]) != -1) c && b.ES || ZC.A3(this).remove()
                        } else this.id.indexOf("zc-menu-") == -1 && ZC.A3(this).remove()
                });
                a || ZC.K.F6([b.Q + "-clip", b.Q + "-clip-hover"])
        }
        if (!a) {
            ZC.K.F6([b.Q + "-title", b.Q + "-subtitle", b.Q + "-source", b.Q + "-legend-c", b.Q + "-hover"]);
            ZC.A3("." + b.Q + "-legend-item-area").remove();
            ZC.A3("." + b.Q + "-legend-item").remove();
            ZC.A3("." + b.Q + "-legend-header").remove();
            ZC.A3("." + b.Q + "-legend-footer").remove();
            b.E0 != null && b.E0.unbind();
            ZC.A3("." + b.Q + "-preview-handler").remove();
            ZC.A3("." + b.Q + "-preview-mask").remove();
            ZC.A3("#" + b.Q + "-c").empty();
            if (b.I.KB[0] != b.I.KB[1]) {
                b.I.A5 == "canvas" && ZC.A3("#" + b.Q + " canvas").each(function() {
                    this.height =
                        this.width = 1;
                    ZC.K.F6(this)
                });
                ZC.A3("#" + b.Q + " div").each(function() {
                    ZC.K.F6(this)
                });
                ZC.K.F6(b.Q)
            }
        }
        ZC.A3("#" + b.Q + " .zc-layer").each(function() {
            var g = ZC.K.Z3(this);
            if (g.indexOf("zc-persistent") == -1)
                if (this.id.indexOf(b.Q + "-plot-") == -1 && this.id.indexOf(b.Q + "-plots-") == -1) ZC.K.IW(this, b.I.A5, b.iX, b.iY, b.F, b.D, b.Q);
                else if (c && b.ES && !b.FL) {
                if (b.I.A5 != "canvas")
                    for (var h = 0, k = b.AZ.AA.length; h < k; h++) b.H.datalength[h] = b.AZ.AA[h].M.length;
                if (h = b.A.KY ? RegExp("-plots-[a-z]+-c", "g").exec(this.id) : RegExp("-plot-(\\d+)-[a-z]+-\\d+-",
                    "g").exec(this.id))
                    if (!b.H["plot" + h[1] + ".visible"] && b.getToggleAction() == "remove" || b.A.KY) ZC.K.IW(this, b.I.A5, b.iX, b.iY, b.F, b.D, b.Q);
                if (g.indexOf("zc-vb") != -1 || g.indexOf("zc-fl") != -1) ZC.K.IW(this, b.I.A5, b.iX, b.iY, b.F, b.D, b.Q)
            } else ZC.K.IW(this, b.I.A5, b.iX, b.iY, b.F, b.D, b.Q)
        });
        b.clear_();
        b.JW = "clear.complete"
    },
    unbind: function(a) {
        if (a == null) a = 0;
        if (ZC.AH(this.I.H3, ZC._[43]) == -1) {
            ZC.A3("." + this.Q + "-node-area").die(ZC.K.BL(ZC._[49]), this.QU).die(ZC.K.BL("mouseover"), this.QT).die(ZC.K.BL("mouseout"), this.RH).die(ZC.K.BL(ZC._[50]),
                this.QR).die("click", this.QO).die("dblclick", this.RI);
            a || this.IH != null && ZC.A3("." + this.Q + "-legend-item-area").die("click", this.P9);
            this.A02()
        }
    },
    A02: function() {},
    R1: function() {},
    N7: function() {},
    I9: function() {},
    U8: function() {},
    X7: function() {},
    MU: function(a, c) {
        a = a || "hover";
        if (c == null) c = 0;
        var b = ZC.AJ((c ? this.A.Q : this.Q) + "-" + a + "-c");
        b && ZC.K.IW(b, this.I.A5, this.iX, this.iY, this.F, this.D, this.Q);
        this.MU_(a, c)
    },
    MU_: function() {},
    UR: function(a, c) {
        if (a != null && c != null) {
            var b = this.AZ.AA[a].JL;
            if (b == "none") return;
            if (this.CU["p" + a] != null)
                if (this.CU["p" + a]["n" + c] != null) delete this.CU["p" + a]["n" + c];
                else {
                    if (b == "graph") {
                        this.CU = {};
                        this.CU["p" + a] = {}
                    } else if (b == "plot") this.CU["p" + a] = {};
                    this.CU["p" + a]["n" + c] = 1
                } else {
                if (b == "graph") this.CU = {};
                this.CU["p" + a] = {};
                this.CU["p" + a]["n" + c] = 1
            }
        }
        if (a != null && c != null) {
            this.FL = 1;
            this.GX(true, true)
        }
    },
    paint: function(a) {
        if (a == null) a = 0;
        this.A.GRAPHID = this.Q;
        this.KX = a;
        a = this.I6 = 0;
        for (var c = this.AZ.AA.length; a < c; a++) this.H6[a] = 0;
        for (a in this.CU)
            if (this.CU.hasOwnProperty(a)) {
                c = ZC._i_(a.replace("p",
                    ""));
                for (var b in this.CU[a])
                    if (this.CU[a].hasOwnProperty(b)) {
                        this.I6 = this.H6[c] = 1;
                        break
                    }
            }
        this.A.T5();
        this.J2();
        if (!this.KX) {
            this.build();
            this.b();
            if (this.AM["3d"]) this.BP.add(ZC.DZ.DH(this.O, this, this.O.iX - ZC.AC.DX, this.O.iX - ZC.AC.DX + this.O.F, this.O.iY - ZC.AC.DU, this.O.iY - ZC.AC.DU + this.O.D, ZC.AC.FK + 1, ZC.AC.FK + 1, "y"));
            else {
                this.O.Y = this.I.usc() ? this.I.mc() : ZC.AJ(this.Q + "-plotarea-c");
                this.O.paint()
            }
        }
        b = 0;
        for (a = this.B8.length; b < a; b++) {
            this.B8[b].Y = this.I.usc() ? this.I.mc() : ZC.AJ(this.Q + "-scales-bl-0-c");
            this.A.TS = 1;
            this.B8[b].paint();
            this.A.S5();
            this.A.TS = 0
        }
        if (this.E0 != null && (!this.KX || this.E0.FH)) {
            this.E0.FH = 1;
            this.E0.paint()
        }
        if (!this.KX) {
            b = this.I.usc() ? this.I.mc() : this.Y;
            if (this.MH != null)
                if (this.MH.AK && this.MH.B0 != null) {
                    this.MH.Y = this.MH.C6 = b;
                    this.MH.paint()
                }
            if (this.JM != null)
                if (this.JM.AK && this.JM.B0 != null) {
                    this.JM.Y = this.JM.C6 = b;
                    this.JM.paint()
                }
            if (this.L5 != null)
                if (this.L5.AK && this.L5.B0 != null) {
                    this.L5.Y = this.L5.C6 = b;
                    this.L5.paint()
                }
        }
        this.MH != null && this.MH.D4();
        this.JM != null && this.JM.D4();
        this.L5 !=
            null && this.L5.D4();
        this.A.TS = !this.ES;
        if (this.A.H["graph." + this.Q + ".disableanimation"]) {
            b = 0;
            for (a = this.AZ.AA.length; b < a; b++) this.AZ.AA[b].ES = 0
        }
        this.AZ.paint();
        this.A0F()
    },
    A0F: function() {},
    _end_: function() {
        var a = this;
        a.ES || a.A.S5();
        a.A.TS = 0;
        if (!a.ES || !a.AM[ZC._[57]] || ZC.AH(a.I.H3, ZC._[43]) != -1) a.JW = "ready";
        for (var c = 0, b = a.B8.length; c < b; c++) a.B8[c].paint_();
        if (a.E0 != null && (!a.KX || a.E0.FH)) a.E0.FH = 0;
        if (!a.AM["3d"]) {
            a.I9();
            ZC.AH(a.I.H3, ZC._[43]) == -1 && a.X7()
        }
        if (ZC.AH(a.I.H3, ZC._[43]) == -1) {
            var e = function(h) {
                h =
                    h.target.id.replace(/--([a-zA-Z0-9]+)/, "").split("-").reverse();
                var k, l;
                if (h[1] == "node") {
                    k = h[2];
                    l = h[0]
                }
                return [k, l]
            };
            c = ZC.A3("." + a.Q + "-node-area");
            a.QU = function(h) {
                if (h.target.className.indexOf("zc-node-area") != -1)
                    if (a.JW == "ready") {
                        h.preventDefault();
                        if (ZC.mobile) {
                            ZC.move = 0;
                            a.I.hideCM();
                            a.A.N8(h)
                        }
                        var k = e(h),
                            l = a.AZ.AA[k[0]].M[k[1]];
                        a.H["plot" + k[0] + ".visible"] && l.M4(h, ZC._[49])
                    }
            };
            c.live(ZC.K.BL(ZC._[49]), a.QU);
            a.QT = function(h) {
                if (!ZC.move)
                    if (h.target.className.indexOf("zc-node-area") != -1)
                        if (a.JW == "ready") {
                            if (ZC.mobile) {
                                ZC.move =
                                    0;
                                a.I.hideCM();
                                h.preventDefault();
                                a.A.N8(h)
                            }
                            var k = e(h),
                                l = a.AZ.AA[k[0]].M[k[1]];
                            if (a.H["plot" + k[0] + ".visible"]) {
                                a.A.AL && a.AL && a.AL.AK && a.A.AL.onmouseover(h);
                                l.A0T();
                                l.M4(h, "mouseover");
                                l.A.OA(h, "mouseover")
                            }
                        }
            };
            c.live(ZC.K.BL("mouseover"), a.QT);
            a.RH = function(h) {
                if (h.target.className.indexOf("zc-node-area") != -1)
                    if (a.JW == "ready") {
                        ZC.mobile && a.A.J1(h);
                        var k = e(h),
                            l = a.AZ.AA[k[0]].M[k[1]];
                        if (a.H["plot" + k[0] + ".visible"]) {
                            a.A.AL && a.AL && a.AL.AK && a.A.AL.onmouseout(h);
                            l.MU();
                            a.MU();
                            l.M4(h, "mouseout");
                            l.A.OA(h,
                                "mouseout")
                        }
                        if (ZC.mobile && !a.I.XS && !ZC.move) {
                            zingchart.MO(h);
                            a.QO(h)
                        }
                    }
            };
            c.live(ZC.K.BL("mouseout"), a.RH);
            a.QR = function(h) {
                if (h.target.className.indexOf("zc-node-area") != -1)
                    if (a.JW == "ready") {
                        ZC.mobile && a.A.J1(h);
                        e(h);
                        a.A.AL && a.AL && a.AL.AK && a.A.AL.onmousemove(h)
                    }
            };
            c.live(ZC.K.BL(ZC._[50]), a.QR);
            a.QO = function(h) {
                if (h.target.className.indexOf("zc-node-area") != -1)
                    if (a.JW == "ready") {
                        var k = e(h);
                        k = a.AZ.AA[k[0]].M[k[1]];
                        if (k.A.JL != "none") {
                            a.A.H[ZC._[55]] = 1;
                            a.UR(k.A.J, k.J)
                        }
                        k.M4(h, "click");
                        k.A.OA(h, "click");
                        if (k.A.EE != null)
                            if (k.A.EE instanceof Array)
                                for (var l = 0; l < k.A.EE.length; l++) k.A.HN[l] != null && a.PI(h, k.KC(k.A.EE[l]), k.A.HN[l]);
                            else a.PI(h, k.KC(k.A.EE), k.A.HN)
                    }
            };
            ZC.mobile || c.live("click", a.QO);
            a.RI = function(h) {
                if (h.target.className.indexOf("zc-node-area") != -1)
                    if (a.JW == "ready") {
                        var k = e(h);
                        k = a.AZ.AA[k[0]].M[k[1]];
                        k.M4(h, "doubleclick");
                        k.A.OA(h, "doubleclick")
                    }
            };
            ZC.mobile || c.live("dblclick", a.RI)
        }
        a.ZO();
        a.AM["3d"] || a.WE();
        if (a.TZ) {
            a.TZ = 0;
            var f = {
                triggerevent: false
            };
            c = 0;
            for (b = a.B6("k").length; c < b; c++) {
                var g =
                    a.B6("k")[c];
                if ((E = g.L4) != null) {
                    g = g.J == 1 ? "" : "-" + g.J;
                    f["zoomx" + g] = 1;
                    f["xmin" + g] = E[0];
                    f["xmax" + g] = E[1]
                }
            }
            c = 0;
            for (b = a.B6("v").length; c < b; c++) {
                g = a.B6("v")[c];
                if ((E = g.L4) != null) {
                    g = g.J == 1 ? "" : "-" + g.J;
                    f["zoomy" + g] = 1;
                    f["ymin" + g] = E[0];
                    f["ymax" + g] = E[1]
                }
            }
            a.A.KO(f)
        }
    },
    ZO: function() {},
    WE: function() {
        if (this.A.RW < this.A.B1.length) {
            this.A.RW++;
            ZC.BV.F1("load", this.A, this.M3())
        }
        ZC.BV.F1("complete", this.A, this.M3());
        if (this.A.TB < this.A.B1.length) this.A.TB++;
        else {
            this.A.TB = 1;
            if (this.A.RW == this.A.B1.length) {
                this.A.RW++;
                ZC.BV.F1("gsetload", this.A, this.A.G8())
            }
            ZC.BV.F1("gsetcomplete", this.A, this.A.G8())
        }
    },
    GX: function(a, c) {
        if (a == null) a = 0;
        if (c == null) c = 0;
        this.A.HK(this);
        this.clear(a, c);
        this.parse();
        this.paint(a);
        this.FL = 0
    },
    PI: function(a, c, b) {
        if (a.button != 2) {
            a = [""];
            if (b != null) a = b.split("=");
            switch (a[0]) {
                case "_blank":
                    window.open(c, "_blank");
                    break;
                case "_top":
                    window.top.location.href = c;
                    break;
                case "_parent":
                    window.parent.location.href = c;
                    break;
                case "window":
                    if (a[1] != null && a[1] != "") eval(a[1]).location.href = c;
                    break;
                case "graph":
                    if (a[1] !=
                        null && a[1] != "")
                        if (a[1] == "_top" || a[1] == "_parent") {
                            this.A.HK();
                            this.A.load(null, c)
                        } else {
                            b = this.A.JY(a[1]);
                            this.A.HK(b);
                            this.A.load(a[1], c)
                        } else {
                        b = this.A.B1[0];
                        this.A.HK(b);
                        this.A.load(b.Q, c)
                    }
                    break;
                default:
                    window.location.href = c
            }
        }
    },
    HO: function(a, c, b) {
        if (b == null) b = this.AZ.AA.length - 1;
        if (a == null || typeof a == ZC._[33])
            if (c == null || typeof c == ZC._[33]) return this.AZ.AA[b];
            else {
                a = 0;
                for (b = this.AZ.AA.length; a < b; a++)
                    if (c == this.AZ.AA[a].HS) return this.AZ.AA[a]
            } else return this.AZ.AA[a];
        return null
    },
    SO: function(a,
        c) {
        a = a || {};
        a[ZC._[56]] = a[ZC._[56]] || (this.IH ? this.IH.G9 : "hide");
        var b = a.plotindex || "";
        if (b == -1) {
            b = [];
            for (var e = 0, f = this.AZ.AA.length; e < f; e++) b.push(e)
        }
        b instanceof Array || (b = [b]);
        var g = a.plotid || "";
        g instanceof Array || (g = [g]);
        var h = [];
        e = 0;
        for (f = b.length; e < f; e++) {
            var k = this.HO(b[e], g[e]);
            if (k) {
                var l = {};
                ZC.ET(a, l);
                k = k.J;
                l.plotindex = b[e];
                l.plotid = g[e];
                if (c == "show" && !this.H["plot" + k + ".visible"] || c == "hide" && this.H["plot" + k + ".visible"]) h.push(l)
            }
        }
        e = 0;
        for (f = h.length; e < f; e++) {
            if (e == f - 1) h[e].GX = 1;
            this.LY(h[e])
        }
    },
    LY: function(a) {
        var c;
        this.A.H["graph." + this.Q + ".disableanimation"] = 0;
        a = a || {};
        var b = 0;
        if (a.skip != null && a.skip) b = 1;
        var e = 0,
            f = "hide";
        if ((c = a[ZC._[56]]) != null) f = c;
        if ((c = a["ignore-legend"]) != null) e = ZC._b_(c);
        var g = this.HO(a.plotindex, a.plotid);
        if (g) {
            c = g.J;
            switch (f) {
                case "hide":
                    if (this.IH) this.IH.H.showhide = 1;
                    this.H["plot" + c + ".visible"] = !this.H["plot" + c + ".visible"];
                    if (this.AM["3d"]) {
                        e = 1;
                        b || this.GX()
                    } else {
                        a = this.H["plot" + c + ".visible"] ? "block" : "none";
                        if (this.A.KY) {
                            ZC.AJ(this.Q + "-plots-bl-c").style.display =
                                a;
                            ZC.AJ(this.Q + "-plots-fl-c").style.display = a
                        } else {
                            for (b = 0; b < g.LZ; b++) ZC.AJ(this.Q + "-plot-" + c + "-bl-" + b + "-c").style.display = a;
                            for (b = 0; b < g.TN; b++) ZC.AJ(this.Q + "-plot-" + c + "-fl-" + b + "-c").style.display = a
                        }
                        g = ZC.A3("." + this.Q + "-plot-" + c + "-value-box");
                        this.H["plot" + c + ".visible"] ? g.show() : g.hide()
                    }
                    break;
                case "remove":
                    e = 1;
                    this.H["plot" + c + ".visible"] = !this.H["plot" + c + ".visible"];
                    if (a.GX) b || this.GX(true, true)
            }
            if (this.IH && !e) {
                this.IH.clear();
                this.IH.paint()
            }
        }
    },
    M3: function() {
        return {
            id: this.A.Q,
            graphid: this.Q,
            width: this.F,
            height: this.D,
            loader: this.A.G8()
        }
    },
    LR: function() {},
    NN: function() {}
});
ZC.HP.prototype.WP = function() {
    var a = this,
        c;
    a.BD = [];
    a.IR = [];
    a.N5 = [];
    a.IL = [];
    var b = a.A.AQ,
        e = "(" + a.AB + ")",
        f = a.O.F / a.I.F,
        g = a.O.D / a.I.D,
        h;
    if ((h = a.o[ZC._[12]]) != null)
        for (var k = 0, l = h.length; k < l; k++) {
            var m = new ZC.DC(a);
            b.load(m.o, e + ".label");
            m.append(h[k]);
            c = h[k].id || k;
            m.HS = c;
            m.Q = a.Q + "-label-" + c;
            m.F0 = a.Q + "-label zc-label";
            if ((c = h[k].hook) != null) m.H.hook = c;
            m.KC = function(o) {
                o = new String(o);
                var n = [],
                    p;
                n.push(["%id", a.A.Q]);
                n.push(["%graphid", a.Q.replace(a.A.Q + "-graph-", "")]);
                p = a.H.update;
                for (var s in p) n.push(["%" +
                    s, p[s]
                ]);
                n.sort(ZC.RA);
                s = 0;
                for (var t = n.length; s < t; s++) {
                    p = RegExp(n[s][0], "g");
                    o = o.replace(p, n[s][1])
                }
                n = m.o["default-value"] || " ";
                p = RegExp("(%plot-([0-9]+?)-value(-*)([0-9]*?))|(%plot-value-([0-9]+?))|(%plot-value)", "g");
                return o = o.replace(p, n)
            };
            m.parse();
            if (typeof m.o["scale-to-plotarea"] != ZC._[33] && ZC._b_(m.o["scale-to-plotarea"])) {
                m.iX = a.O.iX + (m.iX - a.iX) * f;
                m.iY = a.O.iY + (m.iY - a.iY) * g;
                m.F *= f;
                m.D *= g
            }
            a.BD.push(m)
        }
    if ((c = a.o.arrows) != null) {
        k = 0;
        for (l = c.length; k < l; k++) {
            f = new ZC.ZZ(a);
            b.load(f.o, e + ".arrow");
            f.append(c[k]);
            f.Q = a.Q + "-arrow-" + k;
            f.parse();
            a.N5.push(f)
        }
    }
    if ((b = a.o.shapes) != null) {
        k = 0;
        for (l = b.length; k < l; k++)
            if (!(b[k].type != null && b[k].type.indexOf("zingchart.") == 0)) {
                e = new ZC.XQ(a);
                e.append(b[k]);
                c = b[k].id || k;
                e.HS = c;
                e.Q = a.Q + "-shape-" + c;
                e.parse();
                a.IR.push(e)
            }
    }
    if ((b = a.o.images) != null) {
        k = 0;
        for (l = b.length; k < l; k++) {
            e = new ZC.FY(a);
            c = b[k].src;
            e.append({
                "background-repeat": "no-repeat",
                "background-image": c,
                width: ZC.cache[c].width,
                height: ZC.cache[c].height
            });
            e.append(b[k]);
            c = b[k].id || k;
            e.HS = c;
            e.Q = a.Q +
                "-image-" + c;
            e.J = k;
            e.parse();
            a.IL.push(e)
        }
    }
};
ZC.HP.prototype.X4 = function(a) {
    if (typeof a == ZC._[33]) a = 0;
    var c;
    if ((c = ZC.AJ(this.Q + "-objects-c")) != null) ZC.K.IW(c, this.I.A5, this.iX, this.iY, this.F, this.D, this.Q);
    if ((c = ZC.AJ(this.Q + "-front-c")) != null) ZC.K.IW(c, this.I.A5, this.iX, this.iY, this.F, this.D, this.Q);
    ZC.A3("." + this.Q + "-label").remove();
    if (!a) {
        ZC.A3("." + this.Q + "-label-area").remove();
        ZC.A3("." + this.Q + "-shape-area").remove()
    }
};
ZC.HP.prototype.A02 = function() {
    ZC.A3("." + this.Q + "-label-area").die(ZC.K.BL(ZC._[49]), this.zc_label_mousedown).die(ZC.K.BL("mouseover"), this.Q6).die(ZC.K.BL(ZC._[50]), this.QC).die(ZC.K.BL("mouseout"), this.QV).die("click", this.PY);
    ZC.A3("." + this.Q + "-shape-area").die(ZC.K.BL("mouseover"), this.Q3).die(ZC.K.BL(ZC._[50]), this.QD).die(ZC.K.BL("mouseout"), this.QW).die("click", this.PU)
};
ZC.HP.prototype.N7 = function(a) {
    this.X4(a);
    this.WP();
    this.I9(a)
};
ZC.HP.prototype.I9 = function(a) {
    if (typeof a == ZC._[33]) a = 0;
    for (var c, b = [], e = 0, f = this.N5.length; e < f; e++) {
        this.N5[e].Y = this.N5[e].C6 = this.I.usc() ? this.I.mc("top") : ZC.AJ(this.Q + "-objects-c");
        this.N5[e].paint()
    }
    if (this.IR.length > 0) {
        e = 0;
        for (f = this.IR.length; e < f; e++)
            if (this.IR[e].AK) {
                var g = this.IR[e];
                g.Y = g.C6 = this.I.usc() ? this.I.mc("top") : ZC.AJ(this.Q + "-objects-c");
                g.paint();
                if (!g.SE) {
                    var h = g.BE.X9();
                    if (ZC.AJ(this.A.Q + "-map")) {
                        c = 1;
                        for (var k = h.length; c < k; c++) b.push(ZC.K.DM(h[0]) + 'class="' + this.Q + '-shape-area zc-shape-area" id="' +
                            g.Q + "-area" + (c > 1 ? "--" + c : "") + ZC._[32] + h[c] + '"/>')
                    }
                }
            }
    }
    if (this.IL.length > 0) {
        e = 0;
        for (f = this.IL.length; e < f; e++) {
            c = this.IL[e];
            c.Y = c.C6 = this.I.usc() ? this.I.mc("top") : ZC.AJ(this.Q + "-objects-c");
            c.paint()
        }
    }
    if (this.BD.length > 0) {
        e = 0;
        for (f = this.BD.length; e < f; e++) {
            g = this.BD[e];
            if ((c = g.H.hook) != null) {
                c = this.SR(c);
                if (c[0] != -1) g.iX = c[0];
                if (c[1] != -1) g.iY = c[1];
                if (c[2] != null)
                    if (c[2].center != null && c[2].center) {
                        g.iX -= g.F / 2;
                        g.iY -= g.D / 2
                    }
            }
            g.iX = ZC._i_(g.iX);
            g.iY = ZC._i_(g.iY);
            g.GT = ZC.AJ(this.A.Q + "-text");
            g.Y = g.C6 = this.I.usc() ?
                this.I.mc("top") : ZC.AJ(this.Q + "-objects-c");
            h = "";
            if ((c = g.o.limit) != null)
                if (c == "x") h = "x";
                else if (c == "y") h = "y";
            else if (c == "xy") h = "xy";
            if (h == "" || h == "x" && ZC.DK(g.iX - g.C0, this.O.iX - g.F / 2 - 2, this.O.iX + this.O.F - g.F / 2 + 2) || h == "y" && ZC.DK(g.iY - g.C4, this.O.iY - g.D / 2 - 2, this.O.iY + this.O.D - g.D / 2 + 2) || h == "xy" && ZC.DK(g.iX + g.C0, this.O.iX - g.F / 2 - 2, this.O.iX + this.O.F - g.F / 2 + 2) && ZC.DK(g.iY + g.C4, this.O.iY - g.D / 2 - 2, this.O.iY + this.O.D - g.D / 2 + 2)) {
                g.paint();
                if (!g.SE)
                    if (ZC.AJ(this.A.Q + "-map"))
                        if (g.A7 % 360 != 0) {
                            h = [
                                [-g.F / 2, -g.D / 2],
                                [g.F /
                                    2, -g.D / 2
                                ],
                                [g.F / 2, g.D / 2],
                                [-g.F / 2, g.D / 2]
                            ];
                            k = "";
                            for (c = 0; c < 4; c++) {
                                h[c] = [g.iX + g.F / 2 + g.C0 + ZC.MAPTX + h[c][0] * ZC.CT(g.A7) - h[c][1] * ZC.CJ(g.A7), g.iY + g.D / 2 + g.C4 + ZC.MAPTX + h[c][0] * ZC.CJ(g.A7) + h[c][1] * ZC.CT(g.A7)];
                                k += ZC._i_(h[c][0]) + "," + ZC._i_(h[c][1]) + ","
                            }
                            g.B = h;
                            b.push(ZC.K.DM("poly") + 'class="' + this.Q + '-label-area zc-label-area" id="' + g.Q + "-area" + ZC._[32] + k.substring(0, k.length - 1) + '"/>')
                        } else b.push(ZC.K.DM("rect") + 'class="' + this.Q + '-label-area zc-label-area" id="' + g.Q + "-area" + ZC._[32] + ZC._i_(g.iX + g.C0 + ZC.MAPTX) +
                            "," + ZC._i_(g.iY + g.C4 + ZC.MAPTX) + "," + ZC._i_(g.iX + g.C0 + g.F + ZC.MAPTX) + "," + ZC._i_(g.iY + g.C4 + g.D + ZC.MAPTX) + '"/>')
            }
        }
    }
    if (!a)
        if (b.length > 0 && ZC.AJ(this.A.Q + "-map")) {
            b.sort(function(l, m) {
                return ZC.BV.MZ(l) > ZC.BV.MZ(m) ? 1 : -1
            });
            ZC.AJ(this.A.Q + "-map").innerHTML += b.join("")
        }
};
ZC.HP.prototype.U8 = function(a, c) {
    switch (a) {
        case "shape":
            var b = this.IR[c];
            if (b.o["hover-state"] != null) {
                var e = b.DQ == "rect" ? new ZC.FY(this) : new ZC.D5(this);
                e.append(b.o);
                e.append(b.o["hover-state"]);
                b = b.id || c;
                e.HS = b + "-hover";
                e.Q = this.Q + "-shape-" + b + "-hover";
                e.parse();
                if (e.AK) {
                    e.Y = e.C6 = ZC.AJ(this.Q + ZC._[24]);
                    e.paint()
                }
            }
            break;
        case "label":
            e = this.BD[c];
            if (e.o["hover-state"] != null) {
                var f = new ZC.FY(this);
                f.append(e.o);
                f.append(e.o["hover-state"]);
                b = e.id || c;
                f.HS = b + "-hover";
                f.Q = this.Q + "-label-" + b + "-hover";
                f.parse();
                if (f.AK) {
                    f.iX = e.iX;
                    f.iY = e.iY;
                    f.F = e.F;
                    f.D = e.D;
                    f.Y = f.C6 = ZC.AJ(this.Q + ZC._[24]);
                    f.paint()
                }
            }
    }
};
ZC.HP.prototype.X7 = function() {
    function a(e) {
        for (var f = e.target.id.replace(/\-\-\d+/g, "").replace(b.Q + "-shape-", "").replace("-area", ""), g = 0, h = 0, k = b.IR.length; h < k; h++)
            if (b.IR[h].HS == f) {
                g = h;
                break
            }
        return {
            shapeid: f,
            shapeindex: g,
            ev: e
        }
    }

    function c(e) {
        for (var f = e.target.id.replace(b.Q + "-label-", "").replace("-area", ""), g = 0, h = 0, k = b.BD.length; h < k; h++)
            if (b.BD[h].HS == f) {
                g = h;
                break
            }
        return {
            labelid: f,
            labelindex: g,
            ev: e
        }
    }
    var b = this;
    b.Q3 = function(e) {
        if (ZC.mobile) {
            ZC.move = 0;
            b.I.hideCM();
            e.preventDefault();
            b.A.N8(e)
        }
        b.AL &&
            b.A.AL && b.AL.AK && b.A.AL.onmouseover(e);
        e = a(e);
        b.U8("shape", e.shapeindex);
        ZC.mobile || b.NN("mouseover", e)
    };
    b.QW = function(e) {
        if (ZC.mobile) {
            if (!b.I.XS && !ZC.move) {
                zingchart.MO(e);
                b.PU(e)
            }
            b.A.J1(e)
        }
        b.AL && b.A.AL && b.AL.AK && b.A.AL.onmouseout(e);
        b.MU();
        e = a(e);
        b.NN("mouseout", e)
    };
    b.QD = function(e) {
        b.AL && b.A.AL && b.AL.AK && b.A.AL.onmousemove(e);
        e = a(e);
        b.NN(ZC._[50], e)
    };
    b.PU = function(e) {
        var f = a(e);
        b.NN("click", f);
        f = b.IR[f.shapeindex];
        if (f.EE != null)
            if (f.EE instanceof Array)
                for (var g = 0; g < f.EE.length; g++) f.HN[g] != null &&
                    b.PI(e, f.EE[g], f.HN[g]);
            else b.PI(e, f.EE, f.HN)
    };
    ZC.A3("." + b.Q + "-shape-area").live(ZC.K.BL("mouseover"), b.Q3).live(ZC.K.BL(ZC._[50]), b.QD).live(ZC.K.BL("mouseout"), b.QW);
    ZC.mobile || ZC.A3("." + b.Q + "-shape-area").live("click", b.PU);
    b.zc_label_mousedown = function(e) {
        e.preventDefault();
        b.LR(ZC._[49], c(e))
    };
    b.Q6 = function(e) {
        if (ZC.mobile) {
            ZC.move = 0;
            b.I.hideCM();
            e.preventDefault();
            b.A.N8(e)
        }
        b.AL && b.A.AL && b.AL.AK && b.A.AL.onmouseover(e);
        e = c(e);
        b.U8("label", e.labelindex);
        ZC.mobile || b.LR("mouseover", e)
    };
    b.QV = function(e) {
        if (ZC.mobile) {
            if (!b.I.XS &&
                !ZC.move) {
                zingchart.MO(e);
                b.PY(e)
            }
            b.A.J1(e)
        }
        b.AL && b.A.AL && b.AL.AK && b.A.AL.onmouseout(e);
        b.MU();
        e = c(e);
        b.LR("mouseout", e)
    };
    b.QC = function(e) {
        b.AL && b.A.AL && b.AL.AK && b.A.AL.onmousemove(e);
        e = c(e);
        b.LR(ZC._[50], e)
    };
    b.PY = function(e) {
        var f = c(e);
        b.LR("click", f);
        if ((f = b.BD[f.labelindex]) && f.EE != null)
            if (f.EE instanceof Array)
                for (var g = 0; g < f.EE.length; g++) {
                    if (f.HN[g] != null) {
                        EE[g] = EE[g].replace("%id", b.A.Q);
                        EE[g] = EE[g].replace("%graphid", b.Q.replace(b.A.Q + "-graph-", ""));
                        b.PI(e, f.EE[g], f.HN[g])
                    }
                } else {
                    f.EE = f.EE.replace("%id",
                        b.A.Q);
                    f.EE = f.EE.replace("%graphid", b.Q.replace(b.A.Q + "-graph-", ""));
                    b.PI(e, f.EE, f.HN)
                }
    };
    ZC.A3("." + b.Q + "-label-area").live(ZC.K.BL("mouseover"), b.Q6).live(ZC.K.BL(ZC._[50]), b.QC).live(ZC.K.BL("mouseout"), b.QV);
    ZC.mobile || ZC.A3("." + b.Q + "-label-area").live(ZC.K.BL(ZC._[49]), b.zc_label_mousedown).live("click", b.PY)
};
ZC.HP.prototype.LR = function(a, c) {
    ZC.ET(this.M3(), c);
    c.ev = ZC.A3.BL(c.ev);
    ZC.BV.F1("label_" + a, this.A, c)
};
ZC.HP.prototype.NN = function(a, c) {
    ZC.ET(this.M3(), c);
    c.ev = ZC.A3.BL(c.ev);
    ZC.BV.F1("shape_" + a, this.A, c)
};
ZC.HP.prototype.SR = function(a) {
    var c;
    if (typeof a == "string") {
        var b = {};
        a = a.split(":");
        if (a.length == 2) {
            b.type = a[0];
            a = a[1].split(/\s|,|;/);
            c = 0;
            for (var e = a.length; c < e; c++) {
                var f = a[c].split("=");
                b[f[0]] = f[1]
            }
        }
        a = b
    }
    b = [-1, -1];
    switch (a.type) {
        case "scale":
            b = "";
            e = -1;
            f = null;
            if ((c = a.name) != null) b = c;
            if ((c = a.index) != null) e = ZC._i_(c);
            if ((c = a[ZC._[11]]) != null) f = ZC._i_(c);
            c = null;
            var g, h;
            if (b == "") b = ZC._[52];
            c = this.AY(b);
            if (c != null) {
                if (f != null) g = c.B4(f);
                else if (e != -1) g = c.B4(c.W[e]);
                h = c.iY;
                if (c.J == 1) h += c.D
            }
            b = [g, h, {
                center: true
            }];
            break;
        case "node":
            var k = f = -1;
            h = g = null;
            if ((c = a.plot) != null) f = ZC._i_(c);
            if ((c = a.index) != null) k = ZC._i_(c);
            if ((c = a[ZC._[11]]) != null) g = c;
            if ((c = a.keyvalue) != null) h = c;
            e = c = null;
            if (f == -1) f = 0;
            if ((c = this.AZ.AA[f]) != null) {
                if (k != -1 && c.M[k] != null) e = c.M[k];
                else if (g != null || h != null) {
                    f = 0;
                    for (k = c.M.length; f < k; f++) {
                        if (c.M[f].A8 == g) e = c.M[f];
                        if (c.M[f].CH != null && c.M[f].CH == h) e = c.M[f]
                    }
                }
                if (e != null) {
                    e.setup();
                    b = e.SR(a)
                }
            }
    }
    if ((c = a["offset-x"]) != null) b[0] += ZC._i_(c);
    if ((c = a["offset-y"]) != null) b[1] += ZC._i_(c);
    return b
};
zingchart.YM = function(a, c, b) {
    if (document.getElementById("zc-fullscreen")) a = "zc-fullscreen";
    b = b || {};
    if (typeof b == "string") b = JSON.parse(b);
    var e = zingchart.loader(a);
    if (e != null) switch (c) {
        case "addobject":
            if ((c = e.BR(b[ZC._[3]])) && b.data) {
                e = b.dynamic ? ZC._b_(b.dynamic) : false;
                var f = (a = b.data instanceof Array) ? [] : {};
                ZC.ET(b.data, f);
                var g = b.type || "label";
                c.o[g + "s"] || (c.o[g + "s"] = []);
                if (a) {
                    b = 0;
                    for (a = f.length; b < a; b++) c.o[g + "s"].push(f[b])
                } else c.o[g + "s"].push(f);
                c.N7(e)
            }
            break;
        case "removeobject":
            if ((c = e.BR(b[ZC._[3]])) &&
                b.id) {
                e = b.dynamic ? ZC._b_(b.dynamic) : false;
                g = b.type || "label";
                g = c.o[g + "s"];
                f = typeof b.id == "string" ? [b.id] : b.id;
                var h = 0;
                for (b = g.length - 1; b >= 0; b--)
                    if (g[b].id != null && ZC.AH(f, g[b].id) != -1) {
                        g.splice(b, 1);
                        h = 1
                    }
                h && c.N7(e)
            }
            break;
        case "updateobject":
            if ((c = e.BR(b[ZC._[3]])) && b.data) {
                e = b.dynamic ? ZC._b_(b.dynamic) : false;
                g = b.type || "label";
                g = c.o[g + "s"];
                f = (a = b.data instanceof Array) ? [] : {};
                ZC.ET(b.data, f);
                h = 0;
                if (a) {
                    b = 0;
                    for (a = f.length; b < a; b++)
                        for (var k = 0, l = g.length; k < l; k++)
                            if (f[b].id != null && g[k].id != null && g[k].id == f[b].id) {
                                ZC.ET(f[b],
                                    g[k]);
                                h = 1
                            }
                } else {
                    a = f.id || b.id;
                    k = 0;
                    for (l = g.length; k < l; k++)
                        if (g[k].id != null && a != null && g[k].id == a) {
                            ZC.ET(f, g[k]);
                            h = 1
                        }
                }
                h && c.N7(e)
            }
    }
    return null
};
ZC.HP.prototype.ZO = function() {
    var a = this;
    if (a.ID != null) {
        var c = ZC._i_(a.ID.interval);
        c = c >= 50 ? c : 1E3 * c;
        if (a.ID.type == "full") window.setTimeout(function() {
            a.A.HK(a);
            ZC.SL(function() {
                a.A.load(a.Q, a.XV)
            })
        }, c);
        else if (a.ID.type == "feed" && a.ID.url != null) {
            if (a.ID.curtain != null) {
                var b = a.B6("k");
                if (b.length > 0) {
                    ZC.K.F6(a.Q + "-curtain-t");
                    if (b[0].L2 > 0) {
                        var e = new ZC.DC(a);
                        a.A.AQ.load(e.o, "(" + a.AB + ").refresh.curtain");
                        e.append(a.ID.curtain);
                        e.parse();
                        if (e.AK) {
                            e.Q = a.Q + "-curtain-t";
                            e.GT = ZC.AJ(a.A.Q + "-text-top");
                            if (b[0].EX) {
                                e.iX =
                                    a.O.iX;
                                e.iY = b[0].AD ? a.O.iY : a.O.iY + a.O.D - b[0].L2;
                                e.F = a.O.F;
                                e.D = b[0].L2
                            } else {
                                e.iX = b[0].AD ? a.O.iX + a.O.F - b[0].L2 : a.O.iX;
                                e.iY = a.O.iY;
                                e.F = b[0].L2;
                                e.D = a.O.D
                            }
                            e.Y = e.C6 = ZC.AJ(a.Q + "-scales-ml-0-c");
                            e.paint()
                        }
                    }
                }
            }
            var f = ZC._i_(a.ID["reset-timeout"]),
                g = ZC._i_(a.ID["stop-timeout"]);
            window.setTimeout(function() {
                a.A.HK(a);
                ZC.A3.ajax({
                    type: "GET",
                    url: a.ID.url,
                    beforeSend: function(h) {
                        h.setRequestHeader(ZC._[47], ZC._[48])
                    },
                    data: zingchart.ZCOUTPUT ? "zcoutput=" + a.I.A5 : "",
                    dataType: "text",
                    error: function() {},
                    success: function(h) {
                        h =
                            eval("(" + h + ")");
                        h = h instanceof Array ? h : [h];
                        for (var k = 0, l = 0, m = h.length; l < m; l++) {
                            for (var o = h[l], n = 0, p = a.B8.length; n < p; n++)
                                if (a.B8[n].AB == "k") {
                                    var s = a.B8[n].BK;
                                    if (o[s] != null && a.o[s] != null) {
                                        if (a.o[s][ZC._[5]] == null) a.o[s][ZC._[5]] = [];
                                        a.o[s][ZC._[5]].push(o[s]);
                                        k = ZC.BN(k, a.o[s][ZC._[5]].length);
                                        if (a.o[s][ZC._[5]].length > f) a.o[s][ZC._[5]] = []
                                    }
                                }
                            n = 0;
                            for (p = a.AZ.AA.length; n < p; n++)
                                if (a.o[ZC._[13]][n] != null) {
                                    if (o["plot-" + n] != null) a.o[ZC._[13]][n][ZC._[5]].push(o["plot-" + n]);
                                    else o["plot" + n] != null && a.o[ZC._[13]][n][ZC._[5]].push(o["plot" +
                                        n]);
                                    k = ZC.BN(k, a.o[ZC._[13]][n][ZC._[5]].length);
                                    if (a.o[ZC._[13]][n][ZC._[5]].length > f) a.o[ZC._[13]][n][ZC._[5]] = []
                                }
                        }
                        if (k <= g || g == 0) ZC.SL(function() {
                            a.parse();
                            a.clear(true);
                            for (var t = 0, r = a.B8.length; t < r; t++)
                                if (a.B8[t].AB == "k") {
                                    if (a.B8[t].EX) {
                                        var u = (a.B8[t].D - a.B8[t].Z - a.B8[t].CP) / ZC._i_(a.ID["max-ticks"]);
                                        a.B8[t].L2 = ZC.BN(0, a.B8[t].D - k * u)
                                    } else {
                                        u = (a.B8[t].F - a.B8[t].Z - a.B8[t].CP) / ZC._i_(a.ID["max-ticks"]);
                                        a.B8[t].L2 = ZC.BN(0, a.B8[t].F - k * u)
                                    }
                                    a.B8[t].Z = a.B8[t].T3 + a.B8[t].L2;
                                    a.B8[t].V = ZC.BN(0, a.B8[t].A2 - a.ID["max-ticks"]);
                                    a.B8[t].JJ()
                                }
                            a.paint(true, true)
                        })
                    }
                })
            }, c)
        }
    }
};
ZC.BV.T8 = function(a) {
    var c = {},
        b = [];
    b = typeof a == "object" ? a : JSON.parse(a);
    for (var e = 0, f = b.length; e < f; e++)
        if ((a = b[e]) != null) {
            c["p" + e] = {};
            var g = [];
            if (typeof a == "object") g = a;
            else if (typeof a == "string" && /\d+\-\d+/.test(a)) {
                a = a.split("-");
                if (a.length == 2) {
                    g = [];
                    for (var h = ZC._i_(a[0]); h <= ZC._i_(a[1]); h++) g.push(h)
                }
            } else g = [a];
            a = 0;
            for (h = g.length; a < h; a++) c["p" + e]["n" + g[a]] = 1
        }
    return c
};
ZC.HP.prototype.parseSelection = function() {
    if ((E = this.o.selection) != null) {
        this.CU = ZC.BV.T8(E);
        this.o.selection = null
    }
};
zingchart.YD = function(a, c, b) {
    var e;
    if (document.getElementById("zc-fullscreen")) a = "zc-fullscreen";
    b = b || {};
    if (typeof b == "string") b = JSON.parse(b);
    var f = zingchart.loader(a);
    if (f != null) switch (c) {
        case "clearselection":
            b = f.BR(b[ZC._[3]]);
            if (b != null) {
                b.CU = {};
                c = 0;
                for (var g = b.AZ.AA.length; c < g; c++) b.H6[c] = 0;
                b.FL = 1;
                b.GX(true, true)
            }
            break;
        case "getselection":
            b = f.BR(b[ZC._[3]]);
            if (b != null) {
                a = [];
                c = 0;
                for (g = b.AZ.AA.length; c < g; c++) {
                    a[c] = null;
                    if (b.CU["p" + c] != null) {
                        var h = [],
                            k;
                        for (k in b.CU["p" + c]) b.CU["p" + c].hasOwnProperty(k) &&
                            b.CU["p" + c][k] == 1 && h.push(ZC._i_(k.replace("n", "")));
                        a[c] = h
                    }
                }
                return a
            }
            return {};
        case "setselection":
            k = {};
            a = [];
            if ((e = b.selection) != null) k = ZC.BV.T8(e);
            b = f.BR(b[ZC._[3]]);
            if (b != null) {
                b.CU = k;
                b.FL = 1;
                b.GX(true, true)
            }
            break;
        case "select":
            var l = [];
            k = function(m) {
                var o = 0;
                if ((e = m.toggle) != null) o = ZC._b_(e);
                var n = f.BR(m[ZC._[3]]);
                if (n != null) {
                    for (var p = 0, s = n.AZ.AA.length; p < s; p++) n.H6[p] = 0;
                    var t = null,
                        r = null;
                    if ((e = m.plotindex) != null)
                        if (typeof e == "object") t = e;
                        else if (typeof e == "string" && /\d+\-\d+/.test(e)) {
                        p = e.split("-");
                        if (p.length == 2) {
                            t = [];
                            for (s = ZC._i_(p[0]); s <= ZC._i_(p[1]); s++) t.push(s)
                        }
                    } else t = [e]; if ((e = m.nodeindex) != null)
                        if (typeof e == "object") r = e;
                        else if (typeof e == "string" && /\d+\-\d+/.test(e)) {
                        p = e.split("-");
                        if (p.length == 2) {
                            r = [];
                            for (s = ZC._i_(p[0]); s <= ZC._i_(p[1]); s++) r.push(s)
                        }
                    } else r = [e]; if (t == null) {
                        t = [];
                        p = 0;
                        for (s = n.AZ.AA.length; p < s; p++) t.push(p)
                    }
                    p = 0;
                    for (s = t.length; p < s; p++) {
                        m = t[p];
                        if (n.AZ.AA[m] != null) {
                            if (n.CU["p" + m] == null) n.CU["p" + m] = {};
                            if (r == null)
                                for (var u = 0, y = n.AZ.AA[m].M.length; u < y; u++)
                                    if (o)
                                        if (n.CU["p" + m]["n" +
                                            u
                                        ]) delete n.CU["p" + m]["n" + u];
                                        else n.CU["p" + m]["n" + u] = 1;
                            else n.CU["p" + m]["n" + u] = 1;
                            else {
                                u = 0;
                                for (y = r.length; u < y; u++)
                                    if (o)
                                        if (n.CU["p" + m]["n" + r[u]]) delete n.CU["p" + m]["n" + r[u]];
                                        else n.CU["p" + m]["n" + r[u]] = 1;
                                else n.CU["p" + m]["n" + r[u]] = 1
                            }
                        }
                    }
                    ZC.AH(l, n) == -1 && l.push(n)
                }
            };
            if (b instanceof Array)
                for (a = 0; a < b.length; a++) k(b[a]);
            else k(b);
            for (a = 0; a < l.length; a++) {
                l[a].FL = 1;
                l[a].GX(true, true)
            }
    }
    return null
};
ZC.HP.prototype.J2 = function() {
    if (this.AM["3d"] && typeof ZC.AC != ZC._[33]) {
        ZC.AC.TE = 2.5 * ZC.BN(this.F, this.D);
        ZC.AC.DX = this.O.iX + this.O.F / 2;
        ZC.AC.DU = this.O.iY + this.O.D / 2;
        ZC.AC.FK = ZC._i_(this.DD.depth)
    }
};
ZC.HP.prototype.parse3D = function() {
    var a;
    if (this.AM["3d"] && typeof ZC.AC != ZC._[33]) {
        this.A.AQ.load(this.DD, "graph.3d-aspect");
        this.A.AQ.load(this.DD, this.AB + ".3d-aspect");
        if ((a = this.o[ZC._[28]]) != null) ZC.ET(a, this.DD);
        var c = ["angle", "depth", ZC._[29], ZC._[30], ZC._[31], "zoom"];
        for (a = 0; a < c.length; a++) this.DD[c[a]] = ZC._f_(this.DD[c[a]]);
        c = ["angle", ZC._[29], ZC._[30], ZC._[31]];
        for (a = 0; a < c.length; a++) ZC.DK(this.DD[c[a]], this.AM[c[a] + "-min"], this.AM[c[a] + "-max"]) || (this.DD[c[a]] = this.AM[c[a] + "-min"]);
        this.DD.true3d =
            ZC._b_(this.DD.true3d)
    }
};
ZC.HP.prototype.R1 = function() {
    for (var a = this.BP.TP.length, c = 0; c < a; c++) {
        var b = this.BP.TP[c];
        b.A0Y();
        this.BP.NY[c] = this.DD.true3d ? [
            [ZC._f_(b.KS.toFixed(1)) * b.IU[0], ZC._f_(b.T9.toFixed(1)) * b.IU[1], ZC._f_(b.RY.toFixed(1)) * b.IU[2], ZC._f_(b.VH.toFixed(1))], c
        ] : this.AB == "hbar3d" ? [
            [ZC._f_(b.KS.toFixed(1)) * b.IU[0], ZC._f_(b.RO.toFixed(1)) * b.IU[1], -ZC._f_(b.VH.toFixed(1)) * b.IU[2]], c
        ] : [
            [ZC._f_(b.KS.toFixed(1)) * b.IU[0], ZC._f_(b.RO.toFixed(1)) * b.IU[1], ZC._f_(b.YH.toFixed(1)) * b.IU[2]], c
        ]
    }
    zingchart.V3D = this.DD.true3d ?
        1 : 2;
    this.BP.NY.sort(this.BP.sortFaces);
    for (c = 0; c < a; c++) {
        var e = [];
        b = this.BP.TP[this.BP.NY[c][1]];
        var f = b.B.length;
        if (f > 0) {
            for (var g = 0; g < f; g++) e.push(b.B[g].DP);
            e.push(b.B[0].DP);
            f = new ZC.D5(this);
            f.Q = this.Q + "-3dshape-" + ZC.SEQ;
            ZC.SEQ++;
            f.copy(b.R);
            b.R.C2() && f.parse();
            f.CV = 0;
            f.Y = this.I.usc() ? this.I.mc() : ZC.AJ(this.Q + "-plots-bl-c");
            f.locate(1);
            f.B = e;
            f.DQ = "poly";
            f.locate(2);
            f.paint()
        }
    }
    this.WE()
};
ZC.HP.prototype.A0F = function() {
    var a = this;
    if (a.IH != null) {
        a.IH.Y = a.IH.C6 = a.I.usc() ? a.I.mc("top") : ZC.AJ(a.Q + "-legend-c");
        a.IH.paint();
        if (!a.KX)
            if (ZC.AH(a.I.H3, ZC._[43]) == -1) {
                a.P9 = function(c) {
                    if (!(c.which > 1)) {
                        c.preventDefault();
                        if (a.A.KY) a.IH.G9 = "remove";
                        var b = ZC._i_(c.target.id.replace(a.Q + "-legend-item-", "").replace("-area", ""));
                        ZC.BV.F1("legend_item_click", a.A, {
                            id: a.A.Q,
                            graphid: a.Q,
                            plotindex: b,
                            ev: ZC.A3.BL(c)
                        });
                        switch (a.IH.G9) {
                            case "hide":
                            case "remove":
                                if (c.shiftKey)
                                    for (var e = c = 0, f = a.AZ.AA.length; e <
                                        f; e++) {
                                        if (e != b) {
                                            c++;
                                            ZF = c == f - 1;
                                            a.LY({
                                                GX: ZF,
                                                plotindex: e,
                                                "toggle-action": a.IH.G9
                                            })
                                        }
                                    } else a.LY({
                                        GX: 1,
                                        plotindex: b,
                                        "toggle-action": a.IH.G9
                                    })
                        }
                    }
                };
                ZC.A3("." + a.Q + "-legend-item-area").live("click", a.P9)
            }
    }
};
ZC.Y4 = ZC.HP.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "null";
        this.AM[ZC._[25]] = 1;
        this.AM[ZC._[58]] = 1
    }
});
ZC.JX = ZC.HP.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "xy";
        this.AM.clip = 1;
        this.AM.layout = "xy"
    },
    HR: function(a) {
        switch (a) {
            case "x":
                return new ZC.R5(this);
            case "y":
                return new ZC.RF(this)
        }
    },
    A0D: function() {
        var a = this.HR("x", ZC._[52]);
        a.BK = ZC._[52];
        a.Q = this.Q + "-scale-x";
        this.B8.push(a);
        for (a = 2; a < 10; a++)
            if (this.o["scale-x-" + a] != null) {
                var c = this.HR("x", "scale-x-" + a);
                c.J = a;
                c.BK = "scale-x-" + a;
                c.Q = this.Q + "-scale-x-" + a;
                this.B8.push(c)
            }
        a = this.HR("y", ZC._[53]);
        a.BK = ZC._[53];
        a.Q = this.Q + "-scale-y";
        this.B8.push(a);
        for (a =
            2; a < 10; a++)
            if (this.o["scale-y-" + a] != null) {
                c = this.HR("y", "scale-y-" + a);
                c.J = a;
                c.BK = "scale-y-" + a;
                c.Q = this.Q + "-scale-y-" + a;
                this.B8.push(c)
            }
        this.b()
    }
});
ZC.UC = ZC.JX.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "line";
        this.AZ = new ZC.T0(this);
        this.AM[ZC._[25]] = 1;
        this.AM[ZC._[58]] = 1
    }
});
ZC.UH = ZC.JX.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "area";
        this.AZ = new ZC.T1(this);
        this.AM[ZC._[25]] = 1;
        this.AM[ZC._[58]] = 1
    }
});
ZC.S1 = ZC.JX.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "vbar";
        this.AZ = new ZC.QJ(this);
        this.AM[ZC._[25]] = 1;
        this.AM[ZC._[58]] = 1
    },
    HR: function(a, c) {
        switch (a) {
            case "x":
                var b = this.b(a, c);
                b.CQ = 1;
                return b;
            case "y":
                return this.b(a, c)
        }
    }
});
ZC.S7 = ZC.JX.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "hbar";
        this.AM.layout = "yx";
        this.AZ = new ZC.QP(this)
    },
    HR: function(a) {
        switch (a) {
            case "x":
                a = new ZC.WL(this);
                a.CQ = 1;
                return a;
            case "y":
                return new ZC.WM(this)
        }
    }
});
ZC.TO = ZC.JX.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "mixed";
        this.AZ = new ZC.SF(this);
        this.AM[ZC._[25]] = 1;
        this.AM[ZC._[58]] = 1
    },
    HR: function(a, c) {
        switch (a) {
            case "x":
                var b = this.b(a, c);
                b.CQ = 1;
                return b;
            case "y":
                return this.b(a, c)
        }
    }
});
ZC.VN = ZC.TO.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "mixed3d";
        this.AZ = new ZC.SF(this);
        this.BP = new ZC.NV;
        this.AM["3d"] = 1;
        this.AM[ZC._[58]] = 0;
        this.AM[ZC._[57]] = 0
    },
    clear: function() {
        this.b();
        this.BP.clear()
    },
    paint: function() {
        this.b();
        this.R1();
        this.I9()
    }
});
ZC.VL = ZC.JX.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "scatter";
        this.AZ = new ZC.UJ(this);
        this.AM[ZC._[25]] = 1
    }
});
ZC.X3 = ZC.JX.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "bubble";
        this.AZ = new ZC.V9(this)
    }
});
ZC.V8 = ZC.HP.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "pie";
        this.AZ = new ZC.TQ(this)
    },
    OB: function() {
        return ""
    },
    HR: function(a) {
        switch (a) {
            case "m":
                return new ZC.OR(this);
            case "v":
                return new ZC.PO(this);
            case "r":
                return new ZC.WN(this)
        }
    },
    A0D: function() {
        var a = this.HR("m", "scale"),
            c = this.HR("v", ZC._[54]),
            b = this.HR("r", "scale-r");
        a.BK = "scale";
        a.Q = this.Q + "-scale";
        c.BK = ZC._[54];
        c.Q = this.Q + "-scale-v";
        b.BK = "scale-r";
        b.Q = this.Q + "-scale-r";
        this.B8.push(a, c, b);
        this.b()
    },
    clear_: function() {
        ZC.AH(["svg", "vml"], this.I.A5) !=
            -1 && ZC.A3("#" + this.Q + " .zc-layer").each(function() {
                /\-plot-\d+\-fl\-\d+\-/.test(this.id) && ZC.A3(this).children().each(function() {
                    /\-connector\-path/.test(this.id) && ZC.K.F6(this)
                })
            })
    }
});
ZC.UW = ZC.HP.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "nestedpie";
        this.AZ = new ZC.TV(this)
    },
    OB: function() {
        return ""
    },
    HR: function(a) {
        switch (a) {
            case "m":
                return new ZC.OR(this)
        }
    },
    A0D: function() {
        var a = this.HR("m", "scale");
        a.BK = "scale";
        a.Q = this.Q + "-scale";
        this.B8.push(a);
        this.b()
    }
});
ZC.XO = ZC.HP.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "radar";
        this.AZ = new ZC.W1(this)
    },
    OB: function() {
        return ""
    },
    HR: function(a) {
        switch (a) {
            case "m":
                return new ZC.OR(this);
            case "k":
                return new ZC.VO(this);
            case "v":
                return new ZC.W9(this)
        }
    },
    A0D: function() {
        var a = this.HR("k", "scale-k");
        a.BK = "scale-k";
        a.Q = this.Q + "-scale-k";
        this.B8.push(a);
        a = this.HR("v", ZC._[54]);
        a.BK = ZC._[54];
        a.Q = this.Q + "-scale-v";
        this.B8.push(a);
        a = this.HR("m", "scale");
        a.BK = "scale";
        a.Q = this.Q + "-scale";
        this.B8.push(a);
        this.b()
    }
});
ZC.VS = ZC.S1.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "vbullet";
        this.AZ = new ZC.UM(this);
        this.AM[ZC._[57]] = 0
    }
});
ZC.W8 = ZC.S7.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "hbullet";
        this.AM.layout = "yx";
        this.AZ = new ZC.UU(this);
        this.AM[ZC._[57]] = 0
    }
});
ZC.XE = ZC.JX.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "piano";
        this.AZ = new ZC.VJ(this);
        this.AM[ZC._[57]] = 0
    },
    Z1: function(a) {
        if (a == "v") {
            a = [];
            for (var c = 0; c < this.o[ZC._[13]].length; c++) a.push("Metric " + (c + 1));
            return a
        }
    },
    HR: function(a) {
        switch (a) {
            case "x":
                a = new ZC.R5(this);
                a.CQ = 1;
                return a;
            case "y":
                a = new ZC.RF(this);
                a.CQ = 1;
                return a
        }
    }
});
ZC.W2 = ZC.JX.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "vfunnel";
        this.AZ = new ZC.UO(this);
        this.AM[ZC._[57]] = 0
    },
    HR: function(a, c) {
        switch (a) {
            case "x":
                var b = this.b(a, c);
                b.CQ = 1;
                return b;
            case "y":
                b = this.b(a, c);
                b.CQ = 1;
                return b
        }
    },
    Z1: function(a) {
        if (a == "v") {
            a = [];
            for (var c = 0; c < this.o[ZC._[13]].length; c++) a.push("Step " + (c + 1));
            return a
        }
    },
    paint: function() {
        for (var a = 0, c = this.B8.length; a < c; a++)
            if (this.B8[a].AB == "v") this.B8[a].AD = !this.B8[a].AD;
        this.b()
    }
});
ZC.W0 = ZC.JX.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "hfunnel";
        this.AZ = new ZC.UN(this);
        this.AM[ZC._[57]] = 0
    },
    Z1: function(a) {
        if (a == "v") {
            a = [];
            for (var c = 0; c < this.o[ZC._[13]].length; c++) a.push("Step " + (c + 1));
            return a
        }
    },
    HR: function(a) {
        switch (a) {
            case "x":
                a = new ZC.WL(this);
                a.CQ = 1;
                return a;
            case "y":
                a = new ZC.WM(this);
                a.CQ = 1;
                return a
        }
    }
});
ZC.XM = ZC.JX.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "stock";
        this.AZ = new ZC.WD(this);
        this.AM[ZC._[25]] = 1;
        this.AM[ZC._[57]] = 0
    },
    HR: function(a, c) {
        switch (a) {
            case "x":
                var b = this.b(a, c);
                b.CQ = 1;
                return b;
            case "y":
                return this.b(a, c)
        }
    }
});
ZC.Y1 = ZC.HP.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "gauge";
        this.AZ = new ZC.VP(this)
    },
    OB: function() {
        return ""
    },
    HR: function(a) {
        switch (a) {
            case "m":
                return new ZC.OR(this);
            case "r":
                return new ZC.VV(this);
            case "v":
                return new ZC.PO(this)
        }
    },
    A0D: function() {
        var a = this.HR("m", "scale");
        a.BK = "scale";
        a.Q = this.Q + "-scale";
        this.B8.push(a);
        a = this.HR("r", "scale-r");
        a.BK = "scale-r";
        a.Q = this.Q + "-scale-r";
        this.B8.push(a);
        a = this.HR("v", ZC._[54]);
        a.BK = ZC._[54];
        a.Q = this.Q + "-scale-v";
        this.B8.push(a);
        this.b()
    },
    MU_: function() {
        var a =
            this;
        ZC.A3("#" + a.Q + "-plots-bl-2").children().each(function() {
            ZC.K.IW(this, a.I.A5, a.iX, a.iY, a.F, a.D, a.Q)
        })
    }
});
ZC.XU = ZC.JX.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "range";
        this.AZ = new ZC.W7(this);
        this.AM[ZC._[25]] = 1;
        this.AM[ZC._[57]] = 0
    }
});
ZC.X8 = ZC.V8.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "pie3d";
        this.AZ = new ZC.VK(this);
        this.BP = new ZC.NV;
        this.AM["3d"] = 1;
        this.AM[ZC._[57]] = 0;
        this.AM["x-angle-min"] = 10;
        this.AM["x-angle-max"] = 80;
        this.AM["y-angle-min"] = 0;
        this.AM["y-angle-max"] = 0
    },
    clear: function() {
        this.b();
        this.BP.clear()
    },
    paint: function() {
        this.b();
        this.R1();
        this.I9()
    }
});
ZC.WX = ZC.S7.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "hbar3d";
        this.AZ = new ZC.VD(this);
        this.BP = new ZC.NV;
        this.AM["3d"] = 1;
        this.AM[ZC._[58]] = 0;
        this.AM[ZC._[57]] = 0;
        this.AM["x-angle-min"] = -20;
        this.AM["x-angle-max"] = 20;
        this.AM["y-angle-min"] = -20;
        this.AM["y-angle-max"] = 0
    },
    clear: function() {
        this.b();
        this.BP.clear()
    },
    paint: function() {
        this.b();
        this.R1();
        this.I9()
    }
});
ZC.WU = ZC.S1.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "vbar3d";
        this.AZ = new ZC.V0(this);
        this.BP = new ZC.NV;
        this.AM["3d"] = 1;
        this.AM[ZC._[58]] = 0;
        this.AM[ZC._[57]] = 0
    },
    clear: function() {
        this.b();
        this.BP.clear()
    },
    paint: function() {
        this.b();
        this.R1();
        this.I9()
    }
});
ZC.WR = ZC.UC.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "line3d";
        this.AZ = new ZC.VF(this);
        this.BP = new ZC.NV;
        this.AM["3d"] = 1;
        this.AM[ZC._[58]] = 0;
        this.AM[ZC._[57]] = 0
    },
    clear: function() {
        this.b();
        this.BP.clear()
    },
    paint: function() {
        this.b();
        this.R1();
        this.I9()
    }
});
ZC.WO = ZC.UH.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "area3d";
        this.AZ = new ZC.VC(this);
        this.BP = new ZC.NV;
        this.AM["3d"] = 1;
        this.AM[ZC._[58]] = 0;
        this.AM[ZC._[57]] = 0
    },
    clear: function() {
        this.b();
        this.BP.clear()
    },
    paint: function() {
        this.b();
        this.R1();
        this.I9()
    }
});
ZC.Y7 = ZC.HP.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "venn";
        this.AZ = new ZC.X2(this)
    },
    OB: function() {
        return ""
    },
    HR: function(a) {
        switch (a) {
            case "m":
                return new ZC.OR(this)
        }
    },
    A0D: function() {
        var a = this.HR("m", "scale");
        a.BK = "scale";
        a.Q = this.Q + "-scale";
        this.B8.push(a);
        this.b()
    }
});
ZC.IK = ZC.FY.B2({
    $i: function(a) {
        this.b(a);
        this.C = a;
        this.I = this.C.A;
        this.AA = [];
        this.FN = null;
        this.HB = [];
        this.G5 = [];
        this.HD = 1;
        this.HF = null;
        this.WJ = 1
    },
    A0I: function() {
        return new ZC.F3(this)
    },
    parse: function() {
        var a;
        this.Q = this.A.Q + "-plotset";
        this.HF = null;
        if (this.o.length > 1)
            for (a = 0; !a;) {
                a = 1;
                for (var c = 0, b = this.o.length; c < b - 1; c++)
                    if ((this.o[c]["z-index"] || 0) > (this.o[c + 1]["z-index"] || 0)) {
                        a = this.o[c];
                        this.o[c] = this.o[c + 1];
                        this.o[c + 1] = a;
                        a = 0
                    }
            }
        this.AA = [];
        c = 0;
        for (b = this.o.length; c < b; c++) {
            var e = "";
            if ((a = this.o[c].type) !=
                null) e = a;
            e = this.A0I(e);
            e.J = c;
            e.JB = c;
            this.C.A.AQ.load(e.o, ["(" + e.AB + ").plot"]);
            this.C.A.AQ.load(e.o, ["(" + e.AB + ").plot.animation"]);
            if ((a = this.A.o.plot) != null) e.append(a);
            e.append(this.o[c]);
            e.CL = this.A.CL;
            e.parse();
            this.AA.push(e)
        }
        a = {};
        e = [];
        var f = [],
            g = {},
            h = {},
            k = 0;
        c = k = 0;
        for (b = this.AA.length; c < b; c++)
            if (this.C.H["plot" + c + ".visible"] || this.C.getToggleAction() == "hide") {
                if (this.AA[c].CL) {
                    k = ZC.AH(f, this.AA[c].FT);
                    if (k == -1) {
                        f.push(this.AA[c].FT);
                        k = f.length - 1
                    }
                } else {
                    f.push(-1);
                    k = f.length - 1
                } if (e[k] == null) e[k] = [c];
                else e[k].push(c); if (ZC.AH(["vbar", "hbar", "vbullet", "hbullet", "stock", "vbar3d", "hbar3d"], this.AA[c].AB) != -1) {
                    var l = this.AA[c].AB;
                    if (g[l] == null) g[l] = [];
                    if (h[l] == null) h[l] = [];
                    if (this.AA[c].CL) {
                        if (a[this.AA[c].FT] == null) a[this.AA[c].FT] = 1;
                        else a[this.AA[c].FT] ++;
                        k = ZC.AH(h[l], this.AA[c].FT);
                        if (k == -1) {
                            h[l].push(this.AA[c].FT);
                            k = h[l].length - 1
                        }
                    } else {
                        h[l].push(-1);
                        k = h[l].length - 1
                    } if (g[l][k] == null) g[l][k] = [c];
                    else g[l][k].push(c)
                }
            }
        this.HB = e;
        this.G5 = g
    },
    paint: function() {
        function a(b) {
            var e = c.C.getToggleAction();
            if (c.C.AM["3d"]) {
                if (c.C.H["plot" + b + ".visible"]) {
                    c.AA[b].paint();
                    c.I.S5()
                }
            } else if (c.C.H["plot" + b + ".visible"] || e == "hide") {
                c.AA[b].paint();
                c.I.S5();
                if (!c.C.H["plot" + b + ".visible"] && e == "hide") {
                    c.C.H["plot" + b + ".visible"] = 1;
                    c.A.LY({
                        plotindex: b,
                        "ignore-legend": true
                    })
                }
            }
            c.C.QH && b == c.AA.length - 1 && c._end_();
            if (b < c.AA.length - 1) c.C.QH ? window.setTimeout(function() {
                a(b + 1)
            }, 10) : a(b + 1);
            else if (!c.C.QH || c.WJ) c._end_()
        }
        var c = this;
        c.FN = [];
        c.AA.length > 0 ? a(0) : c._end_()
    },
    _end_: function() {
        var a;
        if ((a = ZC.AJ(this.C.A.Q + "-map")) &&
            !this.I.SJ) {
            if (ZC.AH(["bubble", "mixed", "vbullet", "hbullet"], this.C.AB) != -1 || zingchart.SORTTRACKERS == 1) this.FN.sort(function(c, b) {
                return ZC.BV.MZ(c) > ZC.BV.MZ(b) ? 1 : -1
            });
            a.innerHTML += this.FN.join("")
        }
        this.C1 = null;
        if (this.C.TU == "initial") {
            this.C.ZB = 0;
            this.I.H["graph." + this.C.Q + ".disableanimation"] = 1
        }
        this.CC = null;
        this.C.XI = [];
        this.A._end_()
    }
});
ZC.T0 = ZC.IK.B2({
    A0I: function() {
        return new ZC.LW(this)
    }
});
ZC.T1 = ZC.IK.B2({
    A0I: function() {
        return new ZC.LU(this)
    }
});
ZC.QJ = ZC.IK.B2({
    A0I: function() {
        return new ZC.K9(this)
    }
});
ZC.QP = ZC.IK.B2({
    A0I: function() {
        return new ZC.KV(this)
    }
});
ZC.SF = ZC.IK.B2({
    A0I: function(a) {
        switch (a) {
            default: return new ZC.LW(this);
            case "area":
                return new ZC.LU(this);
            case "bar":
            case "vbar":
                return new ZC.K9(this);
            case "scatter":
                return new ZC.LJ(this);
            case "bubble":
                return new ZC.MC(this);
            case "stock":
                return new ZC.N1(this);
            case "range":
                return new ZC.N0(this);
            case "line3d":
                return new ZC.MD(this);
            case "area3d":
                return new ZC.M8(this);
            case "bar3d":
            case "vbar3d":
                return new ZC.MA(this);
            case "bullet":
            case "vbullet":
                return new ZC.LH(this)
        }
    }
});
ZC.UJ = ZC.IK.B2({
    A0I: function() {
        return new ZC.LJ(this)
    }
});
ZC.V9 = ZC.IK.B2({
    A0I: function() {
        return new ZC.MC(this)
    }
});
ZC.TQ = ZC.IK.B2({
    $i: function(a) {
        this.b(a);
        this.K2 = [];
        this.J6 = [];
        this.MV = []
    },
    A0I: function() {
        return new ZC.NP(this)
    },
    parse: function() {
        this.MV = [];
        this.K2 = [];
        this.J6 = [];
        this.b();
        for (var a = this.A.AY("scale-r"), c = 0, b = this.AA.length; c < b; c++)
            if (this.C.H["plot" + c + ".visible"] || this.C.getToggleAction() == "hide")
                for (var e = 0, f = this.AA[c].M.length; e < f; e++) {
                    var g = this.AA[c].M[e];
                    if (this.J6[e] == null) this.J6[e] = this.AA[c].o["ref-angle"] != null ? this.AA[c].C5 : a.C5;
                    var h = this.J6[e],
                        k = this.K2[e] == 0 ? h + a.GN * (1 / b) : h + a.GN * g.A8 /
                        this.K2[e];
                    this.J6[e] = k;
                    g.AE = h;
                    g.AO = k
                }
    }
});
ZC.TV = ZC.IK.B2({
    $i: function(a) {
        this.b(a);
        this.K2 = [];
        this.J6 = []
    },
    A0I: function() {
        return new ZC.LN(this)
    },
    parse: function() {
        this.K2 = [];
        this.J6 = [];
        this.b();
        for (var a = 0, c = this.AA.length; a < c; a++)
            if (this.C.H["plot" + a + ".visible"] || this.C.getToggleAction() == "hide")
                for (var b = 0, e = this.AA[a].M.length; b < e; b++)
                    if (this.AA[a].M[b] != null) {
                        var f = this.AA[a].M[b];
                        if (this.J6[b] == null) this.J6[b] = this.AA[a].C5;
                        var g = this.J6[b],
                            h = g + 360 * f.A8 / this.K2[b];
                        this.J6[b] = h;
                        f.AE = g;
                        f.AO = h
                    }
    }
});
ZC.W1 = ZC.IK.B2({
    A0I: function() {
        return new ZC.OH(this)
    }
});
ZC.UM = ZC.QJ.B2({
    A0I: function() {
        return new ZC.LH(this)
    }
});
ZC.UU = ZC.QP.B2({
    A0I: function() {
        return new ZC.MY(this)
    }
});
ZC.VJ = ZC.IK.B2({
    A0I: function() {
        return new ZC.OC(this)
    }
});
ZC.RN = ZC.IK.B2({
    parse: function() {
        this.BJ = Number.MAX_VALUE;
        this.C8 = -Number.MAX_VALUE;
        this.WB = [];
        this.WF = [];
        this.b();
        for (var a = 0, c = this.AA.length; a < c; a++)
            for (var b = 0, e = this.AA[a].M.length; b < e; b++)
                if (this.AA[a].M[b] != null) {
                    var f = this.AA[a].M[b];
                    if (this.WF[b] == null) this.WF[b] = Number.MAX_VALUE;
                    if (this.WB[b] == null) this.WB[b] = -Number.MAX_VALUE;
                    this.WF[b] = ZC.CO(this.WF[b], f.A8);
                    this.WB[b] = ZC.BN(this.WB[b], f.A8)
                }
        a = 0;
        for (c = this.AA.length; a < c; a++) {
            b = 0;
            for (e = this.AA[a].M.length; b < e; b++)
                if (this.AA[a].M[b] != null) {
                    f =
                        this.AA[a].M[b];
                    this.BJ = ZC.CO(this.BJ, f.A8);
                    this.C8 = ZC.BN(this.C8, f.A8)
                }
        }
    }
});
ZC.UO = ZC.RN.B2({
    A0I: function() {
        return new ZC.MX(this)
    }
});
ZC.UN = ZC.RN.B2({
    A0I: function() {
        return new ZC.MW(this)
    }
});
ZC.WD = ZC.IK.B2({
    A0I: function() {
        return new ZC.N1(this)
    }
});
ZC.VP = ZC.IK.B2({
    A0I: function() {
        return new ZC.OI(this)
    }
});
ZC.W7 = ZC.IK.B2({
    A0I: function() {
        return new ZC.N0(this)
    }
});
ZC.VK = ZC.TQ.B2({
    A0I: function() {
        return new ZC.OD(this)
    }
});
ZC.V0 = ZC.QJ.B2({
    A0I: function() {
        return new ZC.MA(this)
    }
});
ZC.VD = ZC.QP.B2({
    A0I: function() {
        return new ZC.NI(this)
    }
});
ZC.VF = ZC.T0.B2({
    A0I: function() {
        return new ZC.MD(this)
    }
});
ZC.VC = ZC.T1.B2({
    A0I: function() {
        return new ZC.M8(this)
    }
});
ZC.X2 = ZC.IK.B2({
    A0I: function() {
        return new ZC.P4(this)
    },
    paint: function() {
        var a = this.A.AY("scale"),
            c = ZC.CO(a.E5, a.E4),
            b = -Number.MAX_VALUE;
        i = 0;
        for (A1 = this.AA.length; i < A1; i++) {
            a = this.AA[i].M;
            j = 0;
            for (H7 = a.length; j < H7; j++) {
                a[j].setup();
                b = ZC.BN(b, a[j].A8);
                a[j].QX = this.AA[i].ZQ[j]
            }
        }
        c = c / (4 * Math.sqrt(b / Math.PI));
        b = [];
        var e = [],
            f = [],
            g = [];
        i = 0;
        for (A1 = this.AA.length; i < A1; i++) {
            b[i] || (b[i] = []);
            if (!e[i]) {
                e[i] = [];
                f[i] = []
            }
            a = this.AA[i].M;
            g = this.AA[i + 1] ? this.AA[i + 1].M : this.AA[0].M;
            j = 0;
            for (H7 = a.length; j < H7; j++) {
                a[j].P3 =
                    g[j].A8;
                if (i == 0) {
                    b[i][j] = c * ZC.AP.UE(a[j].A8, a[j].P3, a[j].QX);
                    e[i][j] = a[j].iX - c * ZC.BN(Math.sqrt(a[j].A8 / Math.PI), Math.sqrt(a[j].P3 / Math.PI)) / 2;
                    f[i][j] = a[j].iY + a[j].D / 4
                } else if (i == 1) {
                    b[i][j] = c * ZC.AP.UE(a[j].A8, a[j].P3, a[j].QX);
                    e[i][j] = e[0][j] + b[0][j];
                    f[i][j] = f[0][j]
                } else if (i == 2) {
                    b[i][j] = c * ZC.AP.UE(a[j].A8, a[j].P3, a[j].QX);
                    var h = (b[0][j] * b[0][j] - b[1][j] * b[1][j] + b[2][j] * b[2][j]) / (2 * b[0][j]);
                    e[i][j] = e[0][j] + h;
                    f[i][j] = f[0][j] - Math.sqrt(b[2][j] * b[2][j] - h * h)
                }
                a[j].iX = e[i][j];
                a[j].iY = f[i][j];
                a[j].F = c * Math.sqrt(a[j].A8 /
                    Math.PI);
                a[j].D = c * Math.sqrt(a[j].A8 / Math.PI);
                a[j].AR = c * Math.sqrt(a[j].A8 / Math.PI)
            }
        }
        this.b()
    }
});
ZC.F3 = ZC.FY.B2({
    $i: function(a) {
        this.b(a);
        this.C = a.A;
        this.I = this.C.A;
        this.UG = {};
        this.LZ = 2;
        this.TN = 1;
        this.W = [];
        this.SH = {};
        this.M = [];
        this.AB = "";
        this.FD = null;
        this.JL = "none";
        this.IY = "plot";
        this.AW = this.M5 = this.N9 = this.EO = this.AG = this.MM = this.NU = null;
        this.J = -1;
        this.B8 = [];
        this.FT = this.CL = 0;
        this.R8 = this.UB = this.PF = this.B0 = this.JZ = this.AL = this.T = null;
        this.EW = -1;
        this.KI = this.K0 = null;
        this.NF = 0;
        this.U9 = 2;
        this.TM = 0;
        this.KT = "";
        this.QM = this.NH = this.HX = this.X5 = this.CG = null;
        this.V5 = 0;
        this.PX = 1;
        this.JB = 0;
        this.LI = this.PC =
            null;
        this.HD = 1;
        this.J8 = null;
        this.N3 = this.OK = 1;
        this.N2 = [];
        this.FB = null;
        this.D8 = 0;
        this.OV = [];
        this.UK = -1;
        this.GI = this.ES = 0;
        this.FE = 0.6;
        this.Q4 = this.ZM = this.GJ = 0;
        this.DB = null
    },
    R7: function(a, c) {
        this.J8[a] || (this.J8[a] = []);
        this.J8[a].push(c)
    },
    ZG: function() {
        return new ZC.G3(this)
    },
    ZJ: function() {
        return {}
    },
    IQ: function() {
        this.OT("palette", "UK", "i");
        return this.C.A.AQ.A0G(this.UK != -1 ? this.UK : this.J, this.C.AB)
    },
    F5: function(a, c) {
        var b;
        if (this.C.H6[this.J] || this.C.I6 || this.OV[a.J]) {
            b = new ZC.FY(this);
            b.copy(c);
            if (this.C.CU["p" + this.J] && this.C.CU["p" + this.J]["n" + a.J]) b.K3 = a.H["selected-state"] ? a.H["selected-state"] : this.NU.o;
            else if (this.IY != "none" && (this.IY == "plot" && this.C.H6[this.J] || this.IY == "graph" && this.C.I6)) b.K3 = a.H["background-state"] ? a.H["background-state"] : this.MM.o;
            b.HD = 1;
            b.parse()
        } else b = c; if (this.OV[a.J]) {
            if (a.A.DE.length == 0) a.A.DE = [{}];
            b.append(this.OV[a.J]);
            b.parse()
        }
        return b
    },
    B6: function(a) {
        var c = [];
        if (a != null)
            for (var b = 0, e = this.B8.length; b < e; b++) {
                var f = this.C.AY(this.B8[b]);
                f && f.AB == a &&
                    c.push(this.B8[b])
            } else c = this.B8;
        return c
    },
    MB: function() {
        return {
            "thousands-separator": this.K0,
            "decimals-separator": this.KI,
            decimals: this.EW,
            "short": this.TM,
            "short-unit": this.KT,
            exponent: this.NF,
            "exponent-decimals": this.O3
        }
    },
    parse: function() {
        function a(o) {
            return ["(" + c.AB + ").plot." + o]
        }
        var c = this,
            b, e;
        c.b();
        c.J8 = {};
        if ((b = c.o.scales) != null) c.B8 = b.split(/,|;|\s/);
        c.OT_a([
            ["exponent", "NF", "b"],
            [ZC._[27], "O3", "ia"],
            [ZC._[14], "EW", "ia"],
            ["preview", "PX", "b"],
            ["stacked", "CL", "b"],
            ["exact", "V5", "b"],
            ["text",
                "B0"
            ],
            ["tooltip-text", "PF"],
            ["legend-text", "UB"],
            ["description", "R8"],
            ["stack", "FT", "i"],
            ["z-index", "JB", "i"],
            ["aspect", "CG"],
            ["mode", "X5"],
            ["max-nodes", "HX"],
            ["max-trackers", "NH"],
            ["sampling-step", "QM", "i"],
            ["url", "EE"],
            ["target", "HN"],
            [ZC._[16], "KI"],
            [ZC._[15], "K0"],
            ["short", "TM", "b"],
            ["short-unit", "KT"],
            ["errors", "N2"],
            ["styles", "OV"],
            ["animate", "ES", "b"],
            ["effect", "GI", "i"],
            ["speed", "FE", "f"],
            ["selection-mode", "JL"],
            ["background-mode", "IY"]
        ]);
        if ((b = c.o.animation) != null) {
            c.ES = 1;
            if ((e = b.effect) !=
                null) {
                c.GI = ZC._i_(e);
                if (c.GI == 0) c.ES = 0
            }
            if ((e = b.speed) != null) c.FE = ZC._f_(e);
            if ((e = b.delay) != null) c.GH = ZC._f_(e);
            if ((e = b.method) != null) c.GJ = ZC._i_(e);
            if ((e = b.sequence) != null) c.Q4 = ZC._i_(e);
            if ((e = b.attributes) != null) c.DB = e
        }
        if (c.FE < 10) c.FE *= 1E3;
        if (c.GH < 10) c.GH *= 1E3;
        if (typeof ZC.J9 != ZC._[33]) c.FE = ZC.BN(ZC.J9.M1, c.FE);
        if (c.X5 == "fast" || typeof ZC.J9 == ZC._[33] || ZC.AH(c.I.H3, ZC._[44]) != -1) c.ES = 0;
        if (c.I.SJ) c.ES = 0;
        for (var f in c.o)
            if (f.substring(0, 5) == "data-") {
                b = f.substring(5);
                c.SH[b] = c.o[f]
            }
        f = c.I.AQ;
        c.FD = new ZC.E7(c);
        f.load(c.FD.o, a("hover-state"));
        c.FD.append(c.o);
        c.FD.append(c.o["hover-state"]);
        c.NU = new ZC.E7(c);
        f.load(c.NU.o, a("selected-state"));
        c.NU.append(c.o["selected-state"]);
        c.MM = new ZC.E7(c);
        f.load(c.MM.o, a("background-state"));
        c.MM.append(c.o["background-state"]);
        c.AG = new ZC.E7(c);
        f.load(c.AG.o, a("marker"));
        c.AG.append(c.o.marker);
        c.EO = new ZC.E7(c);
        f.load(c.EO.o, a("hover-marker"));
        c.EO.append(c.o.marker);
        c.EO.append(c.o["hover-marker"]);
        c.N9 = new ZC.E7(c);
        f.load(c.N9.o, a("selected-marker"));
        c.N9.append(c.o["selected-marker"]);
        c.M5 = new ZC.E7(c);
        f.load(c.M5.o, a("background-marker"));
        c.M5.append(c.o["background-marker"]);
        c.AL = new ZC.E7(c);
        f.load(c.AL.o, ["(" + c.AB + ").tooltip"]);
        c.AL.append(c.C.o.tooltip);
        c.AL.append(c.o.tooltip);
        c.FB = new ZC.D5(c);
        f.load(c.FB.o, a("error"));
        c.FB.append(c.o.error);
        if (c.FB.o[ZC._[23]] == null) c.FB.o[ZC._[23]] = 4;
        if ((b = c.o[ZC._[19]]) != null) {
            c.T = new ZC.E7(c);
            f.load(c.T.o, a(ZC._[19]));
            if ((e = c.C.o.plot) != null) c.T.append(e[ZC._[19]]);
            c.T.append(b)
        }
        b = 0;
        if (typeof c.C.H["plot" + c.J + ".visible"] == ZC._[33]) b =
            1;
        if (b) c.C.H["plot" + c.J + ".visible"] = 1;
        if (!c.AK)
            if (b) c.C.H["plot" + c.J + ".visible"] = 0;
        b = 0;
        c.Q = c.A.Q + "-plot-" + c.J;
        c.M = [];
        if (c.o[ZC._[5]] != null) {
            c.W = c.o[ZC._[5]];
            f = null;
            e = Number.MAX_VALUE;
            for (var g = -Number.MAX_VALUE, h = 0, k = c.W.length; h < k; h++) {
                var l = 0;
                if (c.W[h] != null && typeof c.W[h] == "object" && c.W[h].length > 1) {
                    if (c.W[h][1] == null || typeof c.W[h][1] == "string" && c.W[h][1].toUpperCase() == "NULL") l = 1
                } else if (c.W[h] == null || typeof c.W[h] == "string" && c.W[h].toUpperCase() == "NULL") l = 1;
                if (l) c.M.push(null);
                else {
                    l = c.ZG();
                    l.Q = c.Q + "-node-" + h;
                    l.o = {
                        value: c.W[h]
                    };
                    if (typeof c.W[h] == "string") l.WG = 1;
                    l.J = h;
                    l.parse();
                    if (l.CH != null) {
                        if (f != null) {
                            e = ZC.CO(e, ZC._a_(ZC._f_(l.CH) - f));
                            g = ZC.BN(g, ZC._a_(ZC._f_(l.CH) - f))
                        }
                        f = ZC._f_(l.CH)
                    }
                    c.M.push(l);
                    if (c.o[ZC._[14]] == null) {
                        var m = (new String(l.A8)).split(".");
                        if (m.length == 2) b += m[1].length
                    }
                    if (c.C.H["plot" + c.J + ".visible"]) {
                        if (c.A.HF == null) c.A.HF = {};
                        if (c.A.HF[h] == null) c.A.HF[h] = {
                            "%total": l.A8
                        };
                        else c.A.HF[h]["%total"] += l.A8
                    }
                    if (c.JZ == null) c.JZ = {
                        "%plot-min-index": h,
                        "%plot-min-value": l.A8,
                        "%plot-max-value": l.A8,
                        "%plot-max-index": h,
                        "%plot-sum": l.A8,
                        "%plot-values": l.A8 + ","
                    };
                    else {
                        c.JZ["%plot-min-value"] = ZC.CO(c.JZ["%plot-min-value"], l.A8);
                        c.JZ["%plot-max-value"] = ZC.BN(c.JZ["%plot-max-value"], l.A8);
                        c.JZ["%plot-max-index"] = h;
                        c.JZ["%plot-sum"] += l.A8
                    }
                }
            }
            if (c.JZ != null) c.JZ["%plot-average"] = c.JZ["%plot-sum"] / c.W.length;
            if (f) {
                c.OK = e;
                c.N3 = g
            }
        }
        if (c.o[ZC._[14]] == null && b > 0) c.EW = Math.ceil(b / c.W.length)
    },
    paint: function() {
        if (this.HX == null) this.HX = ZC._i_(this.C.O.F / 12);
        if (this.NH == null) this.NH = ZC._i_(this.C.O.F / 4);
        if (ZC.AH(this.I.H3,
            ZC._[45]) != -1) this.OX = this.PK = this.I5 = this.HC = null
    },
    SZ: function(a) {
        for (var c = 0, b = this.M.length; c < b; c++)
            if (this.M[c] != null) this.M[c].JO = 0;
        var e = this.C.O;
        this.LL = 0;
        this.GG = 1;
        var f = this.M6 = 0;
        if (a) this.LL = 1;
        else {
            if (this.B3.D8 && this.D8) {
                c = 0;
                for (b = this.M.length; c < b; c++)
                    if (this.M[c] != null && (this.C.HH.length > 0 || ZC.DK(this.M[c].CH, this.B3.W[this.B3.V], this.B3.W[this.B3.A2]))) f++;
                if (this.NH < f) this.GG = 0;
                if (f * 8 > e.F) this.M6 = 1;
                if (this.HX >= f) this.LL = 1
            } else if (this.HX > this.B3.A2 - this.B3.V) this.LL = 1;
            this.U = 1;
            if (!this.B3.D8 ||
                !this.D8) {
                f = this.B3.A2 - this.B3.V;
                if (this.NH < f) this.GG = 0;
                if (f * 8 > e.F) this.M6 = 1;
                if (!this.V5 && f * 8 > e.F) this.U = ZC._i_(f * 8 / e.F)
            }
            if (this.B3.D8 && this.D8)
                if (!this.V5)
                    if (f * 8 > e.F) this.U = ZC._i_(f * 8 / e.F);
            if (this.C.JP) this.U *= 10
        } if (this.QM != null && this.U > 1 && typeof this.WY == ZC._[33]) {
            this.U = this.QM;
            this.WY = 1
        }
    },
    J3: function(a) {
        var c = this;
        if (a == null || !a) a = 0;
        c.SZ(a);
        var b = null;
        if (a) {
            c.A.WJ = 0;
            var e = function(l, m) {
                for (var o = l; o < l + m; o++)
                    if ((b = c.M[o]) != null) {
                        b.Y = c.GF;
                        b.paint();
                        b.JO = 1
                    }
                if (l + m < c.M.length) c.C.QH ? window.setTimeout(function() {
                    e(l +
                        m, m)
                }, 10) : e(l + m, m);
                else c.C.QH && c.J == c.A.AA.length - 1 && c.A._end_()
            };
            e(0, ZC.ie678 || ZC.mobile ? 50 : 100)
        } else if (c.B3.D8) {
            a = 1;
            for (var f = 0, g = 0, h = 0, k = c.M.length; h < k; h += c.U)
                if (c.M[h] != null && (c.C.HH.length > 0 || ZC.DK(c.M[h].CH, c.B3.W[c.B3.V], c.B3.W[c.B3.A2]))) {
                    if (a && (b = c.M[h - c.U]) != null) {
                        b.Y = c.GF;
                        b.paint();
                        b.JO = 1;
                        a = 0;
                        g++
                    }
                    b = c.M[h];
                    b.Y = c.GF;
                    b.paint();
                    b.JO = 1;
                    g++;
                    a = 0;
                    f = h
                }
            if (g > 0 && (b = c.M[f + c.U]) != null) {
                b.Y = c.GF;
                b.paint();
                b.JO = 1
            }
        } else
            for (h = c.B3.V; h <= c.B3.A2; h += c.U)
                if ((b = c.M[h]) != null) {
                    b.Y = c.GF;
                    b.paint();
                    b.JO = 1
                }
    },
    B5: function(a,
        c) {
        if (this.I.usc()) return ZC.AJ(this.I.Q + "-main-c" + (a == "fl" ? "-top" : ""));
        return this.I.KY || this.C.AM["3d"] ? ZC.AJ(this.C.Q + "-plots-" + a + "-c") : ZC.AJ(this.C.Q + "-plot-" + this.J + "-" + a + "-" + c + "-c")
    },
    ZA: function(a) {
        return {
            id: this.I.Q,
            graphid: this.C.Q,
            plotid: this.HS,
            plotindex: this.J,
            ev: ZC.A3.BL(a)
        }
    },
    OA: function(a, c) {
        ZC.BV.F1("plot_" + c, this.I, this.ZA(a))
    }
});
ZC.NJ = ZC.F3.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "xy";
        this.B8 = [ZC._[52], ZC._[53]]
    },
    paint: function() {
        this.b()
    }
});
ZC.LW = ZC.NJ.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "line";
        this.CG = "segmented";
        this.U = 1
    },
    ZG: function() {
        return new ZC.VT(this)
    },
    parse: function() {
        this.AW = this.IQ();
        this.BO = this.AW[0];
        this.AT = this.AW[1];
        this.b();
        this.B3 = this.C.AY(this.B6("k")[0]);
        this.D0 = this.C.AY(this.B6("v")[0])
    },
    paint: function() {
        this.b();
        this.GF = this.B5("bl", 0);
        this.JK = ZC.K.CN(this.B5("bl", 1), this.I.A5);
        if (this.X5 != "fast" && ZC.AH(this.I.H3, ZC._[44]) == -1 || this.C.AM["3d"]) {
            this.J3();
            this.B = null
        } else {
            this.SZ();
            this.C6 = this.B5("bl", 0);
            var a = [],
                c = [],
                b = 1,
                e = 0,
                f = 0,
                g = null,
                h = -1,
                k = -1;
            if (this.B3.D8 && this.D8) {
                var l = 0;
                for (g = this.M.length; l < g; l += this.U)
                    if (this.M[l] != null) {
                        this.M[l].setup();
                        if (this.C.HH.length > 0 || ZC.DK(this.M[l].CH, this.B3.W[this.B3.V], this.B3.W[this.B3.A2])) {
                            if (b && this.M[l - this.U] != null) {
                                if (h == -1) h = l - this.U;
                                f++
                            }
                            if (h == -1) h = l;
                            k = l;
                            f++;
                            b = 0;
                            e = l
                        }
                    }
                if (f > 0 && this.M[e + this.U] != null) {
                    if (h == -1) h = e + this.U;
                    k = e + this.U;
                    this.M[e + this.U].JO = 1
                }
            } else {
                h = this.B3.V;
                k = this.B3.A2
            }
            b = -1;
            for (l = h; l <= k; l += this.U) {
                g = this.M[l];
                if (g != null) {
                    g.setup();
                    g.paint(true);
                    if (b == -1) b = g.iX;
                    switch (this.CG) {
                        default: a.push([g.iX, g.iY]);
                        break;
                        case "spline":
                            a.push([g.iX, g.iY]);
                            c.push(g.iY);
                            c.length == 1 && c.push(g.iY);
                            break;
                        case "stepped":
                            a.push([g.iX - this.B3.S / 2, g.iY]);
                            a.push([g.iX, g.iY]);
                            a.push([g.iX + this.B3.S / 2, g.iY])
                    }
                    g.HL(ZC.K.CN(this.B5("fl", 0), this.I.A5));
                    g.JH();
                    g.JO = 1
                } else {
                    a.push(null);
                    c.push(null)
                }
            }
            if (this.CG == "spline") {
                c.push(c[c.length - 1]);
                g = ZC.AP.NO(c, this.C.O.F / 6);
                a = [];
                for (l = 0; l < g.length; l++) g[l][0] != null && g[l][1] != null ? a.push([b + (this.B3.AD ? -1 : 1) * g[l][0] * this.B3.S,
                    g[l][1]
                ]) : a.push(null)
            }
            this.CV = 0;
            ZC.BQ.setup(this.JK, this);
            ZC.BQ.paint(this.JK, this, a);
            if (this.C.E0 != null && this.C.E0.FH && this.PX) {
                k = this.C.O;
                b = this.C.E0;
                e = b.AX;
                c = [];
                l = 0;
                for (g = a.length; l < g; l++) a[l] ? c.push([e.iX + e.AU + (a[l][0] - k.iX) / k.F * (e.F - 2 * e.AU), e.iY + e.AU + (a[l][1] - k.iY) / k.D * (e.D - 2 * e.AU)]) : c.push(null);
                a = ZC.K.CN(b.Y, this.I.A5);
                l = this.AI;
                this.AI = 1;
                ZC.BQ.paint(a, this, c, null, 3);
                this.AI = l
            }
        }
    }
});
ZC.LU = ZC.NJ.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "area";
        this.U = 1;
        this.CG = "segmented";
        this.LZ = 3;
        this.DV = 0.65
    },
    ZG: function() {
        return new ZC.VR(this)
    },
    parse: function() {
        this.AW = this.IQ();
        this.BO = this.AW[0];
        this.AT = this.AW[1];
        if (this.C.AM["3d"]) {
            this.X = ZC.BV.L0(this.AW[2], -50);
            this.A6 = ZC.BV.L0(this.AW[2], -50)
        } else {
            this.X = this.AW[0];
            this.A6 = this.AW[1]
        }
        this.b();
        this.OT("alpha-area", "DV", "f", 0, 1);
        this.B3 = this.C.AY(this.B6("k")[0]);
        this.D0 = this.C.AY(this.B6("v")[0])
    },
    paint: function() {
        this.b();
        if (ZC.AH(["segmented",
            "spline"
        ], this.CG) == -1) this.CG = "segmented";
        this.GF = this.B5("bl", 0);
        this.OW = ZC.K.CN(this.B5("bl", 1), this.I.A5);
        this.JK = ZC.K.CN(this.B5("bl", 2), this.I.A5);
        if (this.X5 != "fast" && ZC.AH(this.I.H3, ZC._[44]) == -1 || this.C.AM["3d"]) {
            for (var a = Number.MAX_VALUE, c = -Number.MAX_VALUE, b = 0, e = this.M.length; b < e; b++)
                if (this.M[b]) {
                    a = ZC.CO(a, this.M[b].D3);
                    c = ZC.BN(c, this.M[b].D3)
                }
            b = this.D0.B4(c);
            a = this.D0.B4(a);
            c = this.D0.B4(this.D0.EA);
            if (this.D0.AD) {
                if (c < b) b = c
            } else if (c > a) a = c;
            this.H["min-y"] = b;
            this.H["max-y"] = a;
            if (this.A.C1 !=
                null) {
                a = Number.MAX_VALUE;
                c = -Number.MAX_VALUE;
                b = 0;
                for (e = this.A.C1.length; b < e; b++)
                    if (this.A.C1[b])
                        for (var f = 0, g = this.A.C1[b].length; f < g; f++) {
                            a = ZC.CO(a, this.A.C1[b][f][1]);
                            c = ZC.BN(c, this.A.C1[b][f][1])
                        }
                    if (this.D0.AD) this.H["min-y"] = a;
                    else this.H["max-y"] = c
            }
            this.J3();
            this.A4 = this.CC = this.B = null
        } else {
            this.SZ();
            this.C6 = this.B5("bl", 0);
            c = [];
            f = [];
            a = [];
            var h = [];
            g = this.C.O;
            var k = this.D0.B4(this.D0.EA);
            k = ZC._l_(k, this.D0.iY, this.D0.iY + this.D0.D);
            var l = 1,
                m = 0,
                o = 0;
            e = null;
            var n = -1,
                p = -1;
            if (this.B3.D8 && this.D8) {
                b =
                    0;
                for (e = this.M.length; b < e; b += this.U)
                    if (this.M[b] != null) {
                        this.M[b].setup();
                        if (this.C.HH.length > 0 || ZC.DK(this.M[b].CH, this.B3.W[this.B3.V], this.B3.W[this.B3.A2])) {
                            if (l && this.M[b - this.U] != null) {
                                if (n == -1) n = b - this.U;
                                o++
                            }
                            if (n == -1) n = b;
                            p = b;
                            o++;
                            l = 0;
                            m = b
                        }
                    }
                if (o > 0 && this.M[m + this.U] != null) {
                    if (n == -1) n = m + this.U;
                    p = m + this.U;
                    this.M[m + this.U].JO = 1
                }
            } else {
                n = this.B3.V;
                p = this.B3.A2
            } if (this.A.CC) f = this.A.CC.reverse();
            m = 0;
            l = -1;
            for (b = n; b <= p; b += this.U) {
                e = this.M[b];
                if (e != null) {
                    e.setup();
                    e.paint(true);
                    if (m || this.CG == "segmented" &&
                        b == n && f.length == 0) f.push([e.iX, k]);
                    m = 0;
                    if (l == -1) l = e.iX;
                    switch (this.CG) {
                        default: c.push([e.iX, e.iY]);
                        a.push([e.iX, e.iY]);
                        f.push([e.iX, e.iY]);
                        break;
                        case "spline":
                            c.push([e.iX, e.iY]);
                            h.push(e.iY);
                            h.length == 1 && h.push(e.iY)
                    }
                    e.JH();
                    e.HL(ZC.K.CN(this.B5("fl", 0), this.I.A5));
                    e.JO = 1
                } else {
                    c.push(null);
                    h.push(null);
                    f.length - 1 >= 0 && f.push([f[f.length - 1][0], k]);
                    m = 1
                }
            }
            if (this.CG == "segmented")
                if (f.length - 1 >= 0)
                    if (this.J == 0 || !this.CL) f.push([f[f.length - 1][0], k]);
            if (this.CG == "spline") {
                h.push(h[h.length - 1]);
                e = ZC.AP.NO(h,
                    g.F / 6);
                c = [];
                for (b = 0; b < e.length; b++)
                    if (e[b][0] != null && e[b][1] != null) {
                        if (b == 0 && f.length == 0) f.push([l + (this.B3.AD ? -1 : 1) * e[b][0] * this.B3.S, k]);
                        g = [l + (this.B3.AD ? -1 : 1) * e[b][0] * this.B3.S, e[b][1]];
                        c.push(g);
                        f.push(g);
                        a.push(g)
                    } else c.push(null);
                f.push([f[f.length - 1][0], k])
            }
            b = new ZC.D5(this);
            b.copy(this);
            b.A9 = this.DV;
            b.CV = 1;
            b.J0 = 1;
            b.AI = 0;
            b.AU = 0;
            b.EC = 0;
            b.FP = 0;
            b.Y = this.B5("bl", this.C.CL ? 0 : 1);
            b.B = f;
            b.ST();
            b.Q = this.Q + "-area";
            b.paint();
            this.CV = 0;
            ZC.BQ.setup(this.JK, this);
            ZC.BQ.paint(this.JK, this, c);
            if (this.C.E0 !=
                null && this.C.E0.FH && this.PX) {
                g = this.C.O;
                k = this.C.E0;
                h = k.AX;
                n = [];
                b = 0;
                for (e = f.length; b < e; b++)
                    if (f[b]) {
                        p = (f[b][0] - g.iX) / g.F;
                        l = (f[b][1] - g.iY) / g.D;
                        n.push([h.iX + h.AU + ZC._i_(p * (h.F - 2 * h.AU)), h.iY + h.AU + ZC._i_(l * (h.D - 2 * h.AU))])
                    } else n.push(null);
                b = new ZC.D5(this.A);
                b.copy(this);
                b.CV = 1;
                b.J0 = 1;
                b.AI = 0;
                b.AU = 0;
                b.EC = 0;
                b.FP = 0;
                b.A9 = this.DV;
                b.DF = [g.iX, g.iY, g.iX + g.F, g.iY + g.D];
                b.Q = this.Q + "-area-preview";
                b.Y = k.Y;
                b.B = n;
                b.paint();
                f = [];
                b = 0;
                for (e = c.length; b < e; b++)
                    if (c[b]) {
                        p = (c[b][0] - g.iX) / g.F;
                        l = (c[b][1] - g.iY) / g.D;
                        f.push([h.iX +
                            h.AU + p * (h.F - 2 * h.AU), h.iY + h.AU + l * (h.D - 2 * h.AU)
                        ])
                    } else f.push(null);
                b = ZC.K.CN(k.Y, this.I.A5);
                ZC.BQ.paint(b, this, f, null, 3)
            }
            if (this.CL) this.A.CC = a
        }
    }
});
ZC.RP = ZC.NJ.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "bar";
        this.EL = 0.05;
        this.BS = 0;
        this.CF = this.CD = 0.05;
        this.E2 = 0
    },
    parse: function() {
        this.AW = this.IQ();
        this.BO = this.AW[0];
        this.AT = this.AW[1];
        this.BI = this.AW[1];
        this.X = this.AW[1];
        this.A6 = this.AW[2];
        this.b();
        if (this.CG == "histogram") this.EL = this.CD = this.CF = 0;
        this.OT_a([
            ["bar-space", "EL", "fp"],
            ["bar-width", "BS", "fp"],
            ["bars-space-left", "CD", "fp"],
            ["bars-space-right", "CF", "fp"],
            ["bars-overlap", "E2", "fp"]
        ]);
        this.B3 = this.C.AY(this.B6("k")[0]);
        this.D0 = this.C.AY(this.B6("v")[0])
    },
    MT: function() {
        for (var a = this.B3.S * this.U, c = this.J, b = 0, e = 0; e < this.A.G5[this.AB].length; e++) {
            b++;
            if (ZC.AH(this.A.G5[this.AB][e], this.J) != -1) c = e
        }
        e = this.CD;
        if (e <= 1) e *= a;
        var f = this.CF;
        if (f <= 1) f *= a;
        e = ZC._i_(e);
        f = ZC._i_(f);
        var g = a - e - f,
            h = this.EL;
        if (h <= 1) h *= g;
        if (g < 1) {
            g = a * 0.8;
            e = a * 0.1;
            f = a * 0.1
        }
        var k = g,
            l = this.E2;
        if (l != 0) h = 0;
        if (b > 1)
            if (l > 1) k = (g - (b - 1) * h + (b - 1) * l) / b;
            else {
                k = (g - (b - 1) * h) / (b - (b - 1) * l);
                l *= k
            }
        k = ZC._l_(k, 1, g);
        if (k * b + h * (b - 1) + e + f - l > a) {
            k = (a - e - f) / (1.1 * b);
            h = k * 0.1;
            if (h < 1) {
                h = 1;
                k = (a - e - f - b) / b
            }
        }
        return {
            S: a,
            EK: c,
            EM: b,
            CD: e,
            CF: f,
            FS: g,
            EL: h,
            BS: k,
            E2: l
        }
    },
    paint: function() {
        this.b();
        this.GF = this.B5("bl", 0);
        this.J3()
    }
});
ZC.K9 = ZC.RP.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "vbar"
    },
    ZG: function() {
        return new ZC.SC(this)
    }
});
ZC.KV = ZC.RP.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "hbar"
    },
    ZG: function() {
        return new ZC.SD(this)
    }
});
ZC.LJ = ZC.NJ.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "scatter"
    },
    ZG: function() {
        return new ZC.U2(this)
    },
    parse: function() {
        this.AW = this.IQ();
        this.BO = this.AW[0];
        this.X = this.AW[1];
        this.A6 = this.AW[1];
        this.AT = this.AW[2];
        this.BI = this.AW[2];
        this.b();
        this.B3 = this.C.AY(this.B6("k")[0]);
        this.D0 = this.C.AY(this.B6("v")[0])
    },
    paint: function() {
        this.b();
        this.GF = this.B5("bl", 0);
        this.J3(true)
    }
});
ZC.MC = ZC.NJ.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "bubble";
        this.HY = 1
    },
    ZG: function() {
        return new ZC.UT(this)
    },
    parse: function() {
        this.AW = this.IQ();
        this.BO = this.AW[0];
        this.X = this.AW[2];
        this.A6 = this.AW[1];
        this.AT = this.AW[2];
        this.BI = this.AW[2];
        this.b();
        this.OT_a([
            ["size-factor", "HY", "f"]
        ]);
        this.B3 = this.C.AY(this.B6("k")[0]);
        this.D0 = this.C.AY(this.B6("v")[0])
    },
    paint: function() {
        this.b();
        this.GF = this.B5("bl", 0);
        this.J3(true)
    }
});
ZC.NP = ZC.F3.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "pie";
        this.B8 = ["scale", ZC._[54], "scale-r"];
        this.C5 = this.Q8 = 0;
        this.AV = null
    },
    ZG: function() {
        return new ZC.X0(this)
    },
    parse: function() {
        var a, c;
        if (this.o[ZC._[19]] == null) this.o[ZC._[19]] = {};
        this.AW = this.IQ();
        this.BO = this.AW[0];
        this.X = this.AW[1];
        this.A6 = this.AW[2];
        this.BI = this.AW[0];
        this.AT = this.AW[0];
        this.b();
        this.AV = new ZC.E7(this);
        this.C.A.AQ.load(this.AV.o, ["graph.plot.value-box.connector", this.AB + ".plot.value-box.connector"]);
        if ((a = this.C.o.plot) != null)
            if (a[ZC._[19]] !=
                null && (c = a[ZC._[19]].connector) != null) this.AV.append(c);
        this.AV.append(this.o[ZC._[19]].connector);
        this.OT_a([
            ["offset", "DI", "fp"],
            [ZC._[10], "Q8", "fp"],
            ["ref-angle", "C5", "i"]
        ]);
        a = 0;
        for (c = this.M.length; a < c; a++) {
            this.M[a].BG = this.Q8;
            if (this.M[a] != null && (this.C.H["plot" + this.J + ".visible"] || this.C.getToggleAction() == "hide")) {
                if (this.A.K2[a] == null) this.A.K2[a] = 0;
                this.A.K2[a] += ZC._f_(this.M[a].A8)
            }
        }
    },
    paint: function() {
        this.b();
        this.GF = this.B5("bl", 0);
        this.J3(true)
    }
});
ZC.LN = ZC.F3.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "nestedpie";
        this.B8 = ["scale"];
        this.C5 = this.KR = this.OG = 0;
        this.AV = null
    },
    ZG: function() {
        return new ZC.T6(this)
    },
    parse: function() {
        var a, c;
        if (this.o[ZC._[19]] == null) this.o[ZC._[19]] = {};
        this.AW = this.IQ();
        this.BO = this.AW[0];
        this.X = this.AW[1];
        this.A6 = this.AW[2];
        this.BI = this.AW[0];
        this.AT = this.AW[0];
        this.b();
        this.AV = new ZC.E7(this);
        this.C.A.AQ.load(this.AV.o, ["graph.plot.value-box.connector", this.AB + ".plot.value-box.connector"]);
        if ((a = this.C.o.plot) != null)
            if (a[ZC._[19]] !=
                null && (c = a[ZC._[19]].connector) != null) this.AV.append(c);
        this.AV.append(this.o[ZC._[19]].connector);
        this.OT_a([
            ["slice-start", "OG", "fp"],
            ["band-space", "KR", "fp"],
            ["ref-angle", "C5", "i"]
        ]);
        a = 0;
        for (c = this.M.length; a < c; a++)
            if (this.M[a] != null && (this.C.H["plot" + this.J + ".visible"] || this.C.getToggleAction() == "hide")) {
                if (this.A.K2[a] == null) this.A.K2[a] = 0;
                this.A.K2[a] += ZC._f_(this.M[a].A8)
            }
    },
    paint: function() {
        this.b();
        this.GF = this.B5("bl", 0);
        this.J3(true)
    }
});
ZC.OH = ZC.F3.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "radar";
        this.LZ = 3;
        this.B8 = ["scale-k", ZC._[54], "scale"];
        this.DV = 0.5;
        this.CG = "line"
    },
    ZG: function() {
        return new ZC.UZ(this)
    },
    parse: function() {
        this.AW = this.IQ();
        this.BO = this.AW[0];
        this.AT = this.AW[1];
        this.X = this.AW[3];
        this.A6 = this.AW[3];
        this.b();
        this.OT("alpha-area", "DV", "f", 0, 1);
        this.B3 = this.C.AY("scale-k");
        this.D0 = this.C.AY(ZC._[54])
    },
    paint: function() {
        this.b();
        this.GF = ZC.AJ(this.C.Q + "-plot-" + this.J + "-bl-0-c");
        this.OW = ZC.K.CN(this.B5("bl", 0), this.I.A5);
        this.JK = ZC.K.CN(this.B5("bl", 2), this.I.A5);
        this.J3(true)
    }
});
ZC.TA = ZC.RP.B2({
    $i: function(a) {
        this.b(a);
        this.EL = 0.2;
        this.CF = this.CD = 0.28;
        this.E2 = 0;
        this.EJ = null;
        this.TF = [];
        this.J7 = []
    },
    ZJ: function(a) {
        var c;
        if (a == "goal" && (c = this.EJ.o["tooltip-text"]) != null) return {
            text: c
        };
        return {}
    },
    parse: function() {
        var a;
        this.b();
        if ((this.TF = this.o.goals) != null) {
            a = 0;
            for (var c = this.TF.length; a < c; a++) this.J7[a] = typeof this.TF[a] == "string" ? ZC.AH(this.C.H0, this.TF[a]) : ZC._f_(this.TF[a])
        }
        this.EJ = new ZC.FY(this);
        this.EJ.copy(this);
        this.EJ.o["tooltip-text"] = "%node-goal-value";
        if ((a = this.o.goal) !=
            null) this.EJ.append(a);
        this.EJ.parse()
    }
});
ZC.LH = ZC.TA.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "vbullet"
    },
    ZG: function() {
        return new ZC.U6(this)
    }
});
ZC.MY = ZC.TA.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "hbullet"
    },
    ZG: function() {
        return new ZC.U3(this)
    }
});
ZC.OC = ZC.NJ.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "piano";
        this.CG = "alpha";
        this.V3 = "plot-max"
    },
    ZG: function() {
        return new ZC.VG(this)
    },
    parse: function() {
        this.AW = this.IQ();
        this.BO = this.AW[0];
        this.AT = this.AW[1];
        this.BI = this.AW[1];
        this.X = this.AW[2];
        this.A6 = this.AW[1];
        this.b();
        this.OT_a([
            ["reference", "V3", ""]
        ]);
        this.B3 = this.C.AY(this.B6("k")[0]);
        this.D0 = this.C.AY(this.B6("v")[0])
    },
    paint: function() {
        this.b();
        this.GF = this.B5("bl", 0);
        this.TK = this.SW = -Number.MAX_VALUE;
        this.OZ = this.NT = Number.MAX_VALUE;
        for (var a =
            this.UD = this.TJ = 0, c = this.A.AA.length; a < c; a++)
            for (var b = this.A.AA[a], e = 0, f = b.M.length; e < f; e++)
                if (b.M[e] != null) {
                    var g = ZC._f_(b.M[e].A8);
                    if (b.J == this.J) {
                        this.TK = ZC.BN(this.TK, g);
                        this.OZ = ZC.CO(this.OZ, g);
                        this.UD += g
                    }
                    this.SW = ZC.BN(this.SW, g);
                    this.NT = ZC.CO(this.NT, g);
                    this.TJ += g
                }
        this.J3(true)
    }
});
ZC.NQ = ZC.NJ.B2({
    $i: function(a) {
        this.b(a);
        this.I7 = this.GA = 0.1;
        this.GV = 0;
        this.S3 = "dynamic";
        this.KH = [];
        this.NZ = []
    },
    parse: function() {
        this.AW = this.IQ();
        this.BO = this.AW[0];
        this.AT = this.AW[1];
        this.BI = this.AW[1];
        this.X = this.AW[2];
        this.A6 = this.AW[1];
        this.b();
        this.OT_a([
            ["start-width", "S3"],
            ["min-exit", "GV", "fp"],
            ["space-entry", "GA", "fp"],
            ["space-exit", "I7", "fp"],
            ["offset", "GA", "fp"],
            ["offset", "I7", "fp"]
        ]);
        if ((KH = this.o.entry) != null) {
            KH instanceof Array || (KH = [KH]);
            for (var a = 0, c = KH.length; a < c; a++) {
                var b = new ZC.D5(this);
                b.o = KH[a];
                b.parse();
                this.KH.push(b)
            }
        }
        if ((NZ = this.o.exit) != null) {
            NZ instanceof Array || (NZ = [NZ]);
            a = 0;
            for (c = NZ.length; a < c; a++) {
                b = new ZC.D5(this);
                b.o = NZ[a];
                b.parse();
                this.NZ.push(b)
            }
        }
        this.B3 = this.C.AY(this.B6("k")[0]);
        this.D0 = this.C.AY(this.B6("v")[0])
    },
    paint: function() {
        this.b();
        this.GF = this.B5("bl", 0);
        this.J3()
    }
});
ZC.MX = ZC.NQ.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "vfunnel"
    },
    ZG: function() {
        return new ZC.U5(this)
    }
});
ZC.MW = ZC.NQ.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "hfunnel"
    },
    ZG: function() {
        return new ZC.U0(this)
    }
});
ZC.N1 = ZC.RP.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "stock";
        this.CG = "candlestick"
    },
    ZG: function() {
        return new ZC.VA(this)
    },
    parse: function() {
        this.b()
    }
});
ZC.OI = ZC.F3.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "gauge";
        this.LZ = 3;
        this.B8 = ["scale-r", ZC._[54], "scale"];
        this.DV = 0.5;
        this.CG = "line";
        this.TG = 10
    },
    ZG: function() {
        return new ZC.VB(this)
    },
    parse: function() {
        this.AW = this.IQ();
        this.BO = this.AW[0];
        this.AT = this.AW[1];
        this.X = this.AW[3];
        this.A6 = this.AW[3];
        this.b();
        this.OT_a([
            ["alpha-area", "DV", "f", 0, 1],
            ["csize", "TG", "i"]
        ])
    },
    paint: function() {
        this.b();
        this.GF = this.B5("bl", 0);
        this.J3(true)
    }
});
ZC.N0 = ZC.NJ.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "range";
        this.U = 1;
        this.CG = "segmented";
        this.LZ = 3;
        this.DV = 0.5
    },
    ZG: function() {
        return new ZC.V6(this)
    },
    parse: function() {
        this.AW = this.IQ();
        this.BO = this.AW[0];
        this.AT = this.AW[1];
        this.X = this.AW[0];
        this.A6 = this.AW[1];
        this.b();
        this.OT("alpha-area", "DV", "f", 0, 1);
        this.B3 = this.C.AY(this.B6("k")[0]);
        this.D0 = this.C.AY(this.B6("v")[0])
    },
    J3: function() {
        var a = this.C.O;
        this.U = 1;
        if (!this.B3.D8) {
            if (!this.V5 && (this.B3.A2 - this.B3.V) * 5 > a.F) this.U = ZC._i_((this.B3.A2 - this.B3.V) *
                5 / a.F);
            if (this.C.JP) this.U *= 2
        }
        if (this.B3.D8) {
            a = 0;
            for (var c = this.M.length; a < c; a++)
                if (this.M[a] != null && ZC.DK(this.M[a].CH, this.B3.W[this.B3.V], this.B3.W[this.B3.A2])) {
                    this.M[a].Y = this.GF;
                    this.M[a].L9 = "min";
                    this.M[a].paint();
                    this.M[a].L9 = "max";
                    this.M[a].paint()
                }
        } else
            for (a = this.B3.V; a <= this.B3.A2; a += this.U)
                if (this.M[a] != null) {
                    this.M[a].L9 = "min";
                    this.M[a].paint();
                    this.M[a].L9 = "max";
                    this.M[a].paint()
                }
    },
    paint: function() {
        this.b();
        this.GF = this.B5("bl", 0);
        this.OW = ZC.K.CN(this.B5("bl", 1), this.I.A5);
        this.JK =
            ZC.K.CN(this.B5("bl", 2), this.I.A5);
        this.J3();
        this.CC = this.B = null
    }
});
ZC.OD = ZC.NP.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "pie3d";
        this.A0S = 1;
        this.HU = -1
    },
    parse: function() {
        this.b();
        this.OT_a([
            ["tilt", "A0S", "fa"],
            ["thickness", "HU", "ia"]
        ])
    },
    ZG: function() {
        return new ZC.VE(this)
    }
});
ZC.MA = ZC.K9.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "vbar3d"
    },
    ZG: function() {
        return new ZC.UL(this)
    },
    parse: function() {
        this.b();
        if (this.o["border-color"] == null) this.BI = this.AW[0];
        if (this.o["line-color"] == null) this.AT = this.AW[0]
    }
});
ZC.NI = ZC.KV.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "hbar3d"
    },
    ZG: function() {
        return new ZC.UI(this)
    },
    parse: function() {
        this.b();
        if (this.o["border-color"] == null) this.BI = this.AW[0];
        if (this.o["line-color"] == null) this.AT = this.AW[0]
    }
});
ZC.MD = ZC.LW.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "line3d"
    },
    ZG: function() {
        return new ZC.UX(this)
    },
    parse: function() {
        this.b();
        if (this.o["border-color"] == null) this.BI = this.AW[2]
    }
});
ZC.M8 = ZC.LU.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "area3d"
    },
    ZG: function() {
        return new ZC.UV(this)
    },
    parse: function() {
        this.b();
        if (this.o["border-color"] == null) this.BI = this.AW[0]
    }
});
ZC.P4 = ZC.F3.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "venn";
        this.ZQ = [];
        this.B8 = ["scale"]
    },
    ZG: function() {
        return new ZC.W3(this)
    },
    parse: function() {
        this.AW = this.IQ();
        this.BO = this.AW[0];
        this.BI = this.AW[1];
        this.X = this.AW[3];
        this.A6 = this.AW[3];
        this.b();
        this.OT_a([
            ["join", "ZQ"]
        ])
    },
    paint: function() {
        this.b();
        this.GF = this.B5("bl", 0);
        this.J3(true)
    }
});
ZC.G3 = ZC.DC.B2({
    $i: function(a) {
        this.b(a);
        this.C = a.A.A;
        this.I = this.C.A;
        this.J = -1;
        this.A8 = null;
        this.D2 = [];
        this.D1 = this.CH = this.D3 = null;
        this.EY = [];
        this.FH = 0;
        this.HD = 1;
        this.R = this;
        this.WG = this.JO = 0
    },
    SR: function() {
        return [this.iX, this.iY, {
            reference: this,
            center: true
        }]
    },
    A16: function() {
        return [this.iX, this.iY]
    },
    YG: function() {
        var a = this.C.H,
            c = this.A.J;
        if (a.update == null) a.update = {};
        a = a.update;
        a["plot-" + c + "-value"] = this.A8;
        a["plot-" + c + "-value-0"] = this.A8;
        for (var b = 0, e = this.D2.length; b < e; b++) a["plot-" + c + "-value-" +
            (b + 1)] = this.D2[b];
        a["plot-value"] = a["plot-value-0"] = this.A8;
        b = 0;
        for (e = this.D2.length; b < e; b++) a["plot-value-" + (b + 1)] = this.D2[b]
    },
    OP: function() {
        var a = this.A.B3,
            c = this.A.D0,
            b = [a.V, a.A2, c.V, c.A2];
        if (this.EY != b) {
            if (a.EX) {
                this.iX = this.C.CL && this.C.LQ == "100%" ? c.B4(100 * this.D3 / this.A.A.HF[this.J]["%total"]) : c.B4(this.D3);
                this.iY = a.LB(this.J)
            } else {
                this.iX = this.CH != null ? a.B4(this.CH) : a.LB(this.J);
                this.iY = this.C.CL && this.C.LQ == "100%" ? c.B4(100 * this.D3 / this.A.A.HF[this.J]["%total"]) : c.B4(this.D3)
            }
            this.EY = b
        }
        if (!this.FH) {
            if (this.A.DE.length ==
                0 && ["line", "area", "vbar", "hbar", "line3d", "area3d", "vbar3d", "hbar3d"].indexOf(this.A.AB) != -1 && !this.A.o.override) this.R = this.A;
            else if (this.A.o.override) {
                this.copy(this.A);
                this.DE = this.A.DE;
                this.C2();
                this.parse(false);
                this.R = this
            } else {
                a = this.A06(this.A.DE);
                if ((c = this.A.UG[a]) == null) {
                    this.copy(this.A);
                    this.DE = this.A.DE;
                    this.C2();
                    this.parse(false);
                    this.R = this;
                    this.A.UG[a] = this
                } else this.R = c
            } if (this.A.o.override) {
                this.R.H.plotidx = this.A.J;
                this.R.H.nodeidx = this.J;
                this.R.parse(false)
            }
            this.FH = 1
        }
    },
    XP: function() {
        this.D1 =
            this.o[ZC._[11]].join(" ");
        if (typeof this.o[ZC._[11]][0] == "string") {
            var a = ZC.AH(this.C.HH, this.o[ZC._[11]][0]);
            if (a != -1) this.CH = a;
            else {
                this.C.HH.push(this.o[ZC._[11]][0]);
                this.CH = this.C.HH.length - 1
            }
        } else this.CH = ZC._f_(this.o[ZC._[11]][0]); if (typeof this.o[ZC._[11]][1] == "string") {
            a = ZC.AH(this.C.H0, this.o[ZC._[11]][1]);
            if (a != -1) this.A8 = a;
            else {
                this.C.H0.push(this.o[ZC._[11]][1]);
                this.A8 = this.C.H0.length - 1
            }
        } else this.A8 = ZC._f_(this.o[ZC._[11]][1]);
        this.CH != null && this.A.R7(this.CH, this.J)
    },
    parse: function(a) {
        this.H.plotidx =
            this.A.J;
        this.H.nodeidx = this.J;
        this.Q = this.A.Q + "-node-" + this.J;
        if (a == null) a = 1;
        if (a) {
            if (this.o[ZC._[11]] instanceof Array || this.A.A09) this.XP();
            else {
                this.D1 = this.o[ZC._[11]];
                if (typeof this.o[ZC._[11]] == "string") {
                    a = ZC.AH(this.C.H0, this.o[ZC._[11]]);
                    if (a != -1) this.A8 = a;
                    else {
                        this.C.H0.push(this.o[ZC._[11]]);
                        this.A8 = this.C.H0.length - 1
                    }
                } else this.A8 = ZC._f_(this.o[ZC._[11]])
            } if (this.D3 == null) this.D3 = this.A8
        } else this.b()
    },
    GM: function(a) {
        return this.KC(a, {})
    },
    getFormatValue: function() {
        return this.A8
    },
    KC: function(a,
        c) {
        var b, e = this.A.JZ,
            f = this.A.A,
            g = "",
            h = "",
            k = "";
        b = "";
        var l = this.C.AY(this.A.B6("k")[0]);
        this.C.AY(this.A.B6("v")[0]);
        if (l)
            if (this.CH) g = h = k = this.CH;
            else {
                if (l.W[this.J] != null) g = h = k = l.W[this.J];
                if (l.BD[this.J] != null) h = k = l.BD[this.J]
            }
        var m = (h + "").split(/\s+/),
            o = (k + "").split(/\s+/),
            n = (g + "").split(/\s+/);
        if (this.A.B0 != null) b = this.A.B0;
        var p = (b + "").split(/\s+/);
        if (l) {
            var s = l.MB();
            c && c[ZC._[68]] && ZC.ET({
                "transform-date": true,
                "transform-date-format": c[ZC._[67]]
            }, s);
            if (l.BD[this.J] != null) h = ZC.BV.MK(k, s, l, true);
            k = g = ZC.BV.MK(g, s, l, true)
        }
        var t = this.getFormatValue();
        if (this.C.H0[t] != null && this.WG) t = this.C.H0[t];
        s = this.A.MB();
        ZC.ET(c, s);
        t = ZC.BV.MK(t, s, this.A);
        l = this.DN || [];
        for (var r in this.A.SH)
            if (this.A.SH[r] instanceof Array) this.A.SH[r][this.J] != null && l.push(["%data-" + r, this.A.SH[r][this.J]]);
            else l.push(["%data-" + r, this.A.SH[r]]);
        for (r = 0; r < m.length; r++) l.push(["%scale-key-label-" + r, m[r]], ["%kl" + r, m[r]]);
        for (r = 0; r < o.length; r++) l.push(["%scale-key-text-" + r, o[r]], ["%kt" + r, o[r]]);
        for (r = 0; r < n.length; r++) l.push(["%scale-key-value-" +
            r, n[r]
        ], ["%kv" + r, n[r]], ["%k" + r, n[r]]);
        l.push(["%scale-key-label", h], ["%scale-key-text", k], ["%scale-key-value", g], ["%kt", k], ["%kl", h], ["%kv", g], ["%k", g], ["%node-value", t], ["%v", t], ["%node-numeric-value", this.A8], ["%V", this.A8], ["%node-index", this.J], ["%i", this.J], ["%n", this.J], ["%node-count", this.A.M.length], ["%N", this.A.M.length]);
        g = e["%plot-sum"];
        h = g + "";
        k = e["%plot-average"];
        m = k + "";
        o = 0;
        if (f.HF != null && f.HF[this.J] != null) o = f.HF[this.J]["%total"];
        n = o + "";
        if (s[ZC._[14]] != null) {
            h = g.toFixed(ZC.BN(0, ZC._i_(s[ZC._[14]])));
            m = k.toFixed(ZC.BN(0, ZC._i_(s[ZC._[14]])));
            n = o.toFixed(ZC.BN(0, ZC._i_(s[ZC._[14]])))
        }
        l.push(["%node-error-plus", this.H["node-error-plus"]], ["%node-error-minus", this.H["node-error-minus"]], ["%total", n], ["%plot-min-index", e["%plot-min-index"]], ["%pmi", e["%plot-min-index"]], ["%plot-max-index", e["%plot-max-index"]], ["%pxi", e["%plot-max-index"]], ["%plot-min-value", e["%plot-min-value"]], ["%pmv", e["%plot-min-value"]], ["%plot-max-value", e["%plot-max-value"]], ["%pxv", e["%plot-max-value"]], ["%plot-sum", h], ["%psum",
            h
        ], ["%plot-average", m], ["%pavg", m], ["%plot-values", e["%plot-values"]], ["%pv", e["%plot-values"]]);
        e = 100 * this.A8 / e["%plot-sum"];
        g = e + "";
        if (s[ZC._[14]] != null) g = e.toFixed(ZC.BN(0, ZC._i_(s[ZC._[14]])));
        l.push(["%plot-percent", g], ["%pper", g]);
        for (r = 0; r < p.length; r++) l.push(["%plot-text-" + r, p[r]], ["%t" + r, p[r]]);
        l.push(["%plot-text", b], ["%t", b], ["%plot-description", this.A.R8], ["%d", this.A.R8], ["%plot-index", this.A.J], ["%p", this.A.J], ["%plot-count", f.AA.length], ["%P", f.AA.length], ["%id", this.I.Q], ["%graphid",
            this.C.Q.replace(this.I.Q + "-graph-", "")
        ]);
        l.sort(ZC.RA);
        for (b = /\((.+?)\)\(([0-9]*)\)\(([0-9]*)\)/; p = b.exec(a);) {
            s = "";
            e = this.A.J;
            g = this.J;
            if ((E = p[2]) != "") e = ZC._i_(E);
            if ((E = p[3]) != "") g = ZC._i_(E);
            if ((L = f.AA[e]) != null)
                if ((B7 = L.M[g]) != null) s = B7.KC(p[1]);
            a = a.replace(p[0], s)
        }
        for (b = /%linecolor([0-9]+)/; p = b.exec(a);) a = a.replace(p[0], f.AA[p[1]] ? f.AA[p[1]].AT || "#000" : "#000");
        for (b = /%backgroundcolor([0-9]+)/; p = b.exec(a);) a = a.replace(p[0], f.AA[p[1]] ? f.AA[p[1]].X || "#000" : "#000");
        r = 0;
        for (f = l.length; r < f; r++) {
            b = RegExp(l[r][0],
                "g");
            a = a.replace(b, l[r][1])
        }
        return a
    },
    paint: function() {},
    O4: function() {
        return {
            color: this.R.X
        }
    },
    R9: function() {
        return {
            "background-color": this.R.A6,
            color: this.R.BO
        }
    },
    VM: function() {
        return this.R9()
    },
    FX: function() {
        var a = this,
            c, b = new ZC.DC(a.A);
        b.append(a.A.T.o);
        b.F0 = a.C.Q + "-value-box " + a.C.Q + "-plot-" + a.A.J + "-value-box zc-value-box";
        b.Q = a.Q + "-value-box";
        b.Y = b.C6 = a.I.usc() ? a.I.mc("top") : a.C.AM["3d"] || a.I.KY ? ZC.AJ(a.C.Q + "-plots-vb-c") : ZC.AJ(a.C.Q + "-plot-" + a.A.J + "-vb-c");
        b.GT = a.I.usc() ? ZC.AJ(a.C.A.Q + "-top") :
            ZC.AJ(a.C.A.Q + "-text");
        var e = ZC.BV.PA(b.o);
        b.KC = function(g) {
            return a.KC(g, e)
        };
        var f = a.O4(b);
        if ((c = f.color) != null) b.BO = c;
        if ((c = f[ZC._[0]]) != null) b.X = b.A6 = c;
        b.H.plotidx = a.A.J;
        b.H.nodeidx = a.J;
        b.parse();
        b.GM = function(g) {
            return a.GM(g)
        };
        b.C2() && b.parse();
        if (b.AK && b.B0 != null && b.B0 != "") {
            c = a.A00(b);
            b.H.positioninfo = c;
            b.iX = c[0];
            b.iY = c[1];
            if (b.iX != -1 && b.iY != -1) {
                b.paint();
                b.D4()
            }
        }
        return b
    },
    A00: function(a) {
        var c, b = this.C.AY(this.A.B6("v")[0]);
        b = this.A8 >= b.HI && !b.AD || this.A8 < b.HI && b.AD ? -1 : 1;
        var e = "auto";
        if ((c =
            a.o[ZC._[9]]) != null) e = c;
        if (e == "auto") {
            c = this.A.M[this.J - 1] != null ? this.A.M[this.J - 1].A8 : this.A8;
            var f = this.A.M[this.J + 1] != null ? this.A.M[this.J + 1].A8 : this.A8;
            if (c >= this.A8 && this.A8 <= f) e = "bottom";
            else if (c <= this.A8 && this.A8 >= f) e = "top";
            else if (c >= this.A8 && this.A8 >= f) e = c / this.A8 > this.A8 / f ? "bottom" : "top";
            else if (c <= this.A8 && this.A8 <= f) e = this.A8 / c > f / this.A8 ? "top" : "bottom"
        }
        c = this.iX - a.CZ / 2;
        f = this.iY - a.C9 / 2;
        switch (e) {
            case "top":
                f -= b * (a.C9 / 2 + 10);
                break;
            case "bottom":
                f += b * (a.C9 / 2 + 10);
                break;
            case "left":
                c -= a.CZ /
                    2 + 10;
                break;
            case "right":
                c += a.CZ / 2 + 10
        }
        return [c, f]
    },
    JH: function(a, c) {
        var b = this;
        if (a == null) a = 0;
        if (c == null) c = 0;
        if (ZC.DK(b.iX, b.C.O.iX - 2, b.C.O.iX + b.C.O.F + 2) && ZC.DK(b.iY, b.C.O.iY - 2, b.C.O.iY + b.C.O.D + 2)) {
            var e = b.C.Q + ZC._[36] + b.C.Q + ZC._[37] + b.A.J + ZC._[6];
            if (ZC.AH(b.I.H3, ZC._[41]) == -1)
                if (b.A.GG) {
                    ZC.AH(b.I.H3, ZC._[44]) != -1 && ZC.AH(["line", "area"], b.A.AB) != -1 && typeof b.H.points == ZC._[33] && b.paint(true);
                    var f = ZC.AP.M0(ZC.AP.SQ(b.H.points), 4);
                    f != "" && b.A.A.FN.push(ZC.K.DM("poly") + 'class="' + e + '" id="' + b.Q + ZC._[32] +
                        f + '"/>')
                }
            f = 1;
            if (b.A.AG.o.visible != null && !ZC._b_(b.A.AG.o.visible) || b.A.AG.o.type != null && b.A.AG.o.type == "none") f = 0;
            if (f && (c || b.A.LL)) {
                if (b.A.HC) {
                    var g = b.A.HC;
                    if (b.I.A5 != "svg") {
                        if (a) {
                            f = new ZC.C3(b.C, b.iX - ZC.AC.DX, b.iY - ZC.AC.DU, 0);
                            g.iX = f.DP[0];
                            g.iY = f.DP[1]
                        } else {
                            g.iX = b.iX;
                            g.iY = b.iY
                        }
                        g.H.plotidx = b.A.J;
                        g.H.nodeidx = b.J;
                        g.Q = b.Q + "-marker";
                        g.parse()
                    }
                } else {
                    g = new ZC.D5(b.A);
                    g.Q = b.Q + "-marker";
                    if (ZC.AH(["bubble", "scatter"], b.A.AB) != -1) {
                        g.Y = b.A.B5("bl", 1);
                        g.C6 = b.A.B5("bl", 0)
                    } else {
                        g.Y = b.A.B5("fl", 0);
                        g.C6 = b.A.B5("fl",
                            0)
                    } if (a) {
                        f = new ZC.C3(b.C, b.iX - ZC.AC.DX, b.iY - ZC.AC.DU, 0);
                        g.iX = f.DP[0];
                        g.iY = f.DP[1]
                    } else {
                        g.iX = b.iX;
                        g.iY = b.iY
                    }
                    g.AT = b.A.AW[3];
                    g.BI = b.A.AW[3];
                    g.X = b.A.AW[2];
                    g.A6 = b.A.AB == "bubble" ? b.A.AW[1] : b.A.AW[2];
                    g.append(b.A.AG.o);
                    if (b.H["marker.size"] != null) g.AR = b.H["marker.size"];
                    g.H.plotidx = b.A.J;
                    g.H.nodeidx = b.J;
                    if (b.C.H6[b.A.J] || b.C.I6)
                        if (b.C.CU["p" + b.A.J] && b.C.CU["p" + b.A.J]["n" + b.J]) g.K3 = b.A.N9.o;
                        else if (b.A.IY != "none" && (b.A.IY == "plot" && b.C.H6[b.A.J] || b.A.IY == "graph" && b.C.I6)) g.K3 = b.A.M5.o;
                    g.parse();
                    if (ZC.AH(["bubble",
                        "scatter"
                    ], b.A.AB) != -1)
                        if (typeof b.A.H["marker-style"] == ZC._[33]) b.A.H["marker-style"] = {
                            X: g.X,
                            A6: g.A6,
                            EF: g.EF,
                            ER: g.ER
                        };
                    g.GM = function(t) {
                        return b.GM(t)
                    };
                    g.C2() && g.parse()
                }
                b.H["marker.size"] = ZC.BN(2.02, g.AR);
                if (g.AK && g.AB != "none") {
                    var h = function() {
                        ZC.AH(["bubble", "scatter"], b.A.AB) != -1 && b.HL(ZC.K.CN(b.A.B5("bl", 0), b.I.A5));
                        b.H["marker.type"] = g.DQ;
                        if (ZC.AH(b.I.H3, ZC._[42]) == -1) b.A.A.FN.push(ZC.K.DM("circle") + 'class="' + e + '" id="' + b.Q + "--marker" + ZC._[32] + ZC._i_(b.iX + g.C0 + ZC.MAPTX) + "," + ZC._i_(b.iY + g.C4 +
                            ZC.MAPTX) + "," + ZC._i_(ZC.BN(ZC.mobile ? 6 : 3, g.AR) * (ZC.mobile ? 2 : 1.2)) + '"/>');
                        b.A.T != null && b.FX()
                    };
                    f = 0;
                    if (ZC.AH(["bubble", "scatter"], b.A.AB) != -1) f = 1;
                    if (b.A.AB == "radar" && b.A.CG == "dots") f = 1;
                    if (!b.A.ES || !f) {
                        var k = g.DQ == "circle" ? "circle" : "path",
                            l = "";
                        if (b.A.I5) {
                            f = function(t, r) {
                                var u = t.cloneNode(true);
                                l = (u.getAttribute("transform") || "") + " translate(" + (b.iX - g.iX) + "," + (b.iY - g.iY) + ")";
                                ZC.K.EG(u, {
                                    transform: l,
                                    id: r
                                });
                                t.parentNode.appendChild(u)
                            };
                            g.JE && f(b.A.PK, b.Q + "-marker-sh-" + k);
                            f(b.A.I5, b.Q + "-marker-" + k);
                            g.BW &&
                                f(b.A.OX, b.Q + "-marker-imgfill-" + k)
                        } else {
                            g.paint();
                            if (!b.C.H6[b.A.J] && ZC.AH(b.I.H3, ZC._[45]) != -1 && b.A.AB != "bubble")
                                if (b.I.A5 == "svg") {
                                    b.A.HC = g;
                                    b.A.I5 = ZC.AJ(b.Q + "-marker-" + k);
                                    if (g.JE) b.A.PK = ZC.AJ(b.Q + "-marker-sh-" + k);
                                    if (g.BW) b.A.OX = ZC.AJ(b.Q + "-marker-imgfill")
                                } else b.A.HC = g
                        }
                        h()
                    } else {
                        f = g;
                        var m = {},
                            o = g.A9,
                            n = g.AR,
                            p = g.iX,
                            s = g.iY;
                        f.iX = p;
                        f.iY = s;
                        m.x = p;
                        m.y = s;
                        switch (b.A.GI) {
                            case 1:
                                f.A9 = 0;
                                m.alpha = o;
                                break;
                            case 2:
                                f.A9 = o / 2;
                                f.AR = 2;
                                m.alpha = o;
                                m.size = n;
                                break;
                            case 3:
                                f.A9 = 0;
                                f.iX = p - b.C.O.iX;
                                m.alpha = o;
                                m.x = p;
                                break;
                            case 4:
                                f.A9 =
                                    0;
                                f.iY = s - b.C.O.iY;
                                m.alpha = o;
                                m.y = s
                        }
                        for (k in b.A.DB) {
                            f[ZC.CA.F7[ZC.CE(k)]] = b.A.DB[k];
                            m[ZC.CE(k)] = b.R[ZC.CA.F7[ZC.CE(k)]]
                        }
                        if (b.C.CS == null) b.C.CS = {};
                        if (b.C.CS[b.A.J + "-" + b.J] != null)
                            for (k in b.C.CS[b.A.J + "-" + b.J]) f[ZC.CA.F7[ZC.CE(k)]] = b.C.CS[b.A.J + "-" + b.J][k];
                        b.C.CS[b.A.J + "-" + b.J] = {};
                        ZC.ET(m, b.C.CS[b.A.J + "-" + b.J]);
                        k = new ZC.CA(f, m, b.A.FE, b.A.GH, ZC.CA.KP[b.A.GJ], function() {
                            h()
                        });
                        k.B7 = b;
                        k.IM = function() {
                            b.HL(ZC.K.CN(b.A.B5("bl", 0), b.I.A5))
                        };
                        b.GU(k)
                    }
                }
            }
        }
    },
    GU: function(a, c) {
        var b = this.C.J4,
            e = b.JA,
            f = this.A.Q4;
        switch (f) {
            default: c &&
                b.add(c);
            b.add(a);
            break;
            case 1:
            case 2:
            case 3:
                if (c) {
                    var g = "all";
                    if (f == 1) g = "plots-group-" + this.J + "-area";
                    else if (f == 2) g = "nodes-group-" + this.A.J + "-area";
                    if (e[g] == null) {
                        var h = new ZC.RQ(g);
                        b.XG(h)
                    }
                    e[g].add(c)
                }
                g = "all";
                if (f == 1) g = "plots-group-" + this.J;
                else if (f == 2) g = "nodes-group-" + this.A.J;
                if (e[g] == null) {
                    f = new ZC.RQ(g);
                    b.XG(f)
                }
                e[g].add(a)
        }
    },
    LO: function(a) {
        var c = this,
            b = c.A.AW;
        c.H2({
            layer: a,
            type: "shape",
            id: "marker",
            marker: true,
            initcb: function() {
                this.DQ = c.H["marker.type"];
                this.iX = c.iX;
                this.iY = c.iY;
                if (c.A.AB ==
                    "bubble") {
                    this.X = b[2];
                    this.A6 = b[3]
                } else {
                    this.AT = b[3];
                    this.BI = b[3];
                    this.X = b[2];
                    this.A6 = b[1]
                }
                this.AR = c.H["marker.size"]
            }
        })
    },
    RE: function(a) {
        var c = this;
        c.H2({
            layer: a,
            type: "line",
            id: "line",
            initcb: function() {
                this.AT = c.A.AW[3]
            }
        })
    },
    H2: function(a) {
        var c = this,
            b, e, f, g, h = a.layer || "hover",
            k = a.id || "",
            l = 0;
        if ((b = a.marker) != null) l = ZC._b_(b);
        switch (h) {
            case "hover":
                if (c.C.CU["p" + c.A.J] == null || c.C.CU["p" + c.A.J]["n" + c.J] == null) {
                    e = l ? c.A.EO : c.A.FD;
                    f = "hover"
                }
        }
        if (a.state != null) e = a.state;
        if (e != null && c.C.H["plot" + c.A.J + ".visible"] &&
            e.AK) {
            switch (a.type) {
                case "box":
                    var m = new ZC.FY(c.A);
                    m.Y = m.C6 = ZC.AJ(c.C.Q + "-" + f + "-c");
                    m.HD = 1;
                    break;
                case "line":
                    m = new ZC.E7(c.A);
                    g = ZC.K.CN(c.C.Q + "-" + f + "-c", c.I.A5);
                    m.CV = 0;
                    break;
                case "shape":
                    m = new ZC.D5(c.A);
                    m.Y = m.C6 = ZC.AJ(c.C.Q + "-" + f + "-c");
                    break;
                case "area":
                    m = new ZC.D5(c.A);
                    g = ZC.K.CN(c.C.Q + "-" + f + "-c", c.I.A5);
                    m.Y = m.C6 = ZC.AJ(c.C.Q + "-" + f + "-c")
            }
            m.Q = c.Q + "-" + (k != "" ? k + "-" : "") + h;
            m.H.plotidx = c.A.J;
            m.H.nodeidx = c.J;
            m.JE = 0;
            if (h != "hover") m.RU = 1;
            a.initcb && a.initcb.call(m);
            m.append(e.o);
            a.parsecb && a.parsecb.call(m);
            m.parse();
            if (c.A.OV.length > 0 && c.A.OV[c.J] != null && c.A.OV[c.J][h + "-state"] != null) {
                m.append(c.A.OV[c.J][h + "-state"]);
                m.parse()
            }
            m.GM = function(o) {
                return c.GM(o)
            };
            m.C2() && m.parse();
            if (m.AK) {
                a.setupcb && a.setupcb.call(m);
                switch (a.type) {
                    case "box":
                    case "shape":
                        m.locate(2);
                        m.paint();
                        break;
                    case "line":
                        ZC.BQ.setup(g, m);
                        ZC.BQ.paint(g, m, c.H.points);
                        break;
                    case "area":
                        if ((b = e.o["alpha-area"]) != null) m.A9 = ZC._f_(b);
                        ZC.BQ.setup(g, m);
                        m.paint()
                }
            }
        }
    },
    HL: function() {},
    setup: function() {},
    A0T: function() {},
    MU: function() {
        ZC.K.F6([this.Q +
            "-hover-gradient", this.Q + "-marker-hover-gradient", this.I.Q + "-tooltip-text-gradient", this.I.Q + "-tooltip-text-sh-gradient"
        ])
    },
    Z8: function(a) {
        return {
            id: this.C.A.Q,
            graphid: this.C.Q,
            plotid: this.A.HS,
            plotindex: this.A.J,
            nodeindex: this.J,
            key: this.CH == null ? this.J : this.CH,
            value: this.A8,
            text: this.KC(this.A.PF),
            ev: ZC.A3.BL(a)
        }
    },
    M4: function(a, c) {
        ZC.BV.F1("node_" + c, this.I, this.Z8(a))
    }
});
ZC.G3.prototype.HL = function(a, c) {
    if (typeof c == ZC._[33]) c = 0;
    if (c) {
        if (typeof this.H.pointserror != ZC._[33]) {
            k = new ZC.E7(this);
            k.copy(this.A.FB);
            k.parse();
            k.Q = this.Q + "--error-hover";
            ZC.BQ.paint(a, k, this.H.pointserror)
        }
    } else {
        k = this.A.D0;
        var b = this.A.B3;
        if (this.A.N2.length != 0) {
            var e = null,
                f = null,
                g = 1;
            if (this.A.N2.length <= 2) {
                if (this.A.N2[0] != null && this.A.N2[0] instanceof Array) g = 0;
                if (this.A.N2[1] != null && this.A.N2[1] instanceof Array) g = 0
            } else g = 0; if (g) {
                e = this.A.N2[0];
                f = this.A.N2[1]
            } else if ((P5 = this.A.N2[this.J]) !=
                null)
                if (P5 instanceof Array) {
                    e = f = P5[0];
                    if (P5.length == 2) f = P5[1]
                }
            this.H["node-error-plus"] = e;
            this.H["node-error-minus"] = f;
            if ((e + "").indexOf("%") != -1) {
                e = ZC.M7(e);
                if (e <= 1) e *= this.A8
            }
            if ((f + "").indexOf("%") != -1) {
                f = ZC.M7(f);
                if (f <= 1) f *= this.A8
            }
            g = [];
            var h = ZC.M7(this.A.FB.o[ZC._[23]]);
            if (h <= 1) h = this.C.AB == "vbar" ? ZC._i_(h * this.F) : this.C.AB == "hbar" ? ZC._i_(h * this.D) : ZC._i_(h * b.S);
            b = 0;
            if (this.C.AB == "vbar") b = this.F;
            else if (this.C.AB == "hbar") b = this.D;
            if (e != null) {
                e = k.B4(this.D3 + e);
                this.C.AB == "hbar" ? g.push([e, this.iY +
                    b / 2 - h / 2
                ], [e, this.iY + b / 2 + h / 2], null, [e, this.iY + b / 2], [this.iX, this.iY + b / 2]) : g.push([this.iX + b / 2 - h / 2, e], [this.iX + b / 2 + h / 2, e], null, [this.iX + b / 2, e], [this.iX + b / 2, this.iY])
            }
            if (f != null) {
                k = k.B4(this.D3 - f);
                this.C.AB == "hbar" ? g.push(null, [k, this.iY + b / 2 - h / 2], [k, this.iY + b / 2 + h / 2], null, [k, this.iY + b / 2], [this.iX, this.iY + b / 2]) : g.push(null, [this.iX + b / 2 - h / 2, k], [this.iX + b / 2 + h / 2, k], null, [this.iX + b / 2, k], [this.iX + b / 2, this.iY])
            }
            var k = new ZC.E7(this);
            k.copy(this.A.FB);
            k.parse();
            k.Q = this.Q + "--error";
            ZC.BQ.paint(a, k, g);
            this.H.pointserror =
                g
        }
    }
};
ZC.VT = ZC.G3.B2({
    setup: function() {
        this.OP()
    },
    O4: function() {
        return {
            color: this.R.AT
        }
    },
    R9: function() {
        return {
            "background-color": this.R.AT,
            color: this.R.BO
        }
    },
    paint: function(a) {
        function c() {
            if (!b.C.JP && ZC.DK(b.iX, f.iX - 1, f.iX + f.F + 1) && ZC.DK(b.iY, f.iY - 1, f.iY + f.D + 1)) {
                b.JH();
                b.HL(ZC.K.CN(b.A.B5("bl", 1), b.I.A5));
                b.A.T != null && b.FX()
            }
        }
        var b = this;
        if (typeof a == ZC._[33]) a = 0;
        if (a)
            if (b.EY == [b.A.B3.V, b.A.B3.A2, b.A.D0.V, b.A.D0.A2]) return;
        b.b();
        var e = b.A.JK,
            f = b.A.B3,
            g = b.A.M;
        b.setup();
        b.R.CV = b.CV = 0;
        b.R.C6 = b.A.B5("bl", 0);
        var h, k = [];
        h = b.A.CG;
        if ((b.C.JP || b.A.M6) && b.A.CG == "spline") h = "segmented";
        switch (h) {
            default: h = 1;
            if (!f.D8 && b.J <= f.V) h = 0;
            if (g[b.J - b.A.U] == null) h = 0;
            if (h) {
                g[b.J - b.A.U].setup();
                h = 0;
                if (!h) {
                    h = ZC.AP.I4(g[b.J - b.A.U].iX, g[b.J - b.A.U].iY, g[b.J].iX, g[b.J].iY);
                    k.push(h)
                }
            }
            k.push([b.iX, b.iY]);
            h = 1;
            if (!f.D8 && b.J >= f.A2) h = 0;
            if (g[b.J + b.A.U] == null) h = 0;
            if (h) {
                g[b.J + b.A.U].setup();
                h = 0;
                if (!h) {
                    h = ZC.AP.I4(g[b.J].iX, g[b.J].iY, g[b.J + b.A.U].iX, g[b.J + b.A.U].iY, b.R.A9);
                    k.push(h)
                }
            }
            break;
            case "spline":
                if (b.A.B != null) k = b.A.B;
                b.A.B = [];
                if (b.J < f.A2 && g[b.J + 1] != null) {
                    var l = [];
                    for (h = -1; h < 3; h++)
                        if (g[b.J + h] != null) {
                            g[b.J + h].setup();
                            l.push(g[b.J + h].iY)
                        } else l.length == 0 ? l.push(b.iY) : l.push(l[l.length - 1]);
                    g = ZC.AP.NO(l, ZC._i_(f.S * b.A.U));
                    for (h = 0; h < ZC._i_(g.length / 2) + (b.R.A9 == 1 ? 1 : 0); h++) k.push([b.iX + (f.AD ? -1 : 1) * g[h][0] * f.S, g[h][1]]);
                    h = ZC._i_(g.length / 2) - 1;
                    for (l = g.length; h < l; h++) b.A.B.push([b.iX + (f.AD ? -1 : 1) * g[h][0] * f.S, g[h][1]])
                } else k.push([g[b.J].iX, g[b.J].iY]);
                break;
            case "stepped":
                b.R.LD = "round";
                h = 1;
                if (!f.D8 && b.J <= f.V) h = 0;
                if (g[b.J - b.A.U] ==
                    null) h = 0;
                if (h) {
                    g[b.J - b.A.U].setup();
                    h = [b.iX - (f.AD ? -1 : 1) * f.S / 2, g[b.J - b.A.U].iY];
                    k.push(h);
                    h = [b.iX - (f.AD ? -1 : 1) * f.S / 2, b.iY];
                    k.push(h)
                }
                h = [b.iX, b.iY];
                k.push(h);
                h = 1;
                if (!f.D8 && b.J >= f.A2) h = 0;
                if (g[b.J + b.A.U] == null) h = 0;
                if (h) {
                    h = [b.iX + (f.AD ? -1 : 1) * f.S / 2, b.iY];
                    k.push(h)
                }
                break;
            case "jumped":
                h = 1;
                if (!f.D8 && b.J <= f.V) h = 0;
                if (g[b.J - b.A.U] == null) h = 0;
                if (h) {
                    h = [b.iX - (f.AD ? -1 : 1) * f.S / 2, b.iY];
                    k.push(h)
                }
                h = [b.iX, b.iY];
                k.push(h);
                h = 1;
                if (!f.D8 && b.J >= f.A2) h = 0;
                if (g[b.J + b.A.U] == null) h = 0;
                if (h) {
                    h = [b.iX + (f.AD ? -1 : 1) * f.S / 2, b.iY];
                    k.push(h)
                }
        }
        g =
            b.A.F5(b, b.R);
        b.H.points = k;
        if (!a) {
            b.R.H.idpath = b.Q;
            ZC.BQ.setup(e, g);
            if (b.C.E0 != null && b.C.E0.FH && b.A.PX) {
                var m = b.C.O,
                    o = b.C.E0,
                    n = o.AX;
                a = [];
                h = 0;
                for (l = k.length; h < l; h++) a.push([n.iX + n.AU + (k[h][0] - m.iX) / m.F * (n.F - 2 * n.AU), n.iY + n.AU + (k[h][1] - m.iY) / m.D * (n.D - 2 * n.AU)]);
                h = new ZC.E7(b);
                h.copy(g);
                l = ZC.K.CN(o.Y, b.I.A5);
                h.AI = 1;
                ZC.BQ.paint(l, h, a, null, 3)
            }
            if (b.A.ES && !b.C.FL) {
                a = new ZC.D5(b);
                l = {};
                a.copy(g);
                a.Q = b.Q;
                a.Y = b.A.B5("bl", 1);
                a.C6 = b.A.B5("bl", 0);
                a.B = k;
                l.points = k;
                o = [];
                switch (b.A.GI) {
                    case 1:
                        a.A9 = 0;
                        l.alpha = g.A9;
                        break;
                    case 2:
                        for (h = a.A9 = 0; h < k.length; h++) o[h] = [k[h][0], b.C.O.iY + b.C.O.D / 2];
                        a.B = o;
                        l.alpha = g.A9;
                        l.points = k;
                        break;
                    case 3:
                        for (h = a.A9 = 0; h < k.length; h++) o[h] = [k[h][0], b.C.O.iY - 5];
                        a.B = o;
                        l.alpha = g.A9;
                        l.points = k;
                        break;
                    case 4:
                        for (h = a.A9 = 0; h < k.length; h++) o[h] = [k[h][0], b.C.O.iY + b.C.O.D + 5];
                        a.B = o;
                        l.alpha = g.A9;
                        l.points = k;
                        break;
                    case 5:
                        for (h = a.A9 = 0; h < k.length; h++) o[h] = [b.C.O.iX - 5, k[h][1]];
                        a.B = o;
                        l.alpha = g.A9;
                        l.points = k;
                        break;
                    case 6:
                        for (h = a.A9 = 0; h < k.length; h++) o[h] = [b.C.O.iX + b.C.O.F + 5, k[h][1]];
                        a.B = o;
                        l.alpha = g.A9;
                        l.points =
                            k
                }
                for (var p in b.A.DB) {
                    a[ZC.CA.F7[ZC.CE(p)]] = b.A.DB[p];
                    l[ZC.CE(p)] = g[ZC.CA.F7[ZC.CE(p)]]
                }
                if (b.C.CS == null) b.C.CS = {};
                if (b.C.CS[b.A.J + "-" + b.J] != null)
                    for (p in b.C.CS[b.A.J + "-" + b.J]) a[ZC.CA.F7[ZC.CE(p)]] = b.C.CS[b.A.J + "-" + b.J][p];
                b.C.CS[b.A.J + "-" + b.J] = {};
                ZC.ET(l, b.C.CS[b.A.J + "-" + b.J]);
                k = new ZC.CA(a, l, b.A.FE, b.A.GH, ZC.CA.KP[b.A.GJ], function() {
                    c()
                });
                k.B7 = b;
                k.IM = function() {
                    b.HL(ZC.K.CN(b.A.B5("bl", 1), b.I.A5))
                };
                k.EU = e;
                b.GU(k)
            } else {
                ZC.BQ.paint(e, g, k);
                c()
            }
        }
    },
    A0T: function(a) {
        if (!ZC.move) {
            this.RE(a);
            this.A.LL &&
                this.LO(a)
        }
    }
});
ZC.VR = ZC.G3.B2({
    setup: function() {
        this.OP()
    },
    O4: function() {
        return {
            color: this.R.AT
        }
    },
    R9: function() {
        return {
            "background-color": this.R.AT,
            color: this.R.BO
        }
    },
    paint: function(a) {
        function c() {
            if (!b.C.JP && ZC.DK(b.iX, f.iX - 1, f.iX + f.F + 1) && ZC.DK(b.iY, f.iY - 1, f.iY + f.D + 1)) {
                b.JH();
                b.HL(ZC.K.CN(b.A.B5("bl", 1), b.I.A5));
                b.A.T != null && b.FX()
            }
        }
        var b = this;
        if (typeof a == ZC._[33]) a = 0;
        if (a)
            if (b.EY == [b.A.B3.V, b.A.B3.A2, b.A.D0.V, b.A.D0.A2]) return;
        b.b();
        var e = b.A.JK,
            f = b.A.B3,
            g = b.A.D0,
            h = b.A.M;
        b.setup();
        b.R.CV = b.CV = 0;
        b.R.C6 = b.A.B5("bl",
            1);
        var k = g.B4(g.EA);
        k = ZC._l_(k, g.iY, g.iY + g.D);
        var l = b.C.AB == "mixed" ? f.S / 2 : 0;
        g = [];
        var m = [],
            o = [],
            n = null;
        if (b.A.A.C1 != null && b.A.A.C1[b.J] != null) n = b.A.A.C1[b.J];
        var p = b.A.CG;
        if ((b.C.JP || b.A.M6) && b.A.CG == "spline") p = "segmented";
        var s = b.R.AI / 2 - 1;
        switch (p) {
            default: p = 1;
            if (!f.D8 && b.J <= f.V) p = 0;
            if (h[b.J - b.A.U] == null) p = 0;
            if (p) {
                h[b.J - b.A.U].setup();
                p = ZC.AP.I4(h[b.J - b.A.U].iX, h[b.J - b.A.U].iY, h[b.J].iX, h[b.J].iY);
                o.push([ZC._i_(p[0]), p[1] - s]);
                if (!b.A.CL || n == null) m.push([ZC._i_(p[0]), k]);
                m.push([ZC._i_(p[0]), p[1] +
                    s
                ]);
                g.push([p[0], p[1]])
            } else if (!f.D8 && b.J == f.V)
                if (f.AD) {
                    if (!b.A.CL || n == null) m.push([ZC._i_(f.iX + f.F - f.CP - l), k]);
                    m.push([ZC._i_(f.iX + f.F - f.CP - l), b.iY + s])
                } else {
                    if (!b.A.CL || n == null) m.push([ZC._i_(f.iX + f.Z + l), k]);
                    m.push([ZC._i_(f.iX + f.Z + l), b.iY + s])
                } else if (!b.A.CL || n == null) {
                m.push([ZC._i_(b.iX), k]);
                o.push([ZC._i_(b.iX - f.S / 2), k]);
                o.push([ZC._i_(b.iX), k])
            } else if (b.A.A.AA[b.A.J - 1] != null) {
                p = b.A.A.AA[b.A.J - 1];
                p.M[b.J] != null && m.push([ZC._i_(b.iX), p.M[b.J].iY + s])
            }
            o.push([ZC._i_(b.iX), b.iY - s]);
            m.push([ZC._i_(b.iX),
                b.iY + s
            ]);
            g.push([b.iX, b.iY]);
            p = 1;
            if (!f.D8 && b.J >= f.A2) p = 0;
            if (h[b.J + b.A.U] == null) p = 0;
            if (p) {
                h[b.J + b.A.U].setup();
                l = ZC.AP.I4(h[b.J].iX, h[b.J].iY, h[b.J + b.A.U].iX, h[b.J + b.A.U].iY);
                o.push([ZC._i_(l[0]), l[1] - s]);
                m.push([ZC._i_(l[0]), l[1] + s]);
                o.push([ZC._i_(l[0]), l[1] - s]);
                if (!b.A.CL || n == null) m.push([ZC._i_(l[0]), k]);
                p = ZC.AP.I4(h[b.J].iX, h[b.J].iY, h[b.J + b.A.U].iX, h[b.J + b.A.U].iY, b.R.A9);
                g.push([p[0], p[1]])
            } else if (b.J == f.A2)
                if (f.AD) {
                    m.push([f.iX + f.Z - l, b.iY + s]);
                    if (!b.A.CL || n == null) m.push([ZC._i_(f.iX + f.Z - l),
                        k
                    ])
                } else {
                    m.push([f.iX + f.F - f.CP - l, b.iY + s]);
                    if (!b.A.CL || n == null) m.push([ZC._i_(f.iX + f.F - f.CP - l), k])
                } else if (!b.A.CL || n == null) {
                m.push([ZC._i_(b.iX), k]);
                o.push([ZC._i_(b.iX), k]);
                o.push([ZC._i_(b.iX + f.S / 2), k])
            } else if (b.A.A.AA[b.A.J - 1] != null) {
                p = b.A.A.AA[b.A.J - 1];
                p.M[b.J] != null && m.push([ZC._i_(b.iX), p.M[b.J].iY + s])
            }
            break;
            case "spline":
                if (b.A.CC != null) o = b.A.CC;
                if (b.A.A4 != null) m = b.A.A4;
                b.A.CC = [];
                b.A.A4 = [];
                if (b.A.B != null) g = b.A.B;
                b.A.B = [];
                if (h[b.J + b.A.U] != null) {
                    p = [];
                    for (l = -1; l < 3; l++)
                        if (h[b.J + l] != null) {
                            h[b.J +
                                l].setup();
                            p.push(h[b.J + l].iY)
                        } else p.push(b.iY);
                    p = ZC.AP.NO(p, ZC._i_(f.S * b.A.U));
                    if (m.length == 0)
                        if (!b.A.CL || n == null) m.push([ZC._i_(b.iX + (f.AD ? -1 : 1) * p[0][0] * f.S), k]);
                    for (l = 0; l < ZC._i_(p.length / 2) + (b.R.A9 == 1 ? 1 : 0); l++) g.push([b.iX + (f.AD ? -1 : 1) * p[l][0] * f.S, p[l][1]]);
                    for (l = 0; l < ZC._i_(p.length / 2) + (b.R.DV == 1 ? 1 : 0); l++) {
                        o.push([ZC._i_(b.iX + (f.AD ? -1 : 1) * p[l][0] * f.S), p[l][1] - s]);
                        m.push([ZC._i_(b.iX + (f.AD ? -1 : 1) * p[l][0] * f.S), p[l][1]])
                    }
                    if (!b.A.CL || n == null) m.push([ZC._i_(m[m.length - 1][0]), k]);
                    var t = b.DV == 1 ? ZC.CO(2,
                        ZC._i_(p.length / 2)) : 1;
                    l = ZC._i_(p.length / 2) - 1;
                    for (h = p.length; l < h; l++) b.A.B.push([b.iX + (f.AD ? -1 : 1) * p[l][0] * f.S, p[l][1]]);
                    l = ZC._i_(p.length / 2) - t;
                    for (h = p.length; l < h; l++) {
                        if (b.A.A4.length == 0)
                            if (!b.A.CL || n == null) b.A.A4.push([ZC._i_(b.iX + (f.AD ? -1 : 1) * p[l][0] * f.S), k]);
                        b.A.A4.push([ZC._i_(b.iX + (f.AD ? -1 : 1) * p[l][0] * f.S), p[l][1]]);
                        b.A.CC.push([ZC._i_(b.iX + (f.AD ? -1 : 1) * p[l][0] * f.S), p[l][1] - s])
                    }
                } else {
                    o.push([ZC._i_(h[b.J].iX), h[b.J].iY - s]);
                    m.push([ZC._i_(h[b.J].iX), h[b.J].iY]);
                    if (!b.A.CL || n == null) m.push([ZC._i_(m[m.length -
                        1][0]), k]);
                    g.push([h[b.J].iX, h[b.J].iY])
                }
        }
        if (b.A.CL && n != null)
            for (l = n.length - 1; l >= 0; l--) m.push(n[l]);
        if (b.A.A.C1 == null) b.A.A.C1 = [];
        b.A.A.C1[b.J] = o;
        k = b.A.F5(b, b.R);
        b.H.points = g;
        b.H.pointsarea = m;
        if (!a) {
            n = b.C.O;
            if (b.A.DE.length == 0 && typeof b.A.XW != ZC._[33] && !b.R.o.override && !b.C.I6) a = b.A.XW;
            else {
                a = new ZC.D5(b.A);
                a.copy(k);
                a.A9 = b.A.DV
            }
            a.CV = 1;
            a.J0 = 1;
            a.AI = 0;
            a.AU = 0;
            a.EC = 0;
            a.FP = 0;
            a.Y = b.A.B5("bl", b.C.CL ? 0 : 1);
            a.B = m;
            if (b.A.IX == 90 || b.A.IX == 270) a.ST();
            else a.DF = [n.iX, n.iY, n.iX + n.F, n.iY + n.D];
            a.DF[1] = b.A.H["min-y"];
            a.DF[3] = b.A.H["max-y"];
            a.Q = b.Q + "-area";
            b.A.ES || (a.H.areanode = 1);
            ZC.BQ.setup(e, k);
            if (b.C.E0 != null && b.C.E0.FH && b.A.PX) {
                n = b.C.O;
                o = b.C.E0;
                s = o.AX;
                p = [];
                l = 0;
                for (h = m.length; l < h; l++) {
                    t = (m[l][0] - n.iX) / n.F;
                    var r = (m[l][1] - n.iY) / n.D;
                    p.push([s.iX + s.AU + ZC._i_(t * (s.F - 2 * s.AU)), s.iY + s.AU + ZC._i_(r * (s.D - 2 * s.AU))])
                }
                l = new ZC.D5(b.A);
                l.copy(k);
                l.CV = 1;
                l.J0 = 1;
                l.AI = 0;
                l.AU = 0;
                l.EC = 0;
                l.FP = 0;
                l.A9 = b.A.DV;
                l.DF = [n.iX, n.iY, n.iX + n.F, n.iY + n.D];
                l.Q = b.Q + "-area-preview";
                l.Y = o.Y;
                l.B = p;
                l.paint();
                p = [];
                l = 0;
                for (h = g.length; l < h; l++) {
                    t = (g[l][0] -
                        n.iX) / n.F;
                    r = (g[l][1] - n.iY) / n.D;
                    p.push([s.iX + s.AU + t * (s.F - 2 * s.AU), s.iY + s.AU + r * (s.D - 2 * s.AU)])
                }
                l = new ZC.E7(b);
                l.copy(k);
                o = ZC.K.CN(o.Y, b.I.A5);
                l.AI = 1;
                ZC.BQ.paint(o, l, p, null, 3)
            }
            if (b.A.ES && !b.C.FL) {
                o = new ZC.D5(b);
                n = {};
                o.copy(k);
                o.Q = b.Q;
                o.Y = b.A.B5("bl", 2);
                o.C6 = b.A.B5("bl", 1);
                o.B = g;
                a = a;
                s = {};
                h = [];
                p = [];
                o.B = g;
                n.points = g;
                a.B = m;
                s.points = m;
                switch (b.A.GI) {
                    case 1:
                        o.A9 = 0;
                        a.A9 = 0;
                        n.alpha = k.A9;
                        s.alpha = b.A.DV;
                        s.points = m;
                        break;
                    case 2:
                        for (l = o.A9 = 0; l < g.length; l++) h[l] = [g[l][0], b.C.O.iY + b.C.O.D / 2];
                        o.B = h;
                        n.alpha = k.A9;
                        n.points =
                            g;
                        for (l = a.A9 = 0; l < m.length; l++) p[l] = [m[l][0], b.C.O.iY + b.C.O.D / 2];
                        a.B = p;
                        s.alpha = b.A.DV;
                        s.points = m;
                        break;
                    case 3:
                        for (l = o.A9 = 0; l < g.length; l++) h[l] = [g[l][0], b.C.O.iY - 5];
                        o.B = h;
                        n.alpha = k.A9;
                        n.points = g;
                        for (l = a.A9 = 0; l < m.length; l++) p[l] = [m[l][0], b.C.O.iY - 5];
                        a.B = p;
                        s.alpha = b.A.DV;
                        s.points = m;
                        break;
                    case 4:
                        for (l = o.A9 = 0; l < g.length; l++) h[l] = [g[l][0], b.C.O.iY + b.C.O.D + 5];
                        o.B = h;
                        n.alpha = k.A9;
                        n.points = g;
                        for (l = a.A9 = 0; l < m.length; l++) p[l] = [m[l][0], b.C.O.iY + b.C.O.D + 5];
                        a.B = p;
                        s.alpha = b.A.DV;
                        s.points = m;
                        break;
                    case 5:
                        for (l = o.A9 =
                            0; l < g.length; l++) h[l] = [b.C.O.iX - 5, g[l][1]];
                        o.B = h;
                        n.alpha = k.A9;
                        n.points = g;
                        for (l = a.A9 = 0; l < m.length; l++) p[l] = [b.C.O.iX - 5, m[l][1]];
                        a.B = p;
                        s.alpha = b.A.DV;
                        s.points = m;
                        break;
                    case 6:
                        for (l = o.A9 = 0; l < g.length; l++) h[l] = [b.C.O.iX + b.C.O.F + 5, g[l][1]];
                        o.B = h;
                        n.alpha = k.A9;
                        n.points = g;
                        for (l = a.A9 = 0; l < m.length; l++) p[l] = [b.C.O.iX + b.C.O.F + 5, m[l][1]];
                        a.B = p;
                        s.alpha = b.A.DV;
                        s.points = m
                }
                for (var u in b.A.DB) {
                    o[ZC.CA.F7[ZC.CE(u)]] = b.A.DB[u];
                    n[ZC.CE(u)] = k[ZC.CA.F7[ZC.CE(u)]];
                    a[ZC.CA.F7[ZC.CE(u)]] = b.A.DB[u];
                    s[ZC.CE(u)] = k[ZC.CA.F7[ZC.CE(u)]]
                }
                if (b.C.CS ==
                    null) {
                    b.C.CS = {};
                    b.C.LT = {}
                }
                if (b.C.CS[b.A.J + "-" + b.J] != null) {
                    for (u in b.C.CS[b.A.J + "-" + b.J]) o[ZC.CA.F7[ZC.CE(u)]] = b.C.CS[b.A.J + "-" + b.J][u];
                    for (u in b.C.LT[b.A.J + "-" + b.J]) a[ZC.CA.F7[ZC.CE(u)]] = b.C.LT[b.A.J + "-" + b.J][u]
                }
                b.C.CS[b.A.J + "-" + b.J] = {};
                ZC.ET(n, b.C.CS[b.A.J + "-" + b.J]);
                b.C.LT[b.A.J + "-" + b.J] = {};
                ZC.ET(s, b.C.LT[b.A.J + "-" + b.J]);
                u = new ZC.CA(o, n, b.A.FE, b.A.GH, ZC.CA.KP[b.A.GJ], function() {
                    c()
                });
                u.B7 = b;
                u.IM = function() {
                    b.HL(ZC.K.CN(b.A.B5("bl", 1), b.I.A5))
                };
                u.EU = e;
                e = new ZC.CA(a, s, b.A.FE, b.A.GH, ZC.CA.KP[b.A.GJ],
                    function() {});
                e.B7 = b;
                b.GU(u, e)
            } else {
                a.paint();
                if (b.A.DE.length == 0 && typeof b.A.XW == ZC._[33] && !b.R.o.override && !b.C.I6) b.A.XW = a;
                ZC.BQ.paint(e, k, g);
                c()
            }
        }
    },
    A0T: function(a) {
        var c = this;
        if (!ZC.move) {
            c.H2({
                layer: a,
                type: "area",
                initcb: function() {
                    this.X = c.A.AW[2];
                    this.A6 = c.A.AW[2];
                    this.B = c.H.pointsarea
                },
                setupcb: function() {
                    this.AU = this.AI = 0;
                    this.A9 = c.A.DV;
                    var b = c.C.O;
                    this.DF = [b.iX, b.iY, b.iX + b.F, b.iY + b.D]
                }
            });
            c.RE(a);
            c.A.LL && c.LO(a)
        }
    }
});
ZC.SC = ZC.G3.B2({
    setup: function() {
        this.OP()
    },
    A00: function(a) {
        var c = "top-out",
            b = this.C.AY(this.A.B6("v")[0]);
        b = this.A8 >= b.EA && !b.AD || this.A8 < b.EA && b.AD ? 1 : -1;
        if (a.o[ZC._[9]] != null) c = a.o[ZC._[9]];
        var e = this.iX + this.F / 2 - a.CZ / 2,
            f = this.iY - a.C9 / 2;
        switch (c) {
            case "top-out":
            case "top":
                f -= b * (a.C9 / 2 + 5);
                break;
            case "top-in":
                f += b * (a.C9 / 2 + 5);
                break;
            case "middle":
                f += b * (this.D / 2);
                break;
            case "bottom-in":
                f += b * (this.D - a.C9 / 2 - 5);
                break;
            case "bottom-out":
            case "bottom":
                f += b * (this.D + a.C9 / 2 + 5)
        }
        return [e, f]
    },
    paint: function() {
        var a =
            this;
        a.b();
        var c = a.A.B3,
            b = a.A.D0;
        a.setup();
        var e = b.B4(b.EA);
        e = ZC._l_(e, b.iY, b.iY + b.D);
        var f = a.A.MT(),
            g = f.S,
            h = f.EK,
            k = f.CD,
            l = f.BS,
            m = a.iX - g / 2 + k + h * (l + f.EL) - h * f.E2;
        m = ZC._l_(m, a.iX - g / 2 + k, a.iX + g / 2 - f.CF);
        if (a.A.BS > 0) {
            f = l;
            l = a.A.BS;
            if (l <= 1) l *= f;
            m += (f - l) / 2
        }
        var o = l,
            n = a.iY;
        if (a.A.CL) {
            l = a.C.LQ == "100%" ? b.B4(100 * (a.D3 - a.A8) / a.A.A.HF[a.J]["%total"]) : b.B4(a.D3 - a.A8);
            l = ZC._l_(l, b.iY, b.iY + b.D);
            if (n <= l) var p = l - a.iY;
            else {
                n = l;
                p = a.iY - l
            }
        } else if (n <= e) p = e - a.iY;
        else {
            n = e;
            p = a.iY - e
        } if (p < 1 && a.A8 > 0) {
            p = 1.1;
            if (b.AD) n -= 1.1
        }
        a.F = o;
        a.D =
            p;
        a.iX = m;
        a.H.iX = m;
        a.H.iY = n;
        a.H.D9 = e;
        e = a.A.F5(a, a.R);
        if (a.AK) {
            var s;
            switch (a.A.CG) {
                default: if (a.A.DE.length == 0 && typeof a.A.PD != ZC._[33] && !a.R.o.override && !a.C.I6) s = a.A.PD;
                    else {
                        s = new ZC.FY(a.A);
                        s.copy(e)
                    }s.Q = a.Q;
                s.iX = m;
                s.iY = n;
                s.F = a.F;
                s.D = a.D;
                if (c.S < 10) {
                    s.F = ZC.BN(1, s.F) + 1;
                    s.IT = 0;
                    s.CV = 0
                } else {
                    s.IT = 1;
                    s.CV = 1
                }
                break;
                case "pyramid":
                case "cone":
                    if (a.A.DE.length == 0 && typeof a.A.PD != ZC._[33] && !a.R.o.override && !a.C.I6) s = a.A.PD;
                    else {
                        s = new ZC.D5(a.A);
                        s.copy(e)
                    }
                    s.Q = a.Q;
                    s.B = b.AD ? [
                        [m + a.F / 2, n + a.D],
                        [m, n],
                        [m + a.F, n],
                        [m +
                            a.F / 2, n + a.D
                        ]
                    ] : [
                        [m + a.F / 2, n],
                        [m, n + a.D],
                        [m + a.F, n + a.D],
                        [m + a.F / 2, n]
                    ];
                    a.H.points = s.B;
                    s.iX = m;
                    s.iY = n;
                    s.locate(2)
            }
            s.Y = a.A.B5("bl", 1);
            s.C6 = a.A.B5("bl", 0);
            if (a.C.E0 != null && a.C.E0.FH && a.A.PX) {
                c = a.C.O;
                b = a.C.E0;
                l = b.AX;
                f = (s.iX - c.iX) / c.F;
                g = (s.iY - c.iY) / c.D;
                h = new ZC.FY(a.A);
                h.copy(e);
                h.Q = a.Q + "-preview";
                h.iX = l.iX + l.AU + f * (l.F - 2 * l.AU);
                h.iY = l.iY + l.AU + g * (l.D - 2 * l.AU);
                h.F = s.F / c.F * (l.F - 2 * l.AU);
                h.D = s.D / c.D * (l.D - 2 * l.AU);
                if (l.F / a.A.M.length < 10) {
                    h.F += 0.5;
                    h.IT = 0;
                    h.CV = 0
                } else {
                    h.IT = 1;
                    h.CV = 1
                }
                h.Y = h.C6 = b.Y;
                h.paint()
            }
            var t = function() {
                a.HL(ZC.K.CN(s.Y,
                    a.I.A5));
                if (a.A.GG) {
                    var u = a.C.Q + ZC._[36] + a.C.Q + "-plot-" + a.A.J + ZC._[6];
                    u = ZC.K.DM("rect") + 'class="' + u + '" id="' + a.Q + ZC._[32] + ZC._i_(m + ZC.MAPTX) + "," + ZC._i_(n + ZC.MAPTX) + "," + ZC._i_(m + o + ZC.MAPTX) + "," + ZC._i_(n + p + ZC.MAPTX) + '"/>';
                    a.A.A.FN.push(u)
                }
                a.A.T != null && a.FX()
            };
            if (a.A.ES && !a.C.FL) {
                c = s;
                b = {};
                c.iX = m;
                c.iY = n;
                c.F = o;
                c.D = p;
                b.x = m;
                b.y = n;
                b.width = o;
                b.height = p;
                switch (a.A.GI) {
                    case 1:
                        c.A9 = 0;
                        b.alpha = e.A9;
                        break;
                    case 2:
                        c.A9 = 0;
                        c.iY = a.C.O.iY + a.C.O.D / 2;
                        c.D = 1;
                        b.alpha = e.A9;
                        b.height = a.D;
                        b.y = n;
                        break;
                    case 3:
                        c.A9 = 0;
                        c.iY = a.C.O.iY +
                            a.C.O.D;
                        c.D = 1;
                        b.alpha = e.A9;
                        b.height = a.D;
                        b.y = n;
                        break;
                    case 4:
                        c.A9 = 0;
                        c.iY = n + a.D / 2;
                        c.D = 1;
                        b.alpha = e.A9;
                        b.height = a.D;
                        b.y = n;
                        break;
                    case 5:
                        c.A9 = 0;
                        c.F = 1;
                        b.alpha = e.A9;
                        b.width = a.F
                }
                for (var r in a.A.DB) {
                    c[ZC.CA.F7[ZC.CE(r)]] = a.A.DB[r];
                    b[ZC.CE(r)] = e[ZC.CA.F7[ZC.CE(r)]]
                }
                if (a.C.CS == null) a.C.CS = {};
                if (a.C.CS[a.A.J + "-" + a.J] != null)
                    for (r in a.C.CS[a.A.J + "-" + a.J]) c[ZC.CA.F7[ZC.CE(r)]] = a.C.CS[a.A.J + "-" + a.J][r];
                a.C.CS[a.A.J + "-" + a.J] = {};
                ZC.ET(b, a.C.CS[a.A.J + "-" + a.J]);
                r = new ZC.CA(c, b, a.A.FE, a.A.GH, ZC.CA.KP[a.A.GJ], function() {
                    t()
                });
                r.B7 = a;
                r.IM = function() {
                    a.HL(ZC.K.CN(s.Y, a.I.A5))
                };
                a.GU(r)
            } else {
                s.paint();
                t()
            } if (a.A.DE.length == 0 && typeof a.A.PD == ZC._[33] && !a.R.o.override && !a.C.I6)
                if (!a.A.ES) a.A.PD = s
        }
    },
    A0T: function(a) {
        var c = this;
        if (!ZC.move) {
            var b = "";
            switch (c.A.CG) {
                default: b = "box";
                break;
                case "pyramid":
                    b = "shape"
            }
            c.H2({
                layer: a,
                type: b,
                initcb: function() {
                    this.AT = c.A.AW[1];
                    this.BI = c.A.AW[1];
                    this.X = c.A.AW[3];
                    this.A6 = c.A.AW[2]
                },
                setupcb: function() {
                    switch (c.A.CG) {
                        default: this.iX = c.H.iX;
                        this.F = c.F;
                        this.iY = c.H.iY;
                        this.D = c.D;
                        var e = c.C.O;
                        if (this.iY <
                            e.iY) {
                            this.D -= e.iY - this.iY;
                            this.iY = e.iY
                        }
                        if (this.iY + this.D > e.iY + e.D) this.D = e.iY + e.D - this.iY;
                        break;
                        case "pyramid":
                        case "cone":
                            this.B = c.H.points
                    }
                }
            });
            c.HL(ZC.K.CN(c.C.Q + ZC._[24], c.I.A5), true)
        }
    }
});
ZC.SD = ZC.G3.B2({
    setup: function() {
        this.OP()
    },
    A00: function(a) {
        var c = "top-out",
            b = this.C.AY(this.A.B6("v")[0]);
        b = this.A8 >= b.EA && !b.AD || this.A8 < b.EA && b.AD ? -1 : 1;
        if (a.o[ZC._[9]] != null) c = a.o[ZC._[9]];
        var e = this.iX - a.CZ / 2,
            f = this.iY + this.D / 2 - a.C9 / 2;
        switch (c) {
            case "top-out":
            case "top":
                e -= b * (a.CZ / 2 + 5);
                break;
            case "top-in":
                e += b * (a.CZ / 2 + 5);
                break;
            case "middle":
                e += b * (this.F / 2);
                break;
            case "bottom-in":
                e += b * (this.F - a.CZ / 2 - 5);
                break;
            case "bottom-out":
            case "bottom":
                e += b * (this.F + a.CZ / 2 + 5)
        }
        return [e, f]
    },
    paint: function() {
        var a =
            this;
        a.b();
        var c = a.A.B3,
            b = a.A.D0;
        a.setup();
        var e = b.B4(b.EA);
        e = ZC._l_(e, b.iX, b.iX + b.F);
        var f = a.A.MT(),
            g = f.S,
            h = f.EK,
            k = f.CD,
            l = f.BS,
            m = a.iY - g / 2 + k + h * (l + f.EL) - h * f.E2;
        m = ZC._l_(m, a.iY - g / 2 + k, a.iY + g / 2 - f.CF);
        if (a.A.BS > 0) {
            f = l;
            l = a.A.BS;
            if (l <= 1) l *= f;
            m += (f - l) / 2
        }
        var o = l,
            n = a.iX;
        if (a.A.CL) {
            l = a.C.LQ == "100%" ? b.B4(100 * (a.D3 - a.A8) / a.A.A.HF[a.J]["%total"]) : b.B4(a.D3 - a.A8);
            l = ZC._l_(l, b.iX, b.iX + b.F);
            if (n <= l) var p = l - a.iX;
            else {
                n = l;
                p = a.iX - l
            }
        } else if (n <= e) p = e - a.iX;
        else {
            n = e;
            p = a.iX - e
        } if (p < 1 && a.A8 > 0) {
            p = 1.1;
            n -= 1.1
        }
        a.F = p;
        a.D = o;
        a.iY =
            m;
        a.H.iX = n;
        a.H.iY = m;
        a.H.GD = e;
        e = a.A.F5(a, a.R);
        if (a.AK) {
            var s;
            switch (a.A.CG) {
                default: if (a.A.DE.length == 0 && typeof a.A.PD != ZC._[33] && !a.R.o.override && !a.C.I6) s = a.A.PD;
                    else {
                        s = new ZC.FY(a.A);
                        s.copy(e)
                    }s.Q = a.Q;
                s.iX = n;
                s.iY = m;
                s.F = a.F;
                s.D = a.D;
                if (c.S < 10) {
                    s.D = ZC.BN(1, s.D) + 1;
                    s.IT = 0;
                    s.CV = 0
                } else {
                    s.IT = 1;
                    s.CV = 1
                }
                break;
                case "pyramid":
                case "cone":
                    if (a.A.DE.length == 0 && typeof a.A.PD != ZC._[33] && !a.R.o.override && !a.C.I6) s = a.A.PD;
                    else {
                        s = new ZC.D5(a.A);
                        s.copy(e)
                    }
                    s.Q = a.Q;
                    s.B = b.AD ? [
                        [n, m + a.D / 2],
                        [n + a.F, m],
                        [n + a.F, m + a.D],
                        [n, m + a.D /
                            2
                        ]
                    ] : [
                        [n + a.F, m + a.D / 2],
                        [n, m],
                        [n, m + a.D],
                        [n + a.F, m + a.D / 2]
                    ];
                    a.H.points = s.B;
                    s.iX = n;
                    s.iY = m;
                    s.locate(2)
            }
            s.Y = a.A.B5("bl", 1);
            s.C6 = a.A.B5("bl", 0);
            var t = function() {
                a.HL(ZC.K.CN(s.Y, a.I.A5));
                if (a.A.GG) {
                    var u = a.C.Q + ZC._[36] + a.C.Q + ZC._[37] + a.A.J + ZC._[6];
                    u = ZC.K.DM("rect") + 'class="' + u + '" id="' + a.Q + ZC._[32] + ZC._i_(n + ZC.MAPTX) + "," + ZC._i_(m + ZC.MAPTX) + "," + ZC._i_(n + p + ZC.MAPTX) + "," + ZC._i_(m + o + ZC.MAPTX) + '"/>';
                    a.A.A.FN.push(u)
                }
                a.A.T != null && a.FX()
            };
            if (a.A.ES && !a.C.FL) {
                c = s;
                b = {};
                c.iX = n;
                c.iY = m;
                c.F = p;
                c.D = o;
                b.x = n;
                b.y = m;
                b.width =
                    p;
                b.height = o;
                switch (a.A.GI) {
                    case 1:
                        c.A9 = 0;
                        b.alpha = a.R.A9;
                        break;
                    case 2:
                        c.A9 = 0;
                        c.iX = a.C.O.iX + a.C.O.F / 2;
                        c.F = 1;
                        b.alpha = a.R.A9;
                        b.width = a.F;
                        b.x = n;
                        break;
                    case 3:
                        c.A9 = 0;
                        c.iX = a.C.O.iX;
                        c.F = 1;
                        b.alpha = a.R.A9;
                        b.width = a.F;
                        b.x = n;
                        break;
                    case 4:
                        c.A9 = 0;
                        c.iX = n + a.F / 2;
                        c.F = 1;
                        b.alpha = a.R.A9;
                        b.width = a.F;
                        b.x = n;
                        break;
                    case 5:
                        c.A9 = 0;
                        c.D = 1;
                        b.alpha = a.R.A9;
                        b.height = a.D
                }
                for (var r in a.A.DB) {
                    c[ZC.CA.F7[ZC.CE(r)]] = a.A.DB[r];
                    b[ZC.CE(r)] = a.R[ZC.CA.F7[ZC.CE(r)]]
                }
                if (a.C.CS == null) a.C.CS = {};
                if (a.C.CS[a.A.J + "-" + a.J] != null)
                    for (r in a.C.CS[a.A.J +
                        "-" + a.J]) c[ZC.CA.F7[ZC.CE(r)]] = a.C.CS[a.A.J + "-" + a.J][r];
                a.C.CS[a.A.J + "-" + a.J] = {};
                ZC.ET(b, a.C.CS[a.A.J + "-" + a.J]);
                r = new ZC.CA(c, b, a.A.FE, a.A.GH, ZC.CA.KP[a.A.GJ], function() {
                    t()
                });
                r.B7 = a;
                r.IM = function() {
                    a.HL(ZC.K.CN(s.Y, a.I.A5))
                };
                a.GU(r)
            } else {
                s.paint();
                t()
            } if (a.A.DE.length == 0 && typeof a.A.PD == ZC._[33] && !a.R.o.override && !a.C.I6)
                if (!a.A.ES) a.A.PD = s
        }
    },
    A0T: function(a) {
        var c = this;
        if (!ZC.move) {
            var b = "";
            switch (c.A.CG) {
                default: b = "box";
                break;
                case "pyramid":
                    b = "shape"
            }
            c.H2({
                layer: a,
                type: b,
                initcb: function() {
                    this.AT =
                        c.A.AW[1];
                    this.BI = c.A.AW[1];
                    this.X = c.A.AW[3];
                    this.A6 = c.A.AW[2]
                },
                setupcb: function() {
                    switch (c.A.CG) {
                        default: this.iX = c.H.iX;
                        this.iY = c.H.iY;
                        this.F = c.F;
                        this.D = c.D;
                        var e = c.C.O;
                        if (this.iX < e.iX) {
                            this.F -= e.iX - this.iX;
                            this.iX = e.iX
                        }
                        if (this.iX + this.F > e.iX + e.F) this.F = e.iX + e.F - this.iX;
                        break;
                        case "pyramid":
                        case "cone":
                            this.B = c.H.points
                    }
                }
            });
            c.HL(ZC.K.CN(c.C.Q + ZC._[24], c.I.A5), true)
        }
    }
});
ZC.U2 = ZC.G3.B2({
    setup: function() {
        var a = this.A.B3,
            c = this.A.D0,
            b = [a.V, a.A2, c.V, c.A2];
        if (this.EY != b) {
            this.iX = a.B4(this.CH);
            this.iY = c.B4(this.A8);
            this.EY = b
        }
        if (!this.FH) {
            this.copy(this.A);
            this.DE = this.A.DE;
            this.C2() && this.parse(false);
            this.FH = 1
        }
    },
    paint: function() {
        this.b();
        var a = this.A.B3;
        this.setup();
        ZC.DK(this.iX, a.iX, a.iX + a.F) && ZC.DK(this.iY, a.iY, a.iY + a.D) && this.JH(false, true)
    },
    A0T: function(a) {
        ZC.move || this.LO(a)
    }
});
ZC.UT = ZC.G3.B2({
    $i: function(a) {
        this.b(a);
        this.SM = null
    },
    parse: function() {
        this.b();
        if (this.o[ZC._[11]] instanceof Array && this.o[ZC._[11]][2] != null) this.SM = ZC._f_(this.o[ZC._[11]][2])
    },
    KC: function(a, c) {
        this.DN = [
            ["%v0", this.CH],
            ["%v1", this.A8],
            ["%v2", this.SM]
        ];
        return a = this.b(a, c)
    },
    setup: function() {
        var a = this.A.B3,
            c = this.A.D0,
            b = [a.V, a.A2, c.V, c.A2];
        if (this.EY != b) {
            this.iX = a.B4(this.CH);
            this.iY = c.B4(this.A8);
            this.EY = b
        }
        if (!this.FH) {
            this.copy(this.A);
            this.DE = this.A.DE;
            this.C2() && this.parse(false);
            this.FH = 1
        }
    },
    paint: function() {
        this.b();
        var a = this.A.B3,
            c = this.A.D0;
        this.setup();
        this.H["marker.size"] = ZC.BN(2.02, this.SM * this.A.HY * ((c.D - c.Z - c.CP) / (c.C8 - c.BJ)) / 2);
        ZC.DK(this.iX, a.iX, a.iX + a.F) && ZC.DK(this.iY, a.iY, a.iY + a.D) && this.JH(false, true)
    },
    A0T: function(a) {
        ZC.move || this.LO(a)
    }
});
ZC.X0 = ZC.G3.B2({
    T: null,
    $i: function(a) {
        this.b(a)
    },
    parse: function() {
        this.b()
    },
    KC: function(a, c) {
        var b = this.A.MB();
        ZC.ET(c, b);
        var e = this.A8 * 100 / this.A.A.K2[this.J],
            f = new String(e);
        if (b[ZC._[14]] != null) f = e.toFixed(ZC.BN(0, ZC._i_(b[ZC._[14]])));
        this.DN = [
            ["%node-percent-value", f],
            ["%npv", f]
        ];
        return a = this.b(a, c)
    },
    SR: function(a) {
        var c = (this.AE + this.AO) / 2 % 360,
            b = 0;
        if ((a = a["offset-r"]) != null) b = ZC._f_(ZC._p_(a));
        if (b < 1) b *= this.AR;
        c = ZC.AP.BA(this.iX, this.iY, this.BG + 0.6 * (this.AR - this.BG) + this.DI + b, c);
        return [c[0],
            c[1], {
                reference: this,
                center: true
            }
        ]
    },
    A16: function() {
        var a = ZC.AP.BA(this.iX, this.iY, this.BG + 0.5 * (this.AR - this.BG) + this.DI, (this.AE + this.AO) / 2 % 360);
        return [a[0], a[1]]
    },
    setup: function() {
        var a = this.C.AY(this.A.B6("k")[0]),
            c = Math.floor(this.J / a.G6);
        this.iX = a.iX + this.J % a.G6 * a.E4 + a.E4 / 2 + a.C0;
        this.iY = a.iY + c * a.E5 + a.E5 / 2 + a.C4;
        if (!this.FH) {
            this.copy(this.A);
            this.DE = this.A.DE;
            this.C2() && this.parse(false);
            this.FH = 1
        }
    },
    O4: function(a) {
        var c = {},
            b = "out";
        if ((a = a.o[ZC._[9]]) != null) b = a;
        c.color = b == "out" ? this.X : this.BO;
        return c
    },
    A00: function(a) {
        var c, b = "out";
        if ((c = a.o[ZC._[9]]) != null) b = c;
        c = (this.AE + this.AO) / 2 % 360;
        var e;
        if (b != "in") {
            b = (this.AR * 1.25 + this.A.DI + a.DI) * ZC.CT(c);
            e = (this.AR * 1.25 + this.A.DI + a.DI) * ZC.CJ(c);
            b = this.iX + b + a.C0 - a.F / 2;
            var f = e = this.iY + e + a.C4 - a.D / 2;
            this.T = a;
            if (c >= 0 && c <= 90 || c >= 270 && c <= 360) b += a.F / 2 + 10;
            else b -= a.F / 2 + 10;
            var g = null,
                h = -1,
                k = this.iX,
                l = this.iY;
            if (this.A.J > 0 && this.A.A.AA[this.A.J - 1].M.length > this.J) {
                g = this.A.A.AA[this.A.J - 1].M[this.J];
                if (g.T != null && g.T.AK && g.A8 != null) {
                    var m = g.T.iY,
                        o = g.T.D;
                    h = (g.AE + g.AO) /
                        2 % 360;
                    var n = 0,
                        p = b - k,
                        s = e - l;
                    p = Math.sqrt(p * p + s * s);
                    if (c >= 0 && c <= 90 || c >= 270 && c <= 360 && h >= 0 && h <= 90 || h >= 270 && h <= 360) {
                        if (e < m + o) {
                            s = m + o + 2;
                            n = s - e;
                            e = s
                        }
                    } else if (c > 90 && c < 270 && h > 90 && h < 270)
                        if (m < e + a.D) {
                            s = m - a.D - 2;
                            n = e - s;
                            e = s
                        }
                    if (n != 0 && c) {
                        var t = e - l;
                        if (p >= t && (c > 90 && c < 180 || c >= 270)) {
                            b = Math.asin(t / p);
                            b = b = c > 90 && c < 270 ? k - p * Math.cos(b) : k + p * Math.cos(b)
                        }
                    }
                }
            }
            t = 1;
            n = 0;
            p = b - k;
            s = e - l;
            p = Math.sqrt(p * p + s * s);
            for (s = 0; t && n < 20;) {
                t = 0;
                n++;
                for (var r = {
                    x: b,
                    y: e,
                    width: a.F,
                    height: a.D
                }, u = 0, y = this.A.A.MV.length; u < y; u++) {
                    r.x = b;
                    r.y = e;
                    var w = this.A.A.MV[u];
                    if (ZC.AP._boxoverlap_(r,
                        w)) {
                        if (s == 0) s = f < w.oy ? -1 : 1;
                        if (g != null && h != -1)
                            if ((c >= 0 && c <= 90 || c >= 270 && c <= 360) && (h >= 0 && h <= 90 || h >= 270 && h <= 360)) {
                                if (e < m + o) s = 1
                            } else if (c > 90 && c < 270 && h > 90 && h < 270)
                            if (m < e + a.D) s = -1;
                        e = s == -1 ? w.y - a.D - 2 : w.y + w.height + 2;
                        t = Math.abs(e - l);
                        if (p >= t && (c > 90 && c < 180 || c >= 270)) {
                            b = Math.asin(t / p);
                            b = b = c > 90 && c < 270 ? k - p * Math.cos(b) : k + p * Math.cos(b)
                        }
                        t = 1
                    }
                }
            }
            w = {
                x: b,
                y: e,
                width: a.F,
                height: a.D,
                plotindex: this.A.J,
                nodeindex: this.J,
                oy: f
            };
            this.A.A.MV.push(w)
        } else {
            m = ZC.AP.BA(this.iX, this.iY, this.BG + 0.5 * (this.AR - this.BG) + this.DI + a.DI, c);
            b = m[0] -
                a.CZ / 2 + this.C0;
            e = m[1] - a.C9 / 2 + this.C4
        }
        return [b, e, c]
    },
    FX: function() {
        var a = this,
            c, b = a.b();
        if (b.AK && b.B0 != null && b.B0 != "") {
            var e = "out";
            if ((c = b.o[ZC._[9]]) != null) e = c;
            if (e == "out") {
                e = 1;
                if ((c = b.o.connected) != null) e = ZC._b_(c);
                if (e) {
                    c = new ZC.D5(a.A);
                    c.Y = c.C6 = a.I.usc() ? a.I.mc("top") : a.C.AM["3d"] || a.I.KY ? ZC.AJ(a.C.Q + "-plots-vb-c") : ZC.AJ(a.C.Q + "-plot-" + a.A.J + "-vb-c");
                    c.append(a.A.AV.o);
                    a.O4(b);
                    c.Q = a.Q + "-connector";
                    c.AT = a.X;
                    c.DQ = "line";
                    c.B = [];
                    e = b.H.positioninfo;
                    var f = (a.AE + a.AO) / 2 % 360,
                        g = e[2];
                    ZC._a_(0.1 * a.AR * ZC.CJ(f));
                    f = ZC.AP.BA(a.iX, a.iY, a.AR + a.DI, f);
                    f[0] += a.C0;
                    f[1] += a.C4;
                    c.B.push(f);
                    g >= 0 && g <= 90 || g >= 270 && g <= 360 ? c.B.push([e[0] - 10, e[1] + b.D / 2], [e[0], e[1] + b.D / 2]) : c.B.push([e[0] + 10 + b.F, e[1] + b.D / 2], [e[0] + b.F, e[1] + b.D / 2]);
                    c.parse();
                    c.GM = function(h) {
                        return a.GM(h)
                    };
                    c.C2() && c.parse();
                    c.AK && c.paint()
                }
            }
        }
    },
    paint: function() {
        function a() {
            var o = e.DA(),
                n = c.C.Q + ZC._[36] + c.C.Q + ZC._[37] + c.A.J + ZC._[6];
            o = ZC.K.DM("poly") + 'class="' + n + '" id="' + c.Q + ZC._[32] + o + '"/>';
            c.A.A.FN.push(o);
            c.A.T != null && c.FX()
        }
        var c = this;
        c.b();
        if (!(c.A8 < 0)) {
            var b =
                c.C.AY(c.A.B6("k")[0]);
            c.setup();
            c.AR = ZC.CO(b.E5, b.E4) / 2;
            if (c.A.o[ZC._[23]] != null) c.AR = c.A.AR;
            c.AR = b.HY * c.AR;
            if (c.BG < 1) c.BG *= c.AR;
            b = c.A.F5(c, c);
            var e = new ZC.D5(c.A);
            e.Q = c.Q;
            e.Y = c.A.B5("bl", 1);
            e.C6 = c.A.B5("bl", 0);
            e.copy(b);
            var f = c.iX,
                g = c.iY;
            if (c.DI > 0) {
                var h = ZC.AP.BA(c.iX, c.iY, c.DI, (c.AE + c.AO) / 2);
                f = h[0];
                g = h[1]
            }
            e.iX = f;
            e.iY = g;
            e.AR = c.AR;
            e.DQ = "pie";
            e.AE = c.AE;
            e.AO = c.AO;
            e.BG = c.BG;
            e.H.plotidx = c.A.J;
            e.H.nodeidx = c.J;
            e.parse();
            c.DR = e;
            if (c.A.ES && !c.C.FL) {
                var k = e,
                    l = {};
                k.iX = f;
                k.iY = g;
                k.AE = c.AE;
                k.AO = c.AO;
                l.angleStart =
                    c.AE;
                l.angleEnd = c.AO;
                l.x = f;
                l.y = g;
                switch (c.A.GI) {
                    case 1:
                        k.A9 = 0;
                        l.alpha = b.A9;
                        break;
                    case 2:
                        k.A9 = 0;
                        k.AO = c.AE;
                        l.alpha = b.A9;
                        l.angleEnd = c.AO;
                        break;
                    case 3:
                        k.A9 = 0;
                        k.AO = c.AE;
                        k.AR = 2;
                        l.alpha = b.A9;
                        l.angleEnd = c.AO;
                        l.size = c.AR;
                        break;
                    case 4:
                        k.A9 = 0;
                        h = ZC.AP.BA(c.iX, c.iY, c.AR * 1.2, (c.AE + c.AO) / 2);
                        k.iX = h[0];
                        k.iY = h[1];
                        l.alpha = b.A9;
                        l.x = f;
                        l.y = g;
                        break;
                    case 5:
                        k.A9 = 0;
                        k.AE = k.AO = (c.AE + c.AO) / 2;
                        l.alpha = b.A9;
                        l.angleStart = c.AE;
                        l.angleEnd = c.AO
                }
                for (var m in c.A.DB) {
                    k[ZC.CA.F7[ZC.CE(m)]] = c.A.DB[m];
                    l[ZC.CE(m)] = b[ZC.CA.F7[ZC.CE(m)]]
                }
                if (c.C.CS ==
                    null) c.C.CS = {};
                if (c.C.CS[c.A.J + "-" + c.J] != null)
                    for (m in c.C.CS[c.A.J + "-" + c.J]) k[ZC.CA.F7[ZC.CE(m)]] = c.C.CS[c.A.J + "-" + c.J][m];
                c.C.CS[c.A.J + "-" + c.J] = {};
                ZC.ET(l, c.C.CS[c.A.J + "-" + c.J]);
                m = new ZC.CA(k, l, c.A.FE, c.A.GH, ZC.CA.KP[c.A.GJ], function() {
                    a()
                });
                m.B7 = c;
                c.GU(m)
            } else {
                e.paint();
                a()
            }
        }
    },
    A0T: function(a) {
        var c = this;
        ZC.move || c.H2({
            layer: a,
            type: "shape",
            initcb: function() {
                this.copy(c);
                this.iX = c.iX;
                this.iY = c.iY;
                if (c.DI > 0) {
                    var b = ZC.AP.BA(c.iX, c.iY, c.DI, (c.AE + c.AO) / 2);
                    this.iX = b[0];
                    this.iY = b[1]
                }
                this.AR = c.AR;
                this.DQ =
                    "pie";
                this.X = c.A.AW[3];
                this.A6 = c.A.AW[2];
                this.AE = c.AE;
                this.AO = c.AO;
                this.BG = c.BG
            }
        })
    },
    MU: function() {}
});
ZC.T6 = ZC.G3.B2({
    setup: function() {
        var a = this.C.AY(this.A.B6("k")[0]);
        this.iX = a.iX + a.F / 2 + a.C0;
        this.iY = a.iY + a.D / 2 + a.C4;
        if (!this.FH) {
            this.copy(this.A);
            this.o[ZC._[10]] = null;
            this.DE = this.A.DE;
            this.C2() && this.parse(false);
            this.FH = 1
        }
    },
    A16: function() {
        var a = ZC.AP.BA(this.iX, this.iY, this.BG + this.H.bandwidth / 2 + this.DI, (this.AE + this.AO) / 2 % 360);
        return [a[0], a[1]]
    },
    KC: function(a, c) {
        var b = this.A.MB();
        ZC.ET(c, b);
        var e = this.A8 * 100 / this.A.A.K2[this.J],
            f = new String(e);
        if (b[ZC._[14]] != null) f = e.toFixed(ZC.BN(0, ZC._i_(b[ZC._[14]])));
        this.DN = [
            ["%node-percent-value", f],
            ["%npv", f]
        ];
        return a = this.b(a, c)
    },
    O4: function(a) {
        var c = {},
            b = "in";
        if (a.o[ZC._[9]] != null) b = a.o[ZC._[9]];
        c.color = b == "out" ? this.X : this.BO;
        return c
    },
    A00: function(a) {
        var c = "in";
        if (a.o[ZC._[9]] != null) c = a.o[ZC._[9]];
        var b = (this.AE + this.AO) / 2 % 360;
        if (c == "out")
            if (this.J == this.A.M.length - 1) {
                ZC._a_(0.1 * this.AR * ZC.CJ(b));
                var e = ZC.AP.BA(this.iX, this.iY, this.A.OG + (this.A.M.length + 1) * (this.H.bandwidth + this.H.bandspace) - this.H.bandspace - this.H.bandwidth / 2 + a.DI, b);
                c = b >= 0 && b < 90 || b >=
                    270 && b < 360 ? e[0] + 20 + this.C0 : e[0] - a.F - 20 + this.C0;
                a = e[1] - a.C9 / 2 + this.C4
            } else a = c = -1;
        else {
            e = ZC.AP.BA(this.iX, this.iY, this.BG + this.H.bandwidth / 2 + a.DI, b);
            c = e[0] - a.CZ / 2 + this.C0;
            a = e[1] - a.C9 / 2 + this.C4
        }
        return [c, a, b]
    },
    FX: function() {
        var a = this,
            c = a.b();
        if (c.AK && c.B0 != null && c.B0 != "") {
            var b = "in";
            if (c.o[ZC._[9]] != null) b = c.o[ZC._[9]];
            if (b == "out" && a.J == a.A.M.length - 1) {
                b = new ZC.D5(a.A);
                b.Y = b.C6 = a.I.usc() ? a.I.mc("top") : a.C.AM["3d"] || a.I.KY ? ZC.AJ(a.C.Q + "-plots-vb-c") : ZC.AJ(a.C.Q + "-plot-" + a.A.J + "-vb-c");
                b.append(a.A.AV.o);
                a.O4(c);
                b.AT = a.X;
                b.DQ = "line";
                b.B = [];
                var e = (a.AE + a.AO) / 2 % 360;
                ZC._a_(0.1 * a.AR * ZC.CJ(e));
                var f = ZC.AP.BA(a.iX, a.iY, a.BG + a.H.bandwidth + c.DI, e);
                c = ZC.AP.BA(a.iX, a.iY, a.A.OG + (a.A.M.length + 1) * (a.H.bandwidth + a.H.bandspace) - a.H.bandspace - a.H.bandwidth / 2 + c.DI, e);
                f[0] += a.C0;
                c[0] += a.C0;
                f[1] += a.C4;
                c[1] += a.C4;
                b.B.push(f, c);
                e >= 0 && e < 90 || e >= 270 && e < 360 ? b.B.push([c[0] + 20, c[1]]) : b.B.push([c[0] - 20, c[1]]);
                b.parse();
                b.GM = function(g) {
                    return a.GM(g)
                };
                b.C2() && b.parse();
                b.AK && b.paint()
            }
        }
    },
    paint: function() {
        function a() {
            var l =
                g.DA(),
                m = c.C.Q + ZC._[36] + c.C.Q + ZC._[37] + c.A.J + ZC._[6];
            l = ZC.K.DM("poly") + 'class="' + m + '" id="' + c.Q + ZC._[32] + l + '"/>';
            c.A.A.FN.push(l);
            c.A.T != null && c.FX()
        }
        var c = this;
        c.b();
        var b = c.C.AY(c.A.B6("k")[0]);
        c.setup();
        c.AR = ZC.CO(b.F, b.D) / 2;
        c.AR = b.HY * c.AR;
        c.BG = c.A.OG;
        if (c.BG < 1) c.BG = c.A.OG * c.AR;
        var e = c.A.KR;
        if (e < 1) e = c.A.KR * c.AR;
        var f = (c.AR - c.BG - (c.A.M.length - 1) * e) / c.A.M.length;
        f = ZC.BN(f, 2);
        c.BG += c.J * (f + e);
        c.AR = c.BG + f;
        b = c.A.F5(c, c);
        var g = new ZC.D5(c.A);
        g.Q = c.Q;
        g.Y = c.A.B5("bl", 1);
        g.C6 = c.A.B5("bl", 0);
        g.copy(b);
        g.iX =
            c.iX;
        g.iY = c.iY;
        g.DQ = "pie";
        g.AE = c.AE;
        g.AO = c.AO;
        g.BG = c.BG;
        g.AR = c.AR;
        g.parse();
        var h = g.BG;
        c.H.bandwidth = f;
        c.H.bandspace = e;
        if (c.A.ES && !c.C.FL) {
            e = g;
            f = {};
            e.AE = c.AE;
            e.AO = c.AO;
            f.angleStart = c.AE;
            f.angleEnd = c.AO;
            switch (c.A.GI) {
                case 1:
                    e.A9 = 0;
                    f.alpha = b.A9;
                    break;
                case 2:
                    e.A9 = 0;
                    e.AO = c.AE;
                    f.alpha = b.A9;
                    f.angleEnd = c.AO;
                    break;
                case 3:
                    e.A9 = 0;
                    e.AO = c.AE;
                    e.BG = h + c.H.bandwidth;
                    f.alpha = b.A9;
                    f.angleEnd = c.AO;
                    f.slice = h;
                    break;
                case 4:
                    e.A9 = 0;
                    h = ZC.AP.BA(c.iX, c.iY, c.AR, (c.AE + c.AO) / 2);
                    e.iX = h[0];
                    e.iY = h[1];
                    f.alpha = b.A9;
                    f.x = c.iX;
                    f.y = c.iY;
                    break;
                case 5:
                    e.A9 = 0;
                    e.AE = e.AO = (c.AE + c.AO) / 2;
                    f.alpha = b.A9;
                    f.angleStart = c.AE;
                    f.angleEnd = c.AO
            }
            for (var k in c.A.DB) {
                e[ZC.CA.F7[ZC.CE(k)]] = c.A.DB[k];
                f[ZC.CE(k)] = b[ZC.CA.F7[ZC.CE(k)]]
            }
            if (c.C.CS == null) c.C.CS = {};
            if (c.C.CS[c.A.J + "-" + c.J] != null)
                for (k in c.C.CS[c.A.J + "-" + c.J]) e[ZC.CA.F7[ZC.CE(k)]] = c.C.CS[c.A.J + "-" + c.J][k];
            c.C.CS[c.A.J + "-" + c.J] = {};
            ZC.ET(f, c.C.CS[c.A.J + "-" + c.J]);
            k = new ZC.CA(e, f, c.A.FE, c.A.GH, ZC.CA.KP[c.A.GJ], function() {
                a()
            });
            k.B7 = c;
            c.GU(k)
        } else {
            g.paint();
            a()
        }
    },
    A0T: function(a) {
        var c = this;
        ZC.move ||
            c.H2({
                layer: a,
                type: "shape",
                initcb: function() {
                    this.copy(c);
                    this.iX = c.iX;
                    this.iY = c.iY;
                    this.DQ = "pie";
                    this.X = c.A.AW[3];
                    this.A6 = c.A.AW[2];
                    this.AE = c.AE;
                    this.AO = c.AO;
                    this.BG = c.BG;
                    this.AR = c.AR
                },
                parsecb: function() {
                    this.o[ZC._[10]] = null
                }
            })
    }
});
ZC.UZ = ZC.G3.B2({
    setup: function() {
        var a = this.A.B3,
            c = this.A.D0,
            b = [a.V, a.A2, c.V, c.A2];
        if (this.EY != b) {
            c = c.O5(this.D3);
            a = a.A0U(this.J, c);
            this.iX = a[0];
            this.iY = a[1];
            this.EY = b
        }
        if (!this.FH) {
            this.copy(this.A);
            this.DE = this.A.DE;
            this.C2() && this.parse(false);
            this.FH = 1
        }
    },
    A00: function(a) {
        var c = this.A.B3,
            b = this.A.D0,
            e = this.C.AY("scale"),
            f = e.iX + e.F / 2;
        e = e.iY + e.D / 2;
        var g = 360 / c.W.length,
            h = b.O5(this.D3);
        switch (this.A.CG) {
            case "dots":
            case "line":
            case "area":
                var k = ZC.AP.BA(f, e, b.Z + h * 1.1 + a.DI + ZC.BN(a.CZ / 2, a.C9 / 2), c.C5 + this.J *
                    g);
                k[0] -= a.CZ / 2;
                k[1] -= a.C9 / 2;
                break;
            case "rose":
                k = ZC.AP.BA(f, e, b.Z + h * 1.1 + a.DI + ZC.BN(a.CZ / 2, a.C9 / 2), c.C5 + this.J * g);
                k[0] -= a.CZ / 2;
                k[1] -= a.C9 / 2
        }
        return [k[0], k[1]]
    },
    O4: function() {
        return {
            color: this.AT
        }
    },
    R9: function() {
        return {
            "background-color": this.AT,
            color: this.BO
        }
    },
    paint: function() {
        function a() {
            var F = c.C.Q + ZC._[36] + c.C.Q + ZC._[37] + c.A.J + ZC._[6],
                G = "",
                K = "";
            if (ZC.AH(["dots"], c.A.CG) == -1)
                if (ZC.AH(["line", "area"], c.A.CG) != -1) {
                    K = ZC.AP.M0(ZC.AP.SQ(c.H.points), 2);
                    G = K != "" ? ZC.K.DM("poly") + 'class="' + F + '" id="' + c.Q +
                        ZC._[32] + K + '"/>' : ZC.K.DM("circle") + 'class="' + F + '" id="' + c.Q + ZC._[32] + ZC._i_(AG.iX + ZC.MAPTX) + "," + ZC._i_(AG.iY + ZC.MAPTX) + "," + ZC._i_(ZC.BN(3, AG.AR) * 1.5) + '"/>';
                    c.JH(false, true)
                } else if (ZC.AH(["rose"], c.A.CG) != -1) {
                K = t.DA();
                G = ZC.K.DM("poly") + 'class="' + F + '" id="' + c.Q + ZC._[32] + K + '"/>'
            }
            c.A.A.FN.push(G);
            c.A.T != null && c.FX()
        }
        var c = this;
        c.b();
        var b = c.A.JK,
            e = c.A.OW,
            f = c.A.B3,
            g = c.A.D0,
            h = c.A.M;
        c.setup();
        c.CV = 0;
        c.C6 = c.A.B5("bl", 0);
        var k = c.A.F5(c, c);
        if (ZC.AH(["line", "area"], c.A.CG) != -1) {
            var l = [],
                m = [];
            if (c.J > f.V) {
                if (h[c.J -
                    1] != null) {
                    h[c.J - 1].setup();
                    var o = ZC.AP.I4(h[c.J - 1].iX, h[c.J - 1].iY, h[c.J].iX, h[c.J].iY);
                    l.push(o);
                    m.push(o)
                }
            } else if (h[f.A2] != null) {
                h[f.A2].setup();
                o = ZC.AP.I4(h[f.A2].iX, h[f.A2].iY, h[c.J].iX, h[c.J].iY);
                l.push(o);
                m.push(o)
            }
            l.push([c.iX, c.iY]);
            m.push([c.iX, c.iY]);
            if (c.J < f.A2) {
                if (h[c.J + 1] != null) {
                    h[c.J + 1].setup();
                    o = ZC.AP.I4(h[c.J].iX, h[c.J].iY, h[c.J + 1].iX, h[c.J + 1].iY, c.A9, false);
                    l.push(o);
                    h = ZC.AP.I4(h[c.J].iX, h[c.J].iY, h[c.J + 1].iX, h[c.J + 1].iY, c.DV, false);
                    m.push(h)
                }
            } else if (h[0] != null) {
                h[0].setup();
                o = ZC.AP.I4(h[c.J].iX,
                    h[c.J].iY, h[0].iX, h[0].iY, c.A9, false);
                l.push(o);
                h = ZC.AP.I4(h[c.J].iX, h[c.J].iY, h[0].iX, h[0].iY, c.DV, false);
                m.push(h)
            }
            ZC.BQ.setup(b, k)
        }
        if (c.A.CG == "area") {
            var n = c.C.AY("scale"),
                p = n.iX + n.F / 2;
            n = n.iY + n.D / 2;
            h = 360 / f.W.length;
            m.push([p, n]);
            var s = new ZC.D5(c.A);
            s.Q = c.Q + "-area";
            s.Y = c.A.B5("bl", 0);
            s.copy(k);
            s.J0 = 1;
            s.B = m;
            s.parse();
            s.A9 = c.A.DV;
            h = c.C.O;
            s.DF = [h.iX, h.iY, h.iX + h.F, h.iY + h.D];
            ZC.BQ.setup(e, s)
        }
        c.H.points = l;
        c.H.pointsarea = m;
        if (ZC.AH(["dots"], c.A.CG) != -1) c.JH(false, true);
        else if (c.A.CG == "rose") {
            var t = new ZC.D5(c.A);
            t.Q = c.Q + "-pie";
            t.copy(k);
            t.Y = c.A.B5("bl", 1);
            t.C6 = c.A.B5("bl", 0);
            n = c.C.AY("scale");
            p = n.iX + n.F / 2;
            n = n.iY + n.D / 2;
            h = 360 / f.W.length;
            var r = h * 0.1 * (c.A.J + 1);
            e = g.O5(c.D3);
            var u = f.C5 + c.J * h - h / 2 + r;
            r = f.C5 + (c.J + 1) * h - h / 2 - r;
            var y = e + g.Z;
            t.iX = p;
            t.iY = n;
            t.BG = g.Z;
            t.DQ = "pie";
            t.AE = u;
            t.AO = r;
            t.AR = y;
            t.parse();
            t.GM = function(F) {
                return c.GM(F)
            };
            t.C2() && t.parse()
        }
        if (c.A.ES && ZC.AH(["line", "area", "rose"], c.A.CG) != -1) {
            switch (c.A.CG) {
                case "line":
                case "area":
                    var w = new ZC.D5(c),
                        v = {};
                    w.copy(k);
                    w.Q = c.Q;
                    w.Y = c.A.B5("bl", 1);
                    w.C6 = c.A.B5("bl",
                        0);
                    w.B = l;
                    v.points = l;
                    var x = [];
                    if (c.A.CG == "area") {
                        var z = s,
                            C = {};
                        z.B = m;
                        C.points = m;
                        var B = []
                    }
                    break;
                case "rose":
                    w = t;
                    v = {};
                    w.iX = p;
                    w.iY = n;
                    w.AE = u;
                    w.AO = r;
                    v.angleStart = u;
                    v.angleEnd = r;
                    v.x = p;
                    v.y = n;
                    v.size = y
            }
            switch (c.A.GI) {
                case 1:
                    switch (c.A.CG) {
                        case "line":
                        case "area":
                        case "rose":
                            w.A9 = 0;
                            v.alpha = k.A9;
                            if (c.A.CG == "area") {
                                z.A9 = 0;
                                C.alpha = c.A.DV
                            }
                    }
                    break;
                case 2:
                    switch (c.A.CG) {
                        case "line":
                        case "area":
                            for (f = w.A9 = 0; f < l.length; f++) x[f] = [l[f][0], c.C.O.iY + c.C.O.D / 2];
                            w.B = x;
                            v.alpha = k.A9;
                            v.points = l;
                            if (c.A.CG == "area") {
                                for (f = z.A9 = 0; f <
                                    m.length; f++) B[f] = [m[f][0], c.C.O.iY + c.C.O.D / 2];
                                z.B = B;
                                C.alpha = c.A.DV;
                                C.points = m
                            }
                            break;
                        case "rose":
                            w.A9 = 0;
                            w.AO = u;
                            v.alpha = k.A9;
                            v.angleEnd = r
                    }
                    break;
                case 3:
                    switch (c.A.CG) {
                        case "line":
                        case "area":
                            for (f = w.A9 = 0; f < l.length; f++) x[f] = [c.C.O.iX + c.C.O.F / 2, l[f][1]];
                            w.B = x;
                            v.alpha = k.A9;
                            v.points = l;
                            if (c.A.CG == "area") {
                                for (f = z.A9 = 0; f < m.length; f++) B[f] = [c.C.O.iX + c.C.O.F / 2, m[f][1]];
                                z.B = B;
                                C.alpha = c.A.DV;
                                C.points = m
                            }
                            break;
                        case "rose":
                            w.A9 = 0;
                            w.AE = w.AO = (u + r) / 2;
                            v.alpha = k.A9;
                            v.angleStart = u;
                            v.angleEnd = r
                    }
                    break;
                case 4:
                    switch (c.A.CG) {
                        case "line":
                        case "area":
                            for (f =
                                w.A9 = 0; f < l.length; f++) x[f] = [c.C.O.iX + c.C.O.F / 2, c.C.O.iY + c.C.O.D / 2];
                            w.B = x;
                            v.alpha = k.A9;
                            v.points = l;
                            if (c.A.CG == "area") {
                                for (f = z.A9 = 0; f < m.length; f++) B[f] = [c.C.O.iX + c.C.O.F / 2, c.C.O.iY + c.C.O.D / 2];
                                z.B = B;
                                C.alpha = c.A.DV;
                                C.points = m
                            }
                            break;
                        case "rose":
                            w.A9 = 0;
                            w.AR = g.Z;
                            v.alpha = k.A9;
                            v.size = y
                    }
                    break;
                case 5:
                    switch (c.A.CG) {
                        case "line":
                        case "area":
                            for (f = w.A9 = 0; f < l.length; f++) {
                                g = c.C.O.iX + c.C.O.F / 2 - l[f][0];
                                p = c.C.O.iY + c.C.O.D / 2 - l[f][1];
                                x[f] = [c.C.O.iX + c.C.O.F / 2 - g * 2.5, c.C.O.iY + c.C.O.D / 2 - p * 2.5]
                            }
                            w.B = x;
                            v.alpha = k.A9;
                            v.points =
                                l;
                            if (c.A.CG == "area") {
                                for (f = z.A9 = 0; f < m.length; f++) {
                                    g = c.C.O.iX + c.C.O.F / 2 - m[f][0];
                                    p = c.C.O.iY + c.C.O.D / 2 - m[f][1];
                                    B[f] = [c.C.O.iX + c.C.O.F / 2 - g * 2.5, c.C.O.iY + c.C.O.D / 2 - p * 2.5]
                                }
                                z.B = B;
                                C.alpha = c.A.DV;
                                C.points = m
                            }
                            break;
                        case "rose":
                            w.A9 = 0;
                            w.AR = y * 2;
                            v.alpha = k.A9;
                            v.size = y
                    }
            }
            for (var A in c.A.DB) {
                w[ZC.CA.F7[ZC.CE(A)]] = c.A.DB[A];
                v[ZC.CE(A)] = k[ZC.CA.F7[ZC.CE(A)]]
            }
            if (c.C.CS == null) {
                c.C.CS = {};
                if (c.A.CG == "area") c.C.LT = {}
            }
            if (c.C.CS[c.A.J + "-" + c.J] != null) {
                for (A in c.C.CS[c.A.J + "-" + c.J]) w[ZC.CA.F7[ZC.CE(A)]] = c.C.CS[c.A.J + "-" + c.J][A];
                if (c.A.CG == "area")
                    for (A in c.C.LT[c.A.J + "-" + c.J]) z[ZC.CA.F7[ZC.CE(A)]] = c.C.LT[c.A.J + "-" + c.J][A]
            }
            c.C.CS[c.A.J + "-" + c.J] = {};
            ZC.ET(v, c.C.CS[c.A.J + "-" + c.J]);
            if (c.A.CG == "area") {
                c.C.LT[c.A.J + "-" + c.J] = {};
                ZC.ET(C, c.C.LT[c.A.J + "-" + c.J])
            }
            k = new ZC.CA(w, v, c.A.FE, c.A.GH, ZC.CA.KP[c.A.GJ], function() {
                a()
            });
            k.B7 = c;
            if (ZC.AH(["line", "area"], c.A.CG) != -1) k.EU = b;
            b = null;
            if (c.A.CG == "area") {
                b = new ZC.CA(z, C, c.A.FE, c.A.GH, ZC.CA.KP[c.A.GJ], function() {});
                b.B7 = c
            }
            c.GU(k, b)
        } else {
            switch (c.A.CG) {
                case "line":
                case "area":
                    ZC.BQ.paint(b,
                        k, l);
                    c.A.CG == "area" && s.paint();
                    break;
                case "rose":
                    t.paint()
            }
            a()
        }
    },
    A0T: function(a) {
        var c = this;
        if (!ZC.move) {
            if (c.A.FD != null && c.A.AK)
                if (ZC.AH(["line", "area"], c.A.CG) != -1) {
                    c.RE(a);
                    c.A.CG == "area" && c.H2({
                        layer: a,
                        type: "area",
                        initcb: function() {
                            this.B = c.H.pointsarea
                        },
                        setupcb: function() {
                            this.AU = this.AI = 0;
                            this.A9 = c.A.DV;
                            var b = c.C.O;
                            this.DF = [b.iX, b.iY, b.iX + b.F, b.iY + b.D]
                        }
                    })
                } else c.A.CG == "rose" && c.H2({
                    layer: a,
                    type: "shape",
                    initcb: function() {
                        this.copy(c);
                        var b = c.A.B3,
                            e = c.A.D0,
                            f = c.C.AY("scale"),
                            g = f.iY + f.D / 2;
                        this.iX =
                            f.iX + f.F / 2;
                        this.iY = g;
                        this.BG = e.Z;
                        f = 360 / b.W.length;
                        g = f * 0.1 * (c.A.J + 1);
                        this.AE = b.C5 + c.J * f - f / 2 + g;
                        this.AO = b.C5 + (c.J + 1) * f - f / 2 - g;
                        b = e.O5(c.D3);
                        this.DQ = "pie";
                        this.AR = b + e.Z
                    }
                });
            ZC.AH(["dots", "line", "area"], c.A.CG) != -1 && c.LO(a)
        }
    }
});
ZC.U6 = ZC.SC.B2({
    EJ: null,
    KC: function(a, c) {
        this.DN = [
            ["%node-goal-value", this.A.J7[this.J]],
            ["%g", this.A.J7[this.J]]
        ];
        return a = this.b(a, c)
    },
    paint: function() {
        this.b();
        if (this.A.J7[this.J] != null && this.AK) {
            var a = this.A.D0.B4(this.A.J7[this.J]);
            this.EJ = new ZC.FY(this.A);
            this.EJ.Q = this.Q + "-goal";
            this.EJ.copy(this.A.EJ);
            this.EJ.Y = this.A.B5("bl", 1);
            this.EJ.C6 = this.A.B5("bl", 0);
            this.EJ.iX = this.H.iX - this.F * 0.2;
            this.EJ.F = this.F * 1.4;
            if (this.A.EJ.o[ZC._[22]] == null) this.EJ.D = ZC.CO(5, this.C.O.D / 30);
            this.EJ.iY = a - this.EJ.D /
                2;
            this.EJ.paint();
            a = this.C.Q + ZC._[36] + this.C.Q + ZC._[37] + this.A.J + ZC._[6];
            this.A.A.FN.push(ZC.K.DM("rect") + 'class="' + a + '" id="' + this.Q + "--goal" + ZC._[32] + ZC._i_(this.EJ.iX + ZC.MAPTX) + "," + ZC._i_(this.EJ.iY + ZC.MAPTX) + "," + ZC._i_(this.EJ.iX + this.EJ.F + ZC.MAPTX) + "," + ZC._i_(this.EJ.iY + this.EJ.D + ZC.MAPTX) + '"/>')
        }
    },
    A0T: function(a) {
        if (!ZC.move) {
            this.b(a);
            a = new ZC.FY(this.A);
            a.copy(this.EJ);
            a.Y = ZC.AJ(this.C.Q + ZC._[24]);
            a.JE = 0;
            a.iX = this.EJ.iX;
            a.iY = this.EJ.iY;
            a.paint()
        }
    }
});
ZC.U3 = ZC.SD.B2({
    EJ: null,
    KC: function(a, c) {
        this.DN = [
            ["%node-goal-value", this.A.J7[this.J]],
            ["%g", this.A.J7[this.J]]
        ];
        return a = this.b(a, c)
    },
    paint: function() {
        this.b();
        if (this.A.J7[this.J] != null) {
            var a = this.A.D0.B4(this.A.J7[this.J]);
            this.EJ = new ZC.FY(this.A);
            this.EJ.Q = this.Q + "-goal";
            this.EJ.copy(this.A.EJ);
            this.EJ.Y = this.A.B5("bl", 1);
            this.EJ.C6 = this.A.B5("bl", 0);
            this.EJ.iY = this.H.iY - this.D * 0.2;
            this.EJ.D = this.D * 1.4;
            if (this.A.EJ.o[ZC._[21]] == null) this.EJ.F = ZC.CO(5, this.C.O.F / 30);
            this.EJ.iX = a - this.EJ.F /
                2;
            this.EJ.paint();
            a = this.C.Q + ZC._[36] + this.C.Q + ZC._[37] + this.A.J + ZC._[6];
            this.A.A.FN.push(ZC.K.DM("rect") + 'class="' + a + '" id="' + this.Q + "--goal" + ZC._[32] + ZC._i_(this.EJ.iX) + "," + ZC._i_(this.EJ.iY) + "," + ZC._i_(this.EJ.iX + this.EJ.F) + "," + ZC._i_(this.EJ.iY + this.EJ.D) + '"/>')
        }
    },
    A0T: function(a) {
        if (!ZC.move) {
            this.b(a);
            a = new ZC.FY(this.A);
            a.copy(this.EJ);
            a.Y = ZC.AJ(this.C.Q + ZC._[24]);
            a.JE = 0;
            a.iX = this.EJ.iX;
            a.iY = this.EJ.iY;
            a.paint()
        }
    }
});
ZC.VG = ZC.G3.B2({
    setup: function() {
        var a = this.A.B3,
            c = this.A.D0,
            b = [a.V, a.A2, c.V, c.A2];
        if (this.EY != b) {
            this.iX = a.AD ? a.iX + a.F - a.Z - (this.J + 1) * a.S : a.iX + a.Z + this.J * a.S;
            this.iY = c.AD ? c.iY + c.Z + this.A.J * c.S : c.iY + c.D - c.Z - (this.A.J + 1) * c.S;
            this.EY = b
        }
        if (!this.FH) {
            this.copy(this.A);
            this.DE = this.A.DE;
            this.C2() && this.parse(false);
            this.FH = 1
        }
    },
    A00: function(a) {
        var c = "over";
        this.C.AY(this.A.B6("v")[0]);
        if (a.o[ZC._[9]] != null) c = a.o[ZC._[9]];
        var b = this.iX + this.F / 2 - a.CZ / 2,
            e = this.iY + this.D / 2 - a.C9 / 2;
        switch (c) {
            case "top":
                e -= this.D /
                    2 + a.C9 / 2 + 2;
                break;
            case "left":
                b -= this.F / 2 + a.CZ / 2 + 2;
                break;
            case "bottom":
                e += this.D / 2 + a.C9 / 2 + 2;
                break;
            case "right":
                b += this.F / 2 + a.CZ / 2 + 2
        }
        return [b, e]
    },
    O4: function() {
        return {
            color: "#000"
        }
    },
    getFormatValue: function() {
        return this.D1
    },
    KC: function(a, c) {
        var b = this.A.D0,
            e = b.AD ? b.W.length - this.A.J - 1 : this.A.J;
        this.DN = [
            ["%y", b.BD[e] != null ? b.BD[e] : b.W[e]]
        ];
        return a = this.b(a, c)
    },
    paint: function() {
        this.b();
        var a = this.A.B3,
            c = this.A.D0;
        this.setup();
        var b;
        switch (this.A.V3) {
            case "plot-max":
                b = (ZC._f_(this.A8) - this.A.OZ) / (this.A.TK -
                    this.A.OZ);
                break;
            case "plot-total":
                b = (ZC._f_(this.A8) - this.A.OZ) / (this.A.UD - this.A.OZ);
                break;
            case "chart-max":
                b = (ZC._f_(this.A8) - this.A.NT) / (this.A.SW - this.A.NT);
                break;
            case "chart-total":
                b = (ZC._f_(this.A8) - this.A.NT) / (this.A.TJ - this.A.NT)
        }
        this.F = a.S;
        this.D = c.S;
        switch (this.A.CG) {
            case "alpha":
            case "brightness":
                this.A9 = 0.25 + b * 0.75;
                break;
            case "horizontal":
                this.F = a.S / 4 + 3 * b * a.S / 4;
                if (a.AD) this.iX = this.iX + a.S - this.F;
                break;
            case "vertical":
                this.D = c.S / 4 + 3 * b * c.S / 4;
                if (!c.AD) this.iY = this.iY + c.S - this.D;
                break;
            case "size":
                this.F =
                    a.S / 4 + 3 * b * a.S / 4;
                this.D = c.S / 4 + 3 * b * c.S / 4;
                this.iX += (a.S - this.F) / 2;
                this.iY += (c.S - this.D) / 2
        }
        if (this.AK) {
            a = new ZC.FY(this.A);
            a.Q = this.Q;
            a.copy(this);
            a.iX = this.iX;
            a.iY = this.iY;
            a.F = this.F;
            a.D = this.D;
            a.Y = this.A.B5("bl", 1);
            a.C6 = this.A.B5("bl", 0);
            a.paint();
            a = this.C.Q + ZC._[36] + this.C.Q + ZC._[37] + this.A.J + ZC._[6];
            this.A.A.FN.push(ZC.K.DM("rect") + 'class="' + a + '" id="' + this.Q + ZC._[32] + ZC._i_(this.iX + ZC.MAPTX) + "," + ZC._i_(this.iY + ZC.MAPTX) + "," + ZC._i_(this.iX + this.F + ZC.MAPTX) + "," + ZC._i_(this.iY + this.D + ZC.MAPTX) + '"/>')
        }
        this.A.T !=
            null && this.FX()
    },
    A0T: function(a) {
        var c = this;
        ZC.move || c.H2({
            layer: a,
            type: "box",
            initcb: function() {
                this.AT = c.A.AW[1];
                this.BI = c.A.AW[1];
                this.X = c.A.AW[2];
                this.A6 = c.A.AW[3]
            },
            setupcb: function() {
                this.iX = c.iX;
                this.iY = c.iY;
                this.F = c.F;
                this.D = c.D
            }
        })
    }
});
ZC.U5 = ZC.G3.B2({
    setup: function() {
        var a = this.A.B3,
            c = this.A.D0,
            b = [a.V, a.A2, c.V, c.A2];
        if (this.EY != b) {
            this.iX = a.AD ? a.iX + a.F - a.Z - (this.J + 1) * a.S : a.iX + a.Z + this.J * a.S;
            this.iY = c.AD ? c.iY + c.Z + this.A.J * c.S : c.iY + c.D - c.Z - (this.A.J + 1) * c.S;
            this.EY = b
        }
        if (!this.FH) {
            this.copy(this.A);
            this.DE = this.A.DE;
            this.C2() && this.parse(false);
            this.FH = 1
        }
    },
    paint: function() {
        this.b();
        var a = this.A.B3,
            c = this.A.D0;
        this.setup();
        var b = this.A.S3 == "static" ? this.C.AZ.WB[this.J] : this.C.AZ.C8,
            e = this.A.GA;
        if (e <= 1) e *= a.S;
        var f = this.A.I7;
        if (f <= 1) f *=
            a.S;
        var g = this.A.GV;
        if (g <= 1) g *= a.S;
        var h = a.S - e - f - g,
            k = g + h * (this.A8 / b),
            l = 0;
        if (this.A.J + 1 < this.A.A.AA.length && this.A.A.AA[this.A.J + 1].M[this.J] != null) l = this.A.A.AA[this.A.J + 1].M[this.J].A8;
        b = g + h * (l / b);
        var m = this.iX + (a.AD ? f : e) + h / 2 + g / 2;
        l = [];
        c.AD ? l.push([m - k / 2, this.iY], [m + k / 2, this.iY], [m + b / 2, this.iY + c.S], [m - b / 2, this.iY + c.S], [m - k / 2, this.iY]) : l.push([m - k / 2, this.iY + c.S], [m + k / 2, this.iY + c.S], [m + b / 2, this.iY], [m - b / 2, this.iY], [m - k / 2, this.iY + c.S]);
        this.H.points = l;
        if (this.AK) {
            m = new ZC.D5(this.A);
            m.Q = this.Q + "-trapeze";
            m.copy(this);
            m.B = l;
            m.parse();
            m.Y = this.A.B5("bl", 1);
            m.C6 = this.A.B5("bl", 0);
            m.paint();
            l = m.DA();
            m = this.C.Q + ZC._[36] + this.C.Q + ZC._[37] + this.A.J + ZC._[6];
            this.A.A.FN.push(ZC.K.DM("poly") + 'class="' + m + '" id="' + this.Q + ZC._[32] + l + '"/>')
        }
        m = 0;
        for (var o = this.A.KH.length; m < o; m++) {
            var n = this.A.KH[m];
            if (n != null && n.o[ZC._[5]] != null && n.o[ZC._[5]][this.J] != null) {
                if (n.o[ZC._[21]] != null || n.o[ZC._[22]] != null) {
                    var p = new ZC.FY(this.A);
                    p.append(n.o);
                    p.parse()
                }
                var s = D = 0;
                if (n.o[ZC._[21]] != null) s = p.F;
                if (n.o[ZC._[22]] != null) D =
                    p.D;
                if (s == 0) s = ZC.BN(20, a.S / 10);
                if (D == 0) D = ZC.BN(16, c.S / 10);
                var t = new ZC.D5(this.A);
                t.Q = this.Q + "-arrow-entry";
                t.copy(this);
                t.append(n.o);
                t.parse();
                var r, u;
                l = [];
                if (this.A.KH.length == 1) u = this.iY + c.S / 2;
                else {
                    r = c.S / (this.A.KH.length + 1);
                    u = this.iY + r + m * r
                } if (a.AD) {
                    r = this.iX + a.S + s - e - h / 2 + (k + b) / 4 - g / 2 + 2;
                    l.push([r, u - 2 * D / 6], [r - 2 * s / 3, u - D / 6], [r - 2 * s / 3, u - 3 * D / 6], [r - s, u], [r - 2 * s / 3, u + 3 * D / 6], [r - 2 * s / 3, u + D / 6], [r, u + 2 * D / 6], [r, u - 2 * D / 6])
                } else {
                    r = this.iX + e - s + h / 2 - (k + b) / 4 + g / 2 - 2;
                    l.push([r, u - 2 * D / 6], [r + 2 * s / 3, u - D / 6], [r + 2 * s / 3, u - 3 * D / 6], [r +
                        s, u
                    ], [r + 2 * s / 3, u + 3 * D / 6], [r + 2 * s / 3, u + D / 6], [r, u + 2 * D / 6], [r, u - 2 * D / 6])
                }
                t.B = l;
                t.parse();
                t.Y = this.A.B5("bl", 1);
                t.C6 = this.A.B5("bl", 0);
                t.paint();
                if (n.o[ZC._[12]] != null && n.o[ZC._[12]][this.J] != null && n.o[ZC._[12]][this.J] != "") {
                    l = n.o[ZC._[12]][this.J];
                    t = new ZC.DC(this.A);
                    t.Q = this.Q + "-entry-label-" + m;
                    t.F0 = this.Q + "-entry-label " + this.A.Q + "-entry-label zc-entry-label";
                    t.copy(this);
                    t.append(n.o);
                    n.o.label != null && t.append(n.o.label);
                    t.B0 = l;
                    t.Y = this.A.B5("fl", 0);
                    t.parse();
                    t.F = t.CZ;
                    t.D = t.C9;
                    t.iX = a.AD ? r + 2 : r - t.F - 2;
                    t.iY =
                        u - t.D / 2;
                    t.paint();
                    t.D4()
                }
            }
        }
        m = 0;
        for (o = this.A.NZ.length; m < o; m++) {
            e = this.A.NZ[m];
            if (e != null && e.o[ZC._[5]] != null && e.o[ZC._[5]][this.J] != null) {
                if (e.o[ZC._[21]] != null || e.o[ZC._[22]] != null) {
                    p = new ZC.FY(this.A);
                    p.append(e.o);
                    p.parse()
                }
                s = D = 0;
                if (e.o[ZC._[21]] != null) s = p.F;
                if (e.o[ZC._[22]] != null) D = p.D;
                if (s == 0) s = ZC.BN(20, a.S / 10);
                if (D == 0) D = ZC.BN(16, c.S / 10);
                t = new ZC.D5(this.A);
                t.Q = this.Q + "-arrow-exit";
                t.copy(this);
                t.append(e.o);
                t.parse();
                l = [];
                if (this.A.NZ.length == 1) u = this.iY + c.S / 2;
                else {
                    r = c.S / (this.A.NZ.length + 1);
                    u = this.iY + r + m * r
                } if (a.AD) {
                    r = this.iX + f + h / 2 - (k + b) / 4 + g / 2 - 2;
                    l.push([r, u - 2 * D / 6], [r - 2 * s / 3, u - D / 6], [r - 2 * s / 3, u - 3 * D / 6], [r - s, u], [r - 2 * s / 3, u + 3 * D / 6], [r - 2 * s / 3, u + D / 6], [r, u + 2 * D / 6], [r, u - 2 * D / 6])
                } else {
                    r = this.iX + a.S - f - h / 2 + (k + b) / 4 - g / 2 + 2;
                    l.push([r, u - 2 * D / 6], [r + 2 * s / 3, u - D / 6], [r + 2 * s / 3, u - 3 * D / 6], [r + s, u], [r + 2 * s / 3, u + 3 * D / 6], [r + 2 * s / 3, u + D / 6], [r, u + 2 * D / 6], [r, u - 2 * D / 6])
                }
                t.B = l;
                t.parse();
                t.Y = this.A.B5("bl", 1);
                t.C6 = this.A.B5("bl", 0);
                t.paint();
                if (e.o[ZC._[12]] != null && e.o[ZC._[12]][this.J] != null && e.o[ZC._[12]][this.J] != "") {
                    l = e.o[ZC._[12]][this.J];
                    t = new ZC.DC(this.A);
                    t.Q = this.Q + "-exit-label-" + m;
                    t.F0 = this.Q + "-exit-label " + this.A.Q + "-exit-label zc-exit-label";
                    t.copy(this);
                    t.append(e.o);
                    e.o.label != null && t.append(e.o.label);
                    t.B0 = l;
                    t.Y = this.A.B5("fl", 0);
                    t.parse();
                    t.F = t.CZ;
                    t.D = t.C9;
                    t.iX = a.AD ? r - s - t.F - 2 : r + s + 2;
                    t.iY = u - t.D / 2;
                    t.paint();
                    t.D4()
                }
            }
        }
        this.A.T != null && this.FX()
    },
    A0T: function() {
        var a = this;
        if (!ZC.move)
            if (a.A.FD != null && a.A.AK) {
                a.b();
                var c = new ZC.D5(a.A);
                c.Q = a.Q + "-trapeze-hover";
                c.Y = ZC.AJ(a.C.Q + ZC._[24]);
                c.B = a.H.points;
                c.parse();
                c.AT = a.A.AW[1];
                c.BI =
                    a.A.AW[1];
                c.X = a.A.AW[2];
                c.A6 = a.A.AW[3];
                c.append(a.A.FD.o);
                c.parse();
                c.GM = function(b) {
                    return a.GM(b)
                };
                c.C2() && c.parse();
                c.AK && c.paint()
            }
    }
});
ZC.U0 = ZC.G3.B2({
    setup: function() {
        var a = this.A.B3,
            c = this.A.D0,
            b = [a.V, a.A2, c.V, c.A2];
        if (this.EY != b) {
            this.iY = a.AD ? a.iY + a.Z + this.J * a.S : a.iY + a.D - a.Z - (this.J + 1) * a.S;
            this.iX = c.AD ? c.iX + c.F - c.Z - (this.A.J + 1) * c.S : c.iX + c.Z + this.A.J * c.S;
            this.EY = b
        }
        if (!this.FH) {
            this.copy(this.A);
            this.DE = this.A.DE;
            this.C2() && this.parse(false);
            this.FH = 1
        }
    },
    paint: function() {
        this.b();
        var a = this.A.B3,
            c = this.A.D0;
        this.setup();
        var b = this.A.S3 == "static" ? this.C.AZ.WB[this.J] : this.C.AZ.C8,
            e = this.A.GA;
        if (e <= 1) e *= a.S;
        var f = this.A.I7;
        if (f <= 1) f *=
            a.S;
        var g = this.A.GV;
        if (g <= 1) g *= a.S;
        var h = a.S - e - f - g,
            k = g + h * (this.A8 / b),
            l = 0;
        if (this.A.J + 1 < this.A.A.AA.length && this.A.A.AA[this.A.J + 1].M[this.J] != null) l = this.A.A.AA[this.A.J + 1].M[this.J].A8;
        b = g + h * (l / b);
        l = this.iY + (a.AD ? e : f) + h / 2 + g / 2;
        f = [];
        c.AD ? f.push([this.iX + c.S, l - k / 2], [this.iX + c.S, l + k / 2], [this.iX, l + b / 2], [this.iX, l - b / 2], [this.iX + c.S, l - k / 2]) : f.push([this.iX, l - k / 2], [this.iX, l + k / 2], [this.iX + c.S, l + b / 2], [this.iX + c.S, l - b / 2], [this.iX, l - k / 2]);
        this.H.points = f;
        if (this.AK) {
            l = new ZC.D5(this.A);
            l.Q = this.Q + "-trapeze";
            l.copy(this);
            l.B = f;
            l.parse();
            l.Y = this.A.B5("bl", 1);
            l.C6 = this.A.B5("bl", 0);
            l.paint();
            f = l.DA();
            l = this.C.Q + ZC._[36] + this.C.Q + ZC._[37] + this.A.J + ZC._[6];
            this.A.A.FN.push(ZC.K.DM("poly") + 'class="' + l + '" id="' + this.Q + ZC._[32] + f + '"/>')
        }
        l = 0;
        for (var m = this.A.KH.length; l < m; l++) {
            var o = this.A.KH[l];
            if (o != null && o.o[ZC._[5]] != null && o.o[ZC._[5]][this.J] != null) {
                if (o.o[ZC._[21]] != null || o.o[ZC._[22]] != null) {
                    var n = new ZC.FY(this.A);
                    n.append(o.o);
                    n.parse()
                }
                var p = D = 0;
                if (o.o[ZC._[21]] != null) p = n.F;
                if (o.o[ZC._[22]] != null) D =
                    n.D;
                if (p == 0) p = ZC.BN(20, a.S / 10);
                if (D == 0) D = ZC.BN(16, c.S / 10);
                var s = new ZC.D5(this.A);
                s.Q = this.Q + "-arrow-entry";
                s.copy(this);
                s.append(o.o);
                s.parse();
                var t, r;
                f = [];
                if (this.A.KH.length == 1) t = this.iX + c.S / 2;
                else {
                    t = c.S / (this.A.KH.length + 1);
                    t = this.iX + t + l * t
                } if (a.AD) {
                    r = this.iY + e - D + h / 2 - (k + b) / 4 + g / 2 - 2;
                    f.push([t - 2 * p / 6, r], [t + 2 * p / 6, r], [t + p / 6, r + 2 * D / 3], [t + 3 * p / 6, r + 2 * D / 3], [t, r + D], [t - 3 * p / 6, r + 2 * D / 3], [t - p / 6, r + 2 * D / 3])
                } else {
                    r = this.iY + a.S + D - e - h / 2 + (k + b) / 4 - g / 2 + 2;
                    f.push([t - 2 * p / 6, r], [t + 2 * p / 6, r], [t + p / 6, r - 2 * D / 3], [t + 3 * p / 6, r - 2 * D / 3], [t,
                        r - D
                    ], [t - 3 * p / 6, r - 2 * D / 3], [t - p / 6, r - 2 * D / 3])
                }
                s.B = f;
                s.parse();
                s.Y = this.A.B5("bl", 1);
                s.C6 = this.A.B5("bl", 0);
                s.paint();
                if (o.o[ZC._[12]] != null && o.o[ZC._[12]][this.J] != null && o.o[ZC._[12]][this.J] != "") {
                    f = o.o[ZC._[12]][this.J];
                    p = new ZC.DC(this.A);
                    p.Q = this.Q + "-entry-label-" + l;
                    p.F0 = this.Q + "-entry-label " + this.A.Q + "-entry-label zc-entry-label";
                    p.copy(this);
                    p.append(o.o);
                    o.o.label != null && p.append(o.o.label);
                    p.B0 = f;
                    p.Y = this.A.B5("fl", 0);
                    p.parse();
                    p.F = p.CZ;
                    p.D = p.C9;
                    p.iX = t - p.F / 2;
                    p.iY = a.AD ? r - p.D - 2 : r + 2;
                    p.paint();
                    p.D4()
                }
            }
        }
        l =
            0;
        for (m = this.A.NZ.length; l < m; l++) {
            o = this.A.NZ[l];
            if (o != null && o.o[ZC._[5]] != null && o.o[ZC._[5]][this.J] != null) {
                if (o.o[ZC._[21]] != null || o.o[ZC._[22]] != null) {
                    n = new ZC.FY(this.A);
                    n.append(o.o);
                    n.parse()
                }
                p = D = 0;
                if (o.o[ZC._[21]] != null) p = n.F;
                if (o.o[ZC._[22]] != null) D = n.D;
                if (p == 0) p = ZC.BN(20, a.S / 10);
                if (D == 0) D = ZC.BN(16, c.S / 10);
                s = new ZC.D5(this.A);
                s.Q = this.Q + "-arrow-exit";
                s.copy(this);
                s.append(o.o);
                s.parse();
                f = [];
                if (this.A.KH.length == 1) t = this.iX + c.S / 2;
                else {
                    t = c.S / (this.A.KH.length + 1);
                    t = this.iX + t + l * t
                } if (a.AD) {
                    r =
                        this.iY + e + h / 2 + (k + b) / 4 + g / 2 + 2;
                    f.push([t - 2 * p / 6, r], [t + 2 * p / 6, r], [t + p / 6, r + 2 * D / 3], [t + 3 * p / 6, r + 2 * D / 3], [t, r + D], [t - 3 * p / 6, r + 2 * D / 3], [t - p / 6, r + 2 * D / 3])
                } else {
                    r = this.iY + a.S - e - h / 2 - (k + b) / 4 - g / 2 - 2;
                    f.push([t - 2 * p / 6, r], [t + 2 * p / 6, r], [t + p / 6, r - 2 * D / 3], [t + 3 * p / 6, r - 2 * D / 3], [t, r - D], [t - 3 * p / 6, r - 2 * D / 3], [t - p / 6, r - 2 * D / 3])
                }
                s.B = f;
                s.parse();
                s.Y = this.A.B5("bl", 1);
                s.C6 = this.A.B5("bl", 0);
                s.paint();
                if (o.o[ZC._[12]] != null && o.o[ZC._[12]][this.J] != null && o.o[ZC._[12]][this.J] != "") {
                    f = o.o[ZC._[12]][this.J];
                    p = new ZC.DC(this.A);
                    p.Q = this.Q + "-exit-label-" +
                        l;
                    p.F0 = this.Q + "-exit-label " + this.A.Q + "-exit-label zc-exit-label";
                    p.copy(this);
                    p.append(o.o);
                    o.o.label != null && p.append(o.o.label);
                    p.B0 = f;
                    p.Y = this.A.B5("fl", 0);
                    p.parse();
                    p.F = p.CZ;
                    p.D = p.C9;
                    p.iX = t - p.F / 2;
                    p.iY = a.AD ? r + D + 2 : r - D - p.D - 2;
                    p.paint();
                    p.D4()
                }
            }
        }
        this.A.T != null && this.FX()
    },
    A0T: function() {
        var a = this;
        if (!ZC.move)
            if (a.A.FD != null && a.A.AK) {
                a.b();
                var c = new ZC.D5(a.A);
                c.Q = a.Q + "-trapeze-hover";
                c.Y = ZC.AJ(a.C.Q + ZC._[24]);
                c.B = a.H.points;
                c.parse();
                c.AT = a.A.AW[1];
                c.BI = a.A.AW[1];
                c.X = a.A.AW[2];
                c.A6 = a.A.AW[3];
                c.append(a.A.FD.o);
                c.parse();
                c.GM = function(b) {
                    return a.GM(b)
                };
                c.C2() && c.parse();
                c.AK && c.paint()
            }
    }
});
ZC.VA = ZC.G3.B2({
    JG: null,
    setup: function() {
        var a = this.A.B3,
            c = this.A.D0,
            b = [a.V, a.A2, c.V, c.A2];
        if (this.EY != b) {
            this.iX = this.CH != null ? a.B4(this.CH) : a.LB(this.J);
            this.iY = c.B4(this.A8);
            this.H.RB = c.B4(this.A8);
            this.H.YN = c.B4(this.D2[0]);
            this.H.ZL = c.B4(this.D2[1]);
            this.H.PN = c.B4(this.D2[2]);
            this.EY = b
        }
        if (!this.FH) {
            this.copy(this.A);
            this.DE = this.A.DE;
            this.C2() && this.parse(false);
            this.JG = new ZC.DC(this.A);
            this.JG.copy(this);
            if (this.D2[2] < this.A8) {
                this.JG.X = this.JG.A6 = this.BO;
                this.JG.BI = this.AT
            }
            if (this.D2[2] < this.A8 &&
                this.A.o["trend-down"]) {
                this.JG.append(this.A.o["trend-down"]);
                this.JG.parse()
            } else if (this.D2[2] > this.A8 && this.A.o["trend-up"]) {
                this.JG.append(this.A.o["trend-up"]);
                this.JG.parse()
            } else if (this.A.o["trend-equal"]) {
                this.JG.append(this.A.o["trend-equal"]);
                this.JG.parse()
            }
            this.FH = 1
        }
    },
    KC: function(a, c) {
        this.DN = [
            ["%node-value-stock-open", this.A8],
            ["%v0", this.A8],
            ["%node-value-stock-high", this.D2[0]],
            ["%v1", this.D2[0]],
            ["%node-value-stock-low", this.D2[1]],
            ["%v2", this.D2[1]],
            ["%node-value-stock-close", this.D2[2]],
            ["%v3", this.D2[2]]
        ];
        return a = this.b(a, c)
    },
    XP: function() {
        var a;
        if (this.o[ZC._[11]][1] instanceof Array) {
            if (typeof this.o[ZC._[11]][0] == "string") {
                a = ZC.AH(this.C.HH, this.o[ZC._[11]][0]);
                if (a != -1) this.CH = a;
                else {
                    this.C.HH.push(this.o[ZC._[11]][0]);
                    this.CH = this.C.HH.length - 1
                }
            } else this.CH = ZC._f_(this.o[ZC._[11]][0]); if (this.CH != null)
                if (this.A.J8[this.CH] == null || ZC.AH(this.A.J8[this.CH], this.J) == -1) this.A.R7(this.CH, this.J);
            var c = this.o[ZC._[11]][1]
        } else c = this.o[ZC._[11]];
        this.D1 = c.join(" ");
        this.A8 = ZC._f_(c[0]);
        if ((a = c[1]) != null) this.D2.push(ZC._f_(a));
        if ((a = c[2]) != null) this.D2.push(ZC._f_(a));
        if ((a = c[3]) != null) this.D2.push(ZC._f_(a))
    },
    O4: function() {
        var a = {};
        a[ZC._[0]] = this.D2[2] < this.A8 ? this.JG.AT : this.JG.X;
        a.color = this.JG.BO;
        return a
    },
    R9: function() {
        var a = {};
        a[ZC._[0]] = this.D2[2] < this.A8 ? this.JG.AT : this.JG.X;
        a.color = this.JG.BO;
        return a
    },
    VM: function() {
        return this.R9()
    },
    paint: function() {
        var a;
        this.b();
        var c = this.A.B3;
        this.setup();
        var b = c.S * this.A.U;
        c = this.A.J;
        for (var e = 0, f = 0; f < this.A.A.G5.stock.length; f++) {
            e++;
            if (ZC.AH(this.A.A.G5[this.A.AB][f], this.A.J) != -1) c = f
        }
        f = this.A.CD;
        if (f <= 1) f *= b;
        var g = this.A.CF;
        if (g <= 1) g *= b;
        var h = b - f - g,
            k = this.A.EL;
        if (k <= 1) k *= h;
        if (h < 1) {
            h = b * 0.8;
            f = b * 0.1;
            g = b * 0.1
        }
        var l = h,
            m = this.A.E2;
        if (m != 0) k = 0;
        if (e > 1)
            if (m > 1) l = (h - (e - 1) * k + (e - 1) * m) / e;
            else {
                l = (h - (e - 1) * k) / (e - (e - 1) * m);
                m *= l
            }
        l = ZC._l_(l, 1, h);
        c = this.iX - b / 2 + f + c * (l + k) - c * m;
        c = ZC._l_(c, this.iX - b / 2 + f, this.iX + b / 2 - g);
        b = l;
        e = ZC.CO(this.H.RB, this.H.PN);
        l = ZC.BN(this.H.RB, this.H.PN) - ZC.CO(this.H.RB, this.H.PN);
        if (l < 2) l = 2;
        if (f + g == 0) {
            c -= 0.5;
            b += 1
        }
        this.F = b;
        this.D =
            l;
        this.iX = c;
        this.H.iX = c;
        this.H.iY = e;
        this.H.D = l;
        this.H.YC = e + l / 2;
        if (this.AK) {
            f = ZC.K.CN(this.I.usc() ? this.I.Q + "-main-c" : this.C.Q + "-plot-" + this.A.J + "-bl-1-c", this.I.A5);
            g = this.iX + this.F / 2;
            if (this.D2[2] < this.A8 && (a = this.A.o["trend-down"])) {
                this.H["selected-state"] = a["selected-state"];
                this.H["background-state"] = a["background-state"]
            } else if (this.D2[2] > this.A8 && (a = this.A.o["trend-up"])) {
                this.H["selected-state"] = a["selected-state"];
                this.H["background-state"] = a["background-state"]
            } else if (this.D2[2] == this.A8 &&
                (a = this.A.o["trend-equal"])) {
                this.H["selected-state"] = a["selected-state"];
                this.H["background-state"] = a["background-state"]
            }
            a = this.A.F5(this, this.JG);
            switch (this.A.CG) {
                default: h = [];
                h.push([g, this.H.YN], [g, ZC.CO(this.H.RB, this.H.PN)], null, [g, this.H.ZL], [g, ZC.BN(this.H.RB, this.H.PN)]);
                ZC.BQ.paint(f, a, h);
                g = this.D2[2] < this.A8 ? this.A.Z5 : this.D2[2] > this.A8 ? this.A.A0E : this.A.YY;
                if (this.A.DE.length == 0 && typeof g != ZC._[33] && !this.R.o.override && !this.C.I6) f = g;
                else {
                    f = new ZC.FY(this.A);
                    f.copy(a)
                }
                f.Y = this.A.B5("bl",
                    1);
                f.C6 = this.A.B5("bl", 0);
                f.Q = this.Q;
                f.iX = c;
                f.iY = e;
                f.F = this.F;
                f.D = this.D;
                f.paint();
                if (this.A.DE.length == 0 && typeof g == ZC._[33] && !this.R.o.override && !this.C.I6)
                    if (this.D2[2] < this.A8) this.A.Z5 = f;
                    else if (this.D2[2] > this.A8) this.A.A0E = f;
                else this.A.YY = f;
                break;
                case "whisker":
                case "ohlc":
                    h = [];
                    h.push([g, this.H.YN], [g, this.H.ZL], null, [g - this.F / 4, this.H.RB], [g, this.H.RB], null, [g + this.F / 4, this.H.PN], [g, this.H.PN]);
                    ZC.BQ.paint(f, a, h)
            }
            if (this.A.GG) {
                a = this.C.Q + ZC._[36] + this.C.Q + ZC._[37] + this.A.J + ZC._[6];
                this.A.A.FN.push(ZC.K.DM("rect") +
                    'class="' + a + '" id="' + this.Q + ZC._[32] + ZC._i_(c + ZC.MAPTX) + "," + ZC._i_(e + ZC.MAPTX) + "," + ZC._i_(c + b + ZC.MAPTX) + "," + ZC._i_(e + l + ZC.MAPTX) + '"/>')
            }
            this.A.T != null && this.FX()
        }
    },
    A0T: function() {
        var a = this;
        if (!ZC.move)
            if (a.A.FD != null && a.A.AK) {
                a.b();
                switch (a.A.CG) {
                    case "candlestick":
                        var c = new ZC.FY(a.A);
                        c.Q = a.Q + "-hover";
                        c.Y = ZC.AJ(a.C.Q + ZC._[24]);
                        c.BO = a.A.AW[0];
                        c.AT = a.A.AW[1];
                        c.BI = a.A.AW[1];
                        c.X = a.A.AW[2];
                        c.A6 = a.A.AW[3];
                        c.append(a.A.FD.o);
                        c.HD = 1;
                        c.parse();
                        c.GM = function(e) {
                            return a.GM(e)
                        };
                        c.C2() && c.parse();
                        if (a.D2[2] <
                            a.A8) {
                            c.X = c.A6 = c.BO;
                            c.BI = c.AT
                        }
                        if (a.D2[2] < a.A8 && a.A.o["trend-down"]) {
                            c.append(a.A.o["trend-down"]);
                            a.A.o["trend-down"]["hover-state"] && c.append(a.A.o["trend-down"]["hover-state"]);
                            c.parse()
                        } else if (a.D2[2] > a.A8 && a.A.o["trend-up"]) {
                            c.append(a.A.o["trend-up"]);
                            a.A.o["trend-up"]["hover-state"] && c.append(a.A.o["trend-up"]["hover-state"]);
                            c.parse()
                        } else if (a.D2[2] == a.A8 && a.A.o["trend-equal"]) {
                            c.append(a.A.o["trend-equal"]);
                            a.A.o["trend-equal"]["hover-state"] && c.append(a.A.o["trend-equal"]["hover-state"]);
                            c.parse()
                        }
                        c.iX = a.H.iX;
                        c.F = a.F;
                        c.iY = a.H.iY;
                        c.D = a.H.D;
                        var b = a.C.O;
                        if (c.iY < b.iY) {
                            c.D -= b.iY - c.iY;
                            c.iY = b.iY
                        }
                        if (c.iY + c.D > b.iY + b.D) c.D = b.iY + b.D - c.iY;
                        c.AK && c.paint()
                }
            }
    }
});
ZC.VB = ZC.G3.B2({
    setup: function() {
        var a = this.C.AY("scale"),
            c = this.J % a.G6,
            b = Math.floor(this.J / a.G6),
            e = this.C.AY("scale-r"),
            f = e.GN / (e.C8 - e.BJ);
        this.iX = a.iX + c * a.E4 + a.E4 / 2;
        this.iY = a.iY + b * a.E5 + a.E5 / 2;
        this.H.angle = e.C5 - e.GN / 2 + f * (this.A8 - e.BJ);
        if (e.AD) this.H.angle = e.C5 + e.GN / 2 - f * (this.A8 - e.BJ);
        if (!this.FH) {
            this.copy(this.A);
            this.DE = this.A.DE;
            this.C2() && this.parse(false);
            this.FH = 1
        }
    },
    A00: function(a) {
        var c = this.C.AY("scale"),
            b = ZC.CO(c.E4 / 2, c.E5 / 2) * c.HY;
        c = ZC.AP.BA(c.iX + this.J % c.G6 * c.E4 + c.E4 / 2 + c.C0, c.iY + Math.floor(this.J /
            c.G6) * c.E5 + c.E5 / 2 + c.C4, b / 2 + a.DI, this.H.angle);
        return [c[0] - a.CZ / 2 + this.C0, c[1] - a.C9 / 2 + this.C4]
    },
    O4: function() {
        return {
            color: this.AT
        }
    },
    R9: function() {
        return {
            "background-color": this.AT,
            color: this.BO
        }
    },
    paint: function() {
        function a(p) {
            var s = [];
            s.push(ZC.AP.BA(g, h, b.A.TG, p + 270));
            for (var t = 0; t <= 180; t += 2) s.push(ZC.AP.BA(g, h, b.A.TG, p + 270 - t));
            s.push(ZC.AP.BA(g, h, b.A.TG, p + 90), ZC.AP.BA(g, h, b.AR > 0 ? b.AR : f * 0.9, p), ZC.AP.BA(g, h, b.A.TG, p + 270));
            return s
        }

        function c() {
            var p = k.DA(),
                s = b.C.Q + ZC._[36] + b.C.Q + ZC._[37] + b.A.J + ZC._[6];
            p = ZC.K.DM("poly") + 'class="' + s + '" id="' + b.Q + ZC._[32] + p + '"/>';
            b.A.A.FN.push(p);
            b.A.T != null && b.FX()
        }
        var b = this;
        b.b();
        b.setup();
        b.CV = 0;
        var e = b.C.AY("scale"),
            f = ZC.CO(e.E4 / 2, e.E5 / 2) * e.HY,
            g = e.iX + b.J % e.G6 * e.E4 + e.E4 / 2 + e.C0,
            h = e.iY + Math.floor(b.J / e.G6) * e.E5 + e.E5 / 2 + e.C4;
        e = b.A.F5(b, b);
        var k = new ZC.D5(b.A);
        k.copy(e);
        k.Y = b.A.B5("bl", 1);
        k.C6 = b.A.B5("bl", 0);
        k.Q = b.Q + "-arrow";
        var l = b.C.AY("scale-r");
        l = l.C5 - l.GN / 2;
        var m = a(b.H.angle);
        b.H.points = m;
        k.DQ = "poly";
        k.B = m;
        k.parse();
        k.GM = function(p) {
            return b.GM(p)
        };
        k.C2() && k.parse();
        if (b.A.ES && !b.C.FL) {
            m = k;
            var o = {};
            switch (b.A.GI) {
                case 1:
                    m.A9 = 0;
                    o.alpha = e.A9;
                    break;
                case 2:
                    m.A9 = 0;
                    m.S2 = l;
                    o.alpha = e.A9;
                    o.S2 = b.H.angle
            }
            for (var n in b.A.DB) {
                m[ZC.CA.F7[ZC.CE(n)]] = b.A.DB[n];
                o[ZC.CE(n)] = e[ZC.CA.F7[ZC.CE(n)]]
            }
            if (b.C.CS == null) b.C.CS = {};
            if (b.C.CS[b.A.J + "-" + b.J] != null)
                for (n in b.C.CS[b.A.J + "-" + b.J]) {
                    e = ZC.CA.F7[ZC.CE(n)];
                    if (e == null) e = n;
                    m[e] = b.C.CS[b.A.J + "-" + b.J][n]
                }
            b.C.CS[b.A.J + "-" + b.J] = {};
            ZC.ET(o, b.C.CS[b.A.J + "-" + b.J]);
            n = new ZC.CA(m, o, b.A.FE, b.A.GH, ZC.CA.KP[b.A.GJ], function() {
                c()
            });
            n.B7 = b;
            n.QN =
                function(p, s) {
                    if (s.S2 != null) p.B = a(s.S2)
                };
            b.GU(n)
        } else {
            k.paint();
            c()
        }
    },
    A0T: function(a) {
        var c = this;
        ZC.move || c.H2({
            layer: a,
            type: "shape",
            initcb: function() {
                this.copy(c);
                this.AT = c.A.AW[1];
                this.BI = c.A.AW[1];
                this.X = c.A.AW[3];
                this.A6 = c.A.AW[2];
                this.B = c.H.points;
                this.Y = this.C6 = c.A.B5("bl", 2)
            }
        })
    }
});
ZC.V6 = ZC.G3.B2({
    $i: function(a) {
        this.b(a);
        this.C7 = this.BF = null;
        this.L9 = "min"
    },
    KC: function(a, c) {
        this.DN = [
            ["%node-min-value", this.BF],
            ["%node-max-value", this.C7]
        ];
        return a = this.b(a, c)
    },
    XP: function() {
        if (this.o[ZC._[11]][1] instanceof Array) {
            if (typeof this.o[ZC._[11]][0] == "string") {
                var a = ZC.AH(this.C.HH, this.o[ZC._[11]][0]);
                if (a != -1) this.CH = a;
                else {
                    this.C.HH.push(this.o[ZC._[11]][0]);
                    this.CH = this.C.HH.length - 1
                }
            } else this.CH = ZC._f_(this.o[ZC._[11]][0]); if (this.CH != null)
                if (this.A.J8[this.CH] == null || ZC.AH(this.A.J8[this.CH],
                    this.J) == -1) this.A.R7(this.CH, this.J);
            var c = this.o[ZC._[11]][1]
        } else c = this.o[ZC._[11]]; if (typeof c[0] == "string") {
            a = ZC.AH(this.C.H0, c[0]);
            if (a != -1) this.BF = a;
            else {
                this.C.H0.push(c[0]);
                this.BF = this.C.H0.length - 1
            }
        } else this.BF = ZC._f_(c[0]);
        this.D2.push(this.BF);
        if (typeof c[1] == "string") {
            a = ZC.AH(this.C.H0, c[1]);
            if (a != -1) this.C7 = a;
            else {
                this.C.H0.push(c[1]);
                this.C7 = this.C.H0.length - 1
            }
        } else this.C7 = ZC._f_(c[1]);
        this.D1 = c.join(" ");
        this.A8 = this.C7
    },
    setup: function() {
        var a = this.A.B3,
            c = this.A.D0,
            b = [a.V, a.A2,
                c.V, c.A2, this.L9
            ];
        if (this.A4 == null) this.A4 = [];
        if (this.EY != b) {
            this.iX = this.CH != null ? a.B4(this.CH) : a.LB(this.J);
            this.iY = c.B4(this.L9 == "min" ? this.BF : this.C7);
            this.EY = b
        }
        if (!this.FH) {
            this.copy(this.A);
            this.DE = this.A.DE;
            this.C2() && this.parse();
            this.H.OM = c.B4(this.BF);
            this.H.OL = c.B4(this.C7);
            this.FH = 1
        }
    },
    O4: function() {
        return {
            color: this.AT
        }
    },
    R9: function() {
        return {
            "background-color": this.AT,
            color: this.BO
        }
    },
    paint: function() {
        var a = this,
            c;
        a.b();
        var b = a.A.JK,
            e = a.A.B3,
            f = a.A.M;
        a.setup();
        if (a.A.o[a.L9 + "-line"] != null) {
            a.append(a.A.o[a.L9 +
                "-line"]);
            a.parse()
        }
        a.CV = 0;
        a.C6 = a.A.B5("bl", 1);
        var g = [],
            h = [];
        switch (a.A.CG) {
            default: var k = 1;
            if (!e.D8 && a.J <= e.V) k = 0;
            if (f[a.J - a.A.U] == null) k = 0;
            if (k) {
                f[a.J - a.A.U].L9 = a.L9;
                f[a.J - a.A.U].setup();
                k = [a.iX, a.H.OM];
                var l = [f[a.J - a.A.U].iX, f[a.J - a.A.U].H.OM],
                    m = [a.iX, a.H.OL],
                    o = [f[a.J - a.A.U].iX, f[a.J - a.A.U].H.OL];
                k = ZC.AP._ipoint_(k, l, m, o);
                k = ZC.DK(k[0], f[a.J - a.A.U].iX, a.iX) ? k : ZC.AP.I4(f[a.J - a.A.U].iX, f[a.J - a.A.U].iY, f[a.J].iX, f[a.J].iY);
                h.push([ZC._i_(k[0]), k[1]]);
                g.push([k[0], k[1]])
            }
            h.push([ZC._i_(a.iX), a.iY]);
            g.push([a.iX, a.iY]);
            k = 1;
            if (!e.D8 && a.J >= e.A2) k = 0;
            if (f[a.J + a.A.U] == null) k = 0;
            if (k) {
                f[a.J + a.A.U].L9 = a.L9;
                f[a.J + a.A.U].setup();
                k = [a.iX, a.H.OM];
                l = [f[a.J + a.A.U].iX, f[a.J + a.A.U].H.OM];
                m = [a.iX, a.H.OL];
                o = [f[a.J + a.A.U].iX, f[a.J + a.A.U].H.OL];
                k = ZC.AP._ipoint_(k, l, m, o);
                k = ZC.DK(k[0], f[a.J + a.A.U].iX, a.iX) ? k : ZC.AP.I4(f[a.J].iX, f[a.J].iY, f[a.J + a.A.U].iX, f[a.J + a.A.U].iY);
                h.push([ZC._i_(k[0]), k[1]]);
                g.push([k[0], k[1]])
            }
            break;
            case "spline":
                if (typeof a.H["intersect.index"] == ZC._[33]) {
                    a.H["intersect.index"] = -1;
                    if (f[a.J +
                        a.A.U] != null) {
                        o = [];
                        m = [];
                        for (k = -1; k < 3; k++)
                            if (f[a.J + k] != null) {
                                f[a.J + k].setup();
                                o.push(f[a.J + k].H.OM);
                                m.push(f[a.J + k].H.OL)
                            } else {
                                o.push(a.H.OM);
                                m.push(a.H.OL)
                            }
                        o = ZC.AP.NO(o, ZC._i_(e.S * a.A.U));
                        var n = ZC.AP.NO(m, ZC._i_(e.S * a.A.U));
                        if (f[a.J + a.A.U].BF == f[a.J + a.A.U].C7) a.H["intersect.index"] = o.length;
                        else {
                            c = o[0][1] - n[0][1];
                            k = 1;
                            for (m = o.length; k < m; k++)
                                if (Math.round(c * (o[k][1] - n[k][1]), 2) <= 0) {
                                    a.H["intersect.index"] = k + 1;
                                    break
                                }
                        }
                        a.H["spline.points.min"] = o;
                        a.H["spline.points.max"] = n
                    }
                }
                if (a.A.S0 == null) a.A.S0 = {};
                if (a.A.KN ==
                    null) a.A.KN = {};
                o = [];
                n = [];
                if (a.L9 == "min") {
                    if (a.A.KN.max != null)
                        for (k = a.A.KN.max.length - 1; k >= 0; k--) a.A4.push(a.A.KN.max[k]);
                    if ((c = a.A.KN.min) != null) {
                        k = 0;
                        for (m = c.length; k < m; k++) a.A4.push(c[k])
                    }
                }
                if ((c = a.A.S0[a.L9]) != null) {
                    g = [];
                    k = 0;
                    for (m = c.length; k < m; k++) g.push(c[k])
                }
                if (f[a.J + a.A.U] != null) {
                    if (a.L9 == "min") l = a.H["spline.points.min"];
                    else if (a.L9 == "max") l = a.H["spline.points.max"];
                    f = a.H["intersect.index"] == -1 ? ZC._i_(l.length / 2) : a.H["intersect.index"];
                    for (k = 0; k < f; k++) {
                        g.push([a.iX + (e.AD ? -1 : 1) * l[k][0] * e.S, l[k][1]]);
                        h.push([ZC._i_(a.iX + (e.AD ? -1 : 1) * l[k][0] * e.S), l[k][1]])
                    }
                    c = a.DV == 1 ? ZC.CO(2, f) : 1;
                    k = f - 1;
                    for (m = l.length; k < m; k++) o.push([a.iX + (e.AD ? -1 : 1) * l[k][0] * e.S, l[k][1]]);
                    k = f - c;
                    for (m = l.length; k < m; k++) n.push([ZC._i_(a.iX + (e.AD ? -1 : 1) * l[k][0] * e.S), l[k][1]])
                } else {
                    g.push([f[a.J].iX, f[a.J].iY]);
                    o.push([ZC._i_(f[a.J].iX), f[a.J].iY]);
                    h.push([ZC._i_(f[a.J].iX), f[a.J].iY]);
                    n.push([ZC._i_(f[a.J].iX), f[a.J].iY])
                }
                a.A.S0[a.L9] = o;
                a.A.KN[a.L9] = n
        }
        if (a.L9 == "min") {
            k = 0;
            for (m = h.length; k < m; k++) a.A4.push(h[k])
        } else
            for (k = h.length - 1; k >=
                0; k--) a.A4.push(h[k]); if (a.L9 == "max") {
            h = new ZC.D5(a.A);
            h.Q = a.Q + "-area";
            h.Y = a.A.B5("bl", 0);
            h.copy(a);
            h.AI = 0;
            h.AU = 0;
            h.EC = 0;
            h.FP = 0;
            h.parse();
            h.B = a.A4;
            h.A9 = a.A.DV;
            f = a.C.O;
            h.DF = [f.iX, f.iY, f.iX + f.F, f.iY + f.D];
            h.paint();
            a.H.pointsarea = [];
            k = 0;
            for (m = a.A4.length; k < m; k++) a.H.pointsarea.push(a.A4[k]);
            a.A4 = [];
            h = h.DA();
            f = a.C.Q + ZC._[36] + a.C.Q + "-plot-" + a.A.J + ZC._[6];
            a.A.A.FN.push(ZC.K.DM("poly") + 'class="' + f + '" id="' + a.Q + "--area" + ZC._[32] + h + '"/>')
        }
        a.H.points = g;
        h = new ZC.E7(a);
        h.copy(a);
        h.append(a.A.o[a.L9 + "-line"]);
        h.parse();
        ZC.BQ.setup(b, h);
        ZC.BQ.paint(b, h, g);
        if (ZC.DK(a.iX, e.iX - 1, e.iX + e.F + 1) && ZC.DK(a.iY, e.iY - 1, e.iY + e.D + 1)) {
            b = new ZC.D5(a.A);
            b.Q = a.Q + "-marker";
            b.Y = a.A.B5("fl", 0);
            b.Y = a.C.Y;
            b.iX = a.iX;
            b.iY = a.iY;
            b.AT = a.A.AW[3];
            b.BI = a.A.AW[3];
            b.X = a.A.AW[2];
            b.A6 = a.A.AW[2];
            b.append(a.A.AG.o);
            b.parse();
            b.GM = function(p) {
                return a.GM(p)
            };
            b.C2() && b.parse();
            if (b.AK && b.AB != "none") {
                a.A.HX > e.A2 - e.V && b.paint();
                a.H["marker.type"] = b.DQ;
                f = a.C.Q + ZC._[36] + a.C.Q + ZC._[37] + a.A.J + ZC._[6];
                e.AD && g.reverse();
                h = ZC.AP.M0(ZC.AP.SQ(a.H.points),
                    4);
                h != "" ? a.A.A.FN.push(ZC.K.DM("poly") + 'class="' + f + '" id="' + a.Q + "--" + a.L9 + ZC._[32] + h + '"/>') : a.A.A.FN.push(ZC.K.DM("circle") + 'class="' + f + '" id="' + a.Q + "--" + a.L9 + ZC._[32] + ZC._i_(b.iX + ZC.MAPTX) + "," + ZC._i_(b.iY + ZC.MAPTX) + "," + ZC._i_(ZC.BN(3, b.AR) * 1.5) + '"/>')
            }
            a.A.T != null && a.FX()
        }
    },
    A0T: function() {
        var a = this;
        if (!ZC.move) {
            var c = a.A.B3;
            if (a.A.EO != null && a.A.AK) {
                var b = ZC.K.CN(a.C.Q + ZC._[24], a.I.A5),
                    e = new ZC.D5(a.A);
                e.Q = a.Q + "-area-hover";
                e.Y = ZC.AJ(a.C.Q + ZC._[24]);
                e.J0 = 1;
                e.copy(a);
                e.append(a.A.FD.o);
                e.B = a.H.pointsarea;
                e.parse();
                e.A9 = a.A.DV;
                var f = a.C.O;
                e.DF = [f.iX, f.iY, f.iX + f.F, f.iY + f.D];
                ZC.BQ.setup(b, e);
                e.paint();
                b = ZC.K.CN(a.C.Q + ZC._[24], a.I.A5);
                e = new ZC.E7(a.A);
                e.Q = a.Q + "-line-hover";
                e.CV = 0;
                e.AT = a.A.AW[3];
                e.append(a.A.FD.o);
                e.parse();
                e.GM = function(g) {
                    return a.GM(g)
                };
                e.C2() && e.parse();
                ZC.BQ.setup(b, e);
                ZC.BQ.paint(b, e, a.H.points)
            }
            if (a.A.HX > c.A2 - c.V)
                if (a.A.EO != null && a.A.AK) {
                    a.b();
                    c = new ZC.D5(a.A);
                    c.Q = a.Q + "-area-hover";
                    c.Y = ZC.AJ(a.C.Q + ZC._[24]);
                    c.DQ = a.H["marker.type"];
                    c.iX = a.iX;
                    c.iY = a.iY;
                    c.AT = a.A.AW[3];
                    c.BI = a.A.AW[3];
                    c.X = a.A.AW[2];
                    c.A6 = a.A.AW[2];
                    c.append(a.A.EO.o);
                    c.parse();
                    c.GM = function(g) {
                        return a.GM(g)
                    };
                    c.C2() && c.parse();
                    c.AK && c.AB != "none" && c.paint()
                }
        }
    }
});
ZC.VE = ZC.G3.B2({
    T: null,
    $i: function(a) {
        this.b(a)
    },
    parse: function() {
        this.b()
    },
    KC: function(a, c) {
        var b = this.A.MB();
        ZC.ET(c, b);
        var e = this.A8 * 100 / this.A.A.K2[this.J],
            f = new String(e);
        if (b[ZC._[14]] != null) f = e.toFixed(ZC.BN(0, ZC._i_(b[ZC._[14]])));
        this.DN = [
            ["%node-percent-value", f],
            ["%npv", f]
        ];
        return a = this.b(a, c)
    },
    SR: function(a) {
        var c = (this.AE + this.AO) / 2 % 360;
        if ((a = a["offset-r"]) != null) ZC._f_(ZC._p_(a));
        c = (new ZC.C3(this.C, (this.BG + 0.5 * (this.AR - this.BG) + this.DI + T.DI) * ZC.CT(c), (this.BG + 0.5 * (this.AR - this.BG) +
            this.DI + T.DI) * ZC.CJ(c), 0)).DP;
        return [c[0], c[1], {
            reference: this,
            center: true
        }]
    },
    setup: function() {
        var a = this.C.AY(this.A.B6("k")[0]),
            c = Math.floor(this.J / a.G6);
        this.iX = a.iX + (a.G6 - 1 - this.J % a.G6) * a.E4 + a.E4 / 2 + a.C0;
        this.iY = a.iY + (a.JN - 1 - c) * a.E5 + a.E5 / 2 + a.C4;
        if (!this.FH) {
            this.copy(this.A);
            this.DE = this.A.DE;
            this.C2() && this.parse();
            this.FH = 1
        }
    },
    O4: function(a) {
        var c = {},
            b = "out";
        if (a.o[ZC._[9]] != null) b = a.o[ZC._[9]];
        c.color = b == "out" ? this.X : this.BO;
        return c
    },
    A00: function(a) {
        var c = "out";
        if (a.o[ZC._[9]] != null) c = a.o[ZC._[9]];
        var b = (this.AE + this.AO) / 2 % 360,
            e, f, g = this.C.AY(this.A.B6("k")[0]),
            h = this.J % g.G6;
        e = Math.floor(this.J / g.G6);
        if (c != "in") {
            f = (this.AR * 1.25 + this.A.DI + a.DI) * ZC.CT(b);
            c = (this.AR * 1.25 + this.A.DI + a.DI) * ZC.CJ(b);
            h = g.iX + h * g.E4 + g.E4 / 2 + g.C0;
            g = g.iY + e * g.E5 + g.E5 / 2 + g.C4;
            e = h + f + a.C0 - a.F / 2;
            c = f = g + c + a.C4 - a.D / 2;
            this.T = a;
            if (b >= 0 && b <= 90 || b >= 270 && b <= 360) e += a.F / 2 + 10;
            else e -= a.F / 2 + 10;
            f = new ZC.C3(this.C, e - ZC.AC.DX, f - ZC.AC.DU, 0);
            e = f.DP[0];
            f = f.DP[1];
            var k = null,
                l = -1;
            if (this.A.J > 0 && this.A.A.AA[this.A.J - 1].M.length > this.J) {
                k = this.A.A.AA[this.A.J -
                    1].M[this.J];
                if (k.T != null && k.T.AK && k.A8 != null) {
                    var m = k.T.iY,
                        o = k.T.D;
                    l = (k.AE + k.AO) / 2 % 360;
                    var n = 0,
                        p = e - h,
                        s = f - g;
                    p = Math.sqrt(p * p + s * s);
                    if (b >= 0 && b <= 90 || b >= 270 && b <= 360 && l >= 0 && l <= 90 || l >= 270 && l <= 360) {
                        if (f < m + o) {
                            s = m + o + 2;
                            n = s - f;
                            f = s
                        }
                    } else if (b > 90 && b < 270 && l > 90 && l < 270)
                        if (m < f + a.D) {
                            s = m - a.D - 2;
                            n = f - s;
                            f = s
                        }
                    if (n != 0 && b) {
                        var t = f - g;
                        if (p >= t && (b > 90 && b < 180 || b >= 270)) {
                            e = Math.asin(t / p);
                            e = e = b > 90 && b < 270 ? h - p * Math.cos(e) : h + p * Math.cos(e)
                        }
                    }
                }
            }
            t = 1;
            n = 0;
            p = e - h;
            s = f - g;
            p = Math.sqrt(p * p + s * s);
            for (s = 0; t && n < 20;) {
                t = 0;
                n++;
                for (var r = {
                    x: e,
                    y: f,
                    width: a.F,
                    height: a.D
                }, u = 0, y = this.A.A.MV.length; u < y; u++) {
                    r.x = e;
                    r.y = f;
                    var w = this.A.A.MV[u];
                    if (ZC.AP._boxoverlap_(r, w)) {
                        if (s == 0) s = c < w.oy ? -1 : 1;
                        if (k != null && l != -1)
                            if ((b >= 0 && b <= 90 || b >= 270 && b <= 360) && (l >= 0 && l <= 90 || l >= 270 && l <= 360)) {
                                if (f < m + o) s = 1
                            } else if (b > 90 && b < 270 && l > 90 && l < 270)
                            if (m < f + a.D) s = -1;
                        f = s == -1 ? w.y - a.D - 2 : w.y + w.height + 2;
                        t = Math.abs(f - g);
                        if (p >= t && (b > 90 && b < 180 || b >= 270)) {
                            e = Math.asin(t / p);
                            e = e = b > 90 && b < 270 ? h - p * Math.cos(e) : h + p * Math.cos(e)
                        }
                        t = 1
                    }
                }
            }
            w = {
                x: e,
                y: f,
                width: a.F,
                height: a.D,
                plotindex: this.A.J,
                nodeindex: this.J,
                oy: c
            };
            this.A.A.MV.push(w)
        } else {
            m =
                (new ZC.C3(this.C, (this.BG + 0.5 * (this.AR - this.BG) + this.DI + a.DI) * ZC.CT(b), (this.BG + 0.5 * (this.AR - this.BG) + this.DI + a.DI) * ZC.CJ(b), 0)).DP;
            e = m[0] - a.CZ / 2 + this.C0;
            f = m[1] - a.C9 / 2 + this.C4
        }
        return [e, f, b]
    },
    FX: function() {
        var a = this,
            c = a.b();
        if (c.AK && c.B0 != null && c.B0 != "") {
            var b = "out";
            if (c.o[ZC._[9]] != null) b = c.o[ZC._[9]];
            if (b == "out") {
                b = 1;
                if ((E = c.o.connected) != null) b = ZC._b_(E);
                if (b) {
                    b = new ZC.D5(a.A);
                    b.Y = b.C6 = a.I.usc() ? a.I.mc("top") : a.C.AM["3d"] || a.I.KY ? ZC.AJ(a.C.Q + "-plots-vb-c") : ZC.AJ(a.C.Q + "-plot-" + a.A.J + "-vb-c");
                    b.append(a.A.AV.o);
                    a.O4(c);
                    b.AT = a.X;
                    b.DQ = "line";
                    b.B = [];
                    var e = c.H.positioninfo,
                        f = (a.AE + a.AO) / 2 % 360,
                        g = e[2],
                        h = 0;
                    if (f >= 0 && f <= 180) h = a.H.thickness / 2;
                    var k = a.C.O.iY + a.C.O.D / 2 - a.iY;
                    f = (new ZC.C3(a.C, a.C.O.iX + a.C.O.F / 2 - a.iX + (a.AR + a.DI + c.DI) * ZC.CT(f), k + (a.AR + a.DI + c.DI) * ZC.CJ(f), h)).DP;
                    f[0] += a.C0;
                    f[1] += a.C4;
                    b.B.push(f);
                    g >= 0 && g <= 90 || g >= 270 && g <= 360 ? b.B.push([e[0] - 10, e[1] + c.D / 2], [e[0], e[1] + c.D / 2]) : b.B.push([e[0] + 10 + c.F, e[1] + c.D / 2], [e[0] + c.F, e[1] + c.D / 2]);
                    b.parse();
                    b.GM = function(l) {
                        return a.GM(l)
                    };
                    b.C2() && b.parse();
                    b.AK && b.paint()
                }
            }
        }
    },
    paint: function() {
        var a = this.C.BP,
            c = this.C.AY(this.A.B6("k")[0]);
        this.C.AY("scale-r");
        var b = this.C.DD[ZC._[30]];
        this.setup();
        if (!(this.A8 < 0)) {
            this.AR = ZC.CO(c.E5, c.E4) / 2;
            if (this.A.o[ZC._[23]] != null) this.AR = this.A.AR;
            this.AR = c.HY * this.AR;
            if (this.BG < 1) this.BG *= this.AR;
            var e = this.A.HU;
            if (e == -1) e = this.AR / 5;
            this.H.thickness = e;
            var f = ZC.AC.DX - this.iX,
                g = ZC.AC.DU - this.iY;
            this.AE = ZC._i_(this.AE);
            this.AO = ZC._i_(this.AO);
            var h = (this.AE + this.AO) / 2;
            if (this.DI > 0) {
                f += this.DI * ZC.CT(h);
                g += this.DI *
                    ZC.CJ(h)
            }
            var k = this.A.F5(this, this),
                l = new ZC.E7(this);
            l.copy(k);
            l.X = ZC.BV.L0(ZC.BV.LF(l.X));
            l.A6 = ZC.BV.L0(ZC.BV.LF(l.A6));
            var m = [],
                o = this.AE;
            m.push([f + this.BG * ZC.CT(o), g + this.BG * ZC.CJ(o), 0]);
            for (o = this.AE; o <= this.AO; o += 1) m.push([f + this.AR * ZC.CT(o), g + this.AR * ZC.CJ(o), 0]);
            o = this.AO;
            m.push([f + this.BG * ZC.CT(o), g + this.BG * ZC.CJ(o), 0]);
            for (o = this.AO; o >= this.AE; o -= 1) m.push([f + this.BG * ZC.CT(o), g + this.BG * ZC.CJ(o), 0]);
            c = ZC.DZ.DL(k, this.C, m);
            a.add(c);
            var n = null;
            if (this.AE % 360 >= 0 + b && this.AE % 360 < 180 + b || this.AO %
                360 > 0 + b) {
                var p = this.AE;
                n = this.AO;
                m = [];
                o = p;
                m.push([f + this.AR * ZC.CT(o), g + this.AR * ZC.CJ(o), 0]);
                for (o = p; o <= n; o += 1) m.push([f + this.AR * ZC.CT(o), g + this.AR * ZC.CJ(o), 0]);
                o = n;
                m.push([f + this.AR * ZC.CT(o), g + this.AR * ZC.CJ(o), e]);
                for (o = n; o >= p; o -= 1) m.push([f + this.AR * ZC.CT(o), g + this.AR * ZC.CJ(o), e]);
                n = ZC.DZ.DL(l, this.C, m);
                if (h % 360 > 0 && h % 360 < 180) n.IU = [0.1, 1, 1, 1];
                a.add(n)
            }
            h = null;
            if (this.BG > 0 + b && this.AO > 180 + b) {
                m = [];
                p = o = this.AE;
                if (this.AE < 180 + b && this.AO > 180 + b) {
                    o = 180 + b;
                    p = 180 + b
                }
                m.push([f + this.BG * ZC.CT(o), g + this.BG * ZC.CJ(o),
                    0
                ]);
                for (o = p; o <= this.AO; o += 1) m.push([f + this.BG * ZC.CT(o), g + this.BG * ZC.CJ(o), 0]);
                o = this.AO;
                m.push([f + this.BG * ZC.CT(o), g + this.BG * ZC.CJ(o), e]);
                for (o = this.AO; o >= p; o -= 1) m.push([f + this.BG * ZC.CT(o), g + this.BG * ZC.CJ(o), e]);
                h = ZC.DZ.DL(l, this.C, m);
                a.add(h)
            }
            o = this.AE;
            m = [
                [f + this.BG * ZC.CT(o), g + this.BG * ZC.CJ(o), 0],
                [f + this.BG * ZC.CT(o), g + this.BG * ZC.CJ(o), e],
                [f + this.AR * ZC.CT(o), g + this.AR * ZC.CJ(o), e],
                [f + this.AR * ZC.CT(o), g + this.AR * ZC.CJ(o), 0]
            ];
            b = ZC.DZ.DL(k, this.C, m);
            a.add(b);
            o = this.AO;
            m = [
                [f + this.BG * ZC.CT(o), g + this.BG *
                    ZC.CJ(o), 0
                ],
                [f + this.BG * ZC.CT(o), g + this.BG * ZC.CJ(o), e],
                [f + this.AR * ZC.CT(o), g + this.AR * ZC.CJ(o), e],
                [f + this.AR * ZC.CT(o), g + this.AR * ZC.CJ(o), 0]
            ];
            e = ZC.DZ.DL(k, this.C, m);
            a.add(e);
            a = this.C.Q + ZC._[36] + this.C.Q + ZC._[37] + this.A.J + ZC._[6];
            a = ZC.K.DM("poly") + 'class="' + a + '" id="' + this.Q;
            f = this.A.A.FN;
            f.push(a + "--top" + ZC._[32] + c.DA() + '"/>');
            n && f.push(a + "--outer" + ZC._[32] + n.DA() + '"/>');
            if (this.BG > 0 || this.DI > 0) {
                h && f.push(a + "--inner" + ZC._[32] + h.DA() + '"/>');
                f.push(a + "--start" + ZC._[32] + b.DA() + '"/>', a + "--end" + ZC._[32] +
                    e.DA() + '"/>')
            }
            this.A.T != null && this.FX()
        }
    }
});
ZC.UL = ZC.G3.B2({
    setup: function() {
        this.OP()
    },
    A00: function(a) {
        var c = "top-out",
            b = this.C.AY(this.A.B6("v")[0]);
        b = this.A8 >= b.EA && !b.AD || this.A8 < b.EA && b.AD ? 1 : -1;
        if (a.o[ZC._[9]] != null) c = a.o[ZC._[9]];
        var e = this.iX + this.F / 2 - a.CZ / 2,
            f = this.iY - a.C9 / 2;
        switch (c) {
            case "top-out":
            case "top":
                f -= b * (a.C9 / 2 + 5);
                break;
            case "top-in":
                f += b * (a.C9 / 2 + 5);
                break;
            case "middle":
                f += b * (this.D / 2);
                break;
            case "bottom-in":
                f += b * (this.D - a.C9 / 2 - 5);
                break;
            case "bottom-out":
            case "bottom":
                f += b * (this.D + a.C9 / 2 + 5)
        }
        return (new ZC.C3(this.C, e - ZC.AC.DX,
            f - ZC.AC.DU, ZC.AC.FK / 2)).DP
    },
    paint: function() {
        if (this.A8 != 0) {
            this.b();
            var a = this.C.BP,
                c = this.A.D0;
            this.setup();
            var b = c.B4(c.EA);
            b = ZC._l_(b, c.iY, c.iY + c.D);
            var e = this.A.MT(),
                f = e.S,
                g = e.EK,
                h = e.CD,
                k = e.CF,
                l = e.EL,
                m = e.BS,
                o = e.E2;
            if (this.A.CL) {
                var n = 0,
                    p = this.A.A.HB[g];
                for (e = 0; e < p.length; e++) {
                    var s = this.A.A.AA[p[e]].M[this.J];
                    if (s) n += s.A8
                }
            }
            g = this.iX - f / 2 + h + g * (m + l) - g * o;
            g = ZC._l_(g, this.iX - f / 2 + h, this.iX + f / 2 - k);
            if (this.A.BS > 0) {
                e = m;
                m = this.A.BS;
                if (m <= 1) m *= e;
                g += (e - m) / 2
            }
            e = m;
            m = this.iY;
            if (this.A.CL) {
                f = this.C.LQ == "100%" ?
                    c.B4(100 * (this.D3 - this.A8) / this.A.A.HF[this.J]["%total"]) : c.B4(this.D3 - this.A8);
                f = ZC._l_(f, c.iY, c.iY + c.D);
                if (m <= f) f = f - this.iY;
                else {
                    m = f;
                    f = this.iY - f
                }
            } else if (m <= b) f = b - this.iY;
            else {
                m = b;
                f = this.iY - b
            } if (h + k == 0) {
                g -= 0.5;
                e += 1
            }
            this.F = e;
            this.D = f;
            this.iX = g;
            this.H.iX = g;
            this.H.iY = m;
            this.H.D9 = b;
            b = g - ZC.AC.DX;
            h = m - ZC.AC.DU;
            k = 0;
            o = ZC.AC.FK;
            if (this.C.AB == "mixed3d" || this.C.AB == "mixed") {
                f = 1;
                e = 0;
                for (k = this.A.A.AA.length; e < k; e++) this.A.A.AA[e].AB != "vbar3d" && f++;
                k = (f - 1) * (ZC.AC.FK / f);
                o = ZC._i_(0.9 * o / f)
            }
            if (this.AK) {
                e = this.A.F5(this,
                    this.R);
                s = this.C.Q + ZC._[36] + this.C.Q + ZC._[37] + this.A.J + ZC._[6];
                f = ZC.K.DM("poly") + 'class="' + s + '" id="' + this.Q;
                var t = 1;
                l = 1;
                if (this.A.CL) {
                    if (this.D3 != this.A8) t = (n - this.D3 + this.A8) / n;
                    l = (n - this.D3) / n
                }
                var r = this.C.DD.true3d;
                n = this.F / 2;
                p = o / 2;
                if (c.AD) {
                    var u = t;
                    t = l;
                    l = u
                }
                var y = t * n,
                    w = l * n,
                    v = l * p,
                    x = t * p;
                if (c.AD && !this.A.CL) {
                    var z = this.A8 >= 0 ? 0 : this.D;
                    u = this.A8 >= 0 ? this.D : 0
                } else {
                    z = this.A8 >= 0 ? this.D : 0;
                    u = this.A8 >= 0 ? 0 : this.D
                }
                c = this.A.A.FN;
                var C = ZC.CO(p, n),
                    B = this.C.DD[ZC._[30]],
                    A = this.C.DD.angle,
                    F = ZC.CT(A) * p;
                A = ZC.CJ(A) *
                    p;
                r || (C = ZC.CO(2 * F, n));
                switch (this.A.CG) {
                    default: var G = ZC.DZ.DH(e, this.C, b + 0.1, b + this.F - 0.1, h + this.D - 0.1, h + this.D - 0.1, k + 0.1, k + o - 0.1, "x");
                    a.add(G);
                    n = ZC.DZ.DH(e, this.C, b + 0.1, b + this.F - 0.1, h + 0.1, h + 0.1, k + 0.1, k + o - 0.1, "x");
                    a.add(n);
                    g = ZC.DZ.DH(e, this.C, b + 0.1, b + 0.1, h + 0.1, h + this.D - 0.1, k + 0.1, k + o - 0.1, "z");
                    a.add(g);
                    m = ZC.DZ.DH(e, this.C, b + this.F - 0.1, b + this.F - 0.1, h + 0.1, h + this.D - 0.1, k + 0.1, k + o - 0.1, "z");
                    a.add(m);
                    o = ZC.DZ.DH(e, this.C, b + 0.1, b + this.F - 0.1, h + 0.1, h + this.D - 0.1, k + 0.1, k + 0.1, "y");
                    a.add(o);
                    if (this.A.GG) {
                        l == 1 && c.push(ZC.K.DM("poly") +
                            'class="' + s + '" id="' + this.Q + "--top" + ZC._[32] + n.DA() + '"/>');
                        c.push(f + "--left" + ZC._[32] + g.DA() + '"/>', f + "--right" + ZC._[32] + m.DA() + '"/>', f + "--front" + ZC._[32] + o.DA() + '"/>')
                    }
                    break;
                    case "pyramid":
                        G = ZC.DZ.DH(e, this.C, b + n - y, b + n + y, h + z, h + z, k + p - x, k + p + x, "x");
                        a.add(G);
                        s = [
                            [b + n - y, h + z, k + p - x],
                            [b + n + y, h + z, k + p - x]
                        ];
                        this.A.CL && l != 0 ? s.push([b + n + w, h + u, k + p - v], [b + n - w, h + u, k + p - v]) : s.push([b + n, h + u, k + p]);
                        o = ZC.DZ.DL(e, this.C, s);
                        a.add(o);
                        s = [
                            [b + n - y, h + z, k + p - x],
                            [b + n - y, h + z, k + p + x]
                        ];
                        this.A.CL && l != 0 ? s.push([b + n - w, h + u, k + p + v], [b + n - w, h + u,
                            k + p - v
                        ]) : s.push([b + n, h + u, k + p]);
                        g = ZC.DZ.DL(e, this.C, s);
                        a.add(g);
                        s = [
                            [b + n + y, h + z, k + p - x],
                            [b + n + y, h + z, k + p + x]
                        ];
                        this.A.CL && l != 0 ? s.push([b + n + w, h + u, k + p + v], [b + n + w, h + u, k + p - v]) : s.push([b + n, h + u, k + p]);
                        m = ZC.DZ.DL(e, this.C, s);
                        a.add(m);
                        if (this.A.CL && l != 0) {
                            s = [
                                [b + n - w, h + u, k + p - v],
                                [b + n - w, h + u, k + p + v],
                                [b + n + w, h + u, k + p + v],
                                [b + n + w, h + u, k + p - v]
                            ];
                            n = ZC.DZ.DL(e, this.C, s);
                            a.add(n)
                        }
                        this.A.GG && c.push(f + "--left" + ZC._[32] + g.DA() + '"/>', f + "--right" + ZC._[32] + m.DA() + '"/>', f + "--front" + ZC._[32] + o.DA() + '"/>');
                        break;
                    case "cylinder":
                        s = [];
                        if (r)
                            for (w =
                                0; w <= 360; w += 5) s.push([b + ZC.CJ(w) * C + n, h + this.D, k + ZC.CT(w) * C + p]);
                        else
                            for (w = 0; w <= 360; w += 5) {
                                v = new ZC.C3(this.C, 0, 0, 0);
                                v.DP = [g + ZC.CT(w) * C + n + F, m + this.D + ZC.CJ(w) * (C / 2) - A];
                                s.push(v)
                            }
                        G = ZC.DZ.DL(e, this.C, s, !r);
                        a.add(G);
                        s = [];
                        if (r) {
                            for (w = 90 + B; w <= 270 + B; w += 5) s.push([b + ZC.CJ(w) * C + n, h, k + ZC.CT(w) * C + p]);
                            s.push([b + ZC.CJ(w) * C + n, h + this.D, k + ZC.CT(w) * C + p]);
                            for (w = 270 + B; w >= 90 + B; w -= 5) s.push([b + ZC.CJ(w) * C + n, h + this.D, k + ZC.CT(w) * C + p])
                        } else {
                            for (w = 0; w <= 180; w += 5) {
                                v = new ZC.C3(this.C, 0, 0, 0);
                                v.DP = [g + ZC.CT(w) * C + n + F, m + this.D + ZC.CJ(w) *
                                    (C / 2) - A
                                ];
                                s.push(v)
                            }
                            for (w = 180; w >= 0; w -= 5) {
                                v = new ZC.C3(this.C, 0, 0, 0);
                                v.DP = [g + ZC.CT(w) * C + n + F, m + ZC.CJ(w) * (C / 2) - A];
                                s.push(v)
                            }
                        }
                        o = ZC.DZ.DL(e, this.C, s, !r);
                        a.add(o);
                        s = [];
                        if (r)
                            for (w = 0; w <= 360; w += 5) s.push([b + ZC.CJ(w) * C + n, h, k + ZC.CT(w) * C + p]);
                        else
                            for (w = 0; w <= 360; w += 5) {
                                v = new ZC.C3(this.C, 0, 0, 0);
                                v.DP = [g + ZC.CT(w) * C + n + F, m + ZC.CJ(w) * (C / 2) - A];
                                s.push(v)
                            }
                        n = ZC.DZ.DL(e, this.C, s, !r);
                        a.add(n);
                        this.A.GG && c.push(f + "--front" + ZC._[32] + o.DA() + '"/>', f + "--top" + ZC._[32] + n.DA() + '"/>');
                        break;
                    case "cone":
                        s = [];
                        if (r)
                            for (w = 0; w <= 360; w += 5) s.push([b +
                                ZC.CJ(w) * C * t + n, h + z, k + ZC.CT(w) * C * t + p
                            ]);
                        else
                            for (w = 0; w <= 360; w += 5) {
                                v = new ZC.C3(this.C, 0, 0, 0);
                                v.DP = [g + ZC.CT(w) * C * t + n + F, m + z + ZC.CJ(w) * (C / 2) * t - A];
                                s.push(v)
                            }
                        G = ZC.DZ.DL(e, this.C, s, !r);
                        a.add(G);
                        s = [];
                        if (r) {
                            for (w = 90 + B; w <= 270 + B; w += 5) s.push([b + ZC.CJ(w) * C * t + n, h + z, k + ZC.CT(w) * C * t + p]);
                            if (this.A.CL && l != 0)
                                for (w = 270 + B; w >= 90 + B; w -= 5) s.push([b + ZC.CJ(w) * C * l + n, h + u, k + ZC.CT(w) * C * l + p]);
                            else s.push([b + n, h + u, k + p])
                        } else {
                            for (w = 0; w <= 180; w += 5) {
                                v = new ZC.C3(this.C, 0, 0, 0);
                                v.DP = [g + ZC.CT(w) * C * t + n + F, m + z + ZC.CJ(w) * (C / 2) * t - A];
                                s.push(v)
                            }
                            if (this.A.CL &&
                                l != 0)
                                for (w = 180; w >= 0; w -= 5) {
                                    v = new ZC.C3(this.C, 0, 0, 0);
                                    v.DP = [g + ZC.CT(w) * C * l + n + F, m + u + ZC.CJ(w) * (C / 2) * l - A];
                                    s.push(v)
                                } else {
                                    v = new ZC.C3(this.C, 0, 0, 0);
                                    v.DP = [g + n + F, m + u - A];
                                    s.push(v)
                                }
                        }
                        o = ZC.DZ.DL(e, this.C, s, !r);
                        a.add(o);
                        if (this.A.CL && l != 0) {
                            s = [];
                            if (r)
                                for (w = 0; w <= 360; w += 5) s.push([b + ZC.CJ(w) * C * l + n, h + u, k + ZC.CT(w) * C * l + p]);
                            else
                                for (w = 0; w <= 360; w += 5) {
                                    v = new ZC.C3(this.C, 0, 0, 0);
                                    v.DP = [g + ZC.CT(w) * C * l + n + F, m + u + ZC.CJ(w) * (C / 2) * l - A];
                                    s.push(v)
                                }
                            n = ZC.DZ.DL(e, this.C, s, !r);
                            a.add(n)
                        }
                        this.A.GG && c.push(f + "--front" + ZC._[32] + o.DA() + '"/>')
                }
                this.A.T !=
                    null && this.FX()
            }
        }
    }
});
ZC.UI = ZC.G3.B2({
    setup: function() {
        this.OP()
    },
    A00: function(a) {
        var c = "top-out",
            b = this.C.AY(this.A.B6("v")[0]);
        b = this.A8 >= b.EA && !b.AD || this.A8 < b.EA && b.AD ? -1 : 1;
        if (a.o[ZC._[9]] != null) c = a.o[ZC._[9]];
        var e = this.iX - a.CZ / 2,
            f = this.iY + this.D / 2 - a.C9 / 2;
        switch (c) {
            case "top-out":
            case "top":
                e -= b * (a.CZ / 2 + 5);
                break;
            case "top-in":
                e += b * (a.CZ / 2 + 5);
                break;
            case "middle":
                e += b * (this.F / 2);
                break;
            case "bottom-in":
                e += b * (this.F - a.CZ / 2 - 5);
                break;
            case "bottom-out":
            case "bottom":
                e += b * (this.F + a.CZ / 2 + 5)
        }
        return (new ZC.C3(this.C, e - ZC.AC.DX,
            f - ZC.AC.DU, ZC.AC.FK / 2)).DP
    },
    paint: function() {
        if (this.A8 != 0) {
            this.b();
            var a = this.C.BP,
                c = this.A.D0;
            this.setup();
            var b = c.B4(c.EA);
            b = ZC._l_(b, c.iX, c.iX + c.F);
            var e = this.A.MT(),
                f = e.S,
                g = e.EK,
                h = e.CD,
                k = e.CF,
                l = e.EL,
                m = e.BS;
            e = e.E2;
            if (this.A.CL)
                for (var o = 0, n = this.A.A.HB[g], p = 0; p < n.length; p++) {
                    var s = this.A.A.AA[n[p]].M[this.J];
                    if (s) o += s.A8
                }
            g = this.iY - f / 2 + h + g * (m + l) - g * e;
            g = ZC._l_(g, this.iY - f / 2 + h, this.iY + f / 2 - k);
            if (this.A.BS > 0) {
                f = m;
                m = this.A.BS;
                if (m <= 1) m *= f;
                g += (f - m) / 2
            }
            f = m;
            m = this.iX;
            if (this.A.CL) {
                l = this.C.LQ == "100%" ? c.B4(100 *
                    (this.D3 - this.A8) / this.A.A.HF[this.J]["%total"]) : c.B4(this.D3 - this.A8);
                l = ZC._l_(l, c.iX, c.iX + c.F);
                if (m <= l) {
                    l = l - this.iX;
                    if (l < 2) {
                        l = 2;
                        m -= 2
                    }
                } else {
                    m = l;
                    l = this.iX - l;
                    if (l < 2) l = 2
                }
            } else if (m <= b) {
                l = b - this.iX;
                if (l < 2) {
                    l = 2;
                    m -= 2
                }
            } else {
                m = b;
                l = this.iX - b;
                if (l < 2) l = 2
            } if (h + k == 0) {
                g -= 0.5;
                f += 1
            }
            this.F = l;
            this.D = f;
            this.iY = g;
            this.H.iX = m;
            this.H.iY = g;
            this.H.GD = b;
            h = this.iX - ZC.AC.DX;
            k = this.iY - ZC.AC.DU;
            if (m < b) h += this.F;
            e = ZC.AC.FK;
            if (this.AK) {
                b = this.A.F5(this, this.R);
                f = this.C.Q + ZC._[36] + this.C.Q + ZC._[37] + this.A.J + ZC._[6];
                f = ZC.K.DM("poly") +
                    'class="' + f + '" id="' + this.Q;
                l = p = 1;
                if (this.A.CL) {
                    if (this.D3 != this.A8) p = (o - this.D3 + this.A8) / o;
                    l = (o - this.D3) / o
                }
                s = this.C.DD.true3d;
                o = this.D / 2;
                n = e / 2;
                if (c.AD) {
                    var t = p;
                    p = l;
                    l = t
                }
                var r = p * o,
                    u = l * o,
                    y = l * n,
                    w = p * n;
                if (c.AD && !this.A.CL) {
                    var v = this.A8 >= 0 ? 0 : this.F;
                    t = this.A8 >= 0 ? this.F : 0
                } else {
                    v = this.A8 >= 0 ? this.F : 0;
                    t = this.A8 >= 0 ? 0 : this.F
                }
                c = this.A.A.FN;
                var x = ZC.CO(n, o),
                    z = this.C.DD[ZC._[29]],
                    C = this.C.DD.angle,
                    B = ZC.CT(C) * n;
                C = ZC.CJ(C) * n;
                s || (x = ZC.CO(2 * C, o));
                switch (this.A.CG) {
                    default: g = ZC.DZ.DH(b, this.C, h - this.F + 0.1, h - 0.1, k + 0.1,
                        k + 0.1, 0.1, 0 + e - 0.1, "x");
                    a.add(g);
                    m = ZC.DZ.DH(b, this.C, h - this.F + 0.1, h - 0.1, k + this.D - 0.1, k + this.D - 0.1, 0.1, 0 + e - 0.1, "x");
                    a.add(m);
                    var A = ZC.DZ.DH(b, this.C, h - this.F + 0.1, h - this.F + 0.1, k + this.D - 0.1, k + 0.1, 0.1, 0 + e - 0.1, "z");
                    a.add(A);
                    l = ZC.DZ.DH(b, this.C, h - 0.1, h - 0.1, k + this.D - 0.1, k + 0.1, 0.1, 0 + e - 0.1, "z");
                    a.add(l);
                    p = ZC.DZ.DH(b, this.C, h - this.F + 0.1, h - 0.1, k + this.D - 0.1, k + 0.1, 0.1, 0.1, "y");
                    a.add(p);
                    if (this.A.GG) {
                        this.A.CL || c.push(f + "--top" + ZC._[32] + l.DA() + '"/>');
                        c.push(f + "--left" + ZC._[32] + g.DA() + '"/>', f + "--right" + ZC._[32] +
                            m.DA() + '"/>', f + "--front" + ZC._[32] + p.DA() + '"/>')
                    }
                    break;
                    case "pyramid":
                        A = ZC.DZ.DH(b, this.C, h - v, h - v, k + o - r, k + o + r, n - w, n + w, "z");
                        a.add(A);
                        A = [
                            [h - v, k + o - r, n - w],
                            [h - v, k + o + r, n - w]
                        ];
                        this.A.CL && l != 0 ? A.push([h - t, k + o + u, n - y], [h - t, k + o - u, n - y]) : A.push([h - t, k + o, e / 2]);
                        p = ZC.DZ.DL(b, this.C, A);
                        a.add(p);
                        A = [
                            [h - v, k + o - r, n - w],
                            [h - v, k + o - r, n + w]
                        ];
                        this.A.CL && l != 0 ? A.push([h - t, k + o - u, n + y], [h - t, k + o - u, n - y]) : A.push([h - t, k + this.D / 2, e / 2]);
                        g = ZC.DZ.DL(b, this.C, A);
                        a.add(g);
                        A = [
                            [h - v, k + o + r, n - w],
                            [h - v, k + o + r, n + w]
                        ];
                        this.A.CL && l != 0 ? A.push([h - t, k + o + u, n +
                            y
                        ], [h - t, k + o + u, n - y]) : A.push([h - t, k + o, e / 2]);
                        m = ZC.DZ.DL(b, this.C, A);
                        a.add(m);
                        if (this.A.CL && l != 0) {
                            l = ZC.DZ.DH(b, this.C, h - t, h - t, k + o - u, k + o + u, n - y, n + y, "z");
                            a.add(l)
                        }
                        this.A.GG && c.push(f + "--left" + ZC._[32] + g.DA() + '"/>', f + "--right" + ZC._[32] + m.DA() + '"/>', f + "--front" + ZC._[32] + p.DA() + '"/>');
                        break;
                    case "cylinder":
                        A = [];
                        if (s)
                            for (e = 0; e <= 360; e += 5) A.push([h - this.F, k + ZC.CJ(e) * x + o, ZC.CT(e) * x + n]);
                        else
                            for (e = 0; e <= 360; e += 5) {
                                u = new ZC.C3(this.C, 0, 0, 0);
                                u.DP = [m + ZC.CT(e) * (x / 2) + B, g + o + ZC.CJ(e) * x - C];
                                A.push(u)
                            }
                        A = ZC.DZ.DL(b, this.C, A, !s);
                        a.add(A);
                        A = [];
                        if (s) {
                            for (e = 90 - z; e <= 270 - z; e += 5) A.push([h - this.F, k + ZC.CJ(e) * x + o, ZC.CT(e) * x + n]);
                            A.push([h, k + ZC.CJ(e) * x + o, ZC.CT(e) * x + n]);
                            for (e = 270 - z; e >= 90 - z; e -= 5) A.push([h, k + ZC.CJ(e) * x + o, ZC.CT(e) * x + n])
                        } else {
                            for (e = 90; e <= 270; e += 5) {
                                u = new ZC.C3(this.C, 0, 0, 0);
                                u.DP = [m + ZC.CT(e) * (x / 2) + B, g + o + ZC.CJ(e) * x - C];
                                A.push(u)
                            }
                            for (e = 270; e >= 90; e -= 5) {
                                u = new ZC.C3(this.C, 0, 0, 0);
                                u.DP = [m + ZC.CT(e) * (x / 2) + this.F + B, g + o + ZC.CJ(e) * x - C];
                                A.push(u)
                            }
                        }
                        p = ZC.DZ.DL(b, this.C, A, !s);
                        a.add(p);
                        A = [];
                        if (s)
                            for (e = 0; e <= 360; e += 5) A.push([h, k + ZC.CJ(e) *
                                x + o, ZC.CT(e) * x + n
                            ]);
                        else
                            for (e = 0; e <= 360; e += 5) {
                                u = new ZC.C3(this.C, 0, 0, 0);
                                u.DP = [m + ZC.CT(e) * (x / 2) + this.F + B, g + o + ZC.CJ(e) * x - C];
                                A.push(u)
                            }
                        l = ZC.DZ.DL(b, this.C, A, !s);
                        a.add(l);
                        this.A.GG && c.push(f + "--front" + ZC._[32] + p.DA() + '"/>', f + "--top" + ZC._[32] + l.DA() + '"/>');
                        break;
                    case "cone":
                        A = [];
                        if (s)
                            for (e = 0; e <= 360; e += 5) A.push([h - v, k + ZC.CJ(e) * x * p + o, ZC.CT(e) * x * p + n]);
                        else
                            for (e = 0; e <= 360; e += 5) {
                                u = new ZC.C3(this.C, 0, 0, 0);
                                u.DP = [m + t + ZC.CT(e) * (x / 2) * p + B, g + o + ZC.CJ(e) * x * p - C];
                                A.push(u)
                            }
                        A = ZC.DZ.DL(b, this.C, A, !s);
                        a.add(A);
                        A = [];
                        if (s) {
                            for (e =
                                90 - z; e <= 270 - z; e += 5) A.push([h - v, k + ZC.CJ(e) * x * p + o, ZC.CT(e) * x * p + n]);
                            if (this.A.CL && l != 0)
                                for (e = 270 - z; e >= 90 - z; e -= 5) A.push([h - t, k + ZC.CJ(e) * x * l + o, ZC.CT(e) * x * l + n]);
                            else A.push([h - t, k + o, x])
                        } else {
                            for (e = 90; e <= 270; e += 5) {
                                u = new ZC.C3(this.C, 0, 0, 0);
                                u.DP = [m + t + ZC.CT(e) * (x / 2) * p + B, g + o + ZC.CJ(e) * x * p - C];
                                A.push(u)
                            }
                            if (this.A.CL && l != 0)
                                for (e = 270; e >= 90; e -= 5) {
                                    u = new ZC.C3(this.C, 0, 0, 0);
                                    u.DP = [m + v + ZC.CT(e) * (x / 2) * l + B, g + o + ZC.CJ(e) * x * l - C];
                                    A.push(u)
                                } else {
                                    u = new ZC.C3(this.C, 0, 0, 0);
                                    u.DP = [m + v + B, g + o - C];
                                    A.push(u)
                                }
                        }
                        p = ZC.DZ.DL(b, this.C, A, !s);
                        a.add(p);
                        if (this.A.CL && l != 0) {
                            A = [];
                            if (s)
                                for (e = 0; e <= 360; e += 5) A.push([h - t, k + ZC.CJ(e) * x * l + o, ZC.CT(e) * x * l + n]);
                            else
                                for (e = 0; e <= 360; e += 5) {
                                    u = new ZC.C3(this.C, 0, 0, 0);
                                    u.DP = [m + v + ZC.CT(e) * (x / 2) * l + B, g + o + ZC.CJ(e) * x * l - C];
                                    A.push(u)
                                }
                            l = ZC.DZ.DL(b, this.C, A, !s);
                            a.add(l)
                        }
                        this.A.GG && c.push(f + "--front" + ZC._[32] + p.DA() + '"/>')
                }
            }
            this.A.T != null && this.FX()
        }
    }
});
ZC.UX = ZC.G3.B2({
    setup: function() {
        this.OP()
    },
    O4: function() {
        return {
            color: this.R.AT
        }
    },
    R9: function() {
        return {
            "background-color": this.R.AT,
            color: this.R.BO
        }
    },
    paint: function() {
        this.b();
        var a = this.A.B3,
            c = this.A.M;
        this.setup();
        this.CV = 0;
        this.R.C6 = this.A.B5("bl", 0);
        var b, e = [];
        switch (this.A.CG) {
            default: b = 1;
            if (!a.D8 && this.J <= a.V) b = 0;
            if (c[this.J - this.A.U] == null) b = 0;
            if (b) {
                c[this.J - this.A.U].setup();
                b = ZC.AP.I4(c[this.J - this.A.U].iX, c[this.J - this.A.U].iY, c[this.J].iX, c[this.J].iY);
                e.push(b)
            }
            e.push([this.iX, this.iY]);
            b = 1;
            if (!a.D8 && this.J >= a.A2) b = 0;
            if (c[this.J + this.A.U] == null) b = 0;
            if (b) {
                c[this.J + this.A.U].setup();
                b = ZC.AP.I4(c[this.J].iX, c[this.J].iY, c[this.J + this.A.U].iX, c[this.J + this.A.U].iY, this.R.A9);
                e.push(b)
            }
            break;
            case "spline":
                if (this.A.B != null) e = this.A.B;
                this.A.B = [];
                if (this.J < a.A2 && c[this.J + 1] != null) {
                    var f = [];
                    for (b = -1; b < 3; b++)
                        if (c[this.J + b] != null) {
                            c[this.J + b].setup();
                            f.push(c[this.J + b].iY)
                        } else f.length == 0 ? f.push(this.iY) : f.push(f[f.length - 1]);
                    c = ZC.AP.NO(f, ZC._i_(a.S * this.A.U));
                    for (b = 0; b < ZC._i_(c.length /
                        2); b++) e.push([this.iX + (a.AD ? -1 : 1) * c[b][0] * a.S, c[b][1]]);
                    b = ZC._i_(c.length / 2) - 1;
                    for (f = c.length; b < f; b++) this.A.B.push([this.iX + (a.AD ? -1 : 1) * c[b][0] * a.S, c[b][1]])
                } else e.push([c[this.J].iX, c[this.J].iY]);
                break;
            case "stepped":
                b = 1;
                if (!a.D8 && this.J <= a.V) b = 0;
                if (c[this.J - this.A.U] == null) b = 0;
                if (b) {
                    c[this.J - this.A.U].setup();
                    b = [this.iX - (a.AD ? -1 : 1) * a.S / 2, c[this.J - this.A.U].iY];
                    e.push(b);
                    b = [this.iX - (a.AD ? -1 : 1) * a.S / 2, this.iY];
                    e.push(b)
                }
                b = [this.iX, this.iY];
                e.push(b);
                b = 1;
                if (!a.D8 && this.J >= a.A2) b = 0;
                if (c[this.J + this.A.U] ==
                    null) b = 0;
                if (b) {
                    b = [this.iX + (a.AD ? -1 : 1) * a.S / 2, this.iY];
                    e.push(b)
                }
                break;
            case "jumped":
                b = 1;
                if (!a.D8 && this.J <= a.V) b = 0;
                if (c[this.J - this.A.U] == null) b = 0;
                if (b) {
                    b = [this.iX - (a.AD ? -1 : 1) * a.S / 2, this.iY];
                    e.push(b)
                }
                b = [this.iX, this.iY];
                e.push(b);
                b = 1;
                if (!a.D8 && this.J >= a.A2) b = 0;
                if (c[this.J + this.A.U] == null) b = 0;
                if (b) {
                    b = [this.iX + (a.AD ? -1 : 1) * a.S / 2, this.iY];
                    e.push(b)
                }
        }
        c = this.A.F5(this, this.R);
        var g = 0;
        f = -1;
        var h = ZC.AC.FK;
        if (this.A.CL) f = 0;
        else {
            for (b = 0; b < this.A.A.AA.length; b++) this.C.H["plot" + b + ".visible"] && f++;
            for (b = 0; b < this.A.A.AA.length; b++)
                if (this.C.H["plot" +
                    b + ".visible"]) {
                    g++;
                    this.A.J > b && f--
                }
            h /= g
        }
        c.X = c.A6 = c.AT;
        c.AU = c.AI;
        if (this.A.CG == "spline") c.BI = c.AT;
        for (b = 0; b < e.length - 1; b++) {
            var k = new ZC.PS(c, this.C);
            k.add(new ZC.C3(this.C, e[b][0] - ZC.AC.DX, e[b][1] - ZC.AC.DU, f * h));
            k.add(new ZC.C3(this.C, e[b + 1][0] - ZC.AC.DX, e[b + 1][1] - ZC.AC.DU, f * h));
            k.add(new ZC.C3(this.C, e[b + 1][0] - ZC.AC.DX, e[b + 1][1] - ZC.AC.DU, (f + 1) * h - 1));
            k.add(new ZC.C3(this.C, e[b][0] - ZC.AC.DX, e[b][1] - ZC.AC.DU, (f + 1) * h - 1));
            this.C.BP.add(k)
        }
        if (k && k.B.length >= 4) this.H.points = [k.B[0].DP, k.B[1].DP, k.B[2].DP,
            k.B[3].DP
        ];
        !this.C.JP && ZC.DK(this.iX, a.iX - 1, a.iX + a.F + 1) && ZC.DK(this.iY, a.iY - 1, a.iY + a.D + 1) && this.JH(true)
    },
    A2G: function() {}
});
ZC.UV = ZC.G3.B2({
    setup: function() {
        this.OP()
    },
    O4: function() {
        return {
            color: this.R.AT
        }
    },
    R9: function() {
        return {
            "background-color": this.R.AT,
            color: this.R.BO
        }
    },
    paint: function() {
        this.b();
        var a = this.A.B3,
            c = this.A.D0,
            b = this.A.M;
        this.setup();
        this.CV = 0;
        this.R.C6 = this.A.B5("bl", 1);
        var e = c.B4(c.EA);
        e = ZC._l_(e, c.iY, c.iY + c.D);
        var f = this.C.AB == "mixed" || this.C.AB == "mixed3d" ? a.S / 2 : 0;
        c = [];
        var g = [],
            h = [],
            k = null;
        if (this.A.A.C1 != null && this.A.A.C1[this.J] != null) k = this.A.A.C1[this.J];
        var l = 0.1;
        if (this.A.DV == 1) l = 1;
        else if (this.I.A5 ==
            "canvas")
            if (ZC.A3.browser.msie || ZC.A3.browser.opera) l = 0.15;
        switch (this.A.CG) {
            default: var m = 1;
            if (!a.D8 && this.J <= a.V) m = 0;
            if (b[this.J - this.A.U] == null) m = 0;
            if (m) {
                b[this.J - this.A.U].setup();
                m = ZC.AP.I4(b[this.J - this.A.U].iX, b[this.J - this.A.U].iY, b[this.J].iX, b[this.J].iY);
                h.push([ZC._i_(m[0]), m[1] - this.AI / 2 + 1]);
                if (!this.A.CL || k == null) g.push([ZC._i_(m[0]) - l, e]);
                g.push([ZC._i_(m[0]) - l, m[1]]);
                c.push([m[0], m[1]])
            } else if (this.J == a.V)
                if (a.AD) {
                    if (!this.A.CL || k == null) g.push([ZC._i_(a.iX + a.F - a.CP - f), e]);
                    g.push([ZC._i_(a.iX +
                        a.F - a.CP - f), this.iY])
                } else {
                    if (!this.A.CL || k == null) g.push([ZC._i_(a.iX + a.Z + f) - l, e]);
                    g.push([ZC._i_(a.iX + a.Z + f), this.iY])
                } else if (!this.A.CL || k == null) {
                g.push([ZC._i_(this.iX) - l, e]);
                h.push([ZC._i_(this.iX - a.S / 2), e]);
                h.push([ZC._i_(this.iX), e])
            } else if (this.A.A.AA[this.A.J - 1] != null) {
                m = this.A.A.AA[this.A.J - 1];
                m.M[this.J] != null && g.push([ZC._i_(this.iX), m.M[this.J].iY])
            }
            h.push([ZC._i_(this.iX), this.iY - this.AI / 2 + 1]);
            g.push([ZC._i_(this.iX) - l, this.iY]);
            c.push([this.iX, this.iY]);
            l = 1;
            if (!a.D8 && this.J >= a.A2) l =
                0;
            if (b[this.J + this.A.U] == null) l = 0;
            if (l) {
                b[this.J + this.A.U].setup();
                f = ZC.AP.I4(b[this.J].iX, b[this.J].iY, b[this.J + this.A.U].iX, b[this.J + this.A.U].iY);
                h.push([ZC._i_(f[0]), f[1] - this.AI / 2 + 1]);
                g.push([ZC._i_(f[0]), f[1]]);
                h.push([ZC._i_(f[0]), f[1] - this.AI / 2 + 1]);
                if (!this.A.CL || k == null) g.push([ZC._i_(f[0]), e]);
                m = ZC.AP.I4(b[this.J].iX, b[this.J].iY, b[this.J + this.A.U].iX, b[this.J + this.A.U].iY, this.A9);
                c.push([m[0], m[1]])
            } else if (this.J == a.A2)
                if (a.AD) {
                    g.push([a.iX + a.Z - f, this.iY]);
                    if (!this.A.CL || k == null) g.push([ZC._i_(a.iX +
                        a.Z - f), e])
                } else {
                    g.push([a.iX + a.F - a.CP - f, this.iY]);
                    if (!this.A.CL || k == null) g.push([ZC._i_(a.iX + a.F - a.CP - f), e])
                } else if (!this.A.CL || k == null) {
                g.push([ZC._i_(this.iX), e]);
                h.push([ZC._i_(this.iX), e]);
                h.push([ZC._i_(this.iX + a.S / 2), e])
            } else if (this.A.A.AA[this.A.J - 1] != null) {
                m = this.A.A.AA[this.A.J - 1];
                m.M[this.J] != null && g.push([ZC._i_(this.iX), m.M[this.J].iY])
            }
            break;
            case "spline":
                if (this.A.CC != null) h = this.A.CC;
                if (this.A.A4 != null) g = this.A.A4;
                this.A.CC = [];
                this.A.A4 = [];
                if (this.A.B != null) c = this.A.B;
                this.A.B = [];
                if (b[this.J + this.A.U] != null) {
                    m = [];
                    for (f = -1; f < 3; f++)
                        if (b[this.J + f] != null) {
                            b[this.J + f].setup();
                            m.push(b[this.J + f].iY)
                        } else m.length == 0 ? m.push(this.iY) : m.push(m[m.length - 1]);
                    b = ZC.AP.NO(m, ZC._i_(a.S * this.A.U), 0.1);
                    if (g.length == 0)
                        if (!this.A.CL || k == null) g.push([ZC._i_(this.iX + (a.AD ? -1 : 1) * b[0][0] * a.S), e]);
                    for (f = 0; f < ZC._i_(b.length / 2); f++) {
                        c.push([this.iX + (a.AD ? -1 : 1) * b[f][0] * a.S, b[f][1]]);
                        h.push([ZC._i_(this.iX + (a.AD ? -1 : 1) * b[f][0] * a.S), b[f][1] - this.AI / 2 + 1]);
                        f == ZC._i_(b.length / 2) - 1 ? g.push([ZC._i_(this.iX +
                            (a.AD ? -1 : 1) * b[f][0] * a.S) + l, b[f][1]]) : g.push([ZC._i_(this.iX + (a.AD ? -1 : 1) * b[f][0] * a.S), b[f][1]])
                    }
                    if (!this.A.CL || k == null) g.push([ZC._i_(g[g.length - 1][0]) + l, e]);
                    l = this.A.DV == 1 ? ZC.CO(2, ZC._i_(b.length / 2)) : 1;
                    for (f = ZC._i_(b.length / 2) - 1; f < b.length; f++) this.A.B.push([this.iX + (a.AD ? -1 : 1) * b[f][0] * a.S, b[f][1]]);
                    f = ZC._i_(b.length / 2) - l;
                    for (l = b.length; f < l; f++) {
                        if (this.A.A4.length == 0)
                            if (!this.A.CL || k == null) this.A.A4.push([ZC._i_(this.iX + (a.AD ? -1 : 1) * b[f][0] * a.S), e]);
                        this.A.A4.push([ZC._i_(this.iX + (a.AD ? -1 : 1) * b[f][0] *
                            a.S), b[f][1]]);
                        this.A.CC.push([ZC._i_(this.iX + (a.AD ? -1 : 1) * b[f][0] * a.S), b[f][1] - this.AI / 2 + 1])
                    }
                } else {
                    h.push([ZC._i_(b[this.J].iX), b[this.J].iY - this.AI / 2 + 1]);
                    g.push([ZC._i_(b[this.J].iX), b[this.J].iY]);
                    if (!this.A.CL || k == null) g.push([ZC._i_(g[g.length - 1][0]), e]);
                    c.push([b[this.J].iX, b[this.J].iY])
                }
        }
        if (this.A.CL && k != null) {
            if (k.length > 0)
                if (this.A.DV == 1) k[0][0] -= 1;
            for (f = k.length - 1; f >= 0; f--) g.push(k[f])
        }
        if (this.A.A.C1 == null) this.A.A.C1 = [];
        this.A.A.C1[this.J] = h;
        this.J % 2 == 1 && g.reverse();
        h = this.A.F5(this, this.R);
        l = 0;
        k = -1;
        b = ZC.AC.FK;
        if (this.A.CL) k = 0;
        else {
            for (f = 0; f < this.A.A.AA.length; f++) this.C.H["plot" + f + ".visible"] && k++;
            for (f = 0; f < this.A.A.AA.length; f++)
                if (this.C.H["plot" + f + ".visible"]) {
                    l++;
                    this.A.J > f && k--
                }
            b /= l
        }
        m = new ZC.E7(this);
        m.copy(h);
        m.J0 = 1;
        m.AU = 0;
        m.A9 = this.A.DV;
        f = new ZC.PS(m, this.C);
        l = 0;
        for (var o = g.length; l < o; l++) {
            var n = new ZC.C3(this.C, g[l][0] - ZC.AC.DX, g[l][1] - ZC.AC.DU, k * b);
            f.add(n)
        }
        this.C.BP.add(f);
        this.H.pointsarea = g;
        if (this.J == this.A.M.length - 1) {
            f = new ZC.PS(m, this.C);
            f.add(new ZC.C3(this.C, this.iX -
                0.5 - ZC.AC.DX, this.iY - ZC.AC.DU, k * b));
            f.add(new ZC.C3(this.C, this.iX - 0.5 - ZC.AC.DX, e - ZC.AC.DU, k * b));
            f.add(new ZC.C3(this.C, this.iX - 0.5 - ZC.AC.DX, e - ZC.AC.DU, (k + 1) * b - 1));
            f.add(new ZC.C3(this.C, this.iX - 0.5 - ZC.AC.DX, this.iY - ZC.AC.DU, (k + 1) * b - 1));
            this.C.BP.add(f)
        }
        e = new ZC.E7(this);
        e.copy(h);
        e.X = e.A6 = h.AT;
        e.AU = e.AI;
        if (this.A.CG == "spline") e.BI = h.AT;
        for (l = 0; l < c.length - 1; l++) {
            f = new ZC.PS(e, this.C);
            f.add(new ZC.C3(this.C, c[l][0] - ZC.AC.DX, c[l][1] - ZC.AC.DU, k * b));
            f.add(new ZC.C3(this.C, c[l + 1][0] - ZC.AC.DX, c[l + 1][1] -
                ZC.AC.DU, k * b));
            f.add(new ZC.C3(this.C, c[l + 1][0] - ZC.AC.DX, c[l + 1][1] - ZC.AC.DU, (k + 1) * b - 1));
            f.add(new ZC.C3(this.C, c[l][0] - ZC.AC.DX, c[l][1] - ZC.AC.DU, (k + 1) * b - 1));
            this.C.BP.add(f)
        }
        if (f && f.B.length >= 4) this.H.points = [f.B[0].DP, f.B[1].DP, f.B[2].DP, f.B[3].DP];
        !this.C.JP && ZC.DK(this.iX, a.iX - 1, a.iX + a.F + 1) && ZC.DK(this.iY, a.iY - 1, a.iY + a.D + 1) && this.JH(true)
    },
    A2G: function() {}
});
ZC.W3 = ZC.G3.B2({
    P3: 0,
    QX: 0,
    setup: function() {
        var a = this.C.AY("scale"),
            c = Math.floor(this.J / a.G6);
        this.iX = a.iX + this.J % a.G6 * a.E4 + a.E4 / 2 + a.C0;
        this.iY = a.iY + c * a.E5 + a.E5 / 2 + a.C4;
        if (!this.FH) {
            this.copy(this.A);
            this.DE = this.A.DE;
            this.C2() && this.parse(false);
            this.FH = 1
        }
        this.F = a.E4 / 2;
        this.D = a.E5 / 2
    },
    A00: function(a) {
        var c = this.iX - a.F / 2,
            b = this.iY - a.D / 2;
        switch (this.A.J) {
            case 0:
                c -= this.AR / 4;
                b += this.AR / 8;
                break;
            case 1:
                c += this.AR / 4;
                b += this.AR / 8;
                break;
            case 2:
                b -= this.AR / 4
        }
        c += a.C0;
        b += a.C4;
        return [c, b]
    },
    O4: function() {
        return {
            color: this.AT
        }
    },
    R9: function() {
        return {
            "background-color": this.BI,
            color: this.BO
        }
    },
    paint: function() {
        function a() {
            var l = c.C.Q + ZC._[36] + c.C.Q + ZC._[37] + c.A.J + ZC._[6];
            l = ZC.K.DM("circle") + 'class="' + l + '" id="' + c.Q + ZC._[32] + ZC._i_(c.iX + ZC.MAPTX) + "," + ZC._i_(c.iY + ZC.MAPTX) + "," + ZC._i_(ZC.BN(ZC.mobile ? 6 : 3, c.AR) * (ZC.mobile ? 2 : 1.2)) + '"/>';
            c.A.A.FN.push(l);
            c.A.T != null && c.FX()
        }
        var c = this;
        c.b();
        var b = c.A.F5(c, c),
            e = new ZC.D5(c.A);
        e.Q = c.Q;
        e.Y = c.A.B5("bl", 1);
        e.C6 = c.A.B5("bl", 0);
        e.copy(b);
        var f = c.iX,
            g = c.iY;
        e.iX = f;
        e.iY = g;
        e.AR = c.AR;
        e.DQ =
            "circle";
        e.H.plotidx = c.A.J;
        e.H.nodeidx = c.J;
        e.parse();
        c.E3 = e;
        if (c.A.ES && !c.C.FL) {
            var h = {};
            e.iX = f;
            e.iY = g;
            h.x = f;
            h.y = g;
            switch (c.A.GI) {
                case 1:
                    e.A9 = 0;
                    h.alpha = b.A9;
                    break;
                case 2:
                    e.A9 = 0;
                    e.AR = 2;
                    h.size = c.AR;
                    break;
                case 3:
                    e.A9 = 0;
                    switch (c.A.J) {
                        case 0:
                            e.iX = f - c.AR * 3;
                            e.iY = g;
                            break;
                        case 1:
                            e.iX = f + c.AR * 3;
                            e.iY = g;
                            break;
                        case 2:
                            e.iX = f;
                            e.iY = g - c.AR * 3
                    }
                    h.alpha = b.A9;
                    h.x = f;
                    h.y = g
            }
            for (var k in c.A.DB) {
                e[ZC.CA.F7[ZC.CE(k)]] = c.A.DB[k];
                h[ZC.CE(k)] = b[ZC.CA.F7[ZC.CE(k)]]
            }
            if (c.C.CS == null) c.C.CS = {};
            if (c.C.CS[c.A.J + "-" + c.J] != null)
                for (k in c.C.CS[c.A.J +
                    "-" + c.J]) e[ZC.CA.F7[ZC.CE(k)]] = c.C.CS[c.A.J + "-" + c.J][k];
            c.C.CS[c.A.J + "-" + c.J] = {};
            ZC.ET(h, c.C.CS[c.A.J + "-" + c.J]);
            b = new ZC.CA(e, h, c.A.FE, c.A.GH, ZC.CA.KP[c.A.GJ], function() {
                a()
            });
            b.B7 = c;
            c.GU(b)
        } else {
            e.paint();
            a()
        }
    },
    A0T: function(a) {
        var c = this;
        ZC.move || c.H2({
            layer: a,
            type: "shape",
            initcb: function() {
                this.copy(c);
                this.iX = c.iX;
                this.iY = c.iY;
                this.AR = c.AR;
                this.DQ = "circle";
                this.X = c.A.AW[3];
                this.A6 = c.A.AW[2]
            }
        })
    }
});
ZC.FF = ZC.FY.B2({
    $i: function(a) {
        this.b(a);
        this.I = this.A.A;
        this.BK = "";
        this.W = [];
        this.BD = [];
        this.CQ = 0;
        this.BY = this.H1 = this.BC = this.G = null;
        this.G2 = 0;
        this.E8 = this.GQ = null;
        this.EA = 0;
        this.K7 = null;
        this.J = 1;
        this.S = this.EX = this.AD = this.CP = this.T3 = this.Z = 0;
        this.EW = -1;
        this.K0 = ZC.EV[ZC._[15]] || "";
        this.KI = ZC.EV[ZC._[16]] || ".";
        this.NF = 0;
        this.U9 = 2;
        this.TM = 0;
        this.KT = "";
        this.E6 = null;
        this.AB = "";
        this.LV = this.FJ = Number.MAX_VALUE;
        this.P0 = this.IP = 0;
        this.OO = this.L4 = null;
        this.PR = [];
        this.DG = 1;
        this.NA = this.NB = this.C8 = this.BJ = -1;
        this.KD = "lin";
        this.H8 = null;
        this.HD = this.KF = 1;
        this.XY = this.LM = 0;
        this.I0 = null
    },
    parse: function() {
        function a(o) {
            return [f + ".SCALE." + o, f + "." + c.BK + "." + o, f + "." + g + "." + o, f + "." + h + "." + o]
        }
        var c = this,
            b;
        c.b();
        if ((b = c.o.step) != null)
            if (ZC.OE(b)) c.DG = ZC._f_(b);
            else {
                var e = b.replace(/[0-9]/gi, "");
                b = (b = parseInt(b.replace(/[^0-9]/gi, ""), 10)) || 1;
                switch (e) {
                    case "second":
                        c.DG = b * 1E3;
                        break;
                    case "minute":
                        c.DG = b * 1E3 * 60;
                        break;
                    case "hour":
                        c.DG = b * 1E3 * 60 * 60;
                        break;
                    case "day":
                        c.DG = b * 1E3 * 60 * 60 * 24
                }
            }
        c.OT_a([
            [ZC._[12], "BD"],
            ["format",
                "E6"
            ],
            ["offset-start", "Z", "i"],
            ["offset-start", "T3", "i"],
            ["offset-end", "CP", "i"],
            ["minor-ticks", "G2", "i"],
            ["mirrored", "AD", "b"],
            ["zooming", "IP", "b"],
            ["zoom-snap", "P0", "b"],
            ["zoom-to", "L4"],
            ["zoom-to-values", "OO"],
            ["items-overlap", "LM", "b"],
            ["auto-fit", "XY", "b"],
            ["max-labels", "FJ", "i"],
            ["max-items", "FJ", "i"],
            ["ref-value", "EA", "f"],
            [ZC._[14], "EW", "ia"],
            [ZC._[16], "KI"],
            [ZC._[15], "K0"],
            ["short", "TM", "b"],
            ["short-unit", "KT"],
            ["exponent", "NF", "b"],
            [ZC._[27], "O3", "ia"],
            ["progression", "KD"],
            ["scale-factor",
                "KF", "fa"
            ],
            ["show-labels", "I0"]
        ]);
        if ((b = c.o.offset) != null) c.Z = c.CP = ZC._i_(b);
        c.LV = (b = c.o["max-ticks"]) != null ? ZC._i_(b) : c.FJ;
        if ((b = c.o.transform) != null) {
            c.H8 = new ZC.YR;
            c.H8.append(b)
        }
        e = c.A.A.AQ;
        var f = "(" + c.A.AB + ")",
            g = c.BK.replace(/\-[0-9]/, ""),
            h = c.BK.replace(/\-[0-9]/, "-n");
        if ((b = c.o.markers) != null)
            for (var k = 0, l = b.length; k < l; k++) {
                var m = new ZC.WQ(c);
                m.J = k;
                e.load(m.o, f + ".SCALE.marker");
                m.append(b[k]);
                m.parse();
                c.PR.push(m)
            }
        c.K7 = new ZC.E7(c);
        e.load(c.K7.o, a("ref-line"));
        c.K7.append(c.o["ref-line"]);
        c.K7.parse();
        c.G = new ZC.DC(c);
        e.load(c.G.o, a("label"));
        c.G.append(c.o, true, false);
        c.G.append(c.o.label);
        c.G.Q = c.Q + "-label";
        c.G.parse();
        c.BC = new ZC.DC(c);
        e.load(c.BC.o, a("item"));
        c.BC.append(c.o.item);
        c.BC.Q = c.Q + "-item";
        c.BC.parse();
        c.H1 = new ZC.E7(c);
        e.load(c.H1.o, a("tick"));
        c.H1.append(c.o.tick);
        c.H1.parse();
        c.BY = new ZC.E7(c);
        e.load(c.BY.o, a("guide"));
        c.BY.append(c.o.guide);
        c.BY.parse();
        c.GQ = new ZC.E7(c);
        e.load(c.GQ.o, a("minor-tick"));
        c.GQ.append(c.o["minor-tick"]);
        c.GQ.parse();
        c.E8 = new ZC.E7(c);
        e.load(c.E8.o,
            a("minor-guide"));
        c.E8.append(c.o["minor-guide"]);
        c.E8.parse();
        c.iX = c.A.O.iX;
        c.iY = c.A.O.iY;
        c.F = c.A.O.F;
        c.D = c.A.O.D
    },
    JJ: function() {},
    ZX: function() {},
    A01: function() {},
    XP: function() {},
    clear: function() {},
    build: function() {},
    MB: function() {
        var a, c = {
            "thousands-separator": this.K0,
            "decimals-separator": this.KI,
            decimals: this.EW,
            "short": this.TM,
            "short-unit": this.KT,
            exponent: this.NF,
            "exponent-decimals": this.O3
        };
        if (this.H8 != null) switch (this.H8.o.type) {
            case "date":
                c[ZC._[68]] = 1;
                if ((a = this.H8.o.text) != null) this.H8.o.all =
                    a;
                if (typeof this.H.dateformat == ZC._[33]) {
                    a = this.W[this.A2] - this.W[this.V];
                    var b = "",
                        e = "";
                    b = {};
                    e = ["msecond", "second", "minute", "hour", "day", "month", "year"];
                    for (var f in e) b[e[f]] = ZC.EV["date-formats"][e[f]];
                    e = 0 <= a && a <= 1E3 ? "msecond" : 1E3 < a && a <= 36E5 ? "second" : 36E5 < a && a <= 864E5 ? "minute" : 864E5 < a && a <= 26784E5 ? "hour" : 26784E5 < a && a <= 316224E5 ? "day" : 316224E5 < a && a <= 632448E6 ? "month" : "year";
                    b = this.H8.o[e] != null ? this.H8.o[e] : this.H8.o.all != null ? this.H8.o.all : b[e];
                    this.H.dateformat = b
                }
                c[ZC._[67]] = this.H.dateformat
        }
        return c
    },
    paint: function() {
        this.build();
        this.A.AM["3d"] || this.b()
    },
    paint_: function() {},
    QQ: function() {
        for (var a = 0, c = this.PR.length; a < c; a++) this.W.length > 0 && this.PR[a].paint()
    }
});
ZC.SV = ZC.FF.B2({
    $i: function(a) {
        this.b(a);
        this.D8 = 0;
        this.AB = "k";
        this.A2 = this.V = this.HW = this.HT = -1;
        this.KU = 1;
        this.EW = null;
        this.WH = this.L2 = 0
    },
    Y9: function(a, c) {
        this.V = a != null ? a : this.HT;
        this.A2 = c != null ? c : this.HW;
        var b = this.A.HH;
        if (b.length > 0) {
            this.BJ = ZC.AH(b, this.W[this.V]);
            this.C8 = ZC.AH(b, this.W[this.A2])
        }
        if (this.I.FU.C == null) this.I.FU.C = this.A;
        if (this.A.FU && this.A.FU.o.shared != null && ZC._b_(this.A.FU.o.shared) && this.A.Q == this.I.FU.C.Q) {
            b = 0;
            for (var e = this.I.B1.length; b < e; b++) {
                var f = this.I.B1[b];
                if (f.Q !=
                    this.A.Q)
                    if (f.FU.o.shared != null && ZC._b_(f.FU.o.shared)) {
                        var g = f.AY(this.BK);
                        if (g) {
                            g.Y9(a, c);
                            f.clear(true);
                            f.paint()
                        }
                    }
            }
        }
    },
    Y9V: function(a, c) {
        this.BJ = a != null ? a : this.NB;
        this.C8 = c != null ? c : this.NA;
        this.Q2(this.BJ, this.C8, a == null && c == null)
    },
    I3: function(a, c, b) {
        var e = "";
        if (c) {
            e = c.M[a].CH;
            if (this.H8 == null || this.H8.o.type != "date") e = this.BD[e] != null ? this.BD[e] : this.W[e]
        } else e = this.BD[a] != null ? this.BD[a] : this.W[a]; if (typeof e == "number")
            if (this.A.HH[e] != null) e = this.A.HH[e];
        a = this.MB();
        ZC.ET(b, a);
        e = ZC.BV.MK(e,
            a, this, true);
        if (this.E6 != null) e = this.E6.replace(/%v/g, e);
        return e
    },
    KC: function(a, c, b, e) {
        e = this.I3(c, b, e);
        b = [];
        b.push(["%scale-label", e], ["%scale-index", c], ["%scale-position", c]);
        this.H8 != null && this.H8.o.type == "date" ? b.push(["%scale-value", e], ["%v", e]) : b.push(["%scale-value", this.W[c] || ""], ["%v", this.W[c] || ""]);
        b.push(["%l", e], ["%t", e], ["%i", c], ["%c", c]);
        b.sort(ZC.RA);
        c = 0;
        for (e = b.length; c < e; c++) a = a.replace(RegExp(b[c][0], "g"), b[c][1]);
        return a
    },
    ZX: function() {
        for (var a = ZC.BN(this.W.length, this.BD.length),
            c = 0, b = 0; b < a; b++) {
            for (var e = (new String(this.BD[b] || this.W[b])).split(/<br>|<br\/>|<br \/>|\n/), f = 0, g = 0, h = e.length; g < h; g++) f = ZC.BN(f, 10 * e[g].replace(/<.+?>/gi, "").replace(/<\/.+?>/gi, "").length);
            c += f
        }
        c /= a;
        this.FJ = this.EX ? ZC._i_((this.D - this.Z - this.CP) / 15) : ZC._i_((this.F - this.Z - this.CP) / c);
        this.FJ = ZC.BN(2, this.FJ)
    },
    A01: function() {
        if (this.o["max-ticks"] == null) this.LV = this.FJ
    },
    XP: function(a) {
        if (a == 1 && this.o[ZC._[5]] != null) {
            this.W = [];
            if (typeof this.o[ZC._[5]] == "object") {
                this.W = this.o[ZC._[5]];
                if (this.BD.length ==
                    0) this.BD = this.W;
                for (var c = 0, b = this.W.length; c < b; c++)
                    if (typeof this.W[c] == "string") {
                        this.WH = 1;
                        this.A.HH.push(this.W[c])
                    }
            } else {
                c = this.o[ZC._[5]].split(":");
                b = this.DG;
                if (c.length == 3) b = ZC._f_(c[2]);
                if (c.length > 1) {
                    for (var e = 0, f = 0, g = 0, h = ZC._f_(c[0]); h <= ZC._f_(c[1]); h += b) {
                        var k = ("" + h).split(".");
                        e += k[1] ? k[1].length : 0;
                        f = ZC.BN(f, k[1] ? k[1].length : 0);
                        g++;
                        this.o[ZC._[14]] != null ? this.W.push(Number(h).toFixed(ZC._i_(this.o[ZC._[14]]))) : this.W.push(h)
                    }
                    if (this.o[ZC._[14]] == null) {
                        e = Math.ceil(e / g);
                        this.EW = ZC._a_(f -
                            e) <= 1 ? f : e
                    }
                }
            }
        }
        if (a == 2) {
            a = 0;
            if (this.W.length == 0) {
                e = Number.MAX_VALUE;
                f = -Number.MAX_VALUE
            } else {
                e = this.W[0];
                f = this.W[this.W.length - 1]
            }
            g = this.A.AZ.AA;
            c = h = 0;
            for (b = g.length; c < b; c++) {
                k = g[c].B6();
                if (ZC.AH(k, this.BK) != -1) {
                    a = ZC.BN(a, g[c].M.length);
                    k = 0;
                    for (var l = g[c].M.length; k < l; k++)
                        if (g[c].M[k] != null)
                            if (g[c].M[k].CH != null) {
                                var m = g[c].M[k].CH;
                                e = ZC.CO(e, m);
                                f = ZC.BN(f, m);
                                this.D8 = 1;
                                g[c].D8 = 1
                            } else h = 1
                }
            }
            if (a > this.W.length && this.W.length > 0 && !this.D8)
                for (c = this.W.length; c < a; c++) this.W.push("");
            if (this.W.length == 0)
                if (this.D8) {
                    if (h &&
                        e > 0) e = 0;
                    if (h && f < a - 1) f = a - 1;
                    if (this.o["min-value"] != null) e = ZC._f_(this.o["min-value"]);
                    if (this.o["max-value"] != null) f = ZC._f_(this.o["max-value"]);
                    if (f - e < this.DG && f - e > 1) this.DG = f - e;
                    this.Q2(e, f, true)
                } else if (this.o["max-value"] != null) {
                a = b = 0;
                if (this.o["min-value"] != null) b = ZC._f_(this.o["min-value"]);
                a = ZC._f_(this.o["max-value"]);
                c = 0;
                for (e = b; e < a;) {
                    e = this.A.OB(c * this.DG + b);
                    if (this.W[c] == null) this.W[c] = e;
                    c++
                }
            } else
                for (c = 0; c < a; c++)
                    if (this.W[c] == null) this.W[c] = this.o["min-value"] != null ? this.A.OB(c * this.DG +
                        ZC._i_(this.o["min-value"])) : this.A.OB(c * this.DG)
        }
        this.V = 0;
        this.A2 = this.W.length - 1;
        this.HT = 0;
        this.HW = this.W.length - 1;
        if (this.A.HH.length > 0) {
            this.BJ = this.V;
            this.C8 = this.A2
        } else {
            this.BJ = ZC._f_(this.W[this.V]);
            this.C8 = ZC._f_(this.W[this.A2])
        } if (this.OO) {
            c = ZC.AH(this.W, this.OO[0]);
            b = ZC.AH(this.W, this.OO[1]);
            this.L4 = [c == -1 ? 0 : c, b == -1 ? this.W.length - 1 : b]
        }
        c = this.I.H["graph" + this.A.J + ".zoom"];
        if (this.I.H[ZC._[55]] == null || typeof this.I.H[ZC._[55]] == ZC._[33] || this.I.H[ZC._[55]]) {
            if (typeof c != ZC._[33] && c.xmin !=
                null && c.xmax != null) this.L4 = [c.xmin, c.xmax]
        } else this.I.H["graph" + this.A.J + ".zoom"] = {}; if (this.L4) this.A.TZ = 1
    },
    Q2: function(a, c, b) {
        if (this.H8 != null && this.H8.o.type != null) switch (this.H8.o.type) {
            case "date":
                var e = Math.floor(ZC.NR(c - a) / Math.LN10),
                    f = 1E3;
                f = this.o.step != null ? this.DG : e <= 3 ? 1 : e == 4 ? 1E3 : e == 5 ? 1E4 : e == 6 ? 6E4 : e == 7 ? 6E5 : e == 8 ? 36E5 : e == 9 ? 216E5 : e == 10 ? 864E5 : e == 11 ? 864E6 : 2592E6;
                if ((c - a) % f != 0) c += f - (c - a) % f;
                e = [a, c, f, e]
        } else e = ZC.AP.XH(a, c, this.DG, this.KF);
        var g = e[0],
            h = e[1];
        f = e[2];
        e = e[3];
        this.W = [];
        if (b) {
            this.NB =
                a;
            this.NA = c;
            this.KU = ZC._i_((h - g) / f);
            if (g == h) {
                g -= f;
                h += f
            }
            for (c = Math.floor(g); c <= Math.ceil(h); c += f) this.W.push(c)
        } else {
            f = ZC._f_((c - a) / this.KU);
            for (c = 0; c <= this.KU; c++) {
                b = a + f * c;
                if (e < 0) b = ZC._f_(b.toFixed(-e));
                this.W.push(b)
            }
        }
        this.V = 0;
        this.A2 = this.W.length - 1;
        this.HT = 0;
        this.HW = this.W.length - 1;
        this.BJ = ZC._f_(this.W[this.V]);
        this.C8 = ZC._f_(this.W[this.A2])
    },
    parse: function() {
        this.b()
    },
    clear: function() {
        this.b()
    },
    build: function() {
        this.b()
    },
    paint: function() {
        this.b()
    }
});
ZC.PO = ZC.FF.B2({
    $i: function(a) {
        this.b(a);
        this.AB = "v";
        this.A2 = this.V = -1;
        this.KU = 0;
        this.EW = null
    },
    Y9: function(a, c) {
        this.BJ = a != null ? a : this.NB;
        this.C8 = c != null ? c : this.NA;
        this.Q2(this.BJ, this.C8, false)
    },
    I3: function(a) {
        var c = "";
        c = this.BD[a] != null ? this.BD[a] : this.W[a];
        if (typeof c == "number")
            if (this.A.H0[c] != null) c = this.A.H0[c];
        a = this.MB();
        c = ZC.BV.MK(c, a, this, false);
        if (this.E6 != null) c = this.E6.replace(/%v/g, c);
        return c
    },
    ZX: function() {
        var a = ZC.BN(this.W.length, this.BD.length);
        a = 10 * ZC.BN(this.W.join("").length,
            this.BD.join("").length) / a;
        this.FJ = this.EX ? ZC._i_((this.F - this.Z - this.CP) / a) : ZC._i_((this.D - this.Z - this.CP) / 20);
        this.FJ = ZC.BN(2, this.FJ)
    },
    A01: function() {
        if (this.o["max-ticks"] == null) this.LV = this.FJ
    },
    XP: function(a) {
        var c;
        if (a == 1)
            if (this.o[ZC._[5]] == null && (c = this.A.Z1("v")) != null) this.o[ZC._[5]] = c;
        var b = this.A.H0;
        if (a == 1 && this.o[ZC._[5]] != null) {
            this.W = [];
            if (typeof this.o[ZC._[5]] == "object") {
                this.W = this.o[ZC._[5]];
                if (this.BD.length == 0) this.BD = this.W;
                for (var e = 0, f = this.W.length; e < f; e++)
                    if (typeof this.W[e] ==
                        "string") {
                        c = this.W[e];
                        var g = ZC.AH(b, this.W[e]);
                        if (g == -1) {
                            b.push(this.W[e]);
                            this.W[e] = b.length - 1
                        } else this.W[e] = g; if (this.BD[e] == null) this.BD[e] = c
                    }
            } else {
                e = this.o[ZC._[5]].split(":");
                var h = 1;
                if (e.length == 3) h = ZC._f_(e[2]);
                if (e.length > 1) {
                    for (var k = g = f = 0, l = ZC._f_(e[0]); l <= ZC._f_(e[1]); l += h) {
                        c = ("" + l).split(".");
                        f += c[1] ? c[1].length : 0;
                        g = ZC.BN(g, c[1] ? c[1].length : 0);
                        k++;
                        this.W.push(l)
                    }
                    if (this.o[ZC._[14]] == null) {
                        c = ("" + h).split(".");
                        f = c[1] ? c[1].length : Math.ceil(f / k);
                        this.EW = ZC._a_(g - f) <= 1 ? g : f
                    }
                }
            }
            this.V = 0;
            this.A2 =
                this.W.length - 1;
            this.DG = h;
            if (b.length > 1) {
                this.BJ = ZC.A14(this.W);
                this.C8 = ZC.A13(this.W)
            } else {
                this.BJ = this.W[0];
                this.C8 = this.W[this.W.length - 1]
            }
        }
        if (a == 2) {
            h = {};
            if (this.o[ZC._[5]] == null) {
                this.W = [];
                var m = Number.MAX_VALUE,
                    o = -Number.MAX_VALUE
            }
            a = 0;
            b = this.A.AZ.AA;
            e = 0;
            for (f = b.length; e < f; e++)
                if (this.A.H["plot" + e + ".visible"] || this.A.getToggleAction() == "hide") {
                    c = b[e].B6();
                    if (ZC.AH(c, this.BK) != -1) {
                        g = 0;
                        for (k = b[e].W.length; g < k; g++)
                            if (b[e].M[g] != null) {
                                c = (new String(b[e].M[g].A8)).split(".");
                                if (c[1] != null) a = (a + c[1].length) /
                                    2;
                                if (b[e].CL) {
                                    if (h[b[e].FT] == null) h[b[e].FT] = [];
                                    if (h[b[e].FT][g] == null) h[b[e].FT][g] = b[e].M[g].A8 >= 0 ? [b[e].M[g].A8, 0] : [0, b[e].M[g].A8];
                                    else if (b[e].M[g].A8 >= 0) h[b[e].FT][g][0] += b[e].M[g].A8;
                                    else h[b[e].FT][g][1] += b[e].M[g].A8;
                                    b[e].M[g].D3 = b[e].M[g].A8 >= 0 ? h[b[e].FT][g][0] : h[b[e].FT][g][1];
                                    if (this.o[ZC._[5]] == null) {
                                        o = ZC.BN(o, h[b[e].FT][g][0]);
                                        m = ZC.CO(m, h[b[e].FT][g][1])
                                    }
                                } else {
                                    b[e].M[g].D3 = b[e].M[g].A8;
                                    if (this.o[ZC._[5]] == null) {
                                        m = ZC.CO(m, b[e].M[g].A8);
                                        o = ZC.BN(o, b[e].M[g].A8);
                                        c = 0;
                                        for (l = b[e].M[g].D2.length; c <
                                            l; c++) {
                                            m = ZC.CO(m, b[e].M[g].D2[c]);
                                            o = ZC.BN(o, b[e].M[g].D2[c])
                                        }
                                    }
                                }
                            }
                    }
                }
            if (this.o[ZC._[5]] == null) {
                if (this.o[ZC._[14]] == null) {
                    e = 1;
                    c = ("" + this.DG).split(".");
                    if (c[1] != null && c[1].length >= ZC._i_(a)) e = 0;
                    this.EW = ZC.BN(0, ZC._i_(a) - e)
                }
                if (this.o["min-value"] != null && this.o["min-value"] != "auto") m = ZC._f_(this.o["min-value"]);
                else if (m > 0 && this.o["min-value"] != "auto")
                    if (this.KD != "log") m = 0;
                if (this.o["max-value"] != null) o = ZC._f_(this.o["max-value"]);
                if (m == Number.MAX_VALUE && o == -Number.MAX_VALUE) this.C8 = this.BJ = this.A2 = this.V =
                    0;
                else this.Q2(m, o, true)
            }
        }
        if (this.NB == -1 && this.NA == -1) {
            this.NB = this.BJ;
            this.NA = this.C8
        }
        m = this.I.H["graph" + this.A.J + ".zoom"];
        if (this.I.H[ZC._[55]] == null || typeof this.I.H[ZC._[55]] == ZC._[33] || this.I.H[ZC._[55]]) {
            if (typeof m != ZC._[33] && m.ymin != null && m.ymax != null) this.L4 = [m.ymin, m.ymax]
        } else this.I.H["graph" + this.A.J + ".zoom"] = {}; if (this.L4) this.A.TZ = 1
    },
    Q2: function(a, c, b) {
        if (this.A.H0.length > 1) a = 0;
        if (b && this.KD == "log") {
            a = ZC.NR(a);
            c = ZC.NR(c)
        }
        var e = ZC.AP.XH(a, c, null, this.KF),
            f = e[0],
            g = e[1],
            h = e[2];
        e = e[3];
        this.W = [];
        if (b) {
            if (g == f) {
                g += h;
                f -= h
            } else if (c - a == h) h /= 2;
            a = f;
            c = g;
            if (this.o[ZC._[14]] == null) {
                b = Math.floor(ZC.NR(h) / Math.LN10);
                if (b < 0) this.EW = ZC._a_(b)
            }
            this.KU = ZC._i_((c - a) / h)
        } else {
            if (this.KU == 0) this.KU = 10;
            if (this.o[ZC._[14]] == null) {
                this.EW = 0;
                b = Math.floor(ZC.NR(h) / Math.LN10);
                isFinite(b) || (b = 1);
                if (b < 0) this.EW = ZC._a_(b)
            }
            h = ZC._f_((c - a) / this.KU);
            if (this.o[ZC._[14]] == null) {
                b = Math.floor(ZC.NR(h) / Math.LN10);
                isFinite(b) || (b = 1);
                if (b < 0) this.EW = ZC._a_(b)
            }
        }
        for (b = 0; b <= this.KU; b++) {
            f = a + h * b;
            f = ZC._f_(f.toFixed(ZC.BN(-e,
                this.EW)));
            if (this.KD == "log") f = ZC._f_(Math.exp(f).toFixed(ZC.BN(-e, this.EW)));
            this.W.push(f)
        }
        this.V = 0;
        this.A2 = this.W.length - 1;
        this.BJ = a;
        this.C8 = c
    },
    parse: function() {
        if (this.A.CL && this.A.LQ == "100%")
            if (this.o[ZC._[5]] == null) {
                this.o[ZC._[5]] = "0:100:20";
                this.o.format = "%v%"
            }
        this.b()
    },
    clear: function() {
        this.b()
    },
    build: function() {
        this.b()
    },
    paint: function() {
        this.b()
    }
});
ZC.R5 = ZC.SV.B2({
    $i: function(a) {
        this.b(a)
    },
    parse: function() {
        this.b()
    },
    JJ: function() {
        this.S = this.A2 == this.V ? this.F - this.Z - this.CP : (this.F - this.Z - this.CP) / (this.A2 - this.V + (this.CQ ? 1 : 0))
    },
    XP: function(a) {
        this.b(a);
        this.JJ()
    },
    Y9: function(a, c) {
        this.b(a, c);
        this.JJ()
    },
    clear: function() {},
    build: function() {
        this.b()
    },
    K8: function(a, c) {
        var b = this.AD ? (this.iX + this.F - a - this.Z - (this.CQ ? this.S / 2 : 0)) / (this.F - this.Z - this.CP - (this.CQ ? this.S : 0)) : (a - this.iX - this.Z - (this.CQ ? this.S / 2 : 0)) / (this.F - this.Z - this.CP - (this.CQ ? this.S :
            0));
        if (c) {
            var e = this.W[this.V];
            if (typeof e == "string") e = ZC.AH(this.A.HH, e);
            var f = this.W[this.A2];
            if (typeof f == "string") f = ZC.AH(this.A.HH, f);
            b = e + ZC._i_((f - e) * b);
            e = Number.MAX_VALUE;
            f = null;
            for (TT in c.J8)
                if (ZC._a_(TT - b) < e) {
                    e = ZC._a_(TT - b);
                    f = c.J8[TT]
                }
            if (e > c.N3) return null;
            return f
        } else f = this.CQ ? this.V + Math.floor((this.A2 - this.V + 1) * b) : this.V + ZC._i_((this.A2 - this.V) * b);
        f = ZC.BN(0, f);
        return f = ZC.CO(this.HW, f)
    },
    LB: function(a) {
        return this.AD ? this.iX + this.F - this.Z - (a - this.V + (this.CQ ? 1 : 0)) * this.S + (this.CQ ? this.S /
            2 : 0) : this.iX + this.Z + (a - this.V) * this.S + (this.CQ ? this.S / 2 : 0)
    },
    B4: function(a) {
        if (!this.WH && (this.D8 || this.H8 != null && this.H8.o.type == "date")) {
            var c = this.W[this.A2] - this.W[this.V];
            c = (this.F - this.Z - this.CP - (this.CQ ? this.S : 0)) / c;
            return this.AD ? this.iX + this.F - this.Z - (a - this.W[this.V]) * c - (this.CQ ? this.S / 2 : 0) : this.iX + this.Z + (a - this.W[this.V]) * c + (this.CQ ? this.S / 2 : 0)
        } else {
            c = this.C8 - this.BJ + (this.CQ ? 1 : 0);
            c = (this.F - this.Z - this.CP) / c;
            return this.AD ? this.iX + this.F - this.Z - (a - this.BJ) * c - (this.CQ ? this.S / 2 : 0) : this.iX +
                this.Z + (a - this.BJ) * c + (this.CQ ? this.S / 2 : 0)
        }
    },
    paint: function() {
        function a(I) {
            I = I.replace(/(%c)|(%scale-position)/g, b.E9);
            I = I.replace(/(%i)|(%scale-index)/g, b.GB);
            I = I.replace(/(%v)|(%scale-value)/g, b.W[b.GB] != null ? b.W[b.GB] : "");
            I = I.replace(/(%l)|(%scale-label)/g, b.BD[b.GB] != null ? b.BD[b.GB] : "");
            return I = I.replace(/%scale-day-of-week/g, ZC.BV.WC(b.W[b.GB], "%w"))
        }

        function c(I) {
            b.GB = I;
            var M = I - b.V;
            if (b.I.L8 || I == b.V) {
                B = new ZC.DC(b);
                B.copy(b.BC)
            }
            B.F0 = b.Q + "-item " + b.A.Q + "-scale-item zc-scale-item";
            B.Q = b.Q + "-item-" +
                I;
            var J = b.I3(I);
            if (!(b.I0 != null && ZC.AH(b.I0, J) == -1)) {
                B.B0 = J;
                B.Y = b.I.usc() ? b.I.mc() : ZC.AJ(b.A.Q + "-scales-ml-0-c");
                B.GT = b.I.usc() ? ZC.AJ(b.I.Q + "-main") : ZC.AJ(b.I.Q + "-text");
                B.HD = 1;
                B.H.nodeidx = I;
                B.parse();
                B.GM = a;
                B.C2() && B.parse();
                B.iX = b.AD ? b.iX + b.F - b.Z - M * b.S - B.F / 2 - (b.CQ ? b.S / 2 : 0) : b.iX + b.Z + M * b.S - B.F / 2 + (b.CQ ? b.S / 2 : 0);
                switch (B.o[ZC._[9]]) {
                    case "inner":
                        B.iY = b.J == 1 ? n - B.D - o : n + o;
                        break;
                    case "ref-top":
                        B.iY = h - B.D - o;
                        break;
                    case "ref-bottom":
                        B.iY = h + o;
                        break;
                    case "ref-auto":
                        if (k != null && k.M[I] != null) {
                            k.M[I].setup();
                            B.iY =
                                k.M[I].iY < h ? h + o : h - B.D - o
                        } else B.iY = h + o;
                        break;
                    default:
                        B.iY = b.J == 1 ? n + o : n - B.D - o
                }
                if (b.A.AM["3d"]) {
                    M = new ZC.C3(b.A, B.iX + B.F / 2 - ZC.AC.DX, B.iY + B.D / 2 - ZC.AC.DU, 0);
                    B.iX = M.DP[0] - B.F / 2;
                    B.iY = M.DP[1] - B.D / 2
                }
                if (b.BC.o["auto-align"] && b.BC.A7 % 180 != 0) {
                    M = ZC.DK(b.BC.A7, 0, 180) ? b.J == 1 ? 1 : -1 : b.J == 1 ? -1 : 1;
                    B.iX += M * B.F * ZC.CT(b.BC.A7) / 2;
                    B.iY += M * (B.F * ZC.CJ(b.BC.A7) / 2 - B.D * ZC.CJ(b.BC.A7) / 2)
                }
                if (B.AK) {
                    M = 1;
                    if (!b.LM)
                        if (I == b.V || I == b.A2) M = 1;
                        else {
                            if (I % p == 0) M = 1;
                            I = 0;
                            for (J = K.length; I < J; I++)
                                if (ZC.DK(B.iX, K[I][0], K[I][0] + K[I][2]) || ZC.DK(B.iX +
                                    B.F, K[I][0], K[I][0] + K[I][2])) {
                                    M = 0;
                                    break
                                }
                        }
                    if (M) {
                        K.push([B.iX, B.iY, B.F, B.D]);
                        B.paint();
                        G++;
                        A += B.D;
                        F = ZC.BN(F, B.D);
                        B.D4()
                    }
                }
                b.E9++
            }
        }
        var b = this;
        if (b.AK) {
            b.b();
            for (var e = 0, f = 0, g = b.A.B8.length; f < g; f++) b.A.B8[f].BK.substring(0, 7) == ZC._[52] && e++;
            var h = null,
                k = null;
            f = 0;
            for (g = b.A.AZ.AA.length; f < g; f++) {
                var l = b.A.AZ.AA[f],
                    m = l.B6();
                if (ZC.AH(m, b.BK) != -1) {
                    f = b.A.AY(l.B6("v")[0]);
                    h = f.B4(f.EA);
                    k = l;
                    break
                }
            }
            var o = 8;
            if (b.H1.o[ZC._[23]] != null) o = ZC._i_(b.H1.o[ZC._[23]]);
            l = 4;
            if (b.GQ.o[ZC._[23]] != null) l = ZC._i_(b.GQ.o[ZC._[23]]);
            e = ZC._i_(b.A.O.CM / (e - 1));
            var n = b.J == 1 ? b.iY + b.D : b.iY - (b.J - 2) * e;
            b.H.iY = n;
            m = ZC.BN(1, Math.floor((b.A2 - b.V) / (b.LV - 1)));
            var p = ZC.BN(1, Math.floor((b.A2 - b.V) / (b.FJ - 1)));
            g = 0;
            var s = b.S * m / (b.G2 + 1),
                t = b.AD ? b.iX + b.CP : b.iX + b.Z,
                r = b.AD ? b.iX + b.F - b.Z : b.iX + b.F - b.CP;
            if (h == null) h = n;
            var u = ZC.K.CN(b.I.usc() ? b.I.Q + "-main-c" : b.A.Q + "-scales-ml-0-c", b.I.A5),
                y = ZC.K.CN(b.I.usc() ? b.I.Q + "-main-c" : b.A.Q + "-scales-bl-0-c", b.I.A5);
            if (b.W.length > 0)
                if (b.A.AM["3d"] && b.A.DD.true3d) {
                    b.X = b.A6 = b.AT;
                    var w = ZC.DZ.DH(b, b.A, b.iX - ZC.AC.DX, b.iX -
                        ZC.AC.DX + b.F, n - ZC.AC.DU, n - ZC.AC.DU, -1, ZC.AC.FK + 1, "x");
                    if (b.A.DD[ZC._[29]] > 0 && b.A.DD.true3d) w.IU = [2, 1, 1];
                    b.A.BP.add(w)
                } else {
                    var v = [];
                    v.push([b.iX, n], [b.iX + b.F, n]);
                    ZC.BQ.paint(b.A.AM["3d"] && !b.A.DD.true3d ? y : u, b, v)
                }
            if (b.W.length > 0 && b.BY.AK) {
                if (b.BY.o.items && b.BY.o.items.length > 0 && !b.A.AM["3d"])
                    for (f = b.V; f < b.A2 + (b.CQ ? 1 : 0); f++) {
                        w = f - b.V;
                        v = new ZC.FY(b);
                        var x = f % b.BY.o.items.length;
                        v.append(b.BY.o.items[x]);
                        v.Q = b.Q + "-guide-" + f;
                        v.Y = b.I.usc() ? b.I.mc() : ZC.AJ(b.A.Q + "-scales-bl-0-c");
                        v.parse();
                        v.iX = b.AD ? b.iX + b.F -
                            b.Z - w * b.S - b.S : b.iX + b.Z + w * b.S;
                        v.iY = b.iY;
                        v.F = b.S;
                        v.D = b.D;
                        v.paint()
                    }
                if (b.BY.AI > 0) {
                    b.E9 = 0;
                    for (f = b.V; f <= b.A2 + (b.CQ ? 1 : 0); f++) {
                        b.GB = f;
                        if (f == b.V || f == b.A2 + (b.CQ ? 1 : 0) || f % m == 0) {
                            if (b.I.L8 || f == b.V) {
                                var z = new ZC.E7(b);
                                z.copy(b.BY);
                                z.GM = a;
                                z.C2() && z.parse()
                            }
                            v = [];
                            w = f - b.V;
                            x = b.AD ? b.iX + b.F - b.Z - w * b.S : b.iX + b.Z + w * b.S;
                            if (z.AK)
                                if (b.A.AM["3d"]) {
                                    z.X = z.A6 = z.AT;
                                    w = ZC.DZ.DH(z, b.A, x - ZC.AC.DX, x - ZC.AC.DX, n - ZC.AC.DU, n - (b.J == 1 ? 1 : -1) * b.D - ZC.AC.DU, ZC.AC.FK + 2, ZC.AC.FK + 1, "z");
                                    b.A.BP.add(w);
                                    w = ZC.DZ.DH(z, b.A, x - ZC.AC.DX, x - ZC.AC.DX, n - ZC.AC.DU,
                                        n - ZC.AC.DU - 1, 0, ZC.AC.FK, "z");
                                    b.A.BP.add(w)
                                } else {
                                    v.push([x, b.iY], [x, b.iY + b.D]);
                                    ZC.BQ.paint(y, z, v)
                                }
                            b.E9++
                        }
                    }
                }
            }
            if (b.W.length > 0 && b.E8.AK && !b.A.AM["3d"])
                if (b.E8.o.items && b.E8.o.items.length > 0)
                    for (f = b.V; f < b.A2 + (b.CQ ? 1 : 0); f++) {
                        b.GB = f;
                        w = f - b.V;
                        b.E9 = 0;
                        for (var C = 1; C <= b.G2; C++) {
                            v = new ZC.FY(b);
                            x = b.E9 % b.E8.o.items.length;
                            v.append(b.E8.o.items[x]);
                            v.Q = b.Q + "-guide-" + f + "-" + C;
                            v.Y = b.I.usc() ? b.I.mc() : ZC.AJ(b.A.Q + "-scales-bl-0-c");
                            v.parse();
                            v.iX = b.AD ? b.iX + b.F - b.Z - w * b.S - (C + 1) * s : b.iX + b.Z + w * b.S + C * s;
                            v.iY = b.iY;
                            v.F = s;
                            v.D = b.D;
                            v.paint();
                            b.E9++
                        }
                    }
                if (b.E8.AI > 0)
                    for (f = b.V - m; f < b.A2 + (b.CQ ? 1 : 0); f++) {
                        b.GB = f;
                        if (f % m == 0) {
                            w = f - b.V;
                            b.E9 = 0;
                            for (C = 1; C <= b.G2; C++) {
                                v = [];
                                z = new ZC.E7(b);
                                z.copy(b.E8);
                                z.GM = a;
                                z.C2() && z.parse();
                                x = b.AD ? b.iX + b.F - b.Z - w * b.S - C * s : b.iX + b.Z + w * b.S + C * s;
                                if (ZC.DK(x, t, r)) {
                                    v.push([x, b.iY], [x, b.iY + b.D]);
                                    z.AK && ZC.BQ.paint(y, z, v)
                                }
                                b.E9++
                            }
                        }
                    }
                if (b.W.length > 0 && b.K7.AK && !b.A.AM["3d"])
                    if (b.K7.AI > 0) {
                        f = b.B4(b.EA);
                        if (f >= b.iX && f <= b.iX + b.F) {
                            v = [];
                            v.push([f, b.iY]);
                            v.push([f, b.iY + b.D]);
                            ZC.BQ.paint(y, b.K7, v)
                        }
                    }
            if (b.W.length > 0 && b.H1.AK && (!b.A.AM["3d"] ||
                !b.A.DD.true3d)) {
                switch (b.H1.o[ZC._[9]]) {
                    case "inner":
                        break;
                    case "outer":
                        g += o;
                        break;
                    default:
                        g += o / 2
                }
                b.E9 = 0;
                for (f = b.V; f <= b.A2 + (b.CQ ? 1 : 0); f++)
                    if (f == b.V || f == b.A2 + (b.CQ ? 1 : 0) || f % m == 0) {
                        b.GB = f;
                        y = o;
                        v = [];
                        w = f - b.V;
                        if (b.I.L8 || f == b.V) {
                            z = new ZC.D5(b);
                            z.copy(b.H1);
                            z.GM = a;
                            z.C2() && z.parse();
                            if (z.AR > 1) y = z.AR
                        }
                        x = b.AD ? b.iX + b.F - b.Z - w * b.S : b.iX + b.Z + w * b.S;
                        switch (z.o[ZC._[9]]) {
                            case "ref-auto":
                                v.push([x, h + y / 2], [x, h - y / 2]);
                                break;
                            case "ref-top":
                                v.push([x, h - y], [x, h]);
                                break;
                            case "ref-bottom":
                                v.push([x, h + y], [x, h]);
                                break;
                            case "inner":
                                v.push([x,
                                    n - (b.J == 1 ? y : -y)
                                ], [x, n]);
                                break;
                            case "outer":
                                v.push([x, n], [x, n + (b.J == 1 ? y : -y)]);
                                break;
                            default:
                                v.push([x, n + y / 2], [x, n - y / 2])
                        }
                        z.AK && ZC.BQ.paint(u, z, v);
                        b.E9++
                    }
            }
            if (b.W.length > 0 && b.G2 > 0 && b.GQ.AK && !b.A.AM["3d"])
                for (f = b.V - m; f < b.A2 + (b.CQ ? 1 : 0); f++) {
                    b.GB = f;
                    if (f % m == 0) {
                        w = f - b.V;
                        b.E9 = 0;
                        for (C = 1; C <= b.G2; C++) {
                            v = [];
                            z = new ZC.E7(b);
                            z.copy(b.GQ);
                            z.GM = a;
                            z.C2() && z.parse();
                            x = b.AD ? b.iX + b.F - b.Z - w * b.S - C * s : b.iX + b.Z + w * b.S + C * s;
                            if (ZC.DK(x, t, r)) {
                                switch (z.o[ZC._[9]]) {
                                    case "ref-auto":
                                        v.push([x, h + l / 2], [x, h - l / 2]);
                                        break;
                                    case "ref-top":
                                        v.push([x,
                                            h
                                        ], [x, h - l]);
                                        break;
                                    case "ref-bottom":
                                        v.push([x, h], [x, h + l]);
                                        break;
                                    case "inner":
                                        v.push([x, n - (b.J == 1 ? l : -l)], [x, n]);
                                        break;
                                    case "outer":
                                        v.push([x, n], [x, n + (b.J == 1 ? l : -l)]);
                                        break;
                                    default:
                                        v.push([x, n + l / 2], [x, n - l / 2])
                                }
                                z.AK && ZC.BQ.paint(u, z, v)
                            }
                            b.E9++
                        }
                    }
                }
            b.QQ();
            var B, A = 0,
                F = 0,
                G = 0,
                K = [];
            if (b.W.length > 0 && b.BC.AK) {
                b.E9 = 0;
                c(b.V);
                b.E9 = b.A2 - b.V;
                c(b.A2);
                b.E9 = 1;
                for (f = b.V + 1; f < b.A2; f++) f % p == 0 && c(f)
            }
            z = ZC._i_(A / G);
            if (b.G.AK)
                if (b.G.B0 != null && b.G.B0 != "") {
                    B = new ZC.DC(b);
                    B.copy(b.G);
                    B.Q = b.Q + "-label";
                    B.F0 = b.Q + "-label " + b.A.Q + "-scale-label zc-scale-label";
                    B.B0 = b.G.B0;
                    B.Y = b.I.usc() ? b.I.mc() : ZC.AJ(b.A.Q + "-scales-ml-0-c");
                    B.GT = b.I.usc() ? ZC.AJ(b.I.Q + "-main") : ZC.AJ(b.I.Q + "-text");
                    B.parse();
                    B.F = b.F;
                    B.iX = b.iX;
                    if (b.J == 1) {
                        if (b.iY + b.D + g + F + B.D < b.A.iY + b.A.D) g += F;
                        else if (b.iY + b.D + g + z + B.D < b.A.iY + b.A.D) g += z;
                        else g = b.A.iY + b.A.D - b.iY - b.D - B.D;
                        B.iY = b.iY + b.D + g
                    } else {
                        if (g + F + B.D < e) g += F;
                        else if (g + z + B.D < e) g += z;
                        B.iY = b.iY - e * (b.J - 2) - B.D - g
                    } if (B.AK) {
                        if (b.A.AM["3d"]) {
                            z = new ZC.C3(b.A, B.iX + B.F / 2 - ZC.AC.DX, B.iY + B.D / 2 - ZC.AC.DU, 0);
                            B.iX = z.DP[0] - B.F / 2;
                            B.iY = z.DP[1] - B.D / 2
                        }
                        B.paint();
                        B.D4()
                    }
                }
            b.o.transform !=
                null && b.o.transform.type == "date" && b.paintTransformDate()
        }
    },
    paintTransformDate: function() {
        function a(m) {
            var o = ZC.BV.WC(c.W[m], f);
            if (o != h) {
                var n = 1,
                    p = m - c.V;
                p = c.AD ? c.iX + c.F - c.Z - p * c.S : c.iX + c.Z + p * c.S + (c.CQ ? c.S / 2 : 0);
                var s = new ZC.DC(c);
                if ((n = c.o.transform.item) != null) s.append(n);
                s.F0 = c.Q + "-item " + c.A.Q + "-scale-item zc-scale-item";
                s.Q = c.Q + "-date-item-" + m;
                n = ZC.BV.WC(c.W[m], g);
                s.B0 = n;
                s.Y = c.I.usc() ? c.I.mc() : ZC.AJ(c.A.Q + "-scales-ml-0-c");
                s.GT = c.I.usc() ? ZC.AJ(c.I.Q + "-main") : ZC.AJ(c.I.Q + "-text");
                s.HD = 1;
                s.DS = 10;
                s.IJ = s.IE = s.GE = s.GW = 0;
                s.X = s.A6 = "#fff";
                s.BO = "#000";
                s.parse();
                s.iX = c.AD ? p - s.CZ / 2 - (c.CQ ? c.S / 2 : 0) : p;
                s.iY = c.iY;
                if (c.A.AM["3d"]) {
                    c.A.J2();
                    n = new ZC.C3(c.A, s.iX + s.F / 2 - ZC.AC.DX, s.iY + s.D / 2 - ZC.AC.DU, 0);
                    s.iX = n.DP[0] - s.F / 2;
                    s.iY = n.DP[1] - s.D / 2
                }
                if (s.AK) {
                    n = 1;
                    if (!c.LM) {
                        if (m == c.V || m == c.A2) n = 1;
                        else {
                            m = 0;
                            for (var t = k.length; m < t; m++)
                                if (ZC.DK(s.iX, k[m][0], k[m][0] + 1.25 * k[m][2]) || ZC.DK(s.iX + 1.25 * s.F, k[m][0], k[m][0] + k[m][2])) {
                                    n = 0;
                                    break
                                }
                        } if (s.iX + s.F > c.iX + c.F) n = 0
                    }
                    if (n) {
                        k.push([s.iX, s.iY, s.F, s.D]);
                        s.paint();
                        s.D4();
                        s = new ZC.E7(c);
                        if ((n = c.o.transform.guide) != null) s.append(n);
                        s.AI = 1;
                        s.AT = "#ccc";
                        s.parse();
                        m = [];
                        m.push([p, c.iY], [p, c.iY + c.D]);
                        c.A.J2();
                        p = 0;
                        for (t = m.length; p < t; p++) {
                            n = new ZC.C3(c.A, m[p][0] - ZC.AC.DX, m[p][1] - ZC.AC.DU, 0);
                            m[p][0] = n.DP[0];
                            m[p][1] = n.DP[1]
                        }
                        s.AK && ZC.BQ.paint(b, s, m)
                    }
                }
                l++
            }
            h = o
        }
        var c = this,
            b = ZC.K.CN(c.I.usc() ? c.I.Q + "-main-c" : c.A.Q + "-scales-bl-0-c", c.I.A5),
            e = c.W[c.A2] - c.W[c.V];
        if (0 <= e && e <= 2E3) var f = "%q",
            g = "%q ms";
        else if (2E3 < e && e <= 12E4) {
            f = "%s";
            g = "%h:%i:%s %A"
        } else if (12E4 < e && e <= 72E5) {
            f = "%i";
            g = "%h:%i %A"
        } else if (72E5 <
            e && e <= 1728E5) {
            f = "%h";
            g = "%M %d,%h %A"
        } else if (1728E5 < e && e <= 5184E6) {
            f = "%d";
            g = "%M %d"
        } else if (5184E6 < e && e <= 632448E5) {
            f = "%m";
            g = "%M %Y"
        } else g = f = "%Y";
        var h = null,
            k = [];
        if (c.W.length > 0) {
            var l = 0;
            a(c.V);
            a(c.A2);
            for (e = c.V + 1; e < c.A2; e++) a(e)
        }
    }
});
ZC.RF = ZC.PO.B2({
    $i: function(a) {
        this.b(a)
    },
    parse: function() {
        this.b()
    },
    JJ: function() {
        this.S = this.A2 == this.V ? this.D - this.Z - this.CP : (this.D - this.Z - this.CP) / (this.A2 - this.V + (this.CQ ? 1 : 0))
    },
    XP: function(a) {
        this.b(a);
        this.JJ()
    },
    clear: function() {},
    build: function() {
        this.b()
    },
    Y9: function(a, c) {
        this.b(a, c);
        this.S = (this.D - this.Z - this.CP) / (this.A2 - this.V + (this.CQ ? 1 : 0))
    },
    OS: function(a) {
        return this.BJ + ZC._f_((this.C8 - this.BJ) * (this.AD ? (a - this.iY - this.Z) / (this.D - this.Z - this.CP) : (this.iY + this.D - this.Z - a) / (this.D - this.Z -
            this.CP)))
    },
    B4: function(a) {
        if (this.KD == "log") {
            var c = this.C8 - this.BJ;
            c = (this.D - this.Z - this.CP) / c;
            a = ZC.BN(0, ZC.NR(a));
            return this.AD ? this.iY + this.Z + (a - this.BJ) * c : this.iY + this.D - this.Z - (a - this.BJ) * c
        } else {
            c = this.C8 - this.BJ;
            c = (this.D - this.Z - this.CP) / c;
            return this.AD ? this.iY + this.Z + (a - this.BJ) * c : this.iY + this.D - this.Z - (a - this.BJ) * c
        }
    },
    paint: function() {
        function a(A) {
            A = A.replace(/(%c)|(%scale-position)/g, b.E9);
            A = A.replace(/(%i)|(%scale-index)/g, b.GB);
            A = A.replace(/(%v)|(%scale-value)/g, b.W[b.GB] != null ? b.W[b.GB] :
                "");
            return A = A.replace(/(%l)|(%scale-label)/g, b.BD[b.GB] != null ? b.BD[b.GB] : "")
        }

        function c(A) {
            b.GB = A;
            var F = A - b.V;
            if (b.I.L8 || A == b.V) {
                v = new ZC.DC(b);
                v.copy(b.BC)
            }
            v.Q = b.Q + "-item-" + A;
            v.F0 = b.Q + "-item " + b.A.Q + "-scale-item zc-scale-item";
            var G = b.I3(A);
            if (!(b.I0 != null && ZC.AH(b.I0, G) == -1)) {
                v.B0 = G;
                v.Y = b.I.usc() ? b.I.mc() : ZC.AJ(b.A.Q + "-scales-ml-0-c");
                v.GT = b.I.usc() ? ZC.AJ(b.I.Q + "-main") : ZC.AJ(b.I.Q + "-text");
                v.HD = 1;
                v.parse();
                v.GM = a;
                v.C2() && v.parse();
                switch (v.o[ZC._[9]]) {
                    case "inner":
                        v.iX = b.J == 1 ? k + h : k - v.F - h;
                        break;
                    default:
                        v.iX = b.J == 1 ? k - v.F - h : k + h
                }
                v.iY = b.AD ? b.iY + b.Z + F * b.S - v.D / 2 + (b.CQ ? b.S / 2 : 0) : b.iY + b.D - b.Z - F * b.S - v.D / 2 - (b.CQ ? b.S / 2 : 0);
                if (b.A.AM["3d"]) {
                    F = new ZC.C3(b.A, v.iX + v.F / 2 - ZC.AC.DX, v.iY + v.D / 2 - ZC.AC.DU, 0);
                    v.iX = F.DP[0] - v.F / 2;
                    v.iY = F.DP[1] - v.D / 2
                }
                if (b.BC.o["auto-align"] && b.BC.A7 % 180 != 0) {
                    F = b.J == 1 ? 1 : -1;
                    if (b.BC.A7 == 90 || b.BC.A7 == 270) v.iX += F * (v.F / 2 - v.D / 2);
                    else if (ZC.DK(b.BC.A7, 0, 90) || ZC.DK(b.BC.A7, 270, 360)) {
                        v.iX += F * (v.F - v.F * ZC.CT(b.BC.A7)) / 2;
                        v.iY -= F * v.F * ZC.CJ(b.BC.A7) / 2
                    } else if (ZC.DK(b.BC.A7, 90, 270)) {
                        v.iX += F * (v.F + v.F *
                            ZC.CT(b.BC.A7)) / 2;
                        v.iY += F * v.F * ZC.CJ(b.BC.A7) / 2
                    }
                }
                if (v.AK) {
                    F = 1;
                    if (!b.LM)
                        if (A == b.V || A == b.A2) F = 1;
                        else {
                            if (A % l == 0) F = 1;
                            A = 0;
                            for (G = B.length; A < G; A++)
                                if (ZC.DK(v.iY, B[A][1], B[A][1] + B[A][3]) || ZC.DK(v.iY + v.D, B[A][1], B[A][1] + B[A][3])) {
                                    F = 0;
                                    break
                                }
                        }
                    if (F) {
                        B.push([v.iX, v.iY, v.F, v.D]);
                        v.paint();
                        C++;
                        x += v.F;
                        z = ZC.BN(z, v.F);
                        v.D4()
                    }
                }
                b.E9++
            }
        }
        var b = this;
        if (b.AK) {
            b.b();
            for (var e = 0, f = 0, g = b.A.B8.length; f < g; f++) b.A.B8[f].BK.substring(0, 8) == "scale-y-" && e++;
            var h = 8;
            if (b.H1.o[ZC._[23]] != null) h = ZC._i_(b.H1.o[ZC._[23]]);
            g = 4;
            if (b.GQ.o[ZC._[23]] !=
                null) g = ZC._i_(b.GQ.o[ZC._[23]]);
            e = ZC._i_(b.A.O.CK / e);
            var k = b.J == 1 ? b.iX : b.iX + b.F + (b.J - 2) * e,
                l = Math.ceil((b.A2 - b.V) / (b.FJ - 1)),
                m = Math.ceil((b.A2 - b.V) / (b.LV - 1)),
                o = 0,
                n = b.S * m / (b.G2 + 1),
                p = ZC.K.CN(b.I.usc() ? b.I.Q + "-main-c" : b.A.Q + "-scales-ml-0-c", b.I.A5),
                s = ZC.K.CN(b.I.usc() ? b.I.Q + "-main-c" : b.A.Q + "-scales-bl-0-c", b.I.A5);
            if (b.W.length > 0)
                if (b.A.AM["3d"] && b.A.DD.true3d) {
                    b.X = b.A6 = b.AT;
                    var t = ZC.DZ.DH(b, b.A, k - ZC.AC.DX, k - ZC.AC.DX, b.iY - ZC.AC.DU, b.iY - ZC.AC.DU + b.D, -1, ZC.AC.FK + 1, "y");
                    if (b.A.DD[ZC._[30]] > 0 && b.A.DD.true3d) t.IU = [-100, 1, 1];
                    b.A.BP.add(t)
                } else {
                    var r = [];
                    r.push([k, b.iY + b.D], [k, b.iY]);
                    ZC.BQ.paint(p, b, r)
                }
            if (b.W.length > 0 && b.BY.AK) {
                if (b.BY.o.items && b.BY.o.items.length > 0 && !b.A.AM["3d"]) {
                    b.E9 = 0;
                    for (f = b.V; f <= b.A2 + (b.CQ ? 1 : 0); f++) {
                        b.GB = f;
                        if (f == b.V || f == b.A2 || f % m == 0) {
                            t = f - b.V;
                            r = new ZC.FY(b);
                            var u = b.E9 % b.BY.o.items.length;
                            r.append(b.BY.o.items[u]);
                            r.Q = b.Q + "-guide-" + f;
                            r.Y = b.I.usc() ? b.I.mc() : ZC.AJ(b.A.Q + "-scales-bl-0-c");
                            r.parse();
                            r.iX = b.iX;
                            u = b.AD ? b.iY + b.Z + t * b.S : b.iY + b.D - b.Z - t * b.S - b.S * m;
                            r.iY = u;
                            r.F = b.F;
                            r.D = b.S * m;
                            r.paint();
                            b.E9++
                        }
                    }
                }
                if (b.BY.AI >
                    0) {
                    b.E9 = 0;
                    for (f = b.V; f <= b.A2 + (b.CQ ? 1 : 0); f++) {
                        b.GB = f;
                        if (f == b.V || f == b.A2 || f % m == 0) {
                            if (b.I.L8 || f == b.V) {
                                var y = new ZC.E7(b);
                                y.copy(b.BY);
                                y.GM = a;
                                y.C2() && y.parse()
                            }
                            r = [];
                            t = f - b.V;
                            u = b.AD ? b.iY + b.Z + t * b.S : b.iY + b.D - b.Z - t * b.S;
                            if (y.AK)
                                if (b.A.AM["3d"]) {
                                    y.X = y.A6 = y.AT;
                                    t = ZC.DZ.DH(y, b.A, k - ZC.AC.DX, k - ZC.AC.DX + 1, u - ZC.AC.DU, u - ZC.AC.DU, 0, ZC.AC.FK, "x");
                                    b.A.BP.add(t);
                                    t = ZC.DZ.DH(y, b.A, b.iX - ZC.AC.DX, b.iX - ZC.AC.DX + b.F, u - ZC.AC.DU, u - ZC.AC.DU, ZC.AC.FK + 2, ZC.AC.FK + 1, "x");
                                    t.IU = [2, 1, 1];
                                    b.A.BP.add(t)
                                } else {
                                    r.push([b.iX, u], [b.iX + b.F, u]);
                                    ZC.BQ.paint(s, y, r)
                                }
                            b.E9++
                        }
                    }
                }
            }
            if (b.W.length > 0 && b.E8.AK && n > 5 && !b.A.AM["3d"]) {
                if (b.E8.o.items && b.E8.o.items.length > 0)
                    for (f = b.V; f < b.A2 + (b.CQ ? 1 : 0); f++) {
                        b.GB = f;
                        if (f == b.V || f == b.A2 || f % m == 0) {
                            t = f - b.V;
                            b.E9 = 0;
                            for (var w = 1; w <= b.G2; w++) {
                                r = new ZC.FY(b);
                                u = b.E9 % b.E8.o.items.length;
                                r.append(b.E8.o.items[u]);
                                r.Q = b.Q + "-guide-" + f + "-" + w;
                                r.Y = b.I.usc() ? b.I.mc() : ZC.AJ(b.A.Q + "-scales-bl-0-c");
                                r.parse();
                                r.iX = b.iX;
                                u = b.AD ? b.iY + b.Z + t * b.S + w * n : b.iY + b.D - b.Z - t * b.S - (w + 1) * n;
                                r.iY = u;
                                r.F = b.F;
                                r.D = n;
                                r.paint();
                                b.E9++
                            }
                        }
                    }
                if (b.E8.AI > 0)
                    for (f =
                        b.V; f < b.A2 + (b.CQ ? 1 : 0); f++) {
                        b.GB = f;
                        if (f == b.V || f == b.A2 || f % m == 0) {
                            t = f - b.V;
                            b.E9 = 0;
                            for (w = 1; w <= b.G2; w++) {
                                r = [];
                                y = new ZC.E7(b);
                                y.copy(b.E8);
                                y.GM = a;
                                y.C2() && y.parse();
                                u = b.AD ? b.iY + b.Z + t * b.S + w * n : b.iY + b.D - b.Z - t * b.S - w * n;
                                if (ZC.DK(u, b.iY, b.iY + b.D)) {
                                    r.push([b.iX, u], [b.iX + b.F, u]);
                                    y.AK && ZC.BQ.paint(s, y, r)
                                }
                                b.E9++
                            }
                        }
                    }
            }
            if (b.W.length > 0 && b.K7.AK && !b.A.AM["3d"])
                if (b.K7.AI > 0) {
                    f = b.B4(b.EA);
                    if (f >= b.iY && f <= b.iY + b.D) {
                        r = [];
                        r.push([b.iX, f], [b.iX + b.F, f]);
                        ZC.BQ.paint(s, b.K7, r)
                    }
                }
            if (b.W.length > 0 && b.H1.AK && (!b.A.AM["3d"] || !b.A.DD.true3d)) {
                switch (b.H1.o[ZC._[9]]) {
                    case "inner":
                        break;
                    case "outer":
                        o += h;
                        break;
                    default:
                        o += h / 2
                }
                b.E9 = 0;
                for (f = b.V; f <= b.A2 + (b.CQ ? 1 : 0); f++) {
                    b.GB = f;
                    if (f == b.V || f == b.A2 || f % m == 0) {
                        r = [];
                        t = f - b.V;
                        if (b.I.L8 || f == b.V) {
                            y = new ZC.E7(b);
                            y.copy(b.H1);
                            y.GM = a;
                            y.C2() && y.parse()
                        }
                        u = b.AD ? b.iY + b.Z + t * b.S : b.iY + b.D - b.Z - t * b.S;
                        switch (y.o[ZC._[9]]) {
                            case "inner":
                                r.push([k, u], [k + (b.J == 1 ? h : -h), u]);
                                break;
                            case "outer":
                                r.push([k, u], [k - (b.J == 1 ? h : -h), u]);
                                break;
                            default:
                                r.push([k + h / 2, u], [k - h / 2, u])
                        }
                        y.AK && ZC.BQ.paint(p, y, r);
                        b.E9++
                    }
                }
            }
            if (b.W.length > 0 && b.GQ.AK && b.G2 > 0 && n > 5 && !b.A.AM["3d"])
                for (f = b.V; f <
                    b.A2 + (b.CQ ? 1 : 0); f++) {
                    b.GB = f;
                    if (f == b.V || f == b.A2 || f % m == 0) {
                        t = f - b.V;
                        b.E9 = 0;
                        for (w = 1; w <= b.G2; w++) {
                            r = [];
                            y = new ZC.E7(b);
                            y.copy(b.GQ);
                            y.GM = a;
                            y.C2() && y.parse();
                            u = b.AD ? b.iY + b.Z + t * b.S + w * n : b.iY + b.D - b.Z - t * b.S - w * n;
                            if (ZC.DK(u, b.iY, b.iY + b.D)) {
                                switch (y.o[ZC._[9]]) {
                                    case "inner":
                                        r.push([k, u], [k + (b.J == 1 ? g : -g), u]);
                                        break;
                                    default:
                                        r.push([k, u], [k - (b.J == 1 ? g : -g), u]);
                                        break;
                                    case "cross":
                                        r.push([k + g / 2, u], [k - g / 2, u])
                                }
                                y.AK && ZC.BQ.paint(p, y, r)
                            }
                            b.E9++
                        }
                    }
                }
            b.QQ();
            var v, x = 0,
                z = 0,
                C = 0,
                B = [];
            if (b.W.length > 0 && b.BC.AK) {
                b.E9 = 0;
                c(b.V);
                b.E9 = b.A2 -
                    b.V;
                c(b.A2);
                b.E9 = 1;
                for (f = b.V + 1; f < b.A2; f++) f % l == 0 && c(f)
            }
            y = ZC._i_(x / (b.A2 - b.V));
            if (b.G.AK)
                if (b.G.B0 != null && b.G.B0 != "") {
                    v = new ZC.DC(b);
                    v.copy(b.G);
                    v.Q = b.Q + "-label";
                    v.F0 = b.Q + "-label " + b.A.Q + "-scale-label zc-scale-label";
                    v.B0 = b.G.B0;
                    v.Y = b.I.usc() ? b.I.mc() : ZC.AJ(b.A.Q + "-scales-ml-0-c");
                    v.GT = b.I.usc() ? ZC.AJ(b.I.Q + "-main") : ZC.AJ(b.I.Q + "-text");
                    v.parse();
                    v.iY = b.iY + b.D / 2 - v.D / 2;
                    v.F = b.D;
                    if (b.J == 1) {
                        if (b.iX - o - z - v.D > 0) o += z;
                        else if (b.iX - o - y - v.D > 0) o += y;
                        else o = b.iX - v.D;
                        v.iX = b.iX - v.F / 2 - v.D / 2 - o
                    } else {
                        if (o + z + v.D < e) o +=
                            z;
                        else if (o + y + v.D < e) o += y;
                        v.iX = b.iX + b.F + v.D / 2 + e * (b.J - 2) + o - v.F / 2
                    } if (v.AK) {
                        if (b.A.AM["3d"]) {
                            y = new ZC.C3(b.A, v.iX + v.F / 2 - ZC.AC.DX, v.iY + v.D / 2 - ZC.AC.DU, 0);
                            v.iX = y.DP[0] - v.F / 2;
                            v.iY = y.DP[1] - v.D / 2
                        }
                        v.paint();
                        v.D4()
                    }
                }
        }
    }
});
ZC.WL = ZC.SV.B2({
    $i: function(a) {
        this.b(a);
        this.EX = 1
    },
    parse: function() {
        this.b()
    },
    JJ: function() {
        this.S = this.A2 == this.V ? this.D - this.Z - this.CP : (this.D - this.Z - this.CP) / (this.A2 - this.V + (this.CQ ? 1 : 0))
    },
    XP: function(a) {
        this.b(a);
        this.JJ()
    },
    clear: function() {},
    build: function() {
        this.b()
    },
    Y9: function(a, c) {
        this.b(a, c);
        this.S = (this.D - this.Z - this.CP) / (this.A2 - this.V + (this.CQ ? 1 : 0))
    },
    K8: function(a) {
        a = this.AD ? (a - this.iY - this.Z) / (this.D - this.Z - this.CP) : (this.iY + this.D - a - this.Z) / (this.D - this.Z - this.CP);
        a = this.CQ ? this.V +
            Math.floor((this.A2 - this.V + 1) * a) : this.V + ZC._i_((this.A2 - this.V) * a);
        a = ZC.BN(0, a);
        return a = ZC.CO(this.HW, a)
    },
    LB: function(a) {
        return this.AD ? this.iY + this.Z + (a - this.V) * this.S + (this.CQ ? this.S / 2 : 0) : this.iY + this.D - this.Z - (a - this.V) * this.S - (this.CQ ? this.S / 2 : 0)
    },
    B4: function(a) {
        var c = (this.D - this.Z - this.CP) / (this.C8 - this.BJ + (this.CQ ? 1 : 0));
        return this.AD ? this.iY + this.Z + (a - this.BJ) * c : this.iY + this.D - this.Z - (a - this.BJ) * c
    },
    paint: function() {
        function a(F) {
            F = F.replace(/(%c)|(%scale-position)/g, b.E9);
            F = F.replace(/(%i)|(%scale-index)/g,
                b.GB);
            F = F.replace(/(%v)|(%scale-value)/g, b.W[b.GB] != null ? b.W[b.GB] : "");
            return F = F.replace(/(%l)|(%scale-label)/g, b.BD[b.GB] != null ? b.BD[b.GB] : "")
        }

        function c(F) {
            b.GB = F;
            var G = F - b.V;
            if (b.I.L8 || F == b.V) {
                x = new ZC.DC(b);
                x.copy(b.BC)
            }
            x.Q = b.Q + "-item-" + F;
            x.F0 = b.Q + "-item " + b.A.Q + "-scale-item zc-scale-item";
            var K = b.I3(F);
            if (!(b.I0 != null && ZC.AH(b.I0, K) == -1)) {
                x.B0 = K;
                x.Y = b.I.usc() ? b.I.mc() : ZC.AJ(b.A.Q + "-scales-ml-0-c");
                x.GT = b.I.usc() ? ZC.AJ(b.I.Q + "-main") : ZC.AJ(b.I.Q + "-text");
                x.HD = 1;
                x.H.nodeidx = F;
                x.parse();
                x.GM = a;
                x.C2() && x.parse();
                switch (x.o[ZC._[9]]) {
                    case "inner":
                        x.iX = b.J == 1 ? n + o : n - x.F - o;
                        break;
                    case "ref-left":
                        x.iX = h - x.F - o;
                        break;
                    case "ref-right":
                        x.iX = h + o;
                        break;
                    case "ref-auto":
                        if (k != null && k.M[F] != null) {
                            k.M[F].setup();
                            x.iX = k.M[F].iX < h ? h + o : h - x.F - o
                        } else x.iX = h + o;
                        break;
                    default:
                        x.iX = b.J == 1 ? n - x.F - o : n + o
                }
                x.iY = b.AD ? b.iY + b.Z + G * b.S - x.D / 2 + (b.CQ ? b.S / 2 : 0) : b.iY + b.D - b.Z - G * b.S - x.D / 2 - (b.CQ ? b.S / 2 : 0);
                if (b.A.AM["3d"]) {
                    G = new ZC.C3(b.A, x.iX + x.F / 2 - ZC.AC.DX, x.iY + x.D / 2 - ZC.AC.DU, 0);
                    x.iX = G.DP[0] - x.F / 2;
                    x.iY = G.DP[1] - x.D / 2
                }
                if (b.BC.o["auto-align"] &&
                    b.BC.A7 % 180 != 0) {
                    G = b.J == 1 ? 1 : -1;
                    if (b.BC.A7 == 90 || b.BC.A7 == 270) x.iX += G * (x.F / 2 - x.D / 2);
                    else if (ZC.DK(b.BC.A7, 0, 90) || ZC.DK(b.BC.A7, 270, 360)) {
                        x.iX += G * (x.F - x.F * ZC.CT(b.BC.A7)) / 2;
                        x.iY -= G * x.F * ZC.CJ(b.BC.A7) / 2
                    } else if (ZC.DK(b.BC.A7, 90, 270)) {
                        x.iX += G * (x.F + x.F * ZC.CT(b.BC.A7)) / 2;
                        x.iY += G * x.F * ZC.CJ(b.BC.A7) / 2
                    }
                }
                if (x.AK) {
                    G = 1;
                    if (!b.LM)
                        if (F == b.V || F == b.A2) G = 1;
                        else {
                            if (F % p == 0) G = 1;
                            F = 0;
                            for (K = A.length; F < K; F++)
                                if (ZC.DK(x.iY, A[F][1], A[F][1] + A[F][3]) || ZC.DK(x.iY + x.D, A[F][1], A[F][1] + A[F][3])) {
                                    G = 0;
                                    break
                                }
                        }
                    if (G) {
                        A.push([x.iX, x.iY,
                            x.F, x.D
                        ]);
                        x.paint();
                        B++;
                        z += x.F;
                        C = ZC.BN(C, x.F);
                        x.D4()
                    }
                }
                b.E9++
            }
        }
        var b = this;
        if (b.AK) {
            b.b();
            for (var e = 0, f = 0, g = b.A.B8.length; f < g; f++) b.A.B8[f].BK.substring(0, 7) == ZC._[52] && e++;
            var h = null,
                k = null;
            f = 0;
            for (g = b.A.AZ.AA.length; f < g; f++) {
                var l = b.A.AZ.AA[f],
                    m = l.B6();
                if (ZC.AH(m, b.BK) != -1) {
                    f = b.A.AY(l.B6("v")[0]);
                    h = f.B4(f.EA);
                    k = l;
                    break
                }
            }
            var o = 8;
            if (b.H1.o[ZC._[23]] != null) o = ZC._i_(b.H1.o[ZC._[23]]);
            l = 4;
            if (b.GQ.o[ZC._[23]] != null) l = ZC._i_(b.GQ.o[ZC._[23]]);
            e = ZC._i_(b.A.O.CK / (e - 1));
            var n = b.J == 1 ? b.iX : b.iX + b.F + (b.J - 2) * e;
            g = Math.ceil((b.A2 - b.V) / (b.LV - 1));
            var p = Math.ceil((b.A2 - b.V) / (b.FJ - 1));
            m = b.S * g / (b.G2 + 1);
            if (h == null) h = n;
            var s = ZC.K.CN(b.I.usc() ? b.I.Q + "-main-c" : b.A.Q + "-scales-ml-0-c", b.I.A5),
                t = ZC.K.CN(b.I.usc() ? b.I.Q + "-main-c" : b.A.Q + "-scales-bl-0-c", b.I.A5);
            if (b.W.length > 0)
                if (b.A.AM["3d"] && b.A.DD.true3d) {
                    b.X = b.A6 = b.AT;
                    var r = ZC.DZ.DH(b, b.A, n - ZC.AC.DX, n - ZC.AC.DX, b.iY - ZC.AC.DU, b.iY - ZC.AC.DU + b.D, -1, ZC.AC.FK + 1, "y");
                    b.A.BP.add(r)
                } else {
                    var u = [];
                    u.push([n, b.iY + b.D], [n, b.iY]);
                    ZC.BQ.paint(b.A.AM["3d"] && !b.A.DD.true3d ? t : s, b,
                        u)
                }
            if (b.W.length > 0 && b.BY.AK) {
                if (b.BY.o.items && b.BY.o.items.length > 0 && !b.A.AM["3d"])
                    for (f = b.V; f < b.A2 + (b.CQ ? 1 : 0); f++) {
                        r = f - b.V;
                        var y = new ZC.FY(b);
                        u = f % b.BY.o.items.length;
                        y.append(b.BY.o.items[u]);
                        y.Q = b.Q + "-guide-" + f;
                        y.Y = b.I.usc() ? b.I.mc() : ZC.AJ(b.A.Q + "-scales-bl-0-c");
                        y.parse();
                        y.iX = b.iX;
                        y.iY = b.AD ? b.iY + b.Z + r * b.S : b.iY + b.D - b.Z - (r + 1) * b.S;
                        y.F = b.F;
                        y.D = b.S;
                        y.paint()
                    }
                if (b.BY.AI > 0) {
                    b.E9 = 0;
                    for (f = b.V; f <= b.A2 + (b.CQ ? 1 : 0); f++) {
                        b.GB = f;
                        if (f == b.V || f == b.A2 + (b.CQ ? 1 : 0) || f % g == 0) {
                            if (b.I.L8 || f == b.V) {
                                var w = new ZC.E7(b);
                                w.copy(b.BY);
                                w.GM = a;
                                w.C2() && w.parse()
                            }
                            r = f - b.V;
                            u = [];
                            y = b.AD ? b.iY + b.Z + r * b.S : b.iY + b.D - b.Z - r * b.S;
                            if (w.AK)
                                if (b.A.AM["3d"]) {
                                    w.X = w.A6 = w.AT;
                                    r = ZC.DZ.DH(w, b.A, n - ZC.AC.DX, n - ZC.AC.DX + 1, y - ZC.AC.DU, y - ZC.AC.DU, 0, ZC.AC.FK, "x");
                                    b.A.BP.add(r);
                                    r = ZC.DZ.DH(w, b.A, b.iX - ZC.AC.DX, b.iX - ZC.AC.DX + b.F, y - ZC.AC.DU, y - ZC.AC.DU, ZC.AC.FK + 1, ZC.AC.FK + 2, "x");
                                    b.A.BP.add(r)
                                } else {
                                    u.push([b.iX, y], [b.iX + b.F, y]);
                                    ZC.BQ.paint(t, w, u)
                                }
                            b.E9++
                        }
                    }
                }
            }
            if (b.W.length > 0 && b.E8.AK && g == 1 && !b.A.AM["3d"]) {
                if (b.E8.o.items && b.E8.o.items.length > 0)
                    for (f = b.V; f < b.A2 + (b.CQ ? 1 : 0); f++) {
                        b.GB =
                            f;
                        r = f - b.V;
                        b.E9 = 0;
                        for (var v = 1; v <= b.G2; v++) {
                            y = new ZC.FY(b);
                            u = b.E9 % b.E8.o.items.length;
                            y.append(b.E8.o.items[u]);
                            y.Q = b.Q + "-guide-" + f + "-" + v;
                            y.Y = b.I.usc() ? b.I.mc() : ZC.AJ(b.A.Q + "-scales-bl-0-c");
                            y.parse();
                            y.iX = b.iX;
                            y.iY = b.AD ? b.iY + b.Z + (r + 1) * b.S - (v + 1) * m : b.iY + b.D - b.Z - (r + 1) * b.S + v * m;
                            y.F = b.F;
                            y.D = m;
                            y.paint();
                            b.E9++
                        }
                    }
                if (b.E8.AI > 0)
                    for (f = b.V; f < b.A2 + (b.CQ ? 1 : 0); f++) {
                        b.GB = f;
                        if (f == b.V || f == b.A2 + (b.CQ ? 1 : 0) || f % g == 0) {
                            r = f - b.V;
                            b.E9 = 0;
                            for (v = 1; v <= b.G2; v++) {
                                u = [];
                                w = new ZC.E7(b);
                                w.copy(b.E8);
                                w.GM = a;
                                w.C2() && w.parse();
                                y = b.AD ? b.iY +
                                    b.Z + r * b.S + v * m : b.iY + b.D - b.Z - r * b.S - v * m;
                                if (ZC.DK(y, b.iY, b.iY + b.D)) {
                                    u.push([b.iX, y], [b.iX + b.F, y]);
                                    w.AK && ZC.BQ.paint(t, w, u)
                                }
                                b.E9++
                            }
                        }
                    }
            }
            t = 0;
            if (b.W.length > 0 && b.H1.AK && (!b.A.AM["3d"] || !b.A.DD.true3d)) {
                switch (b.H1.o[ZC._[9]]) {
                    case "inner":
                        break;
                    case "outer":
                        t += o;
                        break;
                    default:
                        t += o / 2
                }
                b.E9 = 0;
                for (f = b.V; f <= b.A2 + (b.CQ ? 1 : 0); f++) {
                    b.GB = f;
                    if (f == b.V || f == b.A2 + (b.CQ ? 1 : 0) || f % g == 0) {
                        u = [];
                        r = f - b.V;
                        if (b.I.L8 || f == b.V) {
                            w = new ZC.E7(b);
                            w.copy(b.H1);
                            w.GM = a;
                            w.C2() && w.parse()
                        }
                        y = b.AD ? b.iY + b.Z + r * b.S : b.iY + b.D - b.Z - r * b.S;
                        switch (w.o[ZC._[9]]) {
                            case "ref-auto":
                                u.push([h -
                                    o / 2, y
                                ], [h + o / 2, y]);
                                break;
                            case "ref-left":
                                u.push([h - o, y], [h, y]);
                                break;
                            case "ref-right":
                                u.push([h + o, y], [h, y]);
                                break;
                            case "inner":
                                u.push([n, y], [n + (b.J == 1 ? o : -o), y]);
                                break;
                            case "outer":
                                u.push([n, y], [n - (b.J == 1 ? o : -o), y]);
                                break;
                            default:
                                u.push([n + o / 2, y], [n - o / 2, y])
                        }
                        w.AK && ZC.BQ.paint(s, w, u);
                        b.E9++
                    }
                }
            }
            if (b.W.length > 0 && b.G2 > 0 && b.GQ.AK && !b.A.AM["3d"])
                for (f = b.V; f < b.A2 + (b.CQ ? 1 : 0); f++)
                    if (f == b.V || f == b.A2 + (b.CQ ? 1 : 0) || f % g == 0) {
                        r = f - b.V;
                        for (v = 1; v <= b.G2; v++) {
                            u = [];
                            w = new ZC.E7(b);
                            w.copy(b.GQ);
                            w.GM = a;
                            w.C2() && w.parse();
                            y = b.AD ?
                                b.iY + b.Z + r * b.S + v * m : b.iY + b.D - b.Z - r * b.S - v * m;
                            if (ZC.DK(y, b.iY, b.iY + b.D)) {
                                switch (w.o[ZC._[9]]) {
                                    case "ref-auto":
                                        u.push([h - l / 2, y], [h + l / 2, y]);
                                        break;
                                    case "ref-left":
                                        u.push([h - l, y], [h, y]);
                                        break;
                                    case "ref-right":
                                        u.push([h + l, y], [h, y]);
                                        break;
                                    case "inner":
                                        u.push([n, y], [n + (b.J == 1 ? l : -l), y]);
                                        break;
                                    case "outer":
                                        u.push([n, y], [n - (b.J == 1 ? l : -l), y]);
                                        break;
                                    default:
                                        u.push([n + l / 2, y], [n - l / 2, y])
                                }
                                w.AK && ZC.BQ.paint(s, w, u)
                            }
                            b.E9++
                        }
                    }
            b.QQ();
            var x, z = 0,
                C = 0,
                B = 0,
                A = [];
            if (b.W.length > 0 && b.BC.AK) {
                b.E9 = 0;
                c(b.V);
                b.E9 = b.A2 - b.V;
                c(b.A2);
                b.E9 =
                    1;
                for (f = b.V + 1; f < b.A2; f++) f % p == 0 && c(f)
            }
            w = ZC._i_(z / B);
            if (b.G.AK)
                if (b.G.B0 != null) {
                    x = new ZC.DC(b);
                    x.copy(b.G);
                    x.Q = b.Q + "-label";
                    x.F0 = b.Q + "-label " + b.A.Q + "-scale-label zc-scale-label";
                    x.B0 = b.G.B0;
                    x.Y = b.I.usc() ? b.I.mc() : ZC.AJ(b.A.Q + "-scales-ml-0-c");
                    x.GT = b.I.usc() ? ZC.AJ(b.I.Q + "-main") : ZC.AJ(b.I.Q + "-text");
                    x.parse();
                    x.iY = b.iY + b.D / 2 - x.D / 2;
                    x.F = b.D;
                    if (b.J == 1) {
                        if (b.iX - t - C - x.D > 0) t += C;
                        else if (b.iX - t - w - x.D > 0) t += w;
                        else t = b.iX - x.D;
                        x.iX = b.iX - x.F / 2 - x.D / 2 - t
                    } else {
                        if (t + C + x.D < e) t += C;
                        else if (t + w + x.D < e) t += w;
                        x.iX = b.iX + b.F +
                            x.D / 2 + e * (b.J - 2) + t - x.F / 2
                    } if (x.AK) {
                        if (b.A.AM["3d"]) {
                            w = new ZC.C3(b.A, x.iX + x.F / 2 - ZC.AC.DX, x.iY + x.D / 2 - ZC.AC.DU, 0);
                            x.iX = w.DP[0] - x.F / 2;
                            x.iY = w.DP[1] - x.D / 2
                        }
                        x.paint();
                        x.D4()
                    }
                }
        }
    }
});
ZC.WM = ZC.PO.B2({
    $i: function(a) {
        this.b(a);
        this.EX = 1
    },
    parse: function() {
        this.b()
    },
    JJ: function() {
        this.S = this.A2 == this.V ? this.F - this.Z - this.CP : (this.F - this.Z - this.CP) / (this.A2 - this.V + (this.CQ ? 1 : 0))
    },
    XP: function(a) {
        this.b(a);
        this.JJ()
    },
    Y9: function(a, c) {
        this.b(a, c);
        this.S = (this.F - this.Z - this.CP) / (this.A2 - this.V + (this.CQ ? 1 : 0))
    },
    clear: function() {},
    build: function() {
        this.b()
    },
    OS: function(a) {
        return this.BJ + ZC._f_((this.C8 - this.BJ) * (this.AD ? (this.iX + this.F - this.Z - a) / (this.F - this.Z - this.CP) : (a - this.iX - this.Z) /
            (this.F - this.Z - this.CP)))
    },
    B4: function(a) {
        var c = (this.F - this.Z - this.CP) / (this.C8 - this.BJ);
        return this.AD ? this.iX + this.F - this.Z - (a - this.BJ) * c : this.iX + this.Z + (a - this.BJ) * c
    },
    paint: function() {
        function a(A) {
            A = A.replace(/(%c)|(%scale-position)/g, b.E9);
            A = A.replace(/(%i)|(%scale-index)/g, b.GB);
            A = A.replace(/(%v)|(%scale-value)/g, b.W[b.GB] != null ? b.W[b.GB] : "");
            return A = A.replace(/(%l)|(%scale-label)/g, b.BD[b.GB] != null ? b.BD[b.GB] : "")
        }

        function c(A) {
            b.GB = A;
            var F = A - b.V;
            if (b.I.L8 || A == b.V) {
                v = new ZC.DC(b);
                v.copy(b.BC)
            }
            v.F0 =
                b.Q + "-item " + b.A.Q + "-scale-item zc-scale-item";
            v.Q = b.Q + "-item-" + A;
            var G = b.I3(A);
            if (!(b.I0 != null && ZC.AH(b.I0, G) == -1)) {
                v.B0 = G;
                v.Y = b.I.usc() ? b.I.mc() : ZC.AJ(b.A.Q + "-scales-ml-0-c");
                v.GT = b.I.usc() ? ZC.AJ(b.I.Q + "-main") : ZC.AJ(b.I.Q + "-text");
                v.HD = 1;
                v.parse();
                v.GM = a;
                v.DE = b.BC.DE;
                v.C2() && v.parse();
                switch (v.o[ZC._[9]]) {
                    case "inner":
                        v.iY = b.J == 1 ? k - v.C9 - h : k + h;
                        break;
                    default:
                        v.iY = b.J == 1 ? k + h : k - v.C9 - h
                }
                v.iX = b.AD ? b.iX + b.F - b.Z - F * b.S - v.CZ / 2 - (b.CQ ? b.S / 2 : 0) : b.iX + b.Z + F * b.S - v.CZ / 2 + (b.CQ ? b.S / 2 : 0);
                if (b.A.AM["3d"]) {
                    F = new ZC.C3(b.A,
                        v.iX + v.F / 2 - ZC.AC.DX, v.iY + v.D / 2 - ZC.AC.DU, 0);
                    v.iX = F.DP[0] - v.F / 2;
                    v.iY = F.DP[1] - v.D / 2
                }
                if (b.BC.o["auto-align"] && b.BC.A7 % 180 != 0) {
                    F = ZC.DK(b.BC.A7, 0, 180) ? b.J == 1 ? 1 : -1 : b.J == 1 ? -1 : 1;
                    v.iX += F * v.F * ZC.CT(b.BC.A7) / 2;
                    v.iY += F * (v.F * ZC.CJ(b.BC.A7) / 2 - v.D * ZC.CJ(b.BC.A7) / 2)
                }
                if (v.AK) {
                    F = 1;
                    if (!b.LM)
                        if (A == b.V || A == b.A2) F = 1;
                        else {
                            if (A % l == 0) F = 1;
                            A = 0;
                            for (G = x.length; A < G; A++)
                                if (ZC.DK(v.iX, x[A][0], x[A][0] + x[A][2]) || ZC.DK(v.iX + v.F, x[A][0], x[A][0] + x[A][2])) {
                                    F = 0;
                                    break
                                }
                        }
                    if (F) {
                        x.push([v.iX, v.iY, v.F, v.D]);
                        v.paint();
                        B++;
                        z += v.D;
                        C = ZC.BN(C, v.D);
                        v.D4()
                    }
                }
                b.E9++
            }
        }
        var b = this;
        if (!(!b.AK || b.W.length == 0)) {
            b.b();
            for (var e = 0, f = 0, g = b.A.B8.length; f < g; f++) b.A.B8[f].BK.substring(0, 7) == ZC._[53] && e++;
            var h = 8;
            if (b.H1.o[ZC._[23]] != null) h = ZC._i_(b.H1.o[ZC._[23]]);
            g = 4;
            if (b.GQ.o[ZC._[23]] != null) g = ZC._i_(b.GQ.o[ZC._[23]]);
            e = ZC._i_(b.A.O.CM / (e - 1));
            var k = b.J == 1 ? b.iY + b.D : b.iY - (b.J - 2) * e,
                l = Math.ceil((b.A2 - b.V) / (b.FJ - 1)),
                m = Math.ceil((b.A2 - b.V) / (b.LV - 1)),
                o = 0,
                n = b.S * m / (b.G2 + 1),
                p = ZC.K.CN(b.I.usc() ? b.I.Q + "-main-c" : b.A.Q + "-scales-ml-0-c", b.I.A5),
                s = ZC.K.CN(b.I.usc() ? b.I.Q +
                    "-main-c" : b.A.Q + "-scales-bl-0-c", b.I.A5);
            if (b.W.length > 0)
                if (b.A.AM["3d"] && b.A.DD.true3d) {
                    b.X = b.A6 = b.AT;
                    var t = ZC.DZ.DH(b, b.A, b.iX - ZC.AC.DX, b.iX - ZC.AC.DX + b.F, k - ZC.AC.DU, k - ZC.AC.DU, -1, ZC.AC.FK + 1, "x");
                    b.A.BP.add(t)
                } else {
                    var r = [];
                    r.push([b.iX, k], [b.iX + b.F, k]);
                    ZC.BQ.paint(p, b, r)
                }
            if (b.W.length > 0 && b.BY.AK) {
                if (b.BY.o.items && b.BY.o.items.length > 0 && !b.A.AM["3d"]) {
                    b.E9 = 0;
                    for (f = b.V; f <= b.A2 + (b.CQ ? 1 : 0); f++) {
                        b.GB = f;
                        if (f == b.V || f == b.A2 || f % m == 0) {
                            t = f - b.V;
                            r = new ZC.FY(b);
                            var u = b.E9 % b.BY.o.items.length;
                            r.append(b.BY.o.items[u]);
                            r.Q = b.Q + "-guide-" + f;
                            r.Y = b.I.usc() ? b.I.mc() : ZC.AJ(b.A.Q + "-scales-bl-0-c");
                            r.parse();
                            u = b.AD ? b.iX + b.F - b.Z - t * b.S : b.iX + b.Z + t * b.S;
                            r.iX = u;
                            r.iY = b.iY;
                            r.F = b.S * m;
                            r.D = b.D;
                            r.paint();
                            b.E9++
                        }
                    }
                }
                if (b.BY.AI > 0) {
                    b.E9 = 0;
                    for (f = b.V; f <= b.A2 + (b.CQ ? 1 : 0); f++) {
                        b.GB = f;
                        if (f == b.V || f == b.A2 || f % m == 0) {
                            if (b.I.L8 || f == b.V) {
                                var y = new ZC.E7(b);
                                y.copy(b.BY);
                                y.GM = a;
                                y.C2() && y.parse()
                            }
                            r = [];
                            t = f - b.V;
                            u = b.AD ? b.iX + b.F - b.Z - t * b.S : b.iX + b.Z + t * b.S;
                            if (y.AK)
                                if (b.A.AM["3d"]) {
                                    y.X = y.A6 = y.AT;
                                    t = ZC.DZ.DH(y, b.A, u - ZC.AC.DX, u - ZC.AC.DX, k - ZC.AC.DU, k - ZC.AC.DU - b.D,
                                        ZC.AC.FK + 1, ZC.AC.FK + 2, "z");
                                    b.A.BP.add(t);
                                    t = ZC.DZ.DH(y, b.A, u - ZC.AC.DX, u - ZC.AC.DX, k - ZC.AC.DU, k - ZC.AC.DU - 1, 0, ZC.AC.FK, "z");
                                    b.A.BP.add(t)
                                } else {
                                    r.push([u, b.iY], [u, b.iY + b.D]);
                                    ZC.BQ.paint(s, y, r)
                                }
                            b.E9++
                        }
                    }
                }
            }
            if (b.W.length > 0 && b.E8.AK && n > 5 && !b.A.AM["3d"]) {
                if (b.E8.o.items && b.E8.o.items.length > 0)
                    for (f = b.V; f < b.A2 + (b.CQ ? 1 : 0); f++) {
                        b.GB = f;
                        if (f == b.V || f == b.A2 || f % m == 0) {
                            t = f - b.V;
                            for (var w = b.E9 = 0; w <= b.G2; w++) {
                                r = new ZC.FY(b);
                                u = b.E9 % b.E8.o.items.length;
                                r.append(b.E8.o.items[u]);
                                r.Q = b.Q + "-guide-" + f + "-" + w;
                                r.Y = b.I.usc() ? b.I.mc() :
                                    ZC.AJ(b.A.Q + "-scales-bl-0-c");
                                r.parse();
                                u = b.AD ? b.iX + b.F - b.Z - t * b.S - (w + 1) * n : b.iX + b.Z + t * b.S + w * n;
                                r.iX = u;
                                r.iY = b.iY;
                                r.F = n;
                                r.D = b.D;
                                r.paint();
                                b.E9++
                            }
                        }
                    }
                if (b.E8.AI > 0)
                    for (f = b.V; f < b.A2 + (b.CQ ? 1 : 0); f++) {
                        b.GB = f;
                        if (f == b.V || f == b.A2 || f % m == 0) {
                            t = f - b.V;
                            b.E9 = 0;
                            for (w = 1; w <= b.G2; w++) {
                                r = [];
                                y = new ZC.E7(b);
                                y.copy(b.E8);
                                y.GM = a;
                                y.C2() && y.parse();
                                u = b.AD ? b.iX + b.F - b.Z - t * b.S - w * n : b.iX + b.Z + t * b.S + w * n;
                                if (ZC.DK(u, b.iX, b.iX + b.F)) {
                                    r.push([u, b.iY], [u, b.iY + b.D]);
                                    y.AK && ZC.BQ.paint(s, y, r)
                                }
                                b.E9++
                            }
                        }
                    }
            }
            if (b.W.length > 0 && b.H1.AK && (!b.A.AM["3d"] ||
                !b.A.DD.true3d)) {
                switch (b.H1.o[ZC._[9]]) {
                    case "inner":
                        break;
                    case "outer":
                        o += h;
                        break;
                    default:
                        o += h / 2
                }
                b.E9 = 0;
                for (f = b.V; f <= b.A2 + (b.CQ ? 1 : 0); f++) {
                    b.GB = f;
                    if (f == b.V || f == b.A2 || f % m == 0) {
                        r = [];
                        t = f - b.V;
                        if (b.I.L8 || f == b.V) {
                            y = new ZC.E7(b);
                            y.copy(b.H1);
                            y.GM = a;
                            y.C2() && y.parse()
                        }
                        u = b.AD ? b.iX + b.F - b.Z - t * b.S : b.iX + b.Z + t * b.S;
                        switch (y.o[ZC._[9]]) {
                            case "inner":
                                r.push([u, k - (b.J == 1 ? h : -h)], [u, k]);
                                break;
                            case "outer":
                                r.push([u, k], [u, k + (b.J == 1 ? h : -h)]);
                                break;
                            default:
                                r.push([u, k + h / 2], [u, k - h / 2])
                        }
                        y.AK && ZC.BQ.paint(p, y, r);
                        b.E9++
                    }
                }
            }
            if (b.W.length >
                0 && b.GQ.AK && b.G2 > 0 && n > 5 && !b.A.AM["3d"])
                for (f = b.V; f < b.A2 + (b.CQ ? 1 : 0); f++) {
                    b.GB = f;
                    if (f == b.V || f == b.A2 || f % m == 0) {
                        t = f - b.V;
                        b.E9 = 0;
                        for (w = 1; w <= b.G2; w++) {
                            r = [];
                            y = new ZC.E7(b);
                            y.copy(b.GQ);
                            y.GM = a;
                            y.C2() && y.parse();
                            u = b.AD ? b.iX + b.F - b.Z - t * b.S - w * n : b.iX + b.Z + t * b.S + w * n;
                            if (ZC.DK(u, b.iX, b.iX + b.F)) {
                                switch (y.o[ZC._[9]]) {
                                    case "inner":
                                        r.push([u, k - (b.J == 1 ? g : -g)], [u, k]);
                                        break;
                                    default:
                                        r.push([u, k], [u, k + (b.J == 1 ? g : -g)]);
                                        break;
                                    case "cross":
                                        r.push([u, k + g / 2], [u, k - g / 2])
                                }
                                y.AK && ZC.BQ.paint(p, y, r)
                            }
                            b.E9++
                        }
                    }
                }
            b.QQ();
            var v, x = [],
                z = 0,
                C = 0,
                B =
                0;
            if (b.W.length > 0 && b.BC.AK) {
                b.E9 = 0;
                c(b.V);
                b.E9 = b.A2 - b.V;
                c(b.A2);
                b.E9 = 1;
                for (f = b.V + 1; f < b.A2; f++) f % l == 0 && c(f)
            }
            f = ZC._i_(z / B);
            if (b.G.AK)
                if (b.G.B0 != null) {
                    v = new ZC.DC(b);
                    v.copy(b.G);
                    v.Q = b.Q + "-label";
                    v.F0 = b.Q + "-label " + b.A.Q + "-scale-label zc-scale-label";
                    v.B0 = b.G.B0;
                    v.Y = b.I.usc() ? b.I.mc() : ZC.AJ(b.A.Q + "-scales-ml-0-c");
                    v.GT = b.I.usc() ? ZC.AJ(b.I.Q + "-main") : ZC.AJ(b.I.Q + "-text");
                    v.parse();
                    v.F = b.F;
                    v.iX = b.iX;
                    if (b.J == 1) {
                        if (b.iY + b.D + o + C + v.D < b.A.iY + b.A.D) o += C;
                        else if (b.iY + b.D + o + f + v.D < b.A.iY + b.A.D) o += f;
                        else o = b.A.iY +
                            b.A.D - b.iY - b.D - v.D;
                        v.iY = b.iY + b.D + o
                    } else {
                        if (o + C + v.D < e) o += C;
                        else if (o + f + v.D < e) o += f;
                        v.iY = b.iY - e * (b.J - 2) - v.D - o
                    } if (v.AK) {
                        if (b.A.AM["3d"]) {
                            f = new ZC.C3(b.A, v.iX + v.F / 2 - ZC.AC.DX, v.iY + v.D / 2 - ZC.AC.DU, 0);
                            v.iX = f.DP[0] - v.F / 2;
                            v.iY = f.DP[1] - v.D / 2
                        }
                        v.paint();
                        v.D4()
                    }
                }
        }
    }
});
ZC.OR = ZC.SV.B2({
    $i: function(a) {
        this.b(a);
        this.K6 = "";
        this.G6 = this.JN = 1;
        this.E5 = this.E4 = 0;
        this.HY = 0.6
    },
    parse: function() {
        this.b();
        this.iX += this.CR;
        this.iY += this.CM;
        this.F -= this.CR + this.CK;
        this.D -= this.CM + this.CI;
        this.OT("layout", "K6");
        if (this.o["size-factor"] != null) this.HY = ZC._f_(ZC._p_(this.o["size-factor"]))
    },
    XP: function(a) {
        this.b(a);
        a = ZC.AP.TR(this.K6, this.W.length, false);
        this.JN = a[0];
        this.G6 = a[1];
        this.E4 = this.F / this.G6;
        this.E5 = this.D / this.JN
    },
    clear: function() {},
    build: function() {
        this.b()
    },
    paint: function() {
        function a(m) {
            if (c.I.L8 ||
                m == 0) {
                l = new ZC.DC(c);
                l.copy(c.BC)
            }
            var o = m % c.G6,
                n = Math.floor(m / c.G6);
            l.F0 = c.Q + "-item " + c.A.Q + "-scale-item zc-scale-item";
            l.Q = c.Q + "-item-" + m;
            var p = c.I3(m);
            if (!(c.I0 != null && ZC.AH(c.I0, p) == -1)) {
                l.B0 = p;
                l.Y = c.I.usc() ? c.I.mc() : ZC.AJ(c.A.Q + "-scales-ml-0-c");
                l.parse();
                l.GM = function(s) {
                    s = s.replace(/%i/g, m);
                    s = s.replace(/%v/g, c.W[m] != null ? c.W[m] : "");
                    return s = s.replace(/%l/g, c.BD[m] != null ? c.BD[m] : "")
                };
                l.DE = c.BC.DE;
                l.C2() && l.parse();
                if (l.AK) {
                    p = "bottom";
                    if (c.BC.o[ZC._[9]] != null) p = c.BC.o[ZC._[9]];
                    o = c.iX + o * c.E4;
                    n =
                        c.iY + n * c.E5;
                    switch (p) {
                        case "top-left":
                            l.iX = o;
                            l.iY = n;
                            break;
                        case "top-right":
                            l.iX = o + c.E4 - l.CZ;
                            l.iY = n;
                            break;
                        case "bottom-left":
                            l.iX = o;
                            l.iY = n + c.E5 - l.C9;
                            break;
                        case "bottom-right":
                            l.iX = o + c.E4 - l.CZ;
                            l.iY = n + c.E5 - l.C9;
                            break;
                        case "top":
                            l.iX = o + c.E4 / 2 - l.CZ / 2;
                            l.iY = n;
                            break;
                        case "right":
                            l.iX = o + c.E4 - l.CZ;
                            l.iY = n + c.E5 / 2 - l.C9 / 2;
                            break;
                        case "left":
                            l.iX = o;
                            l.iY = n + c.E5 / 2 - l.C9 / 2;
                            break;
                        default:
                            l.iX = o + c.E4 / 2 - l.CZ / 2;
                            l.iY = n + c.E5 - l.C9
                    }
                    l.F = l.CZ;
                    l.D = l.C9;
                    l.paint();
                    l.D4()
                }
            }
        }
        var c = this;
        if (c.AK) {
            c.b();
            var b = ZC.K.CN(c.I.usc() ? c.I.Q +
                    "-main-c" : c.A.Q + "-scales-ml-0-c", c.I.A5),
                e = ZC.K.CN(c.I.usc() ? c.I.Q + "-main-c" : c.A.Q + "-scales-bl-0-c", c.I.A5),
                f = [];
            f.push([c.iX, c.iY], [c.iX + c.F, c.iY], [c.iX + c.F, c.iY + c.D], [c.iX, c.iY + c.D], [c.iX, c.iY]);
            ZC.BQ.paint(b, c, f);
            if (c.BY.AK) {
                if (c.BY.o.items && c.BY.o.items.length > 0) {
                    b = 0;
                    for (f = c.W.length; b < f; b++) {
                        var g = b % c.G6,
                            h = Math.floor(b / c.G6),
                            k = new ZC.FY(c);
                        k.o = c.BY.o.items[b % c.BY.o.items.length];
                        k.Q = c.Q + "-guide-" + b;
                        k.Y = c.I.usc() ? c.I.mc() : ZC.AJ(c.A.Q + "-scales-bl-0-c");
                        k.parse();
                        k.iX = c.iX + g * c.E4;
                        k.iY = c.iY + h * c.E5;
                        k.F = c.E4;
                        k.D = c.E5;
                        k.paint()
                    }
                }
                if (c.BY.AI > 0) {
                    f = [];
                    for (b = 0; b <= c.G6; b++) f.push([c.iX + b * c.E4, c.iY], [c.iX + b * c.E4, c.iY + c.D], null);
                    for (b = 0; b <= c.JN; b++) f.push([c.iX, c.iY + b * c.E5], [c.iX + c.F, c.iY + b * c.E5], null);
                    ZC.BQ.paint(e, c.BY, f)
                }
            }
            var l;
            if (c.BC.AK) {
                b = 0;
                for (f = c.W.length; b < f; b++) a(b)
            }
        }
    }
});
ZC.WN = ZC.SV.B2({
    $i: function(a) {
        this.b(a);
        this.C5 = 0;
        this.GN = 360
    },
    parse: function() {
        var a;
        this.b();
        if ((a = this.o["ref-angle"]) != null) this.C5 = ZC._i_(a) % 360;
        if ((a = this.o.aperture) != null) this.GN = ZC._i_(a) % 360
    }
});
ZC.YP = ZC.PO.B2({
    $i: function(a) {
        this.b(a)
    },
    parse: function() {
        this.b()
    },
    JJ: function() {},
    XP: function(a) {
        this.b(a);
        this.JJ()
    },
    clear: function() {
        this.b()
    },
    build: function() {
        this.b()
    },
    paint: function() {
        this.b()
    }
});
ZC.VV = ZC.YP.B2({
    $i: function(a) {
        this.b(a);
        this.C5 = -90;
        this.GN = 180;
        this.GC = this.KK = null;
        this.CG = "circle"
    },
    parse: function() {
        var a;
        this.b();
        if ((a = this.o["ref-angle"]) != null) this.C5 = ZC._i_(a);
        if ((a = this.o.aperture) != null) this.GN = ZC._i_(a);
        if ((a = this.o.center) != null) {
            this.KK = new ZC.D5(this);
            this.KK.append(a);
            this.KK.parse()
        }
        if ((a = this.o.ring) != null) {
            this.GC = new ZC.D5(this);
            this.I.AQ.load(this.GC.o, [this.A.AB + "." + this.BK + ".ring"]);
            this.GC.append(a);
            this.GC.parse()
        }
    },
    XP: function(a) {
        this.b(a)
    },
    clear: function() {},
    build: function() {
        this.b()
    },
    A0U: function(a, c) {
        var b = this.A.AY("scale"),
            e = b.iX + b.F / 2;
        b = b.iY + b.D / 2;
        var f = 360 / this.W.length,
            g = this.A.AY(ZC._[54]);
        return ZC.AP.BA(e, b, c + g.Z, this.C5 + a * f)
    },
    paint: function() {
        var a = this;
        if (!(!a.AK || a.W.length == 0)) {
            a.AD && a.W.reverse();
            ZC.K.CN(a.I.usc() ? a.I.Q + "-main-c" : a.A.Q + "-scales-ml-0-c", a.I.A5);
            var c = ZC.K.CN(a.I.usc() ? a.I.Q + "-main-c" : a.A.Q + "-scales-bl-0-c", a.I.A5),
                b = ZC._i_(a.H1.o[ZC._[23]] || 8),
                e = 0,
                f = a.A.AY("scale"),
                g = ZC.CO(f.E4 / 2, f.E5 / 2) * f.HY;
            a.A.AY(ZC._[54]);
            for (var h =
                a.GN / (a.W.length - 1), k = 0; k < f.W.length; k++) {
                var l = f.iX + k % f.G6 * f.E4 + f.E4 / 2 + f.C0,
                    m = f.iY + Math.floor(k / f.G6) * f.E5 + f.E5 / 2 + f.C4,
                    o = new ZC.D5(a);
                o.Y = a.I.usc() ? a.I.mc() : ZC.AJ(a.A.Q + "-scales-bl-0-c");
                o.copy(a);
                o.Q = a.Q + "-" + k;
                o.iX = l;
                o.iY = m;
                o.AR = g - 0.5;
                o.DQ = a.GN == 360 ? "circle" : "pie";
                o.AE = a.C5 - a.GN / 2 + 360;
                o.AO = a.C5 + a.GN / 2 + 360;
                o.BG = 0;
                o.parse();
                o.paint();
                if (a.BY.AK) {
                    if (a.BY.o.items && a.BY.o.items.length > 0)
                        for (var n = 0; n < a.W.length - 1; n++) {
                            o = new ZC.D5(a);
                            var p = n % a.BY.o.items.length;
                            o.append(a.BY.o.items[p]);
                            o.Y = a.I.usc() ?
                                a.I.mc() : ZC.AJ(a.A.Q + "-scales-bl-0-c");
                            o.iX = l;
                            o.iY = m;
                            o.Q = a.Q + "-pie-" + n;
                            o.o.type = "pie";
                            o.o[ZC._[23]] = g - a.CP;
                            o.BG = a.Z;
                            o.AE = a.C5 - a.GN / 2 + n * h + 360;
                            o.AO = a.C5 - a.GN / 2 + (n + 1) * h + 360;
                            o.parse();
                            o.paint()
                        }
                    if (a.BY.AI > 0) {
                        n = 0;
                        for (p = a.W.length; n < p; n++) {
                            var s = new ZC.E7(a);
                            s.copy(a.BY);
                            s.GM = function(t) {
                                t = t.replace(/%i/g, n);
                                t = t.replace(/%k/g, n);
                                t = t.replace(/%v/g, a.W[n] != null ? a.W[n] : "");
                                return t = t.replace(/%l/g, a.BD[n] != null ? a.BD[n] : "")
                            };
                            s.DE = a.BY.DE;
                            s.C2() && s.parse();
                            o = [];
                            o.push(ZC.AP.BA(l, m, g - a.CP, a.C5 - a.GN / 2 + n * h));
                            o.push(ZC.AP.BA(l,
                                m, a.Z, a.C5 - a.GN / 2 + n * h));
                            ZC.BQ.paint(c, s, o)
                        }
                    }
                }
                if (a.GC != null) {
                    o = new ZC.D5(a);
                    o.append(a.GC.o);
                    o.Y = a.I.usc() ? a.I.mc() : ZC.AJ(a.A.Q + "-scales-bl-0-c");
                    o.Q = a.Q + "-ring";
                    o.iX = l;
                    o.iY = m;
                    o.o.type = "pie";
                    o.BG = g - ZC._i_(o.o[ZC._[23]]);
                    o.o[ZC._[23]] = g;
                    o.AE = a.C5 - a.GN / 2 + 360;
                    o.AO = a.C5 + a.GN / 2 + 360;
                    o.parse();
                    o.paint();
                    if (a.GC.o.items && a.GC.o.items.length > 0)
                        for (n = 0; n < a.W.length - 1; n++) {
                            o = new ZC.D5(a);
                            o.append(a.GC.o);
                            p = n % a.GC.o.items.length;
                            o.append(a.GC.o.items[p]);
                            o.Y = a.I.usc() ? a.I.mc() : ZC.AJ(a.A.Q + "-scales-bl-0-c");
                            o.Q =
                                a.Q + "-ring-" + n;
                            o.iX = l;
                            o.iY = m;
                            o.o.type = "pie";
                            o.BG = g - ZC._i_(o.o[ZC._[23]]);
                            o.o[ZC._[23]] = g;
                            o.AE = a.C5 - a.GN / 2 + n * h + 360;
                            o.AO = a.C5 - a.GN / 2 + (n + 1) * h + 360 + 1;
                            o.parse();
                            o.GM = function(t) {
                                t = t.replace(/%i/g, n);
                                t = t.replace(/%k/g, n);
                                t = t.replace(/%v/g, a.W[n] != null ? a.W[n] : "");
                                return t = t.replace(/%l/g, a.BD[n] != null ? a.BD[n] : "")
                            };
                            o.DE = a.GC.DE;
                            o.C2() && o.parse();
                            o.paint()
                        }
                }
                if (a.H1.AK) {
                    switch (a.H1.o[ZC._[9]]) {
                        case "inner":
                            break;
                        case "outer":
                            e += b;
                            break;
                        default:
                            e += b / 2
                    }
                    o = [];
                    n = 0;
                    for (p = a.W.length; n < p; n++) {
                        s = a.C5 - a.GN / 2 + n * h;
                        switch (a.H1.o[ZC._[9]]) {
                            case "inner":
                                o.push(ZC.AP.BA(l,
                                    m, g - b, s), ZC.AP.BA(l, m, g, s), null);
                                break;
                            case "outer":
                                o.push(ZC.AP.BA(l, m, g, s), ZC.AP.BA(l, m, g + b, s), null);
                                break;
                            default:
                                o.push(ZC.AP.BA(l, m, g - b / 2, s), ZC.AP.BA(l, m, g + b / 2, s), null)
                        }
                    }
                    ZC.BQ.paint(c, a.H1, o)
                }
                if (a.BC.AK) {
                    n = 0;
                    for (p = a.W.length; n < p; n++) {
                        o = new ZC.DC(a);
                        o.append(a.BC.o);
                        o.F0 = a.Q + "-item " + a.A.Q + "-scale-item zc-scale-item";
                        o.Q = a.Q + "-item-" + k + "-" + n;
                        s = a.I3(n);
                        o.B0 = s;
                        o.Y = a.I.usc() ? a.I.mc() : ZC.AJ(a.A.Q + "-scales-ml-0-c");
                        o.parse();
                        o.GM = function(t) {
                            t = t.replace(/%i/g, n);
                            t = t.replace(/%k/g, n);
                            t = t.replace(/%v/g,
                                a.W[n] != null ? a.W[n] : "");
                            return t = t.replace(/%l/g, a.BD[n] != null ? a.BD[n] : "")
                        };
                        o.DE = a.BC.DE;
                        o.C2() && o.parse();
                        if (o.AK) {
                            o.D = o.C9;
                            s = ZC.AP.BA(l, m, g + a.BC.DI + Math.sqrt(o.F * o.F / 4 + o.D * o.D / 4) * 1.15 + e, a.C5 - a.GN / 2 + n * h);
                            o.iX = s[0] - o.F / 2;
                            o.iY = s[1] - o.D / 2;
                            o.paint();
                            o.D4()
                        }
                    }
                }
            }
        }
    },
    paint_: function() {
        var a = this.A.AY("scale");
        ZC.CO(a.E4 / 2, a.E5 / 2);
        for (var c = 0; c < a.W.length; c++) {
            var b = a.iX + c % a.G6 * a.E4 + a.E4 / 2 + a.C0,
                e = a.iY + Math.floor(c / a.G6) * a.E5 + a.E5 / 2 + a.C4;
            if (this.KK != null) {
                var f = new ZC.D5(this);
                f.append(this.KK.o);
                f.Y = this.I.usc() ?
                    this.I.mc("top") : ZC.AJ(this.A.Q + "-scales-ml-0-c");
                f.Q = this.Q + "-" + c + "-center";
                f.iX = b;
                f.iY = e;
                f.o.type = "circle";
                f.parse();
                f.paint()
            }
        }
    }
});
ZC.VO = ZC.WN.B2({
    $i: function(a) {
        this.b(a);
        this.C5 = 0;
        this.CG = "star"
    },
    parse: function() {
        this.b();
        this.OT_a([
            ["aspect", "CG"],
            ["ref-angle", "C5", "i"]
        ]);
        if (this.C5 % 90 != 0) this.C5 = 0
    },
    XP: function(a) {
        this.b(a)
    },
    clear: function() {},
    build: function() {
        this.b()
    },
    A0U: function(a, c) {
        var b = this.A.AY("scale"),
            e = b.iX + b.F / 2;
        b = b.iY + b.D / 2;
        var f = 360 / this.W.length,
            g = this.A.AY(ZC._[54]);
        return ZC.AP.BA(e, b, c + g.Z, this.C5 + a * f)
    },
    paint: function() {
        function a(u) {
            if (c.I.L8 || u == 0) {
                r = new ZC.DC(c);
                r.copy(c.BC)
            }
            r.F0 = c.Q + "-item " + c.A.Q + "-scale-item zc-scale-item";
            r.Q = c.Q + "-item-" + u;
            var y = c.I3(u);
            if (!(c.I0 != null && ZC.AH(c.I0, y) == -1)) {
                r.B0 = y;
                r.Y = c.I.usc() ? c.I.mc() : ZC.AJ(c.A.Q + "-scales-ml-0-c");
                r.parse();
                r.GM = function(w) {
                    w = w.replace(/%i/g, u);
                    w = w.replace(/%v/g, c.W[u] != null ? c.W[u] : "");
                    return w = w.replace(/%l/g, c.BD[u] != null ? c.BD[u] : "")
                };
                r.DE = c.BC.DE;
                r.C2() && r.parse();
                r.F = r.CZ;
                r.D = r.C9;
                y = ZC.AP.BA(m, o, k + g + ZC._a_(10 * ZC.CJ(c.C5 + u * n)) + ZC._a_(r.F / 2 * ZC.CT(c.C5 + u * n)), c.C5 + u * n);
                r.iX = y[0] - r.F / 2;
                r.iY = y[1] - r.D / 2;
                r.paint();
                r.D4()
            }
        }
        var c = this;
        if (!(!c.AK || c.W.length == 0)) {
            c.b();
            var b = ZC.K.CN(c.I.usc() ? c.I.Q + "-main-c" : c.A.Q + "-scales-ml-0-c", c.I.A5),
                e = ZC.K.CN(c.I.usc() ? c.I.Q + "-main-c" : c.A.Q + "-scales-bl-0-c", c.I.A5),
                f = ZC._i_(c.H1.o[ZC._[23]] || 8),
                g = 0,
                h = c.A.AY("scale"),
                k = ZC.CO(h.F / 2, h.D / 2) * h.HY,
                l = c.A.AY(ZC._[54]),
                m = h.iX + h.F / 2,
                o = h.iY + h.D / 2,
                n = 360 / c.W.length;
            if (c.BY.AK) {
                if (c.BY.o.items && c.BY.o.items.length > 0) {
                    var p = 0;
                    for (h = c.W.length; p < h; p++)
                        if (c.CG == "circle") {
                            var s = new ZC.D5(c),
                                t = p % c.BY.o.items.length;
                            s.append(c.BY.o.items[t]);
                            s.Y = c.I.usc() ? c.I.mc() : ZC.AJ(c.A.Q + "-scales-bl-0-c");
                            s.iX = m;
                            s.iY = o;
                            s.o.type = "pie";
                            s.o[ZC._[23]] = k;
                            s.BG = l.Z;
                            s.AE = c.C5 + p * n;
                            s.AO = c.C5 + (p + 1) * n;
                            s.parse();
                            s.paint()
                        } else {
                            s = new ZC.D5(c);
                            t = p % c.BY.o.items.length;
                            s.o = c.BY.o.items[t];
                            s.Y = c.I.usc() ? c.I.mc() : ZC.AJ(c.A.Q + "-scales-bl-0-c");
                            s.AI = 0;
                            s.AU = 0;
                            s.EC = 0;
                            s.FP = 0;
                            t = [];
                            t.push(ZC.AP.BA(m, o, l.Z, c.C5 + p * n), ZC.AP.BA(m, o, k, c.C5 + p * n), ZC.AP.BA(m, o, k, c.C5 + (p + 1) * n), ZC.AP.BA(m, o, l.Z, c.C5 + (p + 1) * n));
                            s.B = t;
                            s.parse();
                            t = c.A.O;
                            s.DF = [t.iX, t.iY, t.iX + t.F, t.iY + t.D];
                            s.paint()
                        }
                }
                if (c.BY.AI > 0) {
                    p = 0;
                    for (h = c.W.length; p < h; p++) {
                        s = new ZC.E7(c);
                        s.copy(c.BY);
                        s.GM = function(u) {
                            u = u.replace(/%i/g, p);
                            u = u.replace(/%v/g, c.W[p] != null ? c.W[p] : "");
                            return u = u.replace(/%l/g, c.BD[p] != null ? c.BD[p] : "")
                        };
                        s.DE = c.BY.DE;
                        s.C2() && s.parse();
                        t = [];
                        t.push(ZC.AP.BA(m, o, k, c.C5 + p * n), ZC.AP.BA(m, o, l.Z, c.C5 + p * n));
                        ZC.BQ.paint(e, s, t)
                    }
                }
            }
            if (c.H1.AK) {
                switch (c.H1.o[ZC._[9]]) {
                    case "inner":
                        break;
                    case "outer":
                        g += f;
                        break;
                    default:
                        g += f / 2
                }
                t = [];
                p = 0;
                for (h = c.W.length; p < h; p++) switch (c.H1.o[ZC._[9]]) {
                    case "inner":
                        t.push(ZC.AP.BA(m, o, k - f, c.C5 + p * n), ZC.AP.BA(m, o, k, c.C5 + p * n), null);
                        break;
                    case "outer":
                        t.push(ZC.AP.BA(m,
                            o, k, c.C5 + p * n), ZC.AP.BA(m, o, k + f, c.C5 + p * n), null);
                        break;
                    default:
                        t.push(ZC.AP.BA(m, o, k - f / 2, c.C5 + p * n), ZC.AP.BA(m, o, k + f / 2, c.C5 + p * n), null)
                }
                ZC.BQ.paint(b, c.H1, t)
            }
            var r;
            if (c.BC.AK) {
                p = 0;
                for (h = c.W.length; p < h; p++) a(p)
            }
        }
    }
});
ZC.W9 = ZC.PO.B2({
    $i: function(a) {
        this.b(a)
    },
    parse: function() {
        this.b()
    },
    JJ: function() {
        var a = this.A.AY("scale");
        this.S = (ZC.CO(a.F / 2, a.D / 2) * a.HY - this.Z - this.CP) / (this.A2 - this.V)
    },
    XP: function(a) {
        this.b(a);
        this.JJ()
    },
    O5: function(a) {
        var c = this.A.AY("scale"),
            b = this.C8 - this.BJ;
        c = (ZC.CO(c.F / 2, c.D / 2) * c.HY - this.Z - this.CP) / b;
        return (a - this.BJ) * c
    },
    clear: function() {},
    build: function() {
        this.b()
    },
    paint: function() {
        function a(x) {
            v = new ZC.DC(c);
            v.o = c.BC.o;
            v.Q = c.Q + "-item-" + x;
            v.F0 = c.Q + "-item " + c.A.Q + "-scale-item zc-scale-item";
            var z = c.I3(x);
            v.B0 = z;
            if (!(c.I0 != null && ZC.AH(c.I0, z) == -1)) {
                v.Y = c.I.usc() ? c.I.mc() : ZC.AJ(c.A.Q + "-scales-ml-0-c");
                v.parse();
                x = ZC.AP.BA(n, p, c.Z + x * c.S, f.C5);
                v.D = v.C9;
                v.F = v.CZ;
                if (f.C5 % 180 == 0) {
                    v.iX = x[0] - v.F / 2;
                    v.iY = x[1]
                } else {
                    v.iX = x[0];
                    v.iY = x[1] - v.D / 2
                }
                switch (c.H1.o[ZC._[9]]) {
                    case "inner":
                        break;
                    case "outer":
                        if (f.C5 % 180 == 0) v.iY += g;
                        else v.iX += g;
                        break;
                    default:
                        if (f.C5 % 180 == 0) v.iY += g / 2;
                        else v.iX += g / 2
                }
                v.paint();
                v.D4()
            }
        }
        var c = this;
        if (!(!c.AK || c.W.length == 0)) {
            c.b();
            var b = ZC.K.CN(c.I.usc() ? c.I.Q + "-main-c" : c.A.Q + "-scales-ml-0-c",
                    c.I.A5),
                e = ZC.K.CN(c.I.usc() ? c.I.Q + "-main-c" : c.A.Q + "-scales-bl-0-c", c.I.A5),
                f = c.A.AY("scale-k"),
                g = ZC._i_(c.H1.o[ZC._[23]] || 8),
                h = 0,
                k = Math.ceil((c.A2 - c.V) / (c.FJ - 1)),
                l = Math.ceil((c.A2 - c.V) / (c.LV - 1)),
                m = c.A.AY("scale"),
                o = ZC.CO(m.F / 2, m.D / 2) * m.HY,
                n = m.iX + m.F / 2 + m.C0,
                p = m.iY + m.D / 2 + m.C4,
                s = 360 / f.W.length;
            if (c.BY.AK) {
                if (c.BY.o.items && c.BY.o.items.length > 0) {
                    var t = 0;
                    for (m = c.W.length; t < m - 1; t++) {
                        var r = t % c.BY.o.items.length;
                        if (f.CG == "circle") {
                            var u = new ZC.D5(c);
                            u.Y = c.I.usc() ? c.I.mc() : ZC.AJ(c.A.Q + "-scales-bl-0-c");
                            u.append(c.BY.o.items[r]);
                            u.o.type = "pie";
                            u.o[ZC._[23]] = c.Z + (t + 1) * c.S;
                            u.iX = n;
                            u.iY = p;
                            u.BG = c.Z + t * c.S;
                            u.AE = 0;
                            u.AO = 360;
                            u.parse();
                            u.paint()
                        } else {
                            u = new ZC.D5(c);
                            u.append(c.BY.o.items[r]);
                            u.Y = c.I.usc() ? c.I.mc() : ZC.AJ(c.A.Q + "-scales-bl-0-c");
                            r = [];
                            for (var y = 0, w = f.W.length; y < w; y++) r.push(ZC.AP.BA(n, p, c.Z + t * c.S, f.C5 + y * s));
                            r.push(ZC.AP.BA(n, p, c.Z + t * c.S, f.C5), ZC.AP.BA(n, p, c.Z + (t + 1) * c.S, f.C5));
                            for (y = f.W.length - 1; y >= 0; y--) r.push(ZC.AP.BA(n, p, c.Z + (t + 1) * c.S, f.C5 + y * s));
                            u.B = r;
                            u.parse();
                            u.AI = 0;
                            u.AU = 0;
                            u.EC = 0;
                            u.FP = 0;
                            r = c.A.O;
                            u.DF = [r.iX, r.iY, r.iX +
                                r.F, r.iY + r.D
                            ];
                            u.paint()
                        }
                    }
                }
                if (c.BY.AI > 0) {
                    t = 0;
                    for (m = c.W.length; t < m; t++)
                        if (f.CG == "circle") {
                            u = new ZC.D5(c);
                            u.Y = c.I.usc() ? c.I.mc() : ZC.AJ(c.A.Q + "-scales-bl-0-c");
                            u.append(c.BY.o);
                            u.o.type = "circle";
                            u.parse();
                            u.iX = n;
                            u.iY = p;
                            u.AR = c.Z + t * c.S;
                            u.paint()
                        } else {
                            y = 0;
                            for (w = f.W.length; y < w; y++) {
                                u = new ZC.E7(c);
                                u.copy(c.BY);
                                u.GM = function(x) {
                                    x = x.replace(/%i/g, t);
                                    x = x.replace(/%v/g, c.W[t] != null ? c.W[t] : "");
                                    return x = x.replace(/%l/g, c.BD[t] != null ? c.BD[t] : "")
                                };
                                u.DE = c.BY.DE;
                                u.C2() && u.parse();
                                r = [];
                                r.push(ZC.AP.BA(n, p, c.Z + t * c.S,
                                    f.C5 + y * s), ZC.AP.BA(n, p, c.Z + t * c.S, f.C5 + (y + 1) * s));
                                ZC.BQ.paint(e, u, r)
                            }
                        }
                }
            }
            if (c.K7.AK)
                if (c.K7.AI > 0) {
                    r = [];
                    r.push(ZC.AP.BA(n, p, c.Z, f.C5), ZC.AP.BA(n, p, o - c.CP, f.C5));
                    ZC.BQ.paint(e, c.K7, r)
                }
            if (c.H1.AK) {
                switch (c.H1.o[ZC._[9]]) {
                    case "inner":
                        break;
                    case "outer":
                        h += g;
                        break;
                    default:
                        h += g / 2
                }
                r = [];
                t = 0;
                for (m = c.W.length; t < m; t++)
                    if (t == c.V || t == c.A2 || t % l == 0) {
                        e = ZC.AP.BA(n, p, c.Z + t * c.S, f.C5);
                        switch (c.H1.o[ZC._[9]]) {
                            case "inner":
                                r.push([e[0], e[1]]);
                                f.C5 % 180 == 0 ? r.push([e[0], e[1] - g]) : r.push([e[0] - g, e[1]]);
                                r.push(null);
                                break;
                            case "outer":
                                r.push([e[0],
                                    e[1]
                                ]);
                                f.C5 % 180 == 0 ? r.push([e[0], e[1] + g]) : r.push([e[0] + g, e[1]]);
                                r.push(null);
                                break;
                            default:
                                f.C5 % 180 == 0 ? r.push([e[0], e[1] - g / 2], [e[0], e[1] + g / 2]) : r.push([e[0] - g / 2, e[1]], [e[0] + g / 2, e[1]]);
                                r.push(null)
                        }
                    }
                ZC.BQ.paint(b, c.H1, r)
            }
            var v;
            if (c.W.length > 0 && c.BC.AK) {
                c.E9 = 0;
                a(c.V);
                c.E9 = c.A2 - c.V;
                a(c.A2);
                c.E9 = 1;
                for (t = c.V + 1; t < c.A2; t++) t % k == 0 && a(t)
            }
        }
    }
});
ZC.WQ = ZC.D5.B2({
    $i: function(a) {
        this.b(a);
        this.A9 = 0.25;
        this.J = 0;
        this.F4 = this.G = this.AB = null;
        this.UF = 0;
        this.CB = "bottom"
    },
    parse: function() {
        var a;
        this.OT_a([
            ["type", "AB"],
            ["value-range", "UF", "b"],
            [ZC._[9], "CB"],
            ["range", "F4"]
        ]);
        if ((a = this.o.label) != null || this.o.text != null) {
            this.G = new ZC.DC(this);
            this.A.A.A.AQ.load(this.G.o, ["(" + this.A.AB + ").SCALE.marker.label"]);
            this.o.text != null && this.G.append({
                text: this.o.text
            });
            this.G.append(a);
            this.G.parse()
        }
        this.b()
    },
    paint: function() {
        var a = this;
        if (a.AK) {
            var c = a.A,
                b = c.A.Q + "-scales-" + (a.CB == "top" ? "f" : "b") + "l-0-c",
                e = ZC.K.CN(c.I.usc() ? c.I.Q + "-main-c" : b, c.I.A5),
                f, g, h, k, l = [],
                m = 0,
                o = 0;
            if (c.CQ) m = c.EX ? o = (c.AD ? -1 : 1) * c.S / 2 : o = -c.S / 2;
            if (a.G != null) {
                a.G.Y = c.I.usc() ? c.I.mc() : ZC.AJ(c.A.Q + "-scales-ml-0-c");
                a.G.Q = a.A.Q + "-marker-label-" + a.J;
                a.G.F0 = a.A.Q + "-marker-label " + a.A.A.Q + "-scale-marker-label zc-scale-marker-label"
            }
            var n = function(p, s) {
                return a.UF ? p.B4(s) : p.LB(s)
            };
            if (a.AB == "line") {
                if (c.BK.indexOf(ZC._[52]) != -1)
                    if (a.F4.length == 1) f = g = n(c, a.F4[0]) + m;
                    else {
                        if (a.F4.length == 2) {
                            f =
                                n(c, a.F4[0]) + m;
                            g = n(c, a.F4[1]) + m
                        }
                    } else if (c.BK.indexOf(ZC._[53]) != -1)
                    if (a.F4.length == 1) f = g = c.B4(a.F4[0]);
                    else if (a.F4.length == 2) {
                    f = c.B4(a.F4[0]);
                    g = c.B4(a.F4[1])
                }
                if (c.BK.indexOf(ZC._[52]) != -1 && c.EX || c.BK.indexOf(ZC._[53]) != -1 && !c.EX) {
                    l.push([c.iX, f], [c.iX + c.F, g]);
                    if (a.G != null) {
                        a.G.iX = c.iX;
                        a.G.iY = f - (c.AD ? 0 : a.G.D)
                    }
                } else {
                    l.push([f, c.iY + c.D], [g, c.iY]);
                    if (a.G != null) {
                        a.G.iX = f - (c.AD ? a.G.F : 0);
                        a.G.iY = c.iY + c.D - a.G.D
                    }
                } if (c.A.AM["3d"]) {
                    c.A.J2();
                    f = 0;
                    for (g = l.length; f < g; f++) {
                        h = new ZC.C3(c.A, l[f][0] - ZC.AC.DX, l[f][1] -
                            ZC.AC.DU, ZC.AC.FK);
                        l[f][0] = h.DP[0];
                        l[f][1] = h.DP[1]
                    }
                }
                if (l.length == 2) {
                    ZC.BQ.setup(e, a);
                    ZC.BQ.paint(e, a, l)
                }
            } else if (a.AB == "area") {
                if (c.BK.indexOf(ZC._[52]) != -1)
                    if (a.F4.length == 2) {
                        f = h = n(c, a.F4[0]) + m;
                        g = k = n(c, a.F4[1]) + o
                    } else {
                        if (a.F4.length == 4) {
                            f = n(c, a.F4[0]) + m;
                            g = n(c, a.F4[1]) + o;
                            h = n(c, a.F4[2]) + m;
                            k = n(c, a.F4[3]) + o
                        }
                    } else if (c.BK.indexOf(ZC._[53]) != -1)
                    if (a.F4.length == 2) {
                        f = h = c.B4(a.F4[0]);
                        g = k = c.B4(a.F4[1])
                    } else if (a.F4.length == 4) {
                    f = c.B4(a.F4[0]);
                    g = c.B4(a.F4[1]);
                    h = c.B4(a.F4[2]);
                    k = c.B4(a.F4[3])
                }
                g = f == g ? g + 1 : g;
                k = h ==
                    k ? k + 1 : k;
                if (c.BK.indexOf(ZC._[52]) != -1 && c.EX || c.BK.indexOf(ZC._[53]) != -1 && !c.EX) {
                    l.push([c.iX, f], [c.iX + c.F, h], [c.iX + c.F, k], [c.iX, g], [c.iX, f]);
                    if (a.G != null) {
                        a.G.iX = c.iX;
                        a.G.iY = f - (c.AD ? 0 : a.G.D)
                    }
                } else {
                    l.push([f, c.iY + c.D], [h, c.iY], [k, c.iY], [g, c.iY + c.D], [f, c.iY + c.D]);
                    if (a.G != null) {
                        a.G.iX = f - (c.AD ? a.G.F : 0);
                        a.G.iY = c.iY + c.D - a.G.D
                    }
                } if (l.length >= 4) {
                    if (c.A.AM["3d"]) {
                        c.A.J2();
                        f = 0;
                        for (g = l.length; f < g; f++) {
                            h = new ZC.C3(c.A, l[f][0] - ZC.AC.DX, l[f][1] - ZC.AC.DU, ZC.AC.FK);
                            l[f][0] = h.DP[0];
                            l[f][1] = h.DP[1]
                        }
                    }
                    e = new ZC.D5(a.A);
                    e.Q = c.Q + "-marker-" + a.J;
                    e.Y = c.I.usc() ? c.I.mc() : ZC.AJ(b);
                    e.copy(a);
                    e.AI = 0;
                    e.AU = 0;
                    e.EC = 0;
                    e.FP = 0;
                    e.B = l;
                    e.parse();
                    e.paint()
                }
            }
            if (a.G != null) {
                if (c.BK.indexOf(ZC._[52]) != -1 && !c.EX || c.BK.indexOf(ZC._[53]) != -1 && c.EX)
                    if (a.G.o.angle == null) a.G.A7 = 270;
                if (a.G.A7 % 180 == 90)
                    if (c.BK.indexOf(ZC._[52]) != -1)
                        if (c.EX) {
                            a.G.C0 -= a.G.F / 2 - a.G.D / 2;
                            a.G.C4 -= (c.AD ? -1 : 1) * (a.G.F / 2 - a.G.D / 2)
                        } else {
                            a.G.C0 -= (c.AD ? -1 : 1) * (a.G.F / 2 - a.G.D / 2);
                            a.G.C4 -= a.G.F / 2 - a.G.D / 2
                        } else if (c.BK.indexOf(ZC._[53]) != -1)
                    if (c.EX) {
                        a.G.C0 -= (c.AD ? -1 : 1) * (a.G.F / 2 - a.G.D /
                            2);
                        a.G.C4 -= a.G.F / 2 - a.G.D / 2
                    } else {
                        a.G.C0 -= a.G.F / 2 - a.G.D / 2;
                        a.G.C4 -= (c.AD ? -1 : 1) * (a.G.F / 2 - a.G.D / 2)
                    }
                a.G.paint();
                a.G.D4()
            }
        }
    }
});
ZC.RQ = ZC.BT.B2({
    $i: function(a) {
        this.J4 = null;
        this.TD = 0;
        this.JF = [];
        this.BK = a;
        this.SU = 1
    },
    add: function(a) {
        this.JF.push(a);
        a.FQ = this;
        a.J4 = this.J4;
        a.BX.NK = 1;
        a.O9 = this.JF.length - 1;
        this.SU = 0
    }
});
ZC.CA = ZC.BT.B2({
    $i: function(a, c, b, e, f, g) {
        this.J4 = null;
        this.BX = a;
        this.B7 = null;
        this.TX = 0;
        this.EU = null;
        this.N = c || {};
        this.TY = b || 500;
        this.VI = e || -1;
        this.IM = this.M9 = this.QN = null;
        if (g != null) this.M9 = g;
        this.SI = ZC.CA.linear;
        if (f != null && f != "") this.SI = f;
        this.A18 = {};
        this.AF = {};
        this.A0A = [];
        this.KG = ZC._i_(this.TY / ZC.J9.M1);
        if (this.KG > 30) this.KG = 30;
        if (ZC.vml || ZC.mobile) this.KG = ZC._i_(this.KG / 4);
        if (this.KG < 5) this.KG = 5;
        for (var h in this.N) this.AF[h] = ZC.CA.F7[h] != null ? this.BX[ZC.CA.F7[h]] : this.BX[h];
        this.U = 0;
        this.FQ =
            null;
        this.O9 = -1
    },
    status: function() {
        if (this.U + 1 > this.KG) return 0;
        return 1
    },
    step: function() {
        var a = this,
            c = 1,
            b = a.J4.C.I.A5;
        a.U++;
        if (a.U > a.KG) {
            if (a.U == a.KG + 1) {
                if (a.O9 != -1) {
                    a.FQ.TD++;
                    if (a.FQ.TD == a.FQ.JF.length) a.FQ.SU = 1
                }
                a.M9 != null && a.M9()
            }
            c = 0
        }
        if (c) {
            var e = {};
            if (a.U == a.KG) {
                e = a.N;
                a.TX = 1
            } else {
                a.TX = a.SI(a.U, 0, 1, a.KG);
                for (var f in a.N) switch (f) {
                    case "points":
                        for (var g = [], h = 0, k = a.N[f].length; h < k; h++)
                            if (a.AF[f][h] != null) {
                                g[h] = [];
                                for (var l = 0, m = a.N[f][h].length; l < m; l++) g[h][l] = a.SI(a.U, a.AF[f][h][l], a.N[f][h][l] -
                                    a.AF[f][h][l], a.KG)
                            }
                        e[f] = g;
                        break;
                    case "lineColor":
                    case "borderColor":
                    case "backgroundColor1":
                    case "backgroundColor2":
                        h = a.AF[f].replace("#", "");
                        m = ZC.BV.LF(a.N[f]).replace("#", "");
                        k = ZC.JS(h.slice(0, 2));
                        g = ZC.JS(h.slice(2, 4));
                        h = ZC.JS(h.slice(4, 6));
                        var o = ZC.JS(m.slice(0, 2));
                        l = ZC.JS(m.slice(2, 4));
                        m = ZC.JS(m.slice(4, 6));
                        k = ZC.IZ(ZC._i_(a.SI(a.U, k, o - k, a.KG)));
                        if (k.length == 1) k = "0" + k;
                        g = ZC.IZ(ZC._i_(a.SI(a.U, g, l - g, a.KG)));
                        if (g.length == 1) g = "0" + g;
                        h = ZC.IZ(ZC._i_(a.SI(a.U, h, m - h, a.KG)));
                        if (h.length == 1) h = "0" + h;
                        e[f] =
                            "#" + k + g + h;
                        break;
                    default:
                        e[f] = a.SI(a.U, a.AF[f], a.N[f] - a.AF[f], a.KG)
                }
            }
            a.BX.append(e);
            a.BX.parse();
            if (b == "vml" && a.U == 1) a.BX.H.opacity2 = typeof a.B7.A.DV != ZC._[33] ? a.B7.A.DV : a.B7.A.A9;
            if (a.QN) try {
                a.QN(a.BX, e)
            } catch (n) {}
            ZC.BV.F1("animation_step", a.B7.I, {
                id: a.B7.I.Q,
                graphid: a.B7.C.Q,
                plotidx: a.B7.A.J,
                nodeidx: a.B7.J,
                stage: a.TX,
                nodevalue: a.B7.A8 * a.TX
            })
        }
        if (a.U == 1 || b == "canvas")
            if (ZC.AH(["svg", "vml"], b) != -1) ZC.A3("#" + a.BX.Q + "-path").length == 0 && a.paint();
            else a.paint();
        else if (a.U <= a.KG) {
            switch (b) {
                case "svg":
                    a.BX.O0(true);
                    break;
                case "vml":
                    a.BX.O1(null, true)
            }
            a.BX.NL && a.BX.NL();
            if (b == "vml" && /\-plotset\-plot-\d+\-node\-\d+\-area/.test(a.BX.Q)) a.BX.AI = 0;
            e = null;
            if (typeof a.BX.DQ != ZC._[33] && a.BX.DQ == "box") {
                e = a.BX.AI;
                a.BX.AI = a.BX.AU
            }
            var p = ZC.K.SK(a.BX.B, b, a.BX, false, true);
            if (a.BX.JE) {
                f = ZC.K._sh_(a.BX.B, a.BX);
                var s = ZC.K.SK(f, b, a.BX, false, true)
            }
            if (e != null) a.BX.AI = e;
            var t = a.BX.A9,
                r = a.BX.MI,
                u = a.BX.G4,
                y = a.BX.AR;
            switch (b) {
                case "svg":
                    ZC.A3("#" + a.BX.Q + "-path").attr("d", p.join(" ")).attr("stroke-opacity", t).attr("fill-opacity", t);
                    a.BX.JE && ZC.A3("#" + a.BX.Q + "-sh-path").attr("d", s.join(" ")).attr("stroke-opacity", t * r).attr("fill-opacity", t * r);
                    ZC.A3("#" + a.BX.Q + "-circle").attr("stroke-opacity", t).attr("cx", a.BX.iX).attr("cy", a.BX.iY).attr("r", y).attr("fill-opacity", t);
                    a.BX.JE && ZC.A3("#" + a.BX.Q + "-sh-circle").attr("stroke-opacity", t * r).attr("cx", a.BX.iX + u).attr("r", y).attr("cy", a.BX.iY + u).attr("fill-opacity", t * r);
                    break;
                case "vml":
                    ZC.A3("#" + a.BX.Q + "-path").children().each(function() {
                        this.v = p.join(" ");
                        this.opacity = t
                    });
                    a.BX.JE && ZC.A3("#" +
                        a.BX.Q + "-sh-path").children().each(function() {
                        this.v = s.join(" ");
                        this.opacity = t * r
                    });
                    ZC.A3("#" + a.BX.Q + "-circle").children().each(function() {
                        this.opacity = t
                    });
                    ZC.A3("#" + a.BX.Q + "-circle").each(function() {
                        this.style.left = a.BX.iX - y + "px";
                        this.style.top = a.BX.iY - y + "px";
                        this.style.width = 2 * y + "px";
                        this.style.height = 2 * y + "px"
                    });
                    if (a.BX.JE) {
                        ZC.A3("#" + a.BX.Q + "-sh-circle").children().each(function() {
                            this.opacity = t * r
                        });
                        ZC.A3("#" + a.BX.Q + "-sh-circle").each(function() {
                            this.style.left = a.BX.iX - y + u + "px";
                            this.style.top = a.BX.iY -
                                y + u + "px";
                            this.style.width = 2 * y + "px";
                            this.style.height = 2 * y + "px"
                        })
                    }
            }
        }
        return c
    },
    paint: function() {
        this.EU != null ? ZC.BQ.paint(this.EU, this.BX, this.BX.B) : this.BX.paint();
        if (this.IM) try {
            this.TX == 1 && this.IM()
        } catch (a) {}
    }
});
ZC.CA.F7 = {
    angleStart: "AE",
    angleEnd: "AO",
    slice: "BG",
    size: "AR",
    x: "iX",
    y: "iY",
    width: "F",
    height: "D",
    alpha: "A9",
    points: "B",
    lineWidth: "AI",
    lineColor: "AT",
    borderWidth: "AU",
    borderColor: "BI",
    backgroundColor1: "X",
    backgroundColor2: "A6"
};
ZC.CA.linear = function(a, c, b, e) {
    return b * a / e + c
};
ZC.CA.backEaseOut = function(a, c, b, e) {
    e = (a /= e) * a;
    return c + b * (4 * e * a + -9 * e + 6 * a)
};
ZC.CA.elasticEaseOut = function(a, c, b, e) {
    e = (a /= e) * a;
    var f = e * a;
    return c + b * (37.045 * f * e + -116.2825 * e * e + 134.08 * f + -68.59 * e + 14.7475 * a)
};
ZC.CA.bounceEaseOut = function(a, c, b, e) {
    return (a /= e) < 1 / 2.75 ? b * 7.5625 * a * a + c : a < 2 / 2.75 ? b * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + c : a < 2.5 / 2.75 ? b * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + c : b * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + c
};
ZC.CA.regularEaseOut = function(a, c, b, e) {
    e = (a /= e) * a;
    return c + b * (e * a + -3 * e + 3 * a)
};
ZC.CA.strongEaseOut = function(a, c, b, e) {
    e = (a /= e) * a;
    var f = e * a;
    return c + b * (f * e + -5 * e * e + 10 * f + -10 * e + 5 * a)
};
ZC.CA.KP = [ZC.CA.linear, ZC.CA.backEaseOut, ZC.CA.elasticEaseOut, ZC.CA.bounceEaseOut, ZC.CA.strongEaseOut, ZC.CA.regularEaseOut];
ZC.J9 = ZC.BT.B2({
    $i: function(a) {
        this.C = a;
        this.Q5 = 0;
        this.BB = null;
        this.JF = [];
        this.JA = {};
        this.onStop = null
    },
    XG: function(a) {
        if (this.JA[a.BK] == null) {
            this.JA[a.BK] = a;
            a.J4 = this;
            this.Q5 || this.start()
        }
    },
    add: function(a) {
        var c = this;
        a.J4 = c;
        if (a.VI > 0) window.setTimeout(function() {
            a.BX.NK = 1;
            c.JF.push(a);
            c.Q5 || c.start()
        }, a.VI + 1);
        else {
            a.BX.NK = 1;
            c.JF.push(a);
            c.Q5 || c.start()
        }
    },
    start: function() {
        var a = this;
        a.Q5 = 1;
        ZC.BV.F1("animation_start", a.C.A, {
            id: a.C.A.Q,
            graphid: a.C.Q
        });
        var c = 1;
        (function b() {
            c || a.step();
            c = 0;
            if (a.Q5) a.BB =
                requestAnimFrame(b)
        })()
    },
    step: function() {
        for (var a, c = 0, b = 0, e = this.JF.length; b < e; b++) {
            a = this.JF[b].status();
            c += a
        }
        if (this.C.I.A5 == "canvas")
            if (this.C.I.KY) {
                if ((a = ZC.AJ(this.C.Q + "-plots-bl-c")) != null) a.getContext("2d").clearRect(this.C.iX, this.C.iY, this.C.F, this.C.D)
            } else {
                b = 0;
                for (e = this.C.AZ.AA.length; b < e; b++)
                    for (var f = 0; f < this.C.AZ.AA[b].LZ; f++)
                        if ((a = ZC.AJ(this.C.Q + "-plot-" + b + "-bl-" + f + "-c")) != null) a.getContext("2d").clearRect(this.C.iX, this.C.iY, this.C.F, this.C.D)
            }
        b = 0;
        for (e = this.JF.length; b < e; b++) {
            a =
                this.JF[b].step();
            if (a == 0) this.JF[b].BX.NK = 0
        }
        for (q in this.JA) {
            this.JA[q].SU || (c += 1);
            b = 0;
            for (e = this.JA[q].JF.length; b < e; b++)
                if (this.JA[q].JF[b].O9 == this.JA[q].TD) {
                    a = this.JA[q].JF[b].step();
                    if (a == 0) this.JA[q].JF[b].BX.NK = 0
                } else this.C.I.A5 == "canvas" && this.JA[q].JF[b].paint()
        }
        if (c == 0) {
            this.JA = {};
            this.JF = [];
            this.stop()
        }
    },
    stop: function(a) {
        if (a == null) a = 0;
        var c;
        clearAnimFrame(this.BB);
        if ((c = ZC.AJ(this.C.A.Q + "-map")) && this.C.AZ.FN) {
            if (ZC.AH(["bubble", "mixed", "vbullet", "hbullet"], this.C.AB) != -1 || zingchart.SORTTRACKERS ==
                1) this.C.AZ.FN.sort(function(e, f) {
                return ZC.BV.MZ(e) > ZC.BV.MZ(f) ? 1 : -1
            });
            c.innerHTML += this.C.AZ.FN.join("")
        }
        this.C.UR();
        this.Q5 = 0;
        this.JF = [];
        this.JA = {};
        a || ZC.BV.F1("animation_end", this.C.A, {
            id: this.C.A.Q,
            graphid: this.C.Q
        });
        if (this.onStop != null) try {
            this.onStop()
        } catch (b) {}
    }
});
ZC.J9.M1 = 33;
window.requestAnimFrame = function() {
    return window.webkitRequestAnimationFrame || function(a) {
        return window.setTimeout(a, ZC.J9.M1)
    }
}();
window.clearAnimFrame = function(a) {
    window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(a) : window.clearTimeout(a)
};