require 'sinatra' 

get '/' do 
  erb :index
end

get "/codingspace/ml" do 
  erb :ml
end

get "/info" do
  erb :info
end
