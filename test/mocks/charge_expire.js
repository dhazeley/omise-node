var nock = require('nock');

var chargeID   = 'chrg_test_4z429hvnv7ouolu6kmp';

nock('https://api.omise.co')
  .persist()
  .post('/charges/' + chargeID + '/expire')
  .reply(200, {
    'object': 'charge',
    'id': chargeID,
    'location': '/charges/' + chargeID,
    'amount': 500000,
    'net': 491172,
    'fee': 8250,
    'fee_vat': 578,
    'interest': 0,
    'interest_vat': 0,
    'funding_amount': 500000,
    'refunded_amount': 0,
    'authorized': false,
    'capturable': false,
    'capture': true,
    'disputable': false,
    'livemode': false,
    'refundable': false,
    'reversed': false,
    'reversible': false,
    'voided': false,
    'paid': false,
    'expired': true,
    'platform_fee': {
      'fixed': null,
      'amount': null,
      'percentage': null
    },
    'currency': 'THB',
    'funding_currency': 'THB',
    'ip': null,
    'refunds': {
      'object': 'list',
      'data': [

      ],
      'limit': 20,
      'offset': 0,
      'total': 0,
      'location': '/charges/' + chargeID + '/refunds',
      'order': 'chronological',
      'from': '1970-01-01T00:00:00Z',
      'to': '2020-07-17T23:48:38Z'
    },
    'link': null,
    'description': null,
    'metadata': {
    },
    'card': null,
    'source': {
      'object': 'source',
      'id': 'src_test_5kkoqejpb1d7x12hi2u',
      'livemode': false,
      'location': '/sources/src_test_5kkoqejpb1d7x12hi2u',
      'amount': 500000,
      'barcode': '281234567890123456',
      'created_at': '2020-07-17T23:48:15Z',
      'currency': 'THB',
      'email': null,
      'flow': 'offline',
      'installment_term': null,
      'name': null,
      'mobile_number': null,
      'phone_number': null,
      'scannable_code': null,
      'references': {
        'expires_at': '2020-07-18T23:48:15Z',
        'device_id': null,
        'customer_amount': null,
        'customer_currency': null,
        'customer_exchange_rate': null,
        'omise_tax_id': null,
        'reference_number_1': null,
        'reference_number_2': null,
        'barcode': null,
        'payment_code': null,
        'va_code': null
      },
      'store_id': null,
      'store_name': null,
      'terminal_id': null,
      'type': 'barcode_alipay',
      'zero_interest_installments': null,
      'charge_status': 'expired'
    },
    'schedule': null,
    'customer': null,
    'dispute': null,
    'transaction': null,
    'failure_code': null,
    'failure_message': null,
    'status': 'expired',
    'authorize_uri': null,
    'return_uri': null,
    'created_at': '2020-07-17T23:48:15Z',
    'paid_at': null,
    'expires_at': '2020-07-17T23:48:38Z',
    'expired_at': '2020-07-17T23:48:38Z',
    'reversed_at': null,
    'zero_interest_installments': true,
    'branch': null,
    'terminal': null,
    'device': null
  }, {
    'server':       'nginx/1.1',
    'content-type': 'application/json',
  });
