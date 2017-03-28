require 'sinatra' 
require 'slim'

get '/' do 
  erb :index
end

get "/info" do
  erb :info
end
