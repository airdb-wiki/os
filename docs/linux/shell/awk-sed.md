# awk & sed

awk '{sum[$2]+=1} END {for(k in sum) printf("%s %s %d %s\n", $1, k, sum[k], $NF)}' | sort -n -r -k 3

awk -F '|' '{sum += $1} END {print sum}'

awk '{sum[$2]+=1} END {for(k in sum) printf("%s %s %d %s\n", $1, k, sum[k], $NF)}' | sort -n -r -k 3

awk -F '|' '{sum += $1} END {print sum}'
