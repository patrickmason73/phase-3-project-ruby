class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
  
    get '/philosophers' do 
        philosophers = Philosopher.all
        philosophers.to_json
    end

    get '/philosophers/:name' do 
        philosopher = Philosopher.find_by(name: (params[:name]))
        philosopher.to_json
    end

    get '/quotes/:philosopher_id' do
        quotes = Quote.where(philosopher_id: (params[:philosopher_id]))
        quotes.to_json
    end

    post '/comments' do
        new_comment = Comment.create({
            comment: (params[:comment]), 
            quote_id: (params[:quote_id]),
            user: (params[:user])
        })
        new_comment.to_json
    end

    get '/comments/:quote_id' do
        comments = Comment.where(quote_id: params[:quote_id])
        comments.to_json
    end
end