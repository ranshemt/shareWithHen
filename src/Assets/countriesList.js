const COUNTRIES = [
  {
    name: 'Aruba',
    countryCode: 'AW',
    emojiFlagCode: '🇦🇼',
    callingCode: '297'
  },
  {
    name: 'Afghanistan',
    countryCode: 'AF',
    emojiFlagCode: '🇦🇫',
    callingCode: '93'
  },
  {
    name: 'Angola',
    countryCode: 'AO',
    emojiFlagCode: '🇦🇴',
    callingCode: '244'
  },
  {
    name: 'Anguilla',
    countryCode: 'AI',
    emojiFlagCode: '🇦🇮',
    callingCode: '1264'
  },
  {
    name: 'Åland Islands',
    countryCode: 'AX',
    emojiFlagCode: '🇦🇽',
    callingCode: '358'
  },
  {
    name: 'Albania',
    countryCode: 'AL',
    emojiFlagCode: '🇦🇱',
    callingCode: '355'
  },
  {
    name: 'Andorra',
    countryCode: 'AD',
    emojiFlagCode: '🇦🇩',
    callingCode: '376'
  },
  {
    name: 'United Arab Emirates',
    countryCode: 'AE',
    emojiFlagCode: '🇦🇪',
    callingCode: '971'
  },
  {
    name: 'Argentina',
    countryCode: 'AR',
    emojiFlagCode: '🇦🇷',
    callingCode: '54'
  },
  {
    name: 'Armenia',
    countryCode: 'AM',
    emojiFlagCode: '🇦🇲',
    callingCode: '374'
  },
  {
    name: 'American Samoa',
    countryCode: 'AS',
    emojiFlagCode: '🇦🇸',
    callingCode: '1684'
  },
  {
    name: 'Antarctica',
    countryCode: 'AQ',
    emojiFlagCode: '🇦🇶',
    callingCode: '672'
  },
  {
    name: 'French Southern and Antarctic Lands',
    countryCode: 'TF',
    emojiFlagCode: '🇹🇫',
    callingCode: '262'
  },
  {
    name: 'Antigua and Barbuda',
    countryCode: 'AG',
    emojiFlagCode: '🇦🇬',
    callingCode: '1268'
  },
  {
    name: 'Australia',
    countryCode: 'AU',
    emojiFlagCode: '🇦🇺',
    callingCode: '61'
  },
  {
    name: 'Austria',
    countryCode: 'AT',
    emojiFlagCode: '🇦🇹',
    callingCode: '43'
  },
  {
    name: 'Azerbaijan',
    countryCode: 'AZ',
    emojiFlagCode: '🇦🇿',
    callingCode: '994'
  },
  {
    name: 'Burundi',
    countryCode: 'BI',
    emojiFlagCode: '🇧🇮',
    callingCode: '257'
  },
  {
    name: 'Belgium',
    countryCode: 'BE',
    emojiFlagCode: '🇧🇪',
    callingCode: '32'
  },
  {
    name: 'Benin',
    countryCode: 'BJ',
    emojiFlagCode: '🇧🇯',
    callingCode: '229'
  },
  {
    name: 'Burkina Faso',
    countryCode: 'BF',
    emojiFlagCode: '🇧🇫',
    callingCode: '226'
  },
  {
    name: 'Bangladesh',
    countryCode: 'BD',
    emojiFlagCode: '🇧🇩',
    callingCode: '880'
  },
  {
    name: 'Bulgaria',
    countryCode: 'BG',
    emojiFlagCode: '🇧🇬',
    callingCode: '359'
  },
  {
    name: 'Bahrain',
    countryCode: 'BH',
    emojiFlagCode: '🇧🇭',
    callingCode: '973'
  },
  {
    name: 'Bahamas',
    countryCode: 'BS',
    emojiFlagCode: '🇧🇸',
    callingCode: '1242'
  },
  {
    name: 'Bosnia and Herzegovina',
    countryCode: 'BA',
    emojiFlagCode: '🇧🇦',
    callingCode: '387'
  },
  {
    name: 'Saint Barthélemy',
    countryCode: 'BL',
    emojiFlagCode: '🇧🇱',
    callingCode: '590'
  },
  {
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    countryCode: 'SH',
    emojiFlagCode: '🇸🇭',
    callingCode: '290'
  },
  {
    name: 'Belarus',
    countryCode: 'BY',
    emojiFlagCode: '🇧🇾',
    callingCode: '375'
  },
  {
    name: 'Belize',
    countryCode: 'BZ',
    emojiFlagCode: '🇧🇿',
    callingCode: '501'
  },
  {
    name: 'Bermuda',
    countryCode: 'BM',
    emojiFlagCode: '🇧🇲',
    callingCode: '1441'
  },
  {
    name: 'Bolivia',
    countryCode: 'BO',
    emojiFlagCode: '🇧🇴',
    callingCode: '591'
  },
  {
    name: 'Caribbean Netherlands',
    countryCode: 'BQ',
    emojiFlagCode: '🇧🇶',
    callingCode: '599'
  },
  {
    name: 'Brazil',
    countryCode: 'BR',
    emojiFlagCode: '🇧🇷',
    callingCode: '55'
  },
  {
    name: 'Barbados',
    countryCode: 'BB',
    emojiFlagCode: '🇧🇧',
    callingCode: '1246'
  },
  {
    name: 'Brunei',
    countryCode: 'BN',
    emojiFlagCode: '🇧🇳',
    callingCode: '673'
  },
  {
    name: 'Bhutan',
    countryCode: 'BT',
    emojiFlagCode: '🇧🇹',
    callingCode: '975'
  },
  {
    name: 'Bouvet Island',
    countryCode: 'BV',
    emojiFlagCode: '🇧🇻',
    callingCode: '47'
  },
  {
    name: 'Botswana',
    countryCode: 'BW',
    emojiFlagCode: '🇧🇼',
    callingCode: '267'
  },
  {
    name: 'Central African Republic',
    countryCode: 'CF',
    emojiFlagCode: '🇨🇫',
    callingCode: '236'
  },
  {
    name: 'Canada',
    countryCode: 'CA',
    emojiFlagCode: '🇨🇦',
    callingCode: '1'
  },
  {
    name: 'Cocos (Keeling) Islands',
    countryCode: 'CC',
    emojiFlagCode: '🇨🇨',
    callingCode: '61'
  },
  {
    name: 'Switzerland',
    countryCode: 'CH',
    emojiFlagCode: '🇨🇭',
    callingCode: '41'
  },
  {
    name: 'Chile',
    countryCode: 'CL',
    emojiFlagCode: '🇨🇱',
    callingCode: '56'
  },
  {
    name: 'China',
    countryCode: 'CN',
    emojiFlagCode: '🇨🇳',
    callingCode: '86'
  },
  {
    name: 'Ivory Coast',
    countryCode: 'CI',
    emojiFlagCode: '🇨🇮',
    callingCode: '225'
  },
  {
    name: 'Cameroon',
    countryCode: 'CM',
    emojiFlagCode: '🇨🇲',
    callingCode: '237'
  },
  {
    name: 'DR Congo',
    countryCode: 'CD',
    emojiFlagCode: '🇨🇩',
    callingCode: '243'
  },
  {
    name: 'Republic of the Congo',
    countryCode: 'CG',
    emojiFlagCode: '🇨🇬',
    callingCode: '242'
  },
  {
    name: 'Cook Islands',
    countryCode: 'CK',
    emojiFlagCode: '🇨🇰',
    callingCode: '682'
  },
  {
    name: 'Colombia',
    countryCode: 'CO',
    emojiFlagCode: '🇨🇴',
    callingCode: '57'
  },
  {
    name: 'Comoros',
    countryCode: 'KM',
    emojiFlagCode: '🇰🇲',
    callingCode: '269'
  },
  {
    name: 'Cape Verde',
    countryCode: 'CV',
    emojiFlagCode: '🇨🇻',
    callingCode: '238'
  },
  {
    name: 'Costa Rica',
    countryCode: 'CR',
    emojiFlagCode: '🇨🇷',
    callingCode: '506'
  },
  {
    name: 'Cuba',
    countryCode: 'CU',
    emojiFlagCode: '🇨🇺',
    callingCode: '53'
  },
  {
    name: 'Curaçao',
    countryCode: 'CW',
    emojiFlagCode: '🇨🇼',
    callingCode: '5999'
  },
  {
    name: 'Christmas Island',
    countryCode: 'CX',
    emojiFlagCode: '🇨🇽',
    callingCode: '61'
  },
  {
    name: 'Cayman Islands',
    countryCode: 'KY',
    emojiFlagCode: '🇰🇾',
    callingCode: '1345'
  },
  {
    name: 'Cyprus',
    countryCode: 'CY',
    emojiFlagCode: '🇨🇾',
    callingCode: '357'
  },
  {
    name: 'Czechia',
    countryCode: 'CZ',
    emojiFlagCode: '🇨🇿',
    callingCode: '420'
  },
  {
    name: 'Germany',
    countryCode: 'DE',
    emojiFlagCode: '🇩🇪',
    callingCode: '49'
  },
  {
    name: 'Djibouti',
    countryCode: 'DJ',
    emojiFlagCode: '🇩🇯',
    callingCode: '253'
  },
  {
    name: 'Dominica',
    countryCode: 'DM',
    emojiFlagCode: '🇩🇲',
    callingCode: '1767'
  },
  {
    name: 'Denmark',
    countryCode: 'DK',
    emojiFlagCode: '🇩🇰',
    callingCode: '45'
  },
  {
    name: 'Dominican Republic',
    countryCode: 'DO',
    emojiFlagCode: '🇩🇴',
    callingCode: '1'
  },
  {
    name: 'Algeria',
    countryCode: 'DZ',
    emojiFlagCode: '🇩🇿',
    callingCode: '213'
  },
  {
    name: 'Ecuador',
    countryCode: 'EC',
    emojiFlagCode: '🇪🇨',
    callingCode: '593'
  },
  {
    name: 'Egypt',
    countryCode: 'EG',
    emojiFlagCode: '🇪🇬',
    callingCode: '20'
  },
  {
    name: 'Eritrea',
    countryCode: 'ER',
    emojiFlagCode: '🇪🇷',
    callingCode: '291'
  },
  {
    name: 'Western Sahara',
    countryCode: 'EH',
    emojiFlagCode: '🇪🇭',
    callingCode: '212'
  },
  {
    name: 'Spain',
    countryCode: 'ES',
    emojiFlagCode: '🇪🇸',
    callingCode: '34'
  },
  {
    name: 'Estonia',
    countryCode: 'EE',
    emojiFlagCode: '🇪🇪',
    callingCode: '372'
  },
  {
    name: 'Ethiopia',
    countryCode: 'ET',
    emojiFlagCode: '🇪🇹',
    callingCode: '251'
  },
  {
    name: 'Finland',
    countryCode: 'FI',
    emojiFlagCode: '🇫🇮',
    callingCode: '358'
  },
  {
    name: 'Fiji',
    countryCode: 'FJ',
    emojiFlagCode: '🇫🇯',
    callingCode: '679'
  },
  {
    name: 'Falkland Islands',
    countryCode: 'FK',
    emojiFlagCode: '🇫🇰',
    callingCode: '500'
  },
  {
    name: 'France',
    countryCode: 'FR',
    emojiFlagCode: '🇫🇷',
    callingCode: '33'
  },
  {
    name: 'Faroe Islands',
    countryCode: 'FO',
    emojiFlagCode: '🇫🇴',
    callingCode: '298'
  },
  {
    name: 'Micronesia',
    countryCode: 'FM',
    emojiFlagCode: '🇫🇲',
    callingCode: '691'
  },
  {
    name: 'Gabon',
    countryCode: 'GA',
    emojiFlagCode: '🇬🇦',
    callingCode: '241'
  },
  {
    name: 'United Kingdom',
    countryCode: 'GB',
    emojiFlagCode: '🇬🇧',
    callingCode: '44'
  },
  {
    name: 'Georgia',
    countryCode: 'GE',
    emojiFlagCode: '🇬🇪',
    callingCode: '995'
  },
  {
    name: 'Guernsey',
    countryCode: 'GG',
    emojiFlagCode: '🇬🇬',
    callingCode: '44'
  },
  {
    name: 'Ghana',
    countryCode: 'GH',
    emojiFlagCode: '🇬🇭',
    callingCode: '233'
  },
  {
    name: 'Gibraltar',
    countryCode: 'GI',
    emojiFlagCode: '🇬🇮',
    callingCode: '350'
  },
  {
    name: 'Guinea',
    countryCode: 'GN',
    emojiFlagCode: '🇬🇳',
    callingCode: '224'
  },
  {
    name: 'Guadeloupe',
    countryCode: 'GP',
    emojiFlagCode: '🇬🇵',
    callingCode: '590'
  },
  {
    name: 'Gambia',
    countryCode: 'GM',
    emojiFlagCode: '🇬🇲',
    callingCode: '220'
  },
  {
    name: 'Guinea-Bissau',
    countryCode: 'GW',
    emojiFlagCode: '🇬🇼',
    callingCode: '245'
  },
  {
    name: 'Equatorial Guinea',
    countryCode: 'GQ',
    emojiFlagCode: '🇬🇶',
    callingCode: '240'
  },
  {
    name: 'Greece',
    countryCode: 'GR',
    emojiFlagCode: '🇬🇷',
    callingCode: '30'
  },
  {
    name: 'Grenada',
    countryCode: 'GD',
    emojiFlagCode: '🇬🇩',
    callingCode: '1473'
  },
  {
    name: 'Greenland',
    countryCode: 'GL',
    emojiFlagCode: '🇬🇱',
    callingCode: '299'
  },
  {
    name: 'Guatemala',
    countryCode: 'GT',
    emojiFlagCode: '🇬🇹',
    callingCode: '502'
  },
  {
    name: 'French Guiana',
    countryCode: 'GF',
    emojiFlagCode: '🇬🇫',
    callingCode: '594'
  },
  {
    name: 'Guam',
    countryCode: 'GU',
    emojiFlagCode: '🇬🇺',
    callingCode: '1671'
  },
  {
    name: 'Guyana',
    countryCode: 'GY',
    emojiFlagCode: '🇬🇾',
    callingCode: '592'
  },
  {
    name: 'Hong Kong',
    countryCode: 'HK',
    emojiFlagCode: '🇭🇰',
    callingCode: '852'
  },
  {
    name: 'Honduras',
    countryCode: 'HN',
    emojiFlagCode: '🇭🇳',
    callingCode: '504'
  },
  {
    name: 'Croatia',
    countryCode: 'HR',
    emojiFlagCode: '🇭🇷',
    callingCode: '385'
  },
  {
    name: 'Haiti',
    countryCode: 'HT',
    emojiFlagCode: '🇭🇹',
    callingCode: '509'
  },
  {
    name: 'Hungary',
    countryCode: 'HU',
    emojiFlagCode: '🇭🇺',
    callingCode: '36'
  },
  {
    name: 'Indonesia',
    countryCode: 'ID',
    emojiFlagCode: '🇮🇩',
    callingCode: '62'
  },
  {
    name: 'Isle of Man',
    countryCode: 'IM',
    emojiFlagCode: '🇮🇲',
    callingCode: '44'
  },
  {
    name: 'India',
    countryCode: 'IN',
    emojiFlagCode: '🇮🇳',
    callingCode: '91'
  },
  {
    name: 'British Indian Ocean Territory',
    countryCode: 'IO',
    emojiFlagCode: '🇮🇴',
    callingCode: '246'
  },
  {
    name: 'Ireland',
    countryCode: 'IE',
    emojiFlagCode: '🇮🇪',
    callingCode: '353'
  },
  {
    name: 'Iran',
    countryCode: 'IR',
    emojiFlagCode: '🇮🇷',
    callingCode: '98'
  },
  {
    name: 'Iraq',
    countryCode: 'IQ',
    emojiFlagCode: '🇮🇶',
    callingCode: '964'
  },
  {
    name: 'Iceland',
    countryCode: 'IS',
    emojiFlagCode: '🇮🇸',
    callingCode: '354'
  },
  {
    name: 'Israel',
    countryCode: 'IL',
    emojiFlagCode: '🇮🇱',
    callingCode: '972'
  },
  {
    name: 'Italy',
    countryCode: 'IT',
    emojiFlagCode: '🇮🇹',
    callingCode: '39'
  },
  {
    name: 'Jamaica',
    countryCode: 'JM',
    emojiFlagCode: '🇯🇲',
    callingCode: '1876'
  },
  {
    name: 'Jersey',
    countryCode: 'JE',
    emojiFlagCode: '🇯🇪',
    callingCode: '44'
  },
  {
    name: 'Jordan',
    countryCode: 'JO',
    emojiFlagCode: '🇯🇴',
    callingCode: '962'
  },
  {
    name: 'Japan',
    countryCode: 'JP',
    emojiFlagCode: '🇯🇵',
    callingCode: '81'
  },
  {
    name: 'Kazakhstan',
    countryCode: 'KZ',
    emojiFlagCode: '🇰🇿',
    callingCode: '7'
  },
  {
    name: 'Kenya',
    countryCode: 'KE',
    emojiFlagCode: '🇰🇪',
    callingCode: '254'
  },
  {
    name: 'Kyrgyzstan',
    countryCode: 'KG',
    emojiFlagCode: '🇰🇬',
    callingCode: '996'
  },
  {
    name: 'Cambodia',
    countryCode: 'KH',
    emojiFlagCode: '🇰🇭',
    callingCode: '855'
  },
  {
    name: 'Kiribati',
    countryCode: 'KI',
    emojiFlagCode: '🇰🇮',
    callingCode: '686'
  },
  {
    name: 'Saint Kitts and Nevis',
    countryCode: 'KN',
    emojiFlagCode: '🇰🇳',
    callingCode: '1869'
  },
  {
    name: 'South Korea',
    countryCode: 'KR',
    emojiFlagCode: '🇰🇷',
    callingCode: '82'
  },
  {
    name: 'Kosovo',
    countryCode: 'XK',
    emojiFlagCode: '🇽🇰',
    callingCode: '383'
  },
  {
    name: 'Kuwait',
    countryCode: 'KW',
    emojiFlagCode: '🇰🇼',
    callingCode: '965'
  },
  {
    name: 'Laos',
    countryCode: 'LA',
    emojiFlagCode: '🇱🇦',
    callingCode: '856'
  },
  {
    name: 'Lebanon',
    countryCode: 'LB',
    emojiFlagCode: '🇱🇧',
    callingCode: '961'
  },
  {
    name: 'Liberia',
    countryCode: 'LR',
    emojiFlagCode: '🇱🇷',
    callingCode: '231'
  },
  {
    name: 'Libya',
    countryCode: 'LY',
    emojiFlagCode: '🇱🇾',
    callingCode: '218'
  },
  {
    name: 'Saint Lucia',
    countryCode: 'LC',
    emojiFlagCode: '🇱🇨',
    callingCode: '1758'
  },
  {
    name: 'Liechtenstein',
    countryCode: 'LI',
    emojiFlagCode: '🇱🇮',
    callingCode: '423'
  },
  {
    name: 'Sri Lanka',
    countryCode: 'LK',
    emojiFlagCode: '🇱🇰',
    callingCode: '94'
  },
  {
    name: 'Lesotho',
    countryCode: 'LS',
    emojiFlagCode: '🇱🇸',
    callingCode: '266'
  },
  {
    name: 'Lithuania',
    countryCode: 'LT',
    emojiFlagCode: '🇱🇹',
    callingCode: '370'
  },
  {
    name: 'Luxembourg',
    countryCode: 'LU',
    emojiFlagCode: '🇱🇺',
    callingCode: '352'
  },
  {
    name: 'Latvia',
    countryCode: 'LV',
    emojiFlagCode: '🇱🇻',
    callingCode: '371'
  },
  {
    name: 'Macau',
    countryCode: 'MO',
    emojiFlagCode: '🇲🇴',
    callingCode: '853'
  },
  {
    name: 'Saint Martin',
    countryCode: 'MF',
    emojiFlagCode: '🇲🇫',
    callingCode: '590'
  },
  {
    name: 'Morocco',
    countryCode: 'MA',
    emojiFlagCode: '🇲🇦',
    callingCode: '212'
  },
  {
    name: 'Monaco',
    countryCode: 'MC',
    emojiFlagCode: '🇲🇨',
    callingCode: '377'
  },
  {
    name: 'Moldova',
    countryCode: 'MD',
    emojiFlagCode: '🇲🇩',
    callingCode: '373'
  },
  {
    name: 'Madagascar',
    countryCode: 'MG',
    emojiFlagCode: '🇲🇬',
    callingCode: '261'
  },
  {
    name: 'Maldives',
    countryCode: 'MV',
    emojiFlagCode: '🇲🇻',
    callingCode: '960'
  },
  {
    name: 'Mexico',
    countryCode: 'MX',
    emojiFlagCode: '🇲🇽',
    callingCode: '52'
  },
  {
    name: 'Marshall Islands',
    countryCode: 'MH',
    emojiFlagCode: '🇲🇭',
    callingCode: '692'
  },
  {
    name: 'North Macedonia',
    countryCode: 'MK',
    emojiFlagCode: '🇲🇰',
    callingCode: '389'
  },
  {
    name: 'Mali',
    countryCode: 'ML',
    emojiFlagCode: '🇲🇱',
    callingCode: '223'
  },
  {
    name: 'Malta',
    countryCode: 'MT',
    emojiFlagCode: '🇲🇹',
    callingCode: '356'
  },
  {
    name: 'Myanmar',
    countryCode: 'MM',
    emojiFlagCode: '🇲🇲',
    callingCode: '95'
  },
  {
    name: 'Montenegro',
    countryCode: 'ME',
    emojiFlagCode: '🇲🇪',
    callingCode: '382'
  },
  {
    name: 'Mongolia',
    countryCode: 'MN',
    emojiFlagCode: '🇲🇳',
    callingCode: '976'
  },
  {
    name: 'Northern Mariana Islands',
    countryCode: 'MP',
    emojiFlagCode: '🇲🇵',
    callingCode: '1670'
  },
  {
    name: 'Mozambique',
    countryCode: 'MZ',
    emojiFlagCode: '🇲🇿',
    callingCode: '258'
  },
  {
    name: 'Mauritania',
    countryCode: 'MR',
    emojiFlagCode: '🇲🇷',
    callingCode: '222'
  },
  {
    name: 'Montserrat',
    countryCode: 'MS',
    emojiFlagCode: '🇲🇸',
    callingCode: '1664'
  },
  {
    name: 'Martinique',
    countryCode: 'MQ',
    emojiFlagCode: '🇲🇶',
    callingCode: '596'
  },
  {
    name: 'Mauritius',
    countryCode: 'MU',
    emojiFlagCode: '🇲🇺',
    callingCode: '230'
  },
  {
    name: 'Malawi',
    countryCode: 'MW',
    emojiFlagCode: '🇲🇼',
    callingCode: '265'
  },
  {
    name: 'Malaysia',
    countryCode: 'MY',
    emojiFlagCode: '🇲🇾',
    callingCode: '60'
  },
  {
    name: 'Mayotte',
    countryCode: 'YT',
    emojiFlagCode: '🇾🇹',
    callingCode: '262'
  },
  {
    name: 'Namibia',
    countryCode: 'NA',
    emojiFlagCode: '🇳🇦',
    callingCode: '264'
  },
  {
    name: 'New Caledonia',
    countryCode: 'NC',
    emojiFlagCode: '🇳🇨',
    callingCode: '687'
  },
  {
    name: 'Niger',
    countryCode: 'NE',
    emojiFlagCode: '🇳🇪',
    callingCode: '227'
  },
  {
    name: 'Norfolk Island',
    countryCode: 'NF',
    emojiFlagCode: '🇳🇫',
    callingCode: '672'
  },
  {
    name: 'Nigeria',
    countryCode: 'NG',
    emojiFlagCode: '🇳🇬',
    callingCode: '234'
  },
  {
    name: 'Nicaragua',
    countryCode: 'NI',
    emojiFlagCode: '🇳🇮',
    callingCode: '505'
  },
  {
    name: 'Niue',
    countryCode: 'NU',
    emojiFlagCode: '🇳🇺',
    callingCode: '683'
  },
  {
    name: 'Netherlands',
    countryCode: 'NL',
    emojiFlagCode: '🇳🇱',
    callingCode: '31'
  },
  {
    name: 'Norway',
    countryCode: 'NO',
    emojiFlagCode: '🇳🇴',
    callingCode: '47'
  },
  {
    name: 'Nepal',
    countryCode: 'NP',
    emojiFlagCode: '🇳🇵',
    callingCode: '977'
  },
  {
    name: 'Nauru',
    countryCode: 'NR',
    emojiFlagCode: '🇳🇷',
    callingCode: '674'
  },
  {
    name: 'New Zealand',
    countryCode: 'NZ',
    emojiFlagCode: '🇳🇿',
    callingCode: '64'
  },
  {
    name: 'Oman',
    countryCode: 'OM',
    emojiFlagCode: '🇴🇲',
    callingCode: '968'
  },
  {
    name: 'Pakistan',
    countryCode: 'PK',
    emojiFlagCode: '🇵🇰',
    callingCode: '92'
  },
  {
    name: 'Panama',
    countryCode: 'PA',
    emojiFlagCode: '🇵🇦',
    callingCode: '507'
  },
  {
    name: 'Pitcairn Islands',
    countryCode: 'PN',
    emojiFlagCode: '🇵🇳',
    callingCode: '64'
  },
  {
    name: 'Peru',
    countryCode: 'PE',
    emojiFlagCode: '🇵🇪',
    callingCode: '51'
  },
  {
    name: 'Philippines',
    countryCode: 'PH',
    emojiFlagCode: '🇵🇭',
    callingCode: '63'
  },
  {
    name: 'Palau',
    countryCode: 'PW',
    emojiFlagCode: '🇵🇼',
    callingCode: '680'
  },
  {
    name: 'Papua New Guinea',
    countryCode: 'PG',
    emojiFlagCode: '🇵🇬',
    callingCode: '675'
  },
  {
    name: 'Poland',
    countryCode: 'PL',
    emojiFlagCode: '🇵🇱',
    callingCode: '48'
  },
  {
    name: 'Puerto Rico',
    countryCode: 'PR',
    emojiFlagCode: '🇵🇷',
    callingCode: '1'
  },
  {
    name: 'North Korea',
    countryCode: 'KP',
    emojiFlagCode: '🇰🇵',
    callingCode: '850'
  },
  {
    name: 'Portugal',
    countryCode: 'PT',
    emojiFlagCode: '🇵🇹',
    callingCode: '351'
  },
  {
    name: 'Paraguay',
    countryCode: 'PY',
    emojiFlagCode: '🇵🇾',
    callingCode: '595'
  },
  {
    name: 'Palestine',
    countryCode: 'PS',
    emojiFlagCode: '🇵🇸',
    callingCode: '970'
  },
  {
    name: 'French Polynesia',
    countryCode: 'PF',
    emojiFlagCode: '🇵🇫',
    callingCode: '689'
  },
  {
    name: 'Qatar',
    countryCode: 'QA',
    emojiFlagCode: '🇶🇦',
    callingCode: '974'
  },
  {
    name: 'Réunion',
    countryCode: 'RE',
    emojiFlagCode: '🇷🇪',
    callingCode: '262'
  },
  {
    name: 'Romania',
    countryCode: 'RO',
    emojiFlagCode: '🇷🇴',
    callingCode: '40'
  },
  {
    name: 'Russia',
    countryCode: 'RU',
    emojiFlagCode: '🇷🇺',
    callingCode: '7'
  },
  {
    name: 'Rwanda',
    countryCode: 'RW',
    emojiFlagCode: '🇷🇼',
    callingCode: '250'
  },
  {
    name: 'Saudi Arabia',
    countryCode: 'SA',
    emojiFlagCode: '🇸🇦',
    callingCode: '966'
  },
  {
    name: 'Sudan',
    countryCode: 'SD',
    emojiFlagCode: '🇸🇩',
    callingCode: '249'
  },
  {
    name: 'Senegal',
    countryCode: 'SN',
    emojiFlagCode: '🇸🇳',
    callingCode: '221'
  },
  {
    name: 'Singapore',
    countryCode: 'SG',
    emojiFlagCode: '🇸🇬',
    callingCode: '65'
  },
  {
    name: 'South Georgia',
    countryCode: 'GS',
    emojiFlagCode: '🇬🇸',
    callingCode: '500'
  },
  {
    name: 'Svalbard and Jan Mayen',
    countryCode: 'SJ',
    emojiFlagCode: '🇸🇯',
    callingCode: '4779'
  },
  {
    name: 'Solomon Islands',
    countryCode: 'SB',
    emojiFlagCode: '🇸🇧',
    callingCode: '677'
  },
  {
    name: 'Sierra Leone',
    countryCode: 'SL',
    emojiFlagCode: '🇸🇱',
    callingCode: '232'
  },
  {
    name: 'El Salvador',
    countryCode: 'SV',
    emojiFlagCode: '🇸🇻',
    callingCode: '503'
  },
  {
    name: 'San Marino',
    countryCode: 'SM',
    emojiFlagCode: '🇸🇲',
    callingCode: '378'
  },
  {
    name: 'Somalia',
    countryCode: 'SO',
    emojiFlagCode: '🇸🇴',
    callingCode: '252'
  },
  {
    name: 'Saint Pierre and Miquelon',
    countryCode: 'PM',
    emojiFlagCode: '🇵🇲',
    callingCode: '508'
  },
  {
    name: 'Serbia',
    countryCode: 'RS',
    emojiFlagCode: '🇷🇸',
    callingCode: '381'
  },
  {
    name: 'South Sudan',
    countryCode: 'SS',
    emojiFlagCode: '🇸🇸',
    callingCode: '211'
  },
  {
    name: 'São Tomé and Príncipe',
    countryCode: 'ST',
    emojiFlagCode: '🇸🇹',
    callingCode: '239'
  },
  {
    name: 'Suriname',
    countryCode: 'SR',
    emojiFlagCode: '🇸🇷',
    callingCode: '597'
  },
  {
    name: 'Slovakia',
    countryCode: 'SK',
    emojiFlagCode: '🇸🇰',
    callingCode: '421'
  },
  {
    name: 'Slovenia',
    countryCode: 'SI',
    emojiFlagCode: '🇸🇮',
    callingCode: '386'
  },
  {
    name: 'Sweden',
    countryCode: 'SE',
    emojiFlagCode: '🇸🇪',
    callingCode: '46'
  },
  {
    name: 'Eswatini',
    countryCode: 'SZ',
    emojiFlagCode: '🇸🇿',
    callingCode: '268'
  },
  {
    name: 'Sint Maarten',
    countryCode: 'SX',
    emojiFlagCode: '🇸🇽',
    callingCode: '1721'
  },
  {
    name: 'Seychelles',
    countryCode: 'SC',
    emojiFlagCode: '🇸🇨',
    callingCode: '248'
  },
  {
    name: 'Syria',
    countryCode: 'SY',
    emojiFlagCode: '🇸🇾',
    callingCode: '963'
  },
  {
    name: 'Turks and Caicos Islands',
    countryCode: 'TC',
    emojiFlagCode: '🇹🇨',
    callingCode: '1649'
  },
  {
    name: 'Chad',
    countryCode: 'TD',
    emojiFlagCode: '🇹🇩',
    callingCode: '235'
  },
  {
    name: 'Togo',
    countryCode: 'TG',
    emojiFlagCode: '🇹🇬',
    callingCode: '228'
  },
  {
    name: 'Thailand',
    countryCode: 'TH',
    emojiFlagCode: '🇹🇭',
    callingCode: '66'
  },
  {
    name: 'Tajikistan',
    countryCode: 'TJ',
    emojiFlagCode: '🇹🇯',
    callingCode: '992'
  },
  {
    name: 'Tokelau',
    countryCode: 'TK',
    emojiFlagCode: '🇹🇰',
    callingCode: '690'
  },
  {
    name: 'Turkmenistan',
    countryCode: 'TM',
    emojiFlagCode: '🇹🇲',
    callingCode: '993'
  },
  {
    name: 'Timor-Leste',
    countryCode: 'TL',
    emojiFlagCode: '🇹🇱',
    callingCode: '670'
  },
  {
    name: 'Tonga',
    countryCode: 'TO',
    emojiFlagCode: '🇹🇴',
    callingCode: '676'
  },
  {
    name: 'Trinidad and Tobago',
    countryCode: 'TT',
    emojiFlagCode: '🇹🇹',
    callingCode: '1868'
  },
  {
    name: 'Tunisia',
    countryCode: 'TN',
    emojiFlagCode: '🇹🇳',
    callingCode: '216'
  },
  {
    name: 'Turkey',
    countryCode: 'TR',
    emojiFlagCode: '🇹🇷',
    callingCode: '90'
  },
  {
    name: 'Tuvalu',
    countryCode: 'TV',
    emojiFlagCode: '🇹🇻',
    callingCode: '688'
  },
  {
    name: 'Taiwan',
    countryCode: 'TW',
    emojiFlagCode: '🇹🇼',
    callingCode: '886'
  },
  {
    name: 'Tanzania',
    countryCode: 'TZ',
    emojiFlagCode: '🇹🇿',
    callingCode: '255'
  },
  {
    name: 'Uganda',
    countryCode: 'UG',
    emojiFlagCode: '🇺🇬',
    callingCode: '256'
  },
  {
    name: 'Ukraine',
    countryCode: 'UA',
    emojiFlagCode: '🇺🇦',
    callingCode: '380'
  },
  {
    name: 'United States Minor Outlying Islands',
    countryCode: 'UM',
    emojiFlagCode: '🇺🇲',
    callingCode: '268'
  },
  {
    name: 'Uruguay',
    countryCode: 'UY',
    emojiFlagCode: '🇺🇾',
    callingCode: '598'
  },
  {
    name: 'United States',
    countryCode: 'US',
    emojiFlagCode: '🇺🇸',
    callingCode: '1'
  },
  {
    name: 'Uzbekistan',
    countryCode: 'UZ',
    emojiFlagCode: '🇺🇿',
    callingCode: '998'
  },
  {
    name: 'Vatican City',
    countryCode: 'VA',
    emojiFlagCode: '🇻🇦',
    callingCode: '379'
  },
  {
    name: 'Saint Vincent and the Grenadines',
    countryCode: 'VC',
    emojiFlagCode: '🇻🇨',
    callingCode: '1784'
  },
  {
    name: 'Venezuela',
    countryCode: 'VE',
    emojiFlagCode: '🇻🇪',
    callingCode: '58'
  },
  {
    name: 'British Virgin Islands',
    countryCode: 'VG',
    emojiFlagCode: '🇻🇬',
    callingCode: '1284'
  },
  {
    name: 'United States Virgin Islands',
    countryCode: 'VI',
    emojiFlagCode: '🇻🇮',
    callingCode: '1340'
  },
  {
    name: 'Vietnam',
    countryCode: 'VN',
    emojiFlagCode: '🇻🇳',
    callingCode: '84'
  },
  {
    name: 'Vanuatu',
    countryCode: 'VU',
    emojiFlagCode: '🇻🇺',
    callingCode: '678'
  },
  {
    name: 'Wallis and Futuna',
    countryCode: 'WF',
    emojiFlagCode: '🇼🇫',
    callingCode: '681'
  },
  {
    name: 'Samoa',
    countryCode: 'WS',
    emojiFlagCode: '🇼🇸',
    callingCode: '685'
  },
  {
    name: 'Yemen',
    countryCode: 'YE',
    emojiFlagCode: '🇾🇪',
    callingCode: '967'
  },
  {
    name: 'South Africa',
    countryCode: 'ZA',
    emojiFlagCode: '🇿🇦',
    callingCode: '27'
  },
  {
    name: 'Zambia',
    countryCode: 'ZM',
    emojiFlagCode: '🇿🇲',
    callingCode: '260'
  },
  {
    name: 'Zimbabwe',
    countryCode: 'ZW',
    emojiFlagCode: '🇿🇼',
    callingCode: '263'
  }
]
export default COUNTRIES
