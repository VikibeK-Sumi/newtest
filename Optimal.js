//LRU (Least Recent Used) Page Replacement Algorithm

//Values required for manual entry
//1. page queue array for this code variable is 'pages_queue'
//2. frame size for this code value of 'n'



//array that holds values of pages in queue
pages_queue = [7,0,1,2,0,3,0,4,2,3,0,3,2,1,2,0,1,7,0,1]
frame = []
console.log(sliced_array = pages_queue.slice(8+1))
console.log(f_index = frame.map((item) => sliced_array.indexOf(item)))
console.log(sliced_array.indexOf(Math.max(...sliced_array)))



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



const Optimal= () => {
    //VARIABLES ONLY REQUIRED FOR THIS PARTICULAR ALGO

    //an array to hold the index of elements of current frame if or not it exists in the future of 'pages_queue'
    f_index = []

    for (i = 0; i < pages_queue.length; i++) {
    
        if (frame.length == 0 || frame.length < n) {
            frame.push(pages_queue[i])
            big_frame.push([...frame])
            miss_hit_track.push('x1')
            miss++
        }
        else if (frame.length == n && frame.indexOf(pages_queue[i]) > -1) //if full and same value exists
        {
            miss_hit_track.push('o')
            big_frame.push([...frame])
            hit++
        }
        else if (frame.length == n && frame.indexOf(pages_queue[i]) == -1)//if full and same value does not exists
        {
            
            sliced_array = pages_queue.slice(i)
        
            //recording the index of current frame elements 
            f_index = frame.map((item) => sliced_array.indexOf(item))
        



            //finding index of '-1' which implies that current page does not exists in the remaining queue 
            //or the greatest index, in the recorded index array and assigning it to a variable
            f_index.indexOf(-1) > -1 ? k = f_index.indexOf(-1):k = f_index.indexOf(Math.max(...f_index))





            frame[k] = pages_queue[i]
            miss_hit_track.push('x2')
            big_frame.push([...frame])
            miss++
        }

    }

}

Optimal()
console.log(pages_queue)
console.log(big_frame)
console.log(miss_hit_track)
console.log(`No. of pages = ${pages_queue.length}, No. of Miss =  ${miss},  No. of Hit = ${hit}\n\nMiss ratio = ${miss}/${pages_queue.length}, Hit ratio = ${hit}/${pages_queue.length}`)



