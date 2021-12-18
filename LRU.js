//LRU (Least Recent Used) Page Replacement Algorithm

//Values required for manual entry
//1. page queue array for this code variable is 'pages_queue'
//2. frame size for this code value of 'n'



//array that holds values of pages in queue
pages_queue = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1]


//frame that holds snapshot of every frame update
big_frame = []
//frame that holds the actual pages    
frame = []
//frame size
n = 3 

//No of times current page was already in the frame
hit = 0

//No of times current page was not in the frame
miss = 0

//array that records when hit and miss occured
miss_hit_track = []

//array that keeps track of age of every elements 
ages  = []
//array that keeps track of age of every elements after every frame update
big_age = []



const LRU= () => {
    //counter that tracks the index of the oldest member of the frame
    j = 0
    for (i = 0; i < pages_queue.length; i++) {

        if (frame.length == 0 || frame.length < n) {
            frame.push(pages_queue[i])
            ages[j] = 0
            ages = ages.map((age) => age+1)
            big_age.push([...ages])
            big_frame.push([...frame])
            miss_hit_track.push('x1')
            j++
            miss++
        }
        else if (frame.length == n && frame.indexOf(pages_queue[i]) > -1) //if full and same value exists
        {
            j = frame.indexOf(pages_queue[i])
            ages[j] = 0
            ages = ages.map((age) => age+1)
            miss_hit_track.push('o')
            big_frame.push([...frame])
            big_age.push([...ages])
            hit++
        }
        else if (frame.length == n && frame.indexOf(pages_queue[i]) == -1)//if full and same value does not exists
        {
            j = ages.indexOf(Math.max(...ages))

            frame[j] = pages_queue[i]
            ages[j] = 0
            ages = ages.map((age) => age+1)
            big_age.push([...ages])
            miss_hit_track.push('x2')
            big_frame.push([...frame])
            miss++
        }

    }

}

LRU()
console.log(pages_queue)
console.log(big_frame)
console.log(miss_hit_track)
console.log(`No. of pages = ${pages_queue.length}, No. of Miss =  ${miss},  No. of Hit = ${hit}\n\nMiss ratio = ${miss}/${pages_queue.length}, Hit ratio = ${hit}/${pages_queue.length}`)



