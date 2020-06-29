export default function(array, criteria, reverse) {
    switch (criteria) {
        case 'rank':
        case 'duration':
            array.sort((a, b) => a[criteria] - b[criteria]);
            break;
        case 'title':
        case 'synopsis':
        case 'director':
            array.sort((a, b) => a[criteria].localeCompare(b[criteria]));
            break;
        default:
            console.error("Undefined criteria for sorting movies : " + criteria);
    }
    if (reverse)
        array.reverse();
}