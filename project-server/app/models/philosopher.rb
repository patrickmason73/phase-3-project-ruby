class Philosopher < ActiveRecord::Base
    belongs_to :origin
    belongs_to :era
    has_many :quotes
end