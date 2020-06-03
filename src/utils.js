export const chooseIconByType = type => {
    switch (type) {
        case 'car':
            return 'car';
        case 'travel':
            return 'plane';
        case 'pet':
            return 'cat';
        case 'property':
            return 'home';
        default:
            return 'horse';
    }
};

export const getClassnameByStatus = status => {
    switch (status) {
        case 'ending_soon':
            return 'yellow';
        case 'unpaid':
            return 'red';
        default:
            return 'white';
    }
};

// These can possibly be merged together to form an Item object with data.. although if more logic
// should be present, better to keep them apart.
export const getStatusLabel = status => {
    switch (status) {
        case 'ending_soon':
            return 'Ending soon';
        case 'unpaid':
            return 'Unpaid';
        case 'active':
            return 'Active';
        default:
            return 'Unknown';
    }
}

export const isActionPrimary = status => status === 'unpaid';

export const generateLabel = status => {
    switch (status) {
        case 'active':
            return 'Fill a claim';
        case 'unpaid':
            return 'Pay up';
        case 'ending_soon':
            return 'Renew';
        default:
            return 'Fill a claim'
    }
}

export const generateActions = status => {
    switch (status) {
        case 'ending_soon':
            return [{
                onClick: () => console.log('Hello!') ,
                label: 'Renew 2',
            }];
        default:
            return [];
    }
}
