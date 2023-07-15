import styled from 'styled-components'

export const MusicListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`
export const TrackInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
`
export const MusicTrackImage = styled.img`
  height: 90px;
  width: 140px;
  margin-right: 30px;
`
export const NameGenreContainer = styled.div``

export const Name = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
  color: white;
`
export const Genre = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #3b82f6;
  font-family: 'Roboto';
  line-height: 30px;
`
export const DurationDeleteContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Duration = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
  margin-right: 30px;
  color: white;
`
export const DeleteButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  color: white;
  background-color: transparent;
`
