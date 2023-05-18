class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
  
    get '/philosophers' do 
        philosophers = Philosopher.all
    end
end