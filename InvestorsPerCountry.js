// 'value' = Investors per country

var mapData = [
    { "id":"AF", "name":"Afghanistan", "value":1, "color": "#eb8b7f" },
    { "id":"AL", "name":"Albania", "value":3, "color":"#a66061" },
    { "id":"DZ", "name":"Algeria", "value":3, "color":"#d7706c" },
    { "id":"AO", "name":"Angola", "value":15, "color":"#d7706c" },
    { "id":"AR", "name":"Argentina", "value":3000, "color":"#d77f7c" },
    { "id":"AM", "name":"Armenia", "value":800, "color":"#a66061" },
    { "id":"AU", "name":"Australia", "value":5800, "color":"#d77f7c" },
    { "id":"AT", "name":"Austria", "value":3800, "color":"#a66061" },
    { "id":"AZ", "name":"Azerbaijan", "value":700, "color":"#a66061" },
    { "id":"BH", "name":"Bahrain", "value":3900, "color": "#eb8b7f" },
    { "id":"BD", "name":"Bangladesh", "value":120, "color": "#eb8b7f" },
    { "id":"BY", "name":"Belarus", "value":130, "color":"#a66061" },
    { "id":"BE", "name":"Belgium", "value":2009, "color":"#a66061" },
    { "id":"BJ", "name":"Benin", "value":5, "color":"#d7706c" },
    { "id":"BT", "name":"Bhutan", "value":1, "color": "#eb8b7f" },
    { "id":"BO", "name":"Bolivia", "value":50, "color":"#d77f7c" },
    { "id":"BA", "name":"Bosnia and Herzegovina", "value":15, "color":"#a66061" },
    { "id":"BW", "name":"Botswana", "value":20, "color":"#d7706c" },
    { "id":"BR", "name":"Brazil", "value":7000, "color":"#d77f7c" },
    { "id":"VG", "name":"British Virgin Islands", "value":5300, "color":"#d77f7c" },
    { "id":"BN", "name":"Brunei", "value":1200, "color": "#eb8b7f" },
    { "id":"BG", "name":"Bulgaria", "value":1600, "color":"#a66061" },
    { "id":"BF", "name":"Burkina Faso", "value":2, "color":"#d7706c" },
    { "id":"BI", "name":"Burundi", "value":1, "color":"#d7706c" },
    { "id":"KH", "name":"Cambodia", "value":16, "color": "#eb8b7f" },
    { "id":"CM", "name":"Cameroon", "value":14, "color":"#d7706c" },
    { "id":"CA", "name":"Canada", "value":3950, "color":"#e5988e" },
    { "id":"CV", "name":"Cape Verde", "value":4, "color":"#d7706c" },
    { "id":"KY", "name":"Cayman Islands", "value":5200, "color":"#d77f7c" },
    { "id":"CF", "name":"Central African Rep.", "value":45, "color":"#d7706c" },
    { "id":"TD", "name":"Chad", "value":80, "color":"#d7706c" },
    { "id":"CL", "name":"Chile", "value":42, "color":"#d77f7c" },
    { "id":"CN", "name":"China", "value":10000, "color": "#eb8b7f" },
    { "id":"CO", "name":"Colombia", "value":70, "color":"#d77f7c" },
    { "id":"KM", "name":"Comoros", "value":50, "color":"#d7706c" },
    { "id":"CD", "name":"Congo, Dem. Rep.", "value":5, "color":"#d7706c" },
    { "id":"CG", "name":"Congo, Rep.", "value":7, "color":"#d7706c" },
    { "id":"CR", "name":"Costa Rica", "value":67, "color":"#e5988e" },
    { "id":"CI", "name":"Cote d'Ivoire", "value":12, "color":"#d7706c" },
    { "id":"HR", "name":"Croatia", "value":37, "color":"#a66061" },
    { "id":"CU", "name":"Cuba", "value":2, "color":"#e5988e" },
    { "id":"CY", "name":"Cyprus", "value":35, "color":"#a66061" },
    { "id":"CZ", "name":"Czech Rep.", "value":1300, "color":"#a66061" },
    { "id":"DK", "name":"Denmark", "value":1100, "color":"#a66061" },
    { "id":"DJ", "name":"Djibouti", "value":5, "color":"#d7706c" },
    { "id":"DO", "name":"Dominican Rep.", "value":1100, "color":"#e5988e" },
    { "id":"EC", "name":"Ecuador", "value":70, "color":"#d77f7c" },
    { "id":"EG", "name":"Egypt", "value":80, "color":"#d7706c" },
    { "id":"SV", "name":"El Salvador", "value":950, "color":"#e5988e" },
    { "id":"GQ", "name":"Equatorial Guinea", "value":16, "color":"#d7706c" },
    { "id":"ER", "name":"Eritrea", "value":17, "color":"#d7706c" },
    { "id":"EE", "name":"Estonia", "value":3800, "color":"#a66061" },
    { "id":"ET", "name":"Ethiopia", "value":41, "color":"#d7706c" },
    { "id":"FJ", "name":"Fiji", "value":71, "color":"#d7706c" },
    { "id":"FI", "name":"Finland", "value":3200, "color":"#a66061" },
    { "id":"FR", "name":"France", "value":6000, "color":"#a66061" },
    { "id":"GA", "name":"Gabon", "value":153, "color":"#d7706c" },
    { "id":"GM", "name":"Gambia", "value":17, "color":"#d7706c" },
    { "id":"GE", "name":"Georgia", "value":43, "color":"#a66061" },
    { "id":"DE", "name":"Germany", "value":1510, "color":"#a66061" },
    { "id":"GH", "name":"Ghana", "value":249, "color":"#d7706c" },
    { "id":"GR", "name":"Greece", "value":113, "color":"#a66061" },
    { "id":"GT", "name":"Guatemala", "value":147, "color":"#e5988e" },
    { "id":"GN", "name":"Guinea", "value":10, "color":"#d7706c" },
    { "id":"GW", "name":"Guinea-Bissau", "value":15, "color":"#d7706c" },
    { "id":"GY", "name":"Guyana", "value":75, "color":"#d77f7c" },
    { "id":"HT", "name":"Haiti", "value":10, "color":"#e5988e" },
    { "id":"HN", "name":"Honduras", "value":77, "color":"#e5988e" },
    { "id":"HK", "name":"Hong Kong, China", "value":8000, "color": "#eb8b7f" },
    { "id":"HU", "name":"Hungary", "value":99, "color":"#a66061" },
    { "id":"IS", "name":"Iceland", "value":324, "color":"#a66061" },
    { "id":"IN", "name":"India", "value":5400, "color": "#eb8b7f" },
    { "id":"ID", "name":"Indonesia", "value":2432, "color": "#eb8b7f" },
    { "id":"IR", "name":"Iran", "value":747, "color": "#eb8b7f" },
    { "id":"IQ", "name":"Iraq", "value":32, "color": "#eb8b7f" },
    { "id":"IE", "name":"Ireland", "value":4200, "color":"#a66061" },
    { "id":"IL", "name":"Israel", "value":1756, "color": "#eb8b7f" },
    { "id":"IT", "name":"Italy", "value":60, "color":"#a66061" },
    { "id":"JM", "name":"Jamaica", "value":27, "color":"#e5988e" },
    { "id":"JP", "name":"Japan", "value":1264, "color": "#eb8b7f" },
    { "id":"JO", "name":"Jordan", "value":633, "color": "#eb8b7f" },
    { "id":"KZ", "name":"Kazakhstan", "value":2500, "color": "#eb8b7f" },
    { "id":"KE", "name":"Kenya", "value":1800, "color":"#d7706c" },
    { "id":"KP", "name":"Korea, Dem. Rep.", "value":1200, "color": "#eb8b7f" },
    { "id":"KR", "name":"Korea, Rep.", "value":37, "color": "#eb8b7f" },
    { "id":"KW", "name":"Kuwait", "value":1900, "color": "#eb8b7f" },
    { "id":"KG", "name":"Kyrgyzstan", "value":1800, "color": "#eb8b7f" },
    { "id":"LA", "name":"Laos", "value":20, "color": "#eb8b7f" },
    { "id":"LV", "name":"Latvia", "value":59, "color":"#a66061" },
    { "id":"LB", "name":"Lebanon", "value":30, "color": "#eb8b7f" },
    { "id":"LS", "name":"Lesotho", "value":29, "color":"#d7706c" },
    { "id":"LR", "name":"Liberia", "value":240, "color":"#d7706c" },
    { "id":"LY", "name":"Libya", "value":16, "color":"#d7706c" },
    { "id":"LT", "name":"Lithuania", "value":57, "color":"#a66061" },
    { "id":"LU", "name":"Luxembourg", "value":3600, "color":"#a66061" },
    { "id":"MK", "name":"Macedonia, FYR", "value":57, "color":"#a66061" },
    { "id":"MG", "name":"Madagascar", "value":12, "color":"#d7706c" },
    { "id":"MW", "name":"Malawi", "value":2700, "color":"#d7706c" },
    { "id":"MY", "name":"Malaysia", "value":1350, "color": "#eb8b7f" },
    { "id":"ML", "name":"Mali", "value":80, "color":"#d7706c" },
    { "id":"MR", "name":"Mauritania", "value":150, "color":"#d7706c" },
    { "id":"MU", "name":"Mauritius", "value":420, "color":"#d7706c" },
    { "id":"MX", "name":"Mexico", "value":4200, "color":"#e5988e" },
    { "id":"MD", "name":"Moldova", "value":13, "color":"#a66061" },
    { "id":"MN", "name":"Mongolia", "value":12, "color": "#eb8b7f" },
    { "id":"ME", "name":"Montenegro", "value":1900, "color":"#a66061" },
    { "id":"MA", "name":"Morocco", "value":35, "color":"#d7706c" },
    { "id":"MZ", "name":"Mozambique", "value":1800, "color":"#d7706c" },
    { "id":"MM", "name":"Myanmar", "value":12, "color": "#eb8b7f" },
    { "id":"NA", "name":"Namibia", "value":1200, "color":"#d7706c" },
    { "id":"NP", "name":"Nepal", "value":10, "color": "#eb8b7f" },
    { "id":"NL", "name":"Netherlands", "value":6000, "color":"#a66061" },
    { "id":"NZ", "name":"New Zealand", "value":1700, "color":"#a66061" },
    { "id":"NI", "name":"Nicaragua", "value":999, "color":"#e5988e" },
    { "id":"NE", "name":"Niger", "value":1500, "color":"#d7706c" },
    { "id":"NG", "name":"Nigeria", "value":2500, "color":"#d7706c" },
    { "id":"NO", "name":"Norway", "value":3990, "color":"#a66061" },
    { "id":"OM", "name":"Oman", "value":95, "color": "#eb8b7f" },
    { "id":"PK", "name":"Pakistan", "value":21, "color": "#eb8b7f" },
    { "id":"PA", "name":"Panama", "value":2700, "color":"#e5988e" },
    { "id":"PG", "name":"Papua New Guinea", "value":5, "color":"#eb8b7f" },
    { "id":"PY", "name":"Paraguay", "value":38, "color":"#d77f7c" },
    { "id":"PE", "name":"Peru", "value":24, "color":"#d77f7c" },
    { "id":"PH", "name":"Philippines", "value":27, "color": "#eb8b7f" },
    { "id":"PL", "name":"Poland", "value":1800, "color":"#a66061" },
    { "id":"PT", "name":"Portugal", "value":1400, "color":"#a66061" },
    { "id":"PR", "name":"Puerto Rico", "value":32, "color":"#e5988e" },
    { "id":"QA", "name":"Qatar", "value":3950, "color": "#eb8b7f" },
    { "id":"RO", "name":"Romania", "value":52, "color":"#a66061" },
    { "id":"RU", "name":"Russia", "value":3200, "color":"#a66061" },
    { "id":"RW", "name":"Rwanda", "value":11, "color":"#d7706c" },
    { "id":"SA", "name":"Saudi Arabia", "value":2900, "color": "#eb8b7f" },
    { "id":"SN", "name":"Senegal", "value":86, "color":"#d7706c" },
    { "id":"RS", "name":"Serbia", "value":52, "color":"#a66061" },
    { "id":"SL", "name":"Sierra Leone", "value":88, "color":"#d7706c" },
    { "id":"SG", "name":"Singapore", "value":6500, "color": "#eb8b7f" },
    { "id":"SK", "name":"Slovak Republic", "value":18, "color":"#a66061" },
    { "id":"SI", "name":"Slovenia", "value":29, "color":"#a66061" },
    { "id":"SB", "name":"Solomon Islands", "value":800, "color":"#d7706c" },
    { "id":"SO", "name":"Somalia", "value":14, "color":"#d7706c" },
    { "id":"ZA", "name":"South Africa", "value":2200, "color":"#d7706c" },
    { "id":"ES", "name":"Spain", "value":2100, "color":"#a66061" },
    { "id":"LK", "name":"Sri Lanka", "value":680, "color": "#eb8b7f" },
    { "id":"SD", "name":"Sudan", "value":21, "color":"#d7706c" },
    { "id":"SR", "name":"Suriname", "value":21, "color":"#d77f7c" },
    { "id":"SZ", "name":"Swaziland", "value":47, "color":"#d7706c" },
    { "id":"SE", "name":"Sweden", "value":1600, "color":"#a66061" },
    { "id":"CH", "name":"Switzerland", "value":5600, "color":"#a66061" },
    { "id":"SY", "name":"Syria", "value":5, "color": "#eb8b7f" },
    { "id":"TW", "name":"Taiwan", "value":1400, "color": "#eb8b7f" },
    { "id":"TJ", "name":"Tajikistan", "value":1100, "color": "#eb8b7f" },
    { "id":"TZ", "name":"Tanzania", "value":800, "color":"#d7706c" },
    { "id":"TH", "name":"Thailand", "value":500, "color": "#eb8b7f" },
    { "id":"TG", "name":"Togo", "value":600, "color":"#d7706c" },
    { "id":"TT", "name":"Trinidad and Tobago", "value":700, "color":"#e5988e" },
    { "id":"TN", "name":"Tunisia", "value":1300, "color":"#d7706c" },
    { "id":"TR", "name":"Turkey", "value":2500, "color":"#a66061" },
    { "id":"TM", "name":"Turkmenistan", "value":300, "color": "#eb8b7f" },
    { "id":"UG", "name":"Uganda", "value":101, "color":"#d7706c" },
    { "id":"UA", "name":"Ukraine", "value":120, "color":"#a66061" },
    { "id":"AE", "name":"United Arab Emirates", "value":800, "color": "#eb8b7f" },
    { "id":"GB", "name":"United Kingdom", "value":1200, "color":"#a66061" },
    { "id":"US", "name":"United States", "value":20000, "color":"#e5988e" },
    { "id":"UY", "name":"Uruguay", "value":1600, "color":"#d77f7c" },
    { "id":"UZ", "name":"Uzbekistan", "value":1100, "color": "#eb8b7f" },
    { "id":"VE", "name":"Venezuela", "value":30, "color":"#d77f7c" },
    { "id":"PS", "name":"West Bank and Gaza", "value":1, "color": "#eb8b7f" },
    { "id":"VN", "name":"Vietnam", "value":1400, "color": "#eb8b7f" },
    { "id":"YE", "name":"Yemen, Rep.", "value":1, "color": "#eb8b7f" },
    { "id":"ZM", "name":"Zambia", "value":2, "color":"#d7706c" },
    { "id":"ZW", "name":"Zimbabwe", "value":1, "color":"#d7706c" }
];