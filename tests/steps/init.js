let initialized = false
process.env.order_events_stream = 'orders-dev-wonderwhy'
process.env.restaurant_notification_topic = 'restaurants-dev-wonderwhy';

process.env.TEST_ROOT = "https://javuqd80aa.execute-api.eu-west-1.amazonaws.com/dev";

const init = async () => {
    if (initialized) {
        return
    }

    process.env.restaurants_api   = "https://javuqd80aa.execute-api.eu-west-1.amazonaws.com/dev/restaurants"
    process.env.restaurants_table = "restaurants-dev-wonderwhy"
    process.env.AWS_REGION        = "eu-west-1"

    initialized = true
}

module.exports = {
    init
}