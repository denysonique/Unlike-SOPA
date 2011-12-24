watch('(.*)\.haml') do |filename|
  puts "haml > html #{filename}"
  %x[haml #{filename} > #{filename[1]}.html]
end

watch('(.*)\.coffee') do |filename|
  puts "haml > html #{filename}"
  %x[coffee -c #{filename}]
end
