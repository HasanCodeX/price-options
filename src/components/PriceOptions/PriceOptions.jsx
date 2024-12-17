const PriceOptions = () => {
    const gymPricingOptions = [
        {
            "id": 1,
            "planName": "Basic Plan",
            "price": 1200,
            "currency": "BDT",
            "duration": "1 Month",
            "benefits": [
                "Full access to gym equipment",
                "Personal locker",
                "Shower facility",
                "Free Wi-Fi"
            ],
            "discount": 0,
            "popular": false,
            "additionalInfo": {
                "support": "24/7 customer support",
                "cancellationPolicy": "Cancel anytime with no fees",
                "accessHours": "6:00 AM - 10:00 PM"
            }
        },
        {
            "id": 2,
            "planName": "Standard Plan",
            "price": 3300,
            "currency": "BDT",
            "duration": "3 Months",
            "benefits": [
                "Full access to gym equipment",
                "Personal locker",
                "Shower facility",
                "Free Wi-Fi",
                "One personal training session per month",
                "Access to group fitness classes"
            ],
            "discount": 10,
            "popular": true,
            "additionalInfo": {
                "support": "Priority customer support",
                "cancellationPolicy": "Cancel anytime with a 10% fee",
                "accessHours": "5:00 AM - 11:00 PM"
            }
        },
        {
            "id": 3,
            "planName": "Premium Plan",
            "price": 6000,
            "currency": "BDT",
            "duration": "6 Months",
            "benefits": [
                "Full access to gym equipment",
                "Personal locker",
                "Shower facility",
                "Free Wi-Fi",
                "Weekly personal training sessions",
                "Access to group fitness classes",
                "Access to spa, sauna, and steam room"
            ],
            "discount": 15,
            "popular": true,
            "additionalInfo": {
                "support": "Dedicated personal support",
                "cancellationPolicy": "Cancel anytime with a 5% fee",
                "accessHours": "Open 24/7"
            }
        },
        {
            "id": 4,
            "planName": "Annual Plan",
            "price": 11000,
            "currency": "BDT",
            "duration": "12 Months",
            "benefits": [
                "Full access to gym equipment",
                "Personal locker",
                "Shower facility",
                "Free Wi-Fi",
                "Unlimited personal training sessions",
                "Access to group fitness classes",
                "Access to spa, sauna, and steam room",
                "Free gym merchandise (T-shirt, bottle, bag)"
            ],
            "discount": 25,
            "popular": false,
            "additionalInfo": {
                "support": "VIP dedicated support",
                "cancellationPolicy": "Cancel anytime with a 2% fee",
                "accessHours": "Open 24/7"
            }
        },
        {
            "id": 5,
            "planName": "Day Pass",
            "price": 500,
            "currency": "BDT",
            "duration": "1 Day",
            "benefits": [
                "Full access to gym equipment",
                "Shower facility",
                "Free Wi-Fi"
            ],
            "discount": 0,
            "popular": false,
            "additionalInfo": {
                "support": "Basic support",
                "cancellationPolicy": "Non-refundable",
                "accessHours": "6:00 AM - 10:00 PM"
            }
        }
    ];

    return (
        <div>
            <h1>Price Options</h1>
            {/* You can map over gymPricingOptions here to display the plans */}
        </div>
    );
};

export default PriceOptions;