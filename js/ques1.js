function perfectsquare(n){
	let left = 1;
  right = n;
  while(left<=right)
  {
  	let mid = left +Math.floor((right - left)%1);
    if(mid * mid * mid *mid===n)
    {
    console.log(left,mid,left,mid);
    return true;
    }
    else if(mid * mid * mid *mid>n)
    {
    	right = mid-1;
    }
    else if
    (mid * mid * mid *mid<n)
    {
    	left = mid+1;
    }    
  }
  return false;
}

console.log(perfectsquare(1296));